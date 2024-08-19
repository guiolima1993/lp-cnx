import React from 'react';
import styles from './Midias.module.scss';
import './Hero.scss';

interface MidiasProps {
  title: string;
  image1Src: string;
  image2Src: string;
}

const Midias: React.FC<MidiasProps> = ({ title, image1Src, image2Src }) => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title} dangerouslySetInnerHTML={{ __html: title }} />
        <div className={styles.imagesWrapper}>
          <div className={styles.imageItem}>
            <img src={image1Src} alt="Imagem 1" />
          </div>
          <div className={styles.imageItem}>
            <img src={image2Src} alt="Imagem 2" />
          </div>
        </div>
        <a href="https://wa.me/5515996041578" target="_blank" className={`${styles.btn} btn-lg`}>
          Quero ser um parceiro
        </a>
        <img className={styles.imgSecurity} src="/assets/img/seguro-cnx.png" alt="Seguranca Cnx industry compra segura" />
      </div>
    </section>
  );
}

export default Midias;
