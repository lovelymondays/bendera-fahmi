import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Products from "./components/Products";
import Process from "./components/Process";
import PromoVideo from "./components/PromoVideo";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

export default function App() {
  return (
    <div className="grain">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Products />
        <Process />
        <PromoVideo />
        {/* <Pricing /> */}
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
