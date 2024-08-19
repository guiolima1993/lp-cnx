"use client";

import React, { useRef } from 'react';
import styles from './ImageCarousels.module.scss';

interface ImageCarouselProps {
  images: string[];
  titleImageSrc: string;
  infoText: string;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, titleImageSrc, infoText }) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const { clientWidth, scrollLeft } = carouselRef.current;
      const scrollAmount = direction === 'left' ? -clientWidth / 2 : clientWidth / 2;
      carouselRef.current.scrollTo({ left: scrollLeft + scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.carouselContainer}>
      <img src={titleImageSrc} alt="Carousel Title" className={styles.titleImage} />
      <p className={styles.infoText}>{infoText}</p>
      <div className={styles.carousel}>
        <button className={`${styles.arrow} ${styles.leftArrow}`} onClick={() => scroll('left')}>‹</button>
        <div className={styles.carouselInner} ref={carouselRef}>
          {images.map((src, index) => (
            <div key={index} className={styles.carouselItem}>
              {src.endsWith('.mp4') ? (
                <video controls className={styles.video}>
                  <source src={src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img src={src} alt={`Carousel ${index}`} className={styles.carouselMedia} />
              )}
            </div>
          ))}
        </div>
        <button className={`${styles.arrow} ${styles.rightArrow}`} onClick={() => scroll('right')}>›</button>
      </div>
    </div>
  );
};

const carouselsData: Array<{ images: string[]; titleImageSrc: string; infoText: string }> = [
  {
    images: [
      'https://cnxindustry.com/cdn/shop/files/Prancheta1_1000x.png?v=1722982950',
      'https://cnxindustry.com/cdn/shop/files/Prancheta2_1000x.jpg?v=1722982950',
      'https://cdn.shopify.com/s/files/1/0709/7086/7961/files/HexClean_d6cf17ce-bd22-492a-bbd8-0c430e757135.png?v=1723253587'
    ],
    titleImageSrc: 'https://cdn.shopify.com/s/files/1/0709/7086/7961/files/hexclean-titulo.png?v=1723934482',
    infoText: 'Shampoo hidratante para tecidos'
  },
  {
    images: [
      'https://cdn.shopify.com/s/files/1/0709/7086/7961/files/Prancheta8_2c96d145-275a-441c-9173-5da22eacde4e.png?v=1722983536',
      'https://cdn.shopify.com/s/files/1/0709/7086/7961/files/Prancheta9_6332e8cb-4c81-4f28-ad3d-f6c018df2e41.png?v=1722983536',
      'https://cdn.shopify.com/s/files/1/0709/7086/7961/files/HexShield_3a71d3ba-f9b6-4a6a-a2f5-8044cc596ed1.png?v=1723253537'
    ],
    titleImageSrc: 'https://cdn.shopify.com/s/files/1/0709/7086/7961/files/hexshiel-titulo.png?v=1723942001',
    infoText: 'Impermeabilizante Premium para tecidos'
  },
  {
    images: [
      'https://cdn.shopify.com/s/files/1/0709/7086/7961/files/Prancheta10_435db9cc-db9b-4f43-88a5-96bbce7590f2.png?v=1722983632',
      'https://cdn.shopify.com/s/files/1/0709/7086/7961/files/Prancheta11.png?v=1722983616',
      'https://cdn.shopify.com/s/files/1/0709/7086/7961/files/HexTein.png?v=1723253673'
    ],
    titleImageSrc: 'https://cdn.shopify.com/s/files/1/0709/7086/7961/files/hextein-titulo.png?v=1723942001',
    infoText: 'Tira Manchas'
  },
  {
    images: [
      'https://cdn.shopify.com/s/files/1/0709/7086/7961/files/Prancheta3_3.png?v=1722983376',
      'https://cdn.shopify.com/s/files/1/0709/7086/7961/files/Prancheta4.png?v=1722983376'
    ],
    titleImageSrc: 'https://cdn.shopify.com/s/files/1/0709/7086/7961/files/hexfresh-titulo.png?v=1723942000',
    infoText: 'Aromatizante'
  },
  {
    images: [
      'https://cdn.shopify.com/s/files/1/0709/7086/7961/files/Prancheta12.png?v=1722983696',
      'https://cdn.shopify.com/s/files/1/0709/7086/7961/files/Prancheta13.png?v=1722983696',
      'https://cdn.shopify.com/videos/c/o/v/794dce917bb040f6a16dd9c8bf3175de.mp4'
    ],
    titleImageSrc: 'https://cdn.shopify.com/s/files/1/0709/7086/7961/files/hydraex-titulo.png?v=1723942001',
    infoText: 'Hidratante de Couro'
  },
  {
    images: [
      'https://cdn.shopify.com/s/files/1/0709/7086/7961/files/Prancheta6.png?v=1722983447',
      'https://cdn.shopify.com/s/files/1/0709/7086/7961/files/Prancheta7.png?v=1722983447',
      'https://cdn.shopify.com/s/files/1/0709/7086/7961/files/HexLeather_551aadec-9f7a-4b52-bfd0-9ff35c469c02.png?v=1723253569',
      'https://cdn.shopify.com/videos/c/o/v/16a1f890188d403abc3218eb161597ab.mp4'
    ],
    titleImageSrc: 'https://cdn.shopify.com/s/files/1/0709/7086/7961/files/hexleather-titulo.png?v=1723942001',
    infoText: 'Informação abaixo do título 6'
  }
];

const ImageCarousels: React.FC = () => {
  return (
    <section className={styles.imageCarousels}>
      {carouselsData.map((carousel, index) => (
        <ImageCarousel 
          key={index} 
          images={carousel.images} 
          titleImageSrc={carousel.titleImageSrc} 
          infoText={carousel.infoText} 
        />
      ))}
    </section>
  );
};

export default ImageCarousels;
