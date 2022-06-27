import heroImg from "../images/desktop/image-hero.jpg";

import "../sections/styles/Hero.css";

export default function Hero() {
  return (
    <section className="hero-section">
      <img
        src={heroImg}
        alt="Woman driving with VR glasses"
        className="image"
      />

      <div>
        <h1>Immersive experiences that deliver</h1>
      </div>
    </section>
  );
}
