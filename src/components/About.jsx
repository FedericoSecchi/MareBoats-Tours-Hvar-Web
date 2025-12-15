import React from 'react';

const About = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row g-4 align-items-center">
          <div className="col-12 col-lg-6 js-animate-on-scroll">
            <img
              src="/img/about.jpeg"
              alt="About Mare Boats Hvar"
              className="img-fluid rounded-3 shadow-soft"
              loading="lazy"
            />
          </div>
          <div className="col-12 col-lg-6 js-animate-on-scroll">
            <small className="text-uppercase text-muted">About</small>
            <h3 className="mt-1">Mare Boats Hvar</h3>
            <p className="mb-3">
              Family-run tours and rentals based in Hvar. We design each trip around the weather and
              your vibe: Blue &amp; Green Cave, Pakleni islands, Red Rocks or a private route.
            </p>
            <ul className="list-check text-muted">
              <li>Private tours &amp; transfers</li>
              <li>Rentals with/without skipper</li>
              <li>Flexible schedules, honest prices</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;


