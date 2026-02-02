import React, { useState, useCallback } from 'react';

const faqData = [
  {
    question: 'What should I bring?',
    answer:
      'Bring sunscreen, sunglasses, a hat, swimwear, towel, and a light jacket for sunset tours. We provide water, snorkeling equipment, and an icebox.'
  },
  {
    question: 'Can you host large groups?',
    answer:
      'Yes! Mare Boats Hvar operates multiple speedboats. We organize tours for large groups, events, families and agencies using several boats at the same time. Contact us to discuss your group size and requirements.'
  },
  {
    question: 'Is it safe for kids?',
    answer:
      'Yes! Our tours are family-friendly. We provide life jackets for all ages and our experienced skippers ensure a safe journey. Kids love the snorkeling and cave visits!'
  },
  {
    question: 'How do I pay?',
    answer:
      'We accept cash (EUR) on the day of the tour. You can also pay via bank transfer in advance. We will confirm all details via WhatsApp before your tour.'
  },
  {
    question: 'What if the weather is bad?',
    answer:
      'Safety first! If weather conditions are unsuitable, we will reschedule your tour or provide a full refund. We monitor forecasts closely and contact you in advance.'
  },
  {
    question: 'Do you provide lunch?',
    answer:
      'We provide water and snacks. For longer tours (8h+), we can stop at a restaurant on Pakleni Islands or you can bring your own picnic. Just let us know your preference!'
  }
];

const FaqWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const handleQuestionClick = useCallback((index) => {
    setActiveIndex(index);
  }, []);

  return (
    <div className="faq-widget">
      <button
        type="button"
        className="faq-toggle-btn"
        aria-label="Open FAQ"
        aria-expanded={isOpen}
        onClick={toggleOpen}
      >
        <i className="fa-solid fa-circle-question fa-lg" />
      </button>

      {isOpen && (
        <div className="faq-panel">
          <div className="faq-header">
            <h6 className="mb-0">Quick Questions</h6>
          </div>
          <div className="faq-content">
            <div className="faq-questions">
              {faqData.map((item, index) => (
                <button
                  key={item.question}
                  type="button"
                  className="faq-question-btn"
                  onClick={() => handleQuestionClick(index)}
                >
                  {item.question}
                </button>
              ))}
            </div>
            {activeIndex !== null && (
              <div className="faq-answer">{faqData[activeIndex].answer}</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default FaqWidget;


