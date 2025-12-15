import React, { useState, useEffect, useRef } from 'react';
import '../styles/chroma-grid.css';
// TODO: Importar el código JS del Chroma Grid cuando esté listo
// import { initChromaGrid } from '../utils/chroma-grid.js';

/**
 * ChromaGridWrapper - Wrapper para el efecto Chroma Grid de React Bites
 * 
 * Este componente:
 * - Usa IntersectionObserver para activar el efecto solo cuando la sección es visible
 * - Monta el efecto de forma lazy para no bloquear el render inicial
 * - Mantiene el layout intacto si el efecto no está activo
 */
const ChromaGridWrapper = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isEffectActive, setIsEffectActive] = useState(false);
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
            // Activar el efecto solo cuando es visible
            setIsEffectActive(true);
            
            // TODO: Inicializar el efecto Chroma Grid cuando el código JS esté pegado
            // if (isEffectActive) {
            //   initChromaGrid(container);
            // }
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
    <div
      ref={containerRef}
      className={`chroma-grid-container ${isEffectActive ? 'chroma-grid-active' : ''}`}
    >
      {children}
    </div>
  );
};

export default ChromaGridWrapper;

