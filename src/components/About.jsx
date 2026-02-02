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
            <h2 className="mt-1 h3">Mare Boats Hvar</h2>
            <p className="mb-3">
              Mare Boats Hvar is a family-run operation based in Hvar. We operate multiple speedboats and design each trip around the weather and your vibe: Blue &amp; Green Cave, Pakleni islands, Red Rocks or a private route. From couples to large groups — we host VIP experiences and group tours using several boats when needed.
            </p>
            <ul className="list-check text-muted">
              <li>Private tours &amp; transfers</li>
              <li>Group tours with several boats</li>
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


