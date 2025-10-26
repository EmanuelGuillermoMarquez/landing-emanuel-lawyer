import styles from "../styles/Services.module.css";

export default function Services() {
  const services = [
    { title: "Accidentes de transitos", desc: "Reclamos por accidentes de tránsito y laborales. Acompañamos todo el proceso para obtener una indemnización justa por los daños personales y materiales sufridos." },
    { title: "Derecho de Daños", desc: "Defensa y reparación integral de los daños sufridos derivados de responsabilidad exctracontractual, incumplimientos contractuales, mala praxis profesional." },
    { title: "Derecho Penal", desc: "Defensas penales estratégicas y querellas particulares, garantizando el debido proceso y la protección de los derechos y garantias de nuestros clientes." },
    { title: "Derecho Civil", desc: "Asesoramiento y representación en juicios civiles y comerciales, especializados en materia de contratos, incumplimientos, cobro de deudas y defensa estratégica ante cualquier conflicto patrimonial." },
    { title: "Derecho Comercial", desc: "Asesoría legal para empresas, emprendedores y sociedades. Resolución de conflictos comerciales, cobros y disputas contractuales." },
    { title: "Derecho Laboral", desc: "Indemnizaciones por despidos, accidentes laborales, reclamos por falta de registración y diferencias salariales. Defendemos los derechos del trabajador con compromiso y resultados." },
    { title: "Derecho Real", desc: "Resolución de litigios por propiedad y posesión de inmuebles. Juicios de desalojos y usucapión, división y recuperación de bienes con soluciones legales efectivas." },
    { title: "Derecho Sucesorio", desc: "Tramitación de declaratorias de herederos y sucesiones. Representamos los derechos de nuestros clientes en conflictos entre herederos, garantizando una distribución justa del patrimonio." },
    { title: "Derecho de Familia", desc: "Acompañamiento legal en divorcios, acuerdos patrimoniales y división de bienes, alimentos, tenencia y régimen de comunicación con hijos." },
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
