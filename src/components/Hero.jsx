import React, { useState, useEffect, useRef } from 'react';

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
  const [imagesLoaded, setImagesLoaded] = useState([false, false]);
  const intervalRef = useRef(null);
  const imageRefs = useRef([]);

  // Track when images actually load via onLoad event
  useEffect(() => {
    const checkImageLoad = (index) => {
      const pictureEl = imageRefs.current[index];
      if (pictureEl) {
        const img = pictureEl.querySelector('img');
        if (img && img.complete) {
          setImagesLoaded((prev) => {
            const updated = [...prev];
            updated[index] = true;
            return updated;
          });
        } else if (img) {
          img.onload = () => {
            setImagesLoaded((prev) => {
              const updated = [...prev];
              updated[index] = true;
              return updated;
            });
          };
        }
      }
    };

    // Check first image immediately
    setTimeout(() => checkImageLoad(0), 0);

    // Preload next image when current is loaded
    if (imagesLoaded[activeIndex]) {
      const nextIndex = (activeIndex + 1) % carouselImages.length;
      setTimeout(() => checkImageLoad(nextIndex), 0);
    }
  }, [activeIndex, imagesLoaded]);

  // Carousel auto-advance
  useEffect(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % carouselImages.length);
    }, 3000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <header id="home" className="hero">
      <div className="hero-carousel">
        {carouselImages.map((image, index) => {
          const isActive = index === activeIndex;
          const isLoaded = imagesLoaded[index];
          const base = image.base;

          return (
            <picture
              key={image.base}
              ref={(el) => {
                imageRefs.current[index] = el;
              }}
              className={`hero-img-wrapper ${isActive ? 'active' : ''}`}
              style={{
                opacity: isActive && isLoaded ? 1 : 0,
                transition: 'opacity 1.2s ease-in-out'
              }}
            >
              <source srcSet={`/img/${base}.avif`} type="image/avif" />
              <source srcSet={`/img/${base}.webp`} type="image/webp" />
              <img
                className="hero-img"
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

      <div className="content" style={{ opacity: imagesLoaded[activeIndex] ? 1 : 0, transition: 'opacity 1.2s ease-in-out' }}>
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


