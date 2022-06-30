import "../sections/styles/About.css";
import desktopInteractiveImage from "../images/desktop/image-interactive.jpg";
import mobileInteractiveImage from "../images/mobile/image-interactive.jpg";

export default function About() {
  return (
    <section className="about-section">
      <img
        src={desktopInteractiveImage}
        alt="Guy playing with VR Glasses"
        className="image desktop-image"
      />

      <img
        src={mobileInteractiveImage}
        alt="Guy playing with VR Glasses"
        className="image mobile-image"
      />

      <div className="text-container flex">
        <h2>The leader in interactive VR</h2>
        <p>
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </div>
    </section>
  );
}
