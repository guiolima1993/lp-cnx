import React from 'react';
import './Footer.scss';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer-text">
          © {new Date().getFullYear()} Todos os direitos reservados | Desenvolvido por 
          <img src="/assets/img/logo-footer.png" alt="Desenvolvedor" className="developer-logo" />
        </p>
      </div>
    </footer>
  );
};

export default Footer;
