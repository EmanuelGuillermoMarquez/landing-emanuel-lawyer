import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.info}>
        <p>Emanuel Guillermo Marquez | Abogado</p>
        <p>25 de Mayo 2126, Santa Fe (CP 3000), Argentina</p>
        <p>Correo: emanuelmarquezabogado@gmail.com</p>
        <p>Tel: (0342) 154088190</p>
        <div className={styles.socials}>
          <a
            href="https://www.linkedin.com/in/emanuelmarquez/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visita mi perfil de LinkedIn"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            href="https://www.instagram.com/emanuelmarquezabogado/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visita mi perfil de Instagram"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a
            href="https://wa.me/543424088190"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contactame por WhatsApp"
          >
            <i className="fa-brands fa-whatsapp"></i>
          </a>
        </div>
      </div>
      <div className={styles.copy}>
        <p>&copy; {new Date().getFullYear()} Emanuel Guillermo Marquez. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
