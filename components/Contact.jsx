'use client';
import { useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "../styles/Contact.module.css";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setError(false);
    setSuccess(false);
    setLoading(false);
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setSuccess(false);

    if (!form.name || !form.email || !form.message) {
      setError("Por favor complete los campos obligatorios.");
      setLoading(false);
      return;
    }

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      setSuccess(true);
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      console.error(err);
      setError("Ocurrió un error al enviar la consulta.");
    } finally {
      setLoading(false);
    }
  };


  return (
    <section id="contacto" className={styles.contact}>
      <h2>Contacto</h2>
      <div className={styles.container}>
        <div>
          <form className={styles.form}>
            <input type="text" name="name" value={form.name} placeholder="Nombre y apellido" required onChange={handleChange} />
            <input type="email" name="email" value={form.email} placeholder="Email" required onChange={handleChange} />
            <input type="text" name="phone" value={form.phone} placeholder="Celular" required onChange={handleChange} />
            <input type="text" name="message" value={form.message} placeholder="Consulta" required onChange={handleChange} />

            <div className={styles.status}>
              {error && <p className={styles.error}>{error}</p>}
              {success && (<p className={styles.success}> Consulta enviada, nos comunicaremos a la brevedad.</p>)}
            </div>
            
            <button onClick={handleSubmit} type="submit" disabled={loading}>{loading ? "Enviando..." : "Enviar consulta"}</button>
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
