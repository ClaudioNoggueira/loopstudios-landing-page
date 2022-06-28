import About from "../sections/About";
import Creations from "../sections/Creations";
import Footer from "../sections/Footer";
import Header from "../sections/Header";
import Hero from "../sections/Hero";

export default function LandingPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Creations />
      </main>
      <Footer />
    </>
  );
}
