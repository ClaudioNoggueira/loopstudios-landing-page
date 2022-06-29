import desktopHeroImage from "../images/desktop/image-hero.jpg";
import mobileHeroImage from "../images/mobile/image-hero.jpg";

import "../sections/styles/Hero.css";

export default function Hero() {
  return (
    <section className="hero-section">
      <img
        src={desktopHeroImage}
        alt="Woman driving with VR glasses"
        className="image desktop-image"
      />
      <img
        src={mobileHeroImage}
        alt="Woman driving with VR glasses"
        className="image mobile-image"
      />

      <div>
        <h1>Immersive experiences that deliver</h1>
      </div>
    </section>
  );
}
