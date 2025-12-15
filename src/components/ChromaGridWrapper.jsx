import React, { useState, useEffect, useRef } from 'react';
import ChromaGrid from './ChromaGrid.jsx';

/**
 * ChromaGridWrapper - Wrapper para el efecto Chroma Grid de React Bites
 * 
 * Este componente:
 * - Usa IntersectionObserver para activar el efecto solo cuando la sección es visible
 * - Monta el efecto de forma lazy para no bloquear el render inicial
 * - Renderiza ChromaGrid solo cuando la sección es visible
 */
const ChromaGridWrapper = ({ children, items, showGrid = true }) => {
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
    <div ref={containerRef} className="chroma-grid-wrapper">
      {showGrid && isVisible && items && items.length > 0 ? (
        <ChromaGrid items={items} columns={2} rows={2} />
      ) : (
        children
      )}
    </div>
  );
};

export default ChromaGridWrapper;

