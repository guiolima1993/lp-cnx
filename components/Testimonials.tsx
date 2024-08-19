import React from 'react';
import './Testimonials.scss';
import ImageCarousels from '../components/ImageCarousels';

interface Testimonial {
  text: string;
  name: string;
  mediaSrc: string;  // URL do vídeo ou imagem
  mediaType: 'image' | 'video';  // Tipo de mídia: 'image' ou 'video'
}

const testimonials: Testimonial[] = [
  { text: "Nunca vi nada igual no mercado, a régua vai subir!", name: "Cleanenização", mediaSrc: "/assets/video/depoimento-2.mp4", mediaType: 'video' },
  { text: "Toda a tecnologia do mercado inserida nos nossos produtos", name: "Fritz Paixão - CEO Cnx Industry", mediaSrc: "/assets/video/depoimento-5.mp4", mediaType: 'video' },
  { text: "Produto com ação mais rápida do mercado!", name: "Fritz Paixão - CEO Cnx Industry", mediaSrc: "/assets/video/depoimento-6.mp4", mediaType: 'video' },
  { text: "O quarto estava todo tomado pelo perfume!!", name: "S2HClean", mediaSrc: "/assets/video/depoimento-3.mp4", mediaType: 'video' },
  { text: "Testei os produtos da CNX, realmente são incríveis.", name: "Alexandre - Brasil Lavagem Inteligente", mediaSrc: "/assets/video/depoimento-1.mp4", mediaType: 'video' },
  { text: "Finalizador muito bom, já quero trocar meu kit de limpeza!", name: "LC Clean", mediaSrc: "/assets/img/depoimento-4.jpeg", mediaType: 'image' }
];

const Testimonials: React.FC = () => {
  return (
    <section className="testimonials-section">
      <div className="container">
      <h2 className="title">Não basta saber higienizar se o principal não souber:<br /> <span>Multiplicar seu faturamento</span></h2>
      <p className="text">Veja quem já está utilizando nossos produtos<br /> e ganhando mais dinheiro com isso</p>
        <div className="testimonials-wrapper">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <img src="/assets/img/quote.png" alt="Quote" className="quote-image" />
              <div className="testimonial-card-display">
                <div>
                  <p className="testimonial-text">{testimonial.text}</p>
                  <p className="testimonial-name">{testimonial.name}</p>
                </div>
                <div>
                  {testimonial.mediaType === 'video' ? (
                    <video width="100%" controls>
                      <source src={testimonial.mediaSrc} type="video/mp4" />
                      Seu navegador não suporta a tag de vídeo.
                    </video>
                  ) : (
                    <img src={testimonial.mediaSrc} alt="Depoimento" className="testimonial-image" />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <h2 className="productTitle">Conheça os produtos que vão <span>te ajudar a colocar mais dinheiro no seu bolso!</span></h2>
        <ImageCarousels />
      </div>
    </section>
  );
};

export default Testimonials;
