import styles from "../styles/Topbar.module.css";
import { Inter , Jost } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const jost = Jost({ subsets: ['latin'] });

export default function Topbar() {
  return (
    <section className={styles.topbar + " " + jost.className}>
        <div className={styles.socials}>
          <a
            href="https://www.instagram.com/emanuelmarquezabogado/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            href="https://www.instagram.com/emanuelmarquezabogado/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a
            href="https://wa.me/543424088190"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-whatsapp"></i>
          </a>
        </div>
        <div className={styles.contact}>
            <div>
              <a
                href="tel:3424088190"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-solid fa-phone"></i>
                <span>Consultas: (0342) 154088190</span>
              </a>
            </div>
            <div>
              <a
                href="https://maps.google.com/maps?ll=-31.651394,-60.706735&z=16&t=m&hl=es-419&gl=AR&mapclient=embed&q=25%20de%20Mayo%202126%20S3000FTM%20Santa%20Fe%20de%20la%20Vera%20Cruz%20Santa%20Fe"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-solid fa-location-dot"></i>
                <span>25 de Mayo 2126, Santa Fe (CP 3000)</span>
              </a>
            </div>
        </div>
    </section>
  );
}