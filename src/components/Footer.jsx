import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-grid">
          <div className="footer-col footer-brand">
            <a href="#home" className="footer-logo">
              Mare Boats Hvar
            </a>
            <p className="footer-tagline">Private boat tours in Hvar, Croatia</p>
          </div>

          <div className="footer-col footer-contact">
            <h3 className="footer-heading">Contact</h3>
            <address className="footer-address">
              <span>Port, Hvar, Croatia</span>
              <a href="tel:+385951966734" className="footer-link">+385 95 196 6734</a>
              <a href="mailto:mare.boatshvar@gmail.com" className="footer-link">mare.boatshvar@gmail.com</a>
            </address>
          </div>

          <div className="footer-col footer-social">
            <h3 className="footer-heading">Follow</h3>
            <a
              href="https://www.instagram.com/mareboats.hvar/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="Instagram"
            >
              <i className="fa-brands fa-instagram" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span className="footer-copyright">&copy; {year} Mare Boats Hvar</span>
          <span className="footer-credit">Designed &amp; built by Federico Secchi</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
