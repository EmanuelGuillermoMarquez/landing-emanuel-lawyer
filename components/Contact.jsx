import styles from "../styles/Contact.module.css";

export default function Contact() {
  return (
    <section id="contacto" className={styles.contact}>
      <h2>Contacto</h2>
      <div className={styles.container}>
        <div>
          <form className={styles.form}>
            <input type="text" placeholder="Nombre" required />
            <input type="email" placeholder="Email" required />
            <input type="text" placeholder="Celular" required />
            <input type="text" placeholder="Asunto" required />
            <input type="text" placeholder="Mensaje" required />
            <button type="submit">Enviar solicitud</button>
          </form>
          <a
            href="https://wa.me/543424088190"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsapp}
          >
            Ir al WhatsApp
          </a>

        </div>
        <div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2141.495686353436!2d-60.70831682577049!3d-31.65138087696507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b5a9a680d59c2f%3A0x6bc72c8018f35b9c!2s25%20de%20Mayo%202126%2C%20S3000FTM%20Santa%20Fe%20de%20la%20Vera%20Cruz%2C%20Santa%20Fe!5e0!3m2!1ses-419!2sar!4v1757362147765!5m2!1ses-419!2sar" loading="lazy" className={styles.map}></iframe>
        </div>
      </div>
      
    </section>
  );
}
