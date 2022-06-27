import About from "../sections/About";
import Header from "../sections/Header";
import Hero from "../sections/Hero";

export default function LandingPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
      </main>
    </>
  );
}