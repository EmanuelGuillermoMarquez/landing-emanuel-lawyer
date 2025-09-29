import styles from "../styles/About.module.css";

export default function About() {
  return (
    <section className={styles.about}>
      <div className={styles.text_container}>
        <h2>Sobre nosotros</h2>
        <p>
          Mi nombre es Emanuel Marquez, soy abogado graduado en la Universidad Nacional del Litoral, con amplia experiencia en litigios y resolución estratégica de conflictos.
        </p>
        <p>
          Formó parte de un Estudio Jurídico con más de 10 años de trayectoria en toda la provincia de Santa Fe ofreciendo servicios personalizados y soluciones legales efectivas para personas y empresas. Tenemos como objetivo defender los intereses de nuestros clientes con seriedad, compromiso y resultados comprobados.
        </p>
        <p>
          Somos un equipo de profesionales de todas las ramas del derecho, lo que nos permite brindar soluciones integrales y personalizadas para cada caso, acompañando a nuestros clientes en el proceso.
        </p>
        <p>
          Si estás atravesando un conflicto legal, podemos ayudarte a resolverlo de la mejor manera. No dudes en contactarte para trabajar juntos en la defensa de tus derechos.
        </p>
        <div className={styles.actions}>
          <a href="https://wa.me/543424088190" target="_blank" rel="noopener noreferrer" className={styles.whatsapp}>Consultar por WhatsApp</a>
          <a href='#contacto' className={styles.button}>Agendar una cita</a>
        </div>
      </div>
      <div className={styles.image_container}>
        <img src="/images/DSC_0145.jpg" alt="Emanuel Marquez Profile" className={styles.image}/>
      </div>
    </section>
  );
}
