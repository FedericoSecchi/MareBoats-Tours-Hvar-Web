/**
 * Mare Boats Hvar — Main JavaScript
 * Vanilla JS, no dependencies
 */

(function() {
  'use strict';

  // ============================================
  // 1. WhatsApp Dynamic Message Builder
  // ============================================

  /**
   * Formats a date string to readable format
   * @param {string} dateStr - Date in YYYY-MM-DD format
   * @returns {string} - Formatted date like "15 September 2025"
   */
  function formatDate(dateStr) {
    if (!dateStr) return null;
    const date = new Date(dateStr + 'T00:00:00');
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 
                    'July', 'August', 'September', 'October', 'November', 'December'];
    return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
  }

  /**
   * Builds WhatsApp URL with dynamic message
   * @param {Object} config - Tour configuration
   * @param {string} date - Selected date
   * @param {number} people - Number of people
   * @returns {string} - Complete WhatsApp URL
   */
  function buildWhatsAppUrl(config, date, people) {
    const phone = config.phone || '385951966734';
    const tourName = config.tourName || 'a tour';
    const formattedDate = date ? formatDate(date) : 'a flexible date';
    const numPeople = people && people > 0 ? people : 2;

    const message = `Hello, I'm contacting you from the Mare Boats website. I'm interested in the ${tourName} on ${formattedDate} for ${numPeople} ${numPeople === 1 ? 'person' : 'people'}. Could you please confirm availability?`;
    
    const encodedMessage = encodeURIComponent(message);
    return `https://api.whatsapp.com/send?phone=${phone}&text=${encodedMessage}`;
  }

  /**
   * Initialize WhatsApp buttons with dynamic message generation
   */
  function initWhatsAppButtons() {
    const tourCards = document.querySelectorAll('.tour-card');
    
    tourCards.forEach(card => {
      const waButton = card.querySelector('[data-tour-name]');
      if (!waButton) return;

      const dateInput = card.querySelector('.tour-date-input');
      const peopleInput = card.querySelector('.tour-people-input');

      waButton.addEventListener('click', function(e) {
        e.preventDefault();

        const config = {
          phone: this.dataset.waPhone || '385951966734',
          tourName: this.dataset.tourName || 'a tour'
        };

        const date = dateInput ? dateInput.value : '';
        const people = peopleInput ? parseInt(peopleInput.value) : 2;

        const url = buildWhatsAppUrl(config, date, people);
        window.open(url, '_blank');
      });
    });
  }

  // ============================================
  // 2. Scroll Animations (fadeInUp)
  // ============================================

  /**
   * Initialize scroll animations using IntersectionObserver
   */
  function initScrollAnimations() {
    const elements = document.querySelectorAll('.js-animate-on-scroll');
    
    // Fallback for browsers without IntersectionObserver
    if (!('IntersectionObserver' in window)) {
      elements.forEach(el => el.classList.add('animate-in'));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px'
    });

    elements.forEach(el => observer.observe(el));
  }

  // ============================================
  // 3. Lazy Loading Images
  // ============================================

  /**
   * Initialize lazy loading for images with data-src
   */
  function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    if (!('IntersectionObserver' in window)) {
      // Fallback: load all images immediately
      images.forEach(img => {
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
        }
      });
      return;
    }

    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
          }
        }
      });
    }, {
      rootMargin: '100px'
    });

    images.forEach(img => imageObserver.observe(img));
  }

  // ============================================
  // 4. FAQ Widget
  // ============================================

  const faqData = [
    {
      question: "What should I bring?",
      answer: "Bring sunscreen, sunglasses, a hat, swimwear, towel, and a light jacket for sunset tours. We provide water, snorkeling equipment, and an icebox."
    },
    {
      question: "How many people per boat?",
      answer: "Our boats typically accommodate 6-8 people comfortably. For larger groups, we can arrange multiple boats. Contact us for specific requirements."
    },
    {
      question: "Is it safe for kids?",
      answer: "Yes! Our tours are family-friendly. We provide life jackets for all ages and our experienced skippers ensure a safe journey. Kids love the snorkeling and cave visits!"
    },
    {
      question: "How do I pay?",
      answer: "We accept cash (EUR) on the day of the tour. You can also pay via bank transfer in advance. We'll confirm all details via WhatsApp before your tour."
    },
    {
      question: "What if the weather is bad?",
      answer: "Safety first! If weather conditions are unsuitable, we'll reschedule your tour or provide a full refund. We monitor forecasts closely and contact you in advance."
    },
    {
      question: "Do you provide lunch?",
      answer: "We provide water and snacks. For longer tours (8h+), we can stop at a restaurant on Pakleni Islands or you can bring your own picnic. Just let us know your preference!"
    }
  ];

  /**
   * Initialize FAQ widget
   */
  function initFaqWidget() {
    const widget = document.getElementById('faq-widget');
    const toggleBtn = document.getElementById('faq-toggle-btn');
    const panel = document.getElementById('faq-panel');
    const answerArea = document.getElementById('faq-answer');
    const questionBtns = document.querySelectorAll('.faq-question-btn');

    if (!widget || !toggleBtn || !panel) return;

    // Toggle widget open/close
    toggleBtn.addEventListener('click', () => {
      const isOpen = panel.style.display === 'block';
      panel.style.display = isOpen ? 'none' : 'block';
      toggleBtn.setAttribute('aria-expanded', !isOpen);
    });

    // Handle FAQ question clicks
    questionBtns.forEach((btn, index) => {
      btn.addEventListener('click', () => {
        if (faqData[index]) {
          answerArea.textContent = faqData[index].answer;
          answerArea.style.display = 'block';
        }
      });
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!widget.contains(e.target)) {
        panel.style.display = 'none';
        toggleBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // ============================================
  // 5. Context-Aware WhatsApp FAB Label
  // ============================================

  const sectionLabels = {
    'home': 'Chat with us on WhatsApp',
    'tours': 'Book this tour on WhatsApp',
    'about': 'Ask us anything',
    'destinations': 'Ask about destinations',
    'contact': 'Send us a message'
  };

  /**
   * Update WhatsApp FAB label based on current section
   */
  function updateWhatsAppFabLabel(sectionId) {
    const fab = document.querySelector('.whatsapp-fab');
    if (!fab) return;

    const label = sectionLabels[sectionId] || 'Chat with us on WhatsApp';
    fab.setAttribute('aria-label', label);
    
    // Update tooltip text if exists
    const tooltip = fab.querySelector('.fab-tooltip');
    if (tooltip) {
      tooltip.textContent = label;
    }
  }

  /**
   * Initialize section observer for FAB label updates
   */
  function initFabLabelUpdater() {
    const sections = document.querySelectorAll('section[id], header[id]');
    
    if (!('IntersectionObserver' in window)) return;

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
          updateWhatsAppFabLabel(entry.target.id);
        }
      });
    }, {
      threshold: [0.5],
      rootMargin: '-100px 0px -100px 0px'
    });

    sections.forEach(section => sectionObserver.observe(section));
  }

  // ============================================
  // Initialize All Features
  // ============================================

  function init() {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', init);
      return;
    }

    // Initialize all features
    initWhatsAppButtons();
    initScrollAnimations();
    initLazyLoading();
    initFaqWidget();
    initFabLabelUpdater();

    console.log('Mare Boats Hvar: All features initialized ✓');
  }

  // Start initialization
  init();

})();

