import styles from "../styles/Hero.module.css";
import { Lora , Merriweather , Noto_Serif } from 'next/font/google';

const font = Lora({ subsets: ['latin'], weight: '400' });

export default function Hero() {
  return (
    <section id="legal" className={styles.hero }>
      <img src="/images/lawyer_banner.webp" alt="Emanuel Marquez Abogado portada principal" className={styles.image}/>

      <h1 className={styles.title}>
        Emanuel Guillermo Marquez | Abogado
      </h1>
      
      <h2 className={styles.subtitle}>
        Asesoramiento jurídico integral en accidentes de tránsito, resolución de conflictos civiles y defensas penales. Santa Fe, Argentina. 
      </h2>

      <h2 className={styles.subtitle_mobile}>
        Especialista en accidentes, derecho civil y defensas penales. Santa Fe, Argentina. 
      </h2>
      <div className={styles.actions}>
        <a
          href="https://wa.me/543424088190"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.button}
        >
          Enviar WhatsApp
        </a>
        <a
          /* href="https://web.whatsapp.com/send?phone=543424088190&text=Buenas.%20Necesito%20asesoramiento%20legal%20por%20favor." */
          href="tel:3424088190"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.button}
        >
          Llamar
        </a>
      </div>
    </section>
  );
}
