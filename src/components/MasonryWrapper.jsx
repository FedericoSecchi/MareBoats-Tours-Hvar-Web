import React, { useState, useEffect, useRef } from 'react';
import Masonry from './Masonry.jsx';

/**
 * MasonryWrapper - Wrapper para el efecto Masonry layout
 * 
 * Este componente:
 * - Usa IntersectionObserver para activar el efecto solo cuando la sección es visible
 * - Monta el efecto de forma lazy para no bloquear el render inicial
 * - Renderiza el layout Masonry cuando es visible, con fallback a grid normal
 */
const MasonryWrapper = ({ children, items }) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // IntersectionObserver para detectar cuando la sección entra en viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect(); // Stop observing once visible
          }
        });
      },
      {
        threshold: 0.1, // Activar cuando 10% de la sección es visible
        rootMargin: '0px'
      }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef} className="masonry-wrapper">
      {isVisible && items && items.length > 0 ? (
        <Masonry items={items} />
      ) : (
        children
      )}
    </div>
  );
};

export default MasonryWrapper;

