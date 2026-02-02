import React, { useState, useEffect } from 'react';

const TRIGGER_PX = 60;
const MAX_PX = 200;

const Navbar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY <= TRIGGER_PX) setScrollProgress(0);
      else if (scrollY >= MAX_PX) setScrollProgress(1);
      else setScrollProgress((scrollY - TRIGGER_PX) / (MAX_PX - TRIGGER_PX));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const blurEased = 1 - Math.pow(1 - scrollProgress, 2);

  return (
    <nav
      className="navbar navbar-expand-lg fixed-top border-bottom navbar-progressive"
      style={{
        '--navbar-scroll': scrollProgress,
        '--navbar-blur-eased': blurEased
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
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div id="navMain" className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#tours">Tours</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#large-groups">Groups</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#destinations">Destinations</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#reviews">Reviews</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


