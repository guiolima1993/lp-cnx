import React from 'react';
import styles from './TVSection.module.scss';

interface TVSectionProps {
  title: string;
  description: string;
  imageSrc: string;
}

const TVSection: React.FC<TVSectionProps> = ({ title, description, imageSrc }) => {
  return (
    <section className={styles.tvSection}>
      <div className={styles.content}>
        <h2 className={styles.title} dangerouslySetInnerHTML={{ __html: title }} />
        <p>{description}</p>
      </div>
      <div className={styles.imageWrapper}>
        <img src={imageSrc} alt="TV Image" />
      </div>
      <div className={styles.texts}>
        <h6 className={styles.textsInfo}>A mente por trás de tudo</h6>
        <h3 className={styles.textsName}>Fritz Paixão <img className={styles.check} src="/assets/img/check-name.png" alt="Check Name Fritz Paixao" /></h3>
        <p className={styles.text}>Prazer, meu nome é Fritz Paixão e depois que descobri como atuar neste mercado, eu larguei a <span>carreira de apresentador</span> de TV do Multishow, apenas para lavar estofados.</p>
        <p className={styles.text}> Pode até parecer estranho, mas hoje eu...</p>
        <ul className={styles.list}>
          <li>
            <img src="/assets/img/list-1.png" alt="Icone Realidade" />
            <p>Mudei por completo minha realidade</p>
          </li>
          <li>
            <img src="/assets/img/list-2.png" alt="Icone Realidade" />
            <p>Transformei meu negócio em uma
              franquia presente em 4 continentes
              e 12 países
            </p>
          </li>
          <li>
            <img src="/assets/img/list-3.png" alt="Icone Realidade" />
            <p>Me tornei o empreendedor mais
              reconhecido e premiado do segmento</p>
          </li>
          <li>
            <img src="/assets/img/list-4.png" alt="Icone Realidade" />
            <p>Tenho apoiado centenas de outros
              lavadores de sofá
            </p>
          </li>
          <li className={styles.last}>
            <img src="./assets/img/list-5.png" alt="Icone Realidade" />
            <p>Descobri uma mina de ouro
              inexplorada nesse segmento.</p>
          </li>
        </ul>
        <h5 className={styles.Title}>"Mas se é tão bom, porque tem pouca gente atuando?"</h5>
        <p className={styles.textTitle}>Porque pouca gente sabe que esse mercado dá muito dinheiro!</p>
        <p className={styles.textContent}>Foi este mercado que permitiu eu conhecer o mundo, morar em Miami com minha família, realizar o sonho da casa própria e comprar o carro que sempre sonhei. Agora chegou a hora de mostrar como VOCÊ TAMBÉM pode mudar a sua vida usando meu conhecimento, nossos produtos e sua força de vontade!</p>
        <a href="https://wa.me/5515996041578" target="_blank" className={`${styles.btn} btn-lg`}>
          Sim, quero mudar minha vida
        </a>
        <img className={styles.imgSecurity} src="/assets/img/seguro-2-cnx.png" alt="Seguranca Cnx industry compra segura" />
      </div>
    </section>
  );
}

export default TVSection;
