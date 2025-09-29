import Layout from "../components/Layout";
import Topbar from "../components/Topbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import WhatsappButton from "../components/WhatsappButton";


export default function Home() {
  return (
    <Layout>
      <Topbar />
      <WhatsappButton />
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </Layout>
  );
}
