import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const triggerPoint = 60; // Start transition after 60px
      const maxPoint = 200; // Fully opaque after 200px
      
      if (scrollY <= triggerPoint) {
        setScrollProgress(0);
      } else if (scrollY >= maxPoint) {
        setScrollProgress(1);
      } else {
        // Progressive opacity between triggerPoint and maxPoint
        const progress = (scrollY - triggerPoint) / (maxPoint - triggerPoint);
        setScrollProgress(Math.min(progress, 1));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Calculate opacity and blur based on scroll progress
  // Base opacity ~0.15 so navbar feels light over the hero but is never fully transparent.
  const minOpacity = 0.15;
  const maxOpacity = 0.85;
  const bgOpacity = minOpacity + (maxOpacity - minOpacity) * scrollProgress;

  // Glassy blur: higher base blur and aggressive ease-out so blur is the main legibility tool.
  const baseBlur = 10; // px at scrollProgress = 0
  const maxBlur = 20;  // px at full scroll
  const easedBlurProgress = 1 - Math.pow(1 - scrollProgress, 2); // ease-out curve
  const blurProgress = Math.min(easedBlurProgress, 1);
  const blurAmount = baseBlur + (maxBlur - baseBlur) * blurProgress;
  const shadowOpacity = scrollProgress * 0.06; // Max shadow opacity
  
  // Interpolate link colors from white to dark
  const linkColor = scrollProgress > 0.5 
    ? `rgba(${9 + (scrollProgress - 0.5) * 241}, ${14 + (scrollProgress - 0.5) * 241}, ${19 + (scrollProgress - 0.5) * 241}, 1)`
    : `rgba(255, 255, 255, ${1 - scrollProgress * 2})`;

  return (
    <nav
      className="navbar navbar-expand-lg fixed-top border-bottom navbar-progressive"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        width: '100%',
        zIndex: 1030,
        backgroundColor: `rgba(255, 255, 255, ${bgOpacity})`,
        backdropFilter: `blur(${blurAmount}px) saturate(1.6)`,
        WebkitBackdropFilter: `blur(${blurAmount}px) saturate(1.6)`,
        boxShadow: shadowOpacity > 0 ? `0 2px 12px rgba(0, 0, 0, ${shadowOpacity})` : 'none',
        borderBottomColor: scrollProgress > 0 ? `rgba(0, 0, 0, ${0.1 * scrollProgress})` : 'rgba(255, 255, 255, 0.1)',
        transition: 'background-color 0.8s ease-in-out, backdrop-filter 0.8s ease-in-out, box-shadow 0.8s ease-in-out, border-color 0.8s ease-in-out'
      }}
    >
      <div className="container">
        <a className="navbar-brand" href="#home">
          <img src="/img/logo_mare_boats_hvar-01.png" alt="Mare Boats Hvar" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMain"
          aria-controls="navMain"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{
            borderColor: scrollProgress > 0.5 ? 'rgba(0, 0, 0, 0.1)' : 'rgba(255, 255, 255, 0.3)',
            transition: 'border-color 0.8s ease-in-out'
          }}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div id="navMain" className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a 
                className="nav-link" 
                href="#tours"
                style={{
                  color: linkColor,
                  transition: 'color 0.8s ease-in-out'
                }}
              >
                Tours
              </a>
            </li>
            <li className="nav-item">
              <a 
                className="nav-link" 
                href="#about"
                style={{
                  color: linkColor,
                  transition: 'color 0.8s ease-in-out'
                }}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a 
                className="nav-link" 
                href="#destinations"
                style={{
                  color: linkColor,
                  transition: 'color 0.8s ease-in-out'
                }}
              >
                Destinations
              </a>
            </li>
            <li className="nav-item">
              <a 
                className="nav-link" 
                href="#contact"
                style={{
                  color: linkColor,
                  transition: 'color 0.8s ease-in-out'
                }}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


