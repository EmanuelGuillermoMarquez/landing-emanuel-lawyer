import styles from "../styles/WhatsappButton.module.css";
import { Inter , Jost } from 'next/font/google';

const jost = Jost({ subsets: ['latin'] });

export default function WhatsappButton() {
    return (
        <a
            className={styles.whatsappButton + " " + jost.className}
            href="https://wa.me/543424088190"
            target="_blank"
            rel="noopener noreferrer"
        >
            <i className="fa-brands fa-whatsapp"></i>
            <span>Consulta por WhatsApp</span>
        </a>
    );
}