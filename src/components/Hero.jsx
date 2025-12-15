import React from 'react';

const Hero = () => {
  return (
    <header id="home" className="hero">
      <video
        className="d-none d-md-block"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/img/carousel-1.jpeg"
      >
        <source src="/img/hero.mp4" type="video/mp4" />
      </video>

      <img
        className="hero-img d-md-none"
        src="/img/carousel-1.jpeg"
        alt="Speedboat tour from Hvar with guests enjoying the sea"
      />

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


