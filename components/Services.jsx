import styles from "../styles/Services.module.css";

export default function Services() {
  const services = [
    { title: "Derecho Civil", desc: "Asesoramiento especializado en materia de contratos, inmuebles, sucesiones." },
    { title: "Derecho de Daños", desc: "Reclamos por accidentes de transito, indemnización de daños y perjuicios en general." },
    { title: "Derecho Real", desc: "Resolución de litigios en materia de inmuebles, desalojos, división de bienes, recuperación de bienes." },
    { title: "Derecho Laboral", desc: "Indemnizaciones por despidos, accidentes laborales, reclamos por falta de registración y otros." },
    { title: "Derecho de Familia", desc: "Divorcios, división de bienes conyugales, cuotas alimentarias y regimen de comunicación." },
    { title: "Derecho Comercial", desc: "Asesoría integral para empresas y sociedades comerciales." },
    { title: "Derecho Penal", desc: "Defensas y querellas penales con enfoque estratégico." },
  ];

  return (
    <section className={styles.services}>
      <h2>Nuestros Servicios</h2>
      <div className={styles.grid}>
        {services.map((s, i) => (
          <div key={i} className={styles.card}>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
