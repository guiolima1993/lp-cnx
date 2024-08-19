// components/CookieBanner.tsx

'use client'; // Marca este componente como um componente de cliente

import React, { useState, useEffect } from 'react';
import './CookieBanner.scss'; // Importa o CSS do modal

const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleAccept = () => {
    setIsVisible(false);
    localStorage.setItem('cookiesAccepted', 'true');
  };

  const handleReject = () => {
    setIsVisible(false);
    localStorage.setItem('cookiesAccepted', 'false');
  };

  useEffect(() => {
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');
    if (cookiesAccepted === 'true' || cookiesAccepted === 'false') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  return (
    <div className="cookie-banner-overlay">
      <div className="cookie-banner-modal">
        <p>Este site utiliza cookies para melhorar a sua experiência. Ao continuar navegando, você concorda com nossa <a href="/privacy-policy">Política de Privacidade</a>.</p>
        <div className="cookie-banner-buttons">
          <button onClick={handleAccept}>Ok, entendi!</button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
