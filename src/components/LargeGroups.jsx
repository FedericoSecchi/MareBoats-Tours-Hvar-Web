import React from 'react';

const LargeGroups = () => {
  return (
    <section id="large-groups" className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-4 section-title">
          <small>Large Groups &amp; Events</small>
          <h2 className="mb-3">We host groups of any size</h2>
        </div>
        <div className="row g-4 align-items-center">
          <div className="col-12 col-lg-8 mx-auto">
            <p className="lead text-center mb-4">
              We organize private tours for large groups, events and special occasions — coordinating multiple boats when needed to keep the experience smooth and well organized.
            </p>
            <ul className="list-check text-muted mb-4">
              <li>Weddings, birthdays and corporate events</li>
              <li>Families and groups of friends</li>
              <li>Travel agencies and tour operators</li>
              <li>VIP experiences and custom itineraries</li>
            </ul>
            <div className="text-center">
              <a
                className="btn btn-primary btn-lg shadow-soft"
                href="https://api.whatsapp.com/send?phone=385951966734&text=Hi!%20I%E2%80%99m%20planning%20a%20group%20trip%20and%20would%20like%20to%20discuss%20options."
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-whatsapp me-2" /> Planning a group trip? Contact us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LargeGroups;
