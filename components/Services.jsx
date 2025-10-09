import styles from "../styles/Services.module.css";

export default function Services() {
  const services = [
    { title: "Derecho de Daños", desc: "Reclamos por accidentes de transito, indemnización de daños y perjuicios en general." },
    { title: "Derecho Civil", desc: "Asesoramiento especializado en materia de contratos, inmuebles, sucesiones." },
    { title: "Derecho Real", desc: "Resolución de litigios en materia de inmuebles, desalojos, división de bienes, recuperación de bienes." },
    { title: "Derecho Laboral", desc: "Indemnizaciones por despidos, accidentes laborales, reclamos por falta de registración y otros." },
    { title: "Derecho de Familia", desc: "Divorcios, división de bienes conyugales, cuotas alimentarias y regimen de comunicación." },
    { title: "Derecho Comercial", desc: "Asesoría integral para empresas y sociedades comerciales." },
    { title: "Derecho Penal", desc: "Defensas y querellas penales con enfoque estratégico." },
  ];

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <div>
          <img src="/images/DSC_0163.JPG" alt="Emanuel Marquez Abogado" className={styles.image}/>
        </div>
        <div>
          <h2>Ofrecemos <strong>soluciones legales efectivas</strong></h2>
          <p>Somos un equipo de profesionales del derecho dispuestos a asesorarte de forma personalizada en diversas áreas y acompañarte en la <strong>defensa de tus derechos</strong>. Nos comprometemos con tu caso para brindarte una <strong>solución integral y eficaz</strong>.</p>

          <p style={{marginTop: '2rem'}}><strong>Si sufriste un accidente de transito, accidente laboral, tenes problemas relacionados con inmuebles o un proceso penal en tramite, tenemos una solución adecuada a tus intereses.</strong></p>

          <a href="https://wa.me/543424088190" target="_blank" rel="noopener noreferrer" className={styles.button}>Contactar por WhatsApp</a>
        </div>
      </div>
      <div className={styles.services}>
        <h2>Nos especializamos en estas areas del derecho</h2>
        <div className={styles.grid}>
          {services.map((s, i) => (
            <div key={i} className={styles.card}>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
