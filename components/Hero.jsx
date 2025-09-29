import styles from "../styles/Hero.module.css";
import { Lora , Merriweather , Noto_Serif } from 'next/font/google';

const font = Lora({ subsets: ['latin'], weight: '400' });

export default function Hero() {
  return (
    <section className={styles.hero }>
      <img src="/lawyer_banner.jpg" alt="Emanuel Marquez Abogado" className={styles.image}/>

      <h1 className={styles.title}>
        Emanuel Guillermo Marquez | Abogado
      </h1>
      
      <p className={styles.subtitle}>
        Asesoramiento legal especializado en accidentes de transitos, derechos reales y defensas penales. Santa Fe, Argentina. 
      </p>
      <a
        /* href="https://web.whatsapp.com/send?phone=543424088190&text=Buenas.%20Necesito%20asesoramiento%20legal%20por%20favor." */
        href="tel:3424088190"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.button}
      >
        Llamar
      </a>
    </section>
  );
}
