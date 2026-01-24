import React from "react";
import WhatsappIcon from "../../assets/icones/whatsappIcon.png";
import "./whatsappButton.css";

const WhatsAppButton = () => {
  const phoneNumber = "554388070577";
  const message =
    "Olá, gostaria de tirar minha dúvida sobre a comunidade de alta performance integral!";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message,
  )}`;

  return (
    <div className="whatsapp-container">
      <a
        href={whatsappUrl}
        className="whatsapp-button"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Tire sua dúvida"
      >
        <img src={WhatsappIcon} alt="WhatsApp" className="whatsapp-icon" />
      </a>
    </div>
  );
};

export default WhatsAppButton;
