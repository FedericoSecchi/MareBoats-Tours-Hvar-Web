import React from 'react';
import { useWhatsAppFabLabel } from '../hooks/useWhatsAppFabLabel.js';

const WhatsAppFab = () => {
  const label = useWhatsAppFabLabel();

  return (
    <a
      className="whatsapp-fab"
      href="https://api.whatsapp.com/send?phone=385951966734&text=Hi!%20I%E2%80%99m%20interested%20in%20a%20boat%20tour."
      target="_blank"
      rel="noreferrer"
      aria-label={label}
    >
      <i className="fa-brands fa-whatsapp fa-lg" />
      <span className="fab-tooltip">{label}</span>
    </a>
  );
};

export default WhatsAppFab;


