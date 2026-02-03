import React, { useState, useEffect } from 'react';

const carouselImages = [
  {
    src: '/img/carousel-1.jpeg',
    alt: 'Speedboat tour from Hvar with guests enjoying the sea'
  },
  {
    src: '/img/carousel-2.jpeg',
    alt: 'Beautiful Croatian coastline and crystal clear waters'
  }
];

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Carousel auto-advance
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

          return (
            <img
              key={image.src}
              className={`hero-img ${isActive ? 'active' : ''}`}
              src={image.src}
              alt={image.alt}
              loading={index === 0 ? 'eager' : 'lazy'}
              fetchPriority={index === 0 ? 'high' : 'auto'}
            />
          );
        })}
      </div>

      <div className="content">
        <h1 className="display-5 fw-bold">Mare Boats Hvar — Private boat tours around Hvar</h1>
        <p className="lead mb-4">
          Swim, snorkel and explore at your own pace with our private speedboat tours around Hvar and nearby islands. From relaxed half-days to full adventures — we tailor each trip to the day, the weather and your vibe.
        </p>
        <div className="d-flex gap-2 justify-content-center flex-wrap">
          <a
            className="btn btn-primary btn-cta shadow-soft"
            href="https://api.whatsapp.com/send?phone=385951966734&text=Hi!%20I%E2%80%99m%20interested%20in%20a%20boat%20tour."
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-whatsapp me-2" /> WhatsApp us
          </a>
          <a className="btn btn-light btn-cta text-primary" href="#tours">
            View tours
          </a>
        </div>
      </div>
    </header>
  );
};

export default Hero;
