import React, { useState, useEffect } from 'react';

const carouselImages = [
  {
    base: 'carousel-1',
    alt: 'Speedboat tour from Hvar with guests enjoying the sea'
  },
  {
    base: 'carousel-2',
    alt: 'Beautiful Croatian coastline and crystal clear waters'
  }
];

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Carousel auto-advance (purely time-based)
  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % carouselImages.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <header id="home" className="hero">
      <div className="hero-carousel">
        {carouselImages.map((image, index) => {
          const isActive = index === activeIndex;
          const base = image.base;

          return (
            <picture key={image.base} className="hero-picture">
              <source srcSet={`/img/${base}.avif`} type="image/avif" />
              <source srcSet={`/img/${base}.webp`} type="image/webp" />
              <img
                className={`hero-img ${isActive ? 'active' : ''}`}
                src={`/img/${base}.jpeg`}
                alt={image.alt}
                loading={index === 0 ? 'eager' : 'lazy'}
                fetchPriority={index === 0 ? 'high' : 'auto'}
                decoding="async"
              />
            </picture>
          );
        })}
      </div>

      <div className="content">
        <h1 className="display-5 fw-bold">Private boat tours from Hvar, Croatia</h1>
        <p className="lead mb-4">
          Swim, snorkel and explore with our private speedboat tours around Hvar and nearby islands.
        </p>
        <div className="d-flex gap-2 justify-content-center flex-wrap">
          <a
            className="btn btn-primary btn-lg shadow-soft"
            href="https://api.whatsapp.com/send?phone=385951966734&text=Hi!%20I%E2%80%99m%20interested%20in%20a%20boat%20tour."
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-whatsapp me-2" /> WhatsApp us
          </a>
          <a className="btn btn-light btn-lg text-primary" href="#tours">
            View tours
          </a>
        </div>
      </div>
    </header>
  );
};

export default Hero;


