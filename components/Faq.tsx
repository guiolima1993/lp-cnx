"use client";

import React, { useState } from 'react';
import './Faq.scss';

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqProps {
  titleImageSrc: string;
  titleText: string;
  faqItems: FaqItem[];
}

const Faq: React.FC<FaqProps> = ({ titleImageSrc, titleText, faqItems }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="container">
        <div className="faq-title">
          <img src={titleImageSrc} alt="FAQ Title" className="faq-title-image" />
          <h2 dangerouslySetInnerHTML={{ __html: titleText }}></h2>
        </div>
        <div className="faq-items">
          {faqItems.map((item, index) => (
            <div key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`}>
              <div className="faq-question" onClick={() => toggleAccordion(index)}>
                {item.question}
                <img
                  src="/assets/img/arrow-accordion.png"
                  alt="Seta de faq"
                  className={`faq-arrow ${activeIndex === index ? 'open' : ''}`} // Classe condicional
                />
              </div>
              {activeIndex === index && <div className="faq-answer">{item.answer}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
