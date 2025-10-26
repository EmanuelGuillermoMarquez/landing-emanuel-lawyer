'use client';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import styles from "../styles/Testimonials.module.css";

export default function Testimonials() {
  const testimonials = [
    { name: "Claudia V.", text: "Excelente trabajo, obtuvimos una gran indemnización por mi accidente." },
    { name: "Carlos P.", text: "Muy profesionales y atentos en cada detalle, resolvieron mi caso con rapidez." },
    { name: "Lucía R.", text: "Me asesoró de forma clara y honesta. Recomiendo totalmente su trabajo." },
    { name: "Nicolas A.", text: "Profesional serio y comprometido. Logramos un resultado muy favorable en mi reclamo laboral."},
    { name: "Fabian G.", text: "Excelente profesional, gracias a su dedicación pude recuperar mis bienes con mucha rapidez."},
  ];

  return (
    <section className={styles.testimonials}>
      <h2>Testimonios</h2>

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={3}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        className={styles.swiper}
        breakpoints={{
          1100: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 2,
          },
          0: {
            slidesPerView: 1,
          },
        }}

      >
        {testimonials.map((t, index) => (
          <SwiperSlide key={index}>
            <div className={styles.card}>
              <p className={styles.text}>"{t.text}"</p>
              <h4 className={styles.name}>- {t.name}</h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>


      {/* <div className={styles.grid}>
        {testimonials.map((t, i) => (
          <div key={i} className={styles.card}>
            <p>"{t.text}"</p>
            <span>- {t.name}</span>
          </div>
        ))}
      </div> */}
    </section>
  );
}
