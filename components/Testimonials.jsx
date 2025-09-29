import styles from "../styles/Testimonials.module.css";

export default function Testimonials() {
  const testimonials = [
    { name: "María G.", text: "Excelente atención, resolvieron mi caso con rapidez." },
    { name: "Carlos P.", text: "Muy profesionales y atentos en cada detalle." },
    { name: "Lucía R.", text: "Me sentí acompañada durante todo el proceso legal." },
  ];

  return (
    <section className={styles.testimonials}>
      <h2>Testimonios</h2>
      <div className={styles.grid}>
        {testimonials.map((t, i) => (
          <div key={i} className={styles.card}>
            <p>"{t.text}"</p>
            <span>- {t.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
