import React from 'react';
import linkidlogo from '../images/linkidlogo.png';
import maillogo from '../images/maillogo.png';
import instalogo from '../images/instalogo.png';
import tiktoklogo from '../images/tiktoklogo.png';
import './FourthSection.css';

function FourthSection() {
  return (
    <div className="fourth-section">
      <h2>Kontakt mig!</h2>
      <div className="icon-container">
        {/* LinkedIn */}
        <a href="https://www.linkedin.com/in/lejla-terko-998380327/" target="_blank" rel="noopener noreferrer">
          <img src={linkidlogo} alt="LinkedIn" className="contact-icon" />
        </a>

        {/* Email */}
        <a href="https://outlook.live.com/mail/0/">
          <img src={maillogo} alt="Email" className="contact-icon" />
        </a>

        {/* Instagram */}
        <a href="https://www.instagram.com/lejlaterko/" target="_blank" rel="noopener noreferrer">
          <img src={instalogo} alt="Instagram" className="contact-icon" />
        </a>

        {/* TikTok */}
        <a href="https://www.tiktok.com/@lejlaterko?lang=en" target="_blank" rel="noopener noreferrer">
          <img src={tiktoklogo} alt="TikTok" className="contact-icon" />
        </a>
      </div>
    </div>
  );
}

export default FourthSection;

