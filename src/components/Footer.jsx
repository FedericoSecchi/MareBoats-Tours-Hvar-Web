import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white-50 footer">
      <div className="container py-4">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
          <a href="#home" className="text-white-50 text-decoration-none">
            &copy; {year} Mare Boats Hvar
          </a>
          <div className="d-flex gap-3">
            <a
              href="https://www.instagram.com/mareboats.hvar/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-instagram" /> Instagram
            </a>
            <a
              href="https://www.tripadvisor.com/Attraction_Review-g303808-d26168387-Reviews-Mare_Boats_Hvar-Hvar_Hvar_Island_Split_Dalmatia_County_Dalmatia.html"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-tripadvisor" /> TripAdvisor
            </a>
          </div>
          <span>Designed &amp; built by Federico Secchi</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


