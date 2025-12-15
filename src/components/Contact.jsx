import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-5">
      <div className="container">
        <div className="row g-4 align-items-center">
          <div className="col-12 col-lg-6">
            <h3>Contact</h3>
            <p className="text-muted">Fastest way to book is via WhatsApp. We reply quickly.</p>
            <div className="d-grid gap-2 d-md-block">
              <a
                className="btn btn-success me-2"
                target="_blank"
                rel="noreferrer"
                href="https://api.whatsapp.com/send?phone=385951966734&text=Hi!%20I%E2%80%99m%20interested%20in%20a%20boat%20tour."
              >
                <i className="fa-brands fa-whatsapp me-2" />
                WhatsApp
              </a>
              <a
                className="btn btn-outline-primary me-2"
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/mareboats.hvar/"
              >
                <i className="fa-brands fa-instagram me-2" />
                Instagram
              </a>
              <a
                className="btn btn-outline-secondary"
                target="_blank"
                rel="noreferrer"
                href="https://www.tripadvisor.com/Attraction_Review-g303808-d26168387-Reviews-Mare_Boats_Hvar-Hvar_Hvar_Island_Split_Dalmatia_County_Dalmatia.html"
              >
                <i className="fa-brands fa-tripadvisor me-2" />
                TripAdvisor
              </a>
            </div>
            <div className="mt-3">
              <a
                className="d-inline-flex align-items-center text-decoration-none"
                target="_blank"
                rel="noreferrer"
                href="https://www.google.com/maps/place/MARE+BOATS/@43.1662756,16.4422281,16z"
              >
                <i className="fa-solid fa-location-dot me-2 text-danger" /> Port, Hvar, Croatia
              </a>
            </div>
            <div className="mt-1 text-muted">
              <i className="fa-solid fa-phone me-2" />
              +385 95 196 6734
            </div>
            <div className="mt-1 text-muted">
              <i className="fa-solid fa-envelope me-2" />
              mare.boatshvar@gmail.com
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="ratio ratio-16x9 shadow-soft rounded-3">
              <iframe
                src="https://www.google.com/maps?q=MARE%20BOATS%20Hvar&output=embed"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mare Boats Hvar on Google Maps"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;


