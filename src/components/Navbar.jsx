import React, { useState, useEffect, useRef } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) {
        const hero = document.getElementById('home');
        if (hero) {
          heroRef.current = hero;
        }
      }

      if (heroRef.current) {
        const heroRect = heroRef.current.getBoundingClientRect();
        const isPastHero = heroRect.bottom <= 0;
        setIsScrolled(isPastHero);
      }
    };

    // Use IntersectionObserver for better performance
    const hero = document.getElementById('home');
    if (hero) {
      heroRef.current = hero;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            setIsScrolled(!entry.isIntersecting);
          });
        },
        {
          threshold: 0,
          rootMargin: '0px'
        }
      );

      observer.observe(hero);

      return () => {
        observer.disconnect();
      };
    }

    // Fallback to scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg sticky-top border-bottom ${isScrolled ? 'navbar-scrolled' : 'navbar-transparent'}`}
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
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div id="navMain" className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#tours">
                Tours
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#destinations">
                Destinations
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
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


