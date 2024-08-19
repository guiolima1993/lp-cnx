import React from 'react';
import './Hero.scss';
import VideoSection from './VideoSection';

const Hero: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="display">
          <h1 className="display-4">Descubra como ganhar <span>dinheiro com menos esforço</span> na sua empresa de higienização de estofados</h1>
          <p className="lead">Foram 9 anos de história para desenvolver <span>uma solução única</span> com 6 benefícios</p>
        </div>
        <VideoSection />
        <p className="txt">Fale com um especialista e<br></br> potencialize sua operação</p>
        <a href="https://wa.me/5515996041578" target="_blank" className="btn btn-primary btn-lg">
          <img src="data:image/png;base64,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" />Falar com um especialista</a>
        <div className="status-container">
          <div className="circle"></div>
          <span className="status-text">Online agora</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
