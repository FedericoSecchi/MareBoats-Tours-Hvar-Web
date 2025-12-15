import React, { useState, useEffect, useRef } from 'react';

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
  const [imagesLoaded, setImagesLoaded] = useState([false, false]);
  const intervalRef = useRef(null);
  const imageRefs = useRef([]);

  // Preload next image when current is loaded
  useEffect(() => {
    const preloadNext = () => {
      const nextIndex = (activeIndex + 1) % carouselImages.length;
      if (!imagesLoaded[nextIndex] && imageRefs.current[nextIndex]) {
        const img = new Image();
        img.onload = () => {
          setImagesLoaded((prev) => {
            const updated = [...prev];
            updated[nextIndex] = true;
            return updated;
          });
        };
        img.src = carouselImages[nextIndex].src;
      }
    };

    if (imagesLoaded[activeIndex]) {
      preloadNext();
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

  // Load first image immediately
  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImagesLoaded((prev) => {
        const updated = [...prev];
        updated[0] = true;
        return updated;
      });
    };
    img.src = carouselImages[0].src;
  }, []);

  return (
    <header id="home" className="hero">
      <div className="hero-carousel">
        {carouselImages.map((image, index) => {
          const isActive = index === activeIndex;
          const isLoaded = imagesLoaded[index];

          return (
            <img
              key={image.src}
              ref={(el) => {
                imageRefs.current[index] = el;
              }}
              className={`hero-img ${isActive ? 'active' : ''}`}
              src={isLoaded || index === 0 ? image.src : undefined}
              alt={image.alt}
              loading={index === 0 ? 'eager' : 'lazy'}
              fetchpriority={index === 0 ? 'high' : 'auto'}
              style={{
                opacity: isActive && isLoaded ? 1 : 0,
                transition: 'opacity 1.2s ease-in-out'
              }}
            />
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


