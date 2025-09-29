import styles from "../styles/Hero.module.css";
import { Lora , Merriweather , Noto_Serif } from 'next/font/google';
import Image from 'next/image';
import lawyerImage from '../public/images/lawyer_banner.jpg';

const font = Lora({ subsets: ['latin'], weight: '400' });
const imageStyle = {
  objectFit: 'cover',
  opacity: 0.8,
  height: '100%',
  zIndex: 0,
};

export default function Hero() {
  return (
    <section className={styles.hero }>
      <img src="images/lawyer_banner.jpg" alt="Emanuel Marquez Abogado" className={styles.image}/>
      {/* <Image src={lawyerImage} alt="Emanuel Marquez Abogado" fill={true} style={imageStyle} priority={true}/> */}

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
