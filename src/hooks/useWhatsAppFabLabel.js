import { useEffect, useState } from 'react';

const sectionLabels = {
  home: 'Chat with us on WhatsApp',
  tours: 'Book this tour on WhatsApp',
  about: 'Ask us anything',
  destinations: 'Ask about destinations',
  contact: 'Send us a message'
};

export function useWhatsAppFabLabel() {
  const [label, setLabel] = useState(sectionLabels.home);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id], header[id]');
    if (!sections.length || !('IntersectionObserver' in window)) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            const id = entry.target.id;
            setLabel(sectionLabels[id] || sectionLabels.home);
          }
        });
      },
      {
        threshold: [0.5],
        rootMargin: '-100px 0px -100px 0px'
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return label;
}


