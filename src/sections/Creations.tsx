import Button from "../components/Button";
import ImageCard from "../components/ImageCard";

import desktopCuriosity from "../images/desktop/creations/image-curiosity.jpg";
import desktopDeepEarth from "../images/desktop/creations/image-deep-earth.jpg";
import desktopFisheye from "../images/desktop/creations/image-fisheye.jpg";
import desktopFromAbove from "../images/desktop/creations/image-from-above.jpg";
import desktopGrid from "../images/desktop/creations/image-grid.jpg";
import desktopNightArcade from "../images/desktop/creations/image-night-arcade.jpg";
import desktopPocketBorealis from "../images/desktop/creations/image-pocket-borealis.jpg";
import desktopSoccerTeam from "../images/desktop/creations/image-soccer-team.jpg";

import mobileCuriosity from "../images/mobile/creations/image-curiosity.jpg";
import mobileDeepEarth from "../images/mobile/creations/image-deep-earth.jpg";
import mobileFisheye from "../images/mobile/creations/image-fisheye.jpg";
import mobileFromAbove from "../images/mobile/creations/image-from-above.jpg";
import mobileGrid from "../images/mobile/creations/image-grid.jpg";
import mobileNightArcade from "../images/mobile/creations/image-night-arcade.jpg";
import mobilePocketBorealis from "../images/mobile/creations/image-pocket-borealis.jpg";
import mobileSoccerTeam from "../images/mobile/creations/image-soccer-team.jpg";

import "../sections/styles/Creations.css";

export default function Creations() {
  return (
    <section className="creations-section">
      <div className="flex">
        <h2>Our Creations</h2>
        <Button textContent="See All" className="btn--full" />
      </div>

      <div className="grid grid--4-cols desktop-image">
        <ImageCard imageURL={desktopDeepEarth} textContent="Deep Earth" />
        <ImageCard imageURL={desktopNightArcade} textContent="Night Arcade" />
        <ImageCard imageURL={desktopSoccerTeam} textContent="Soccer Team VR" />
        <ImageCard imageURL={desktopGrid} textContent="The Grid" />
        <ImageCard imageURL={desktopFromAbove} textContent="From up above vr" />
        <ImageCard
          imageURL={desktopPocketBorealis}
          textContent="Pocket Borealis"
        />
        <ImageCard imageURL={desktopCuriosity} textContent="The curiosity" />
        <ImageCard imageURL={desktopFisheye} textContent="Make it Fisheye" />
      </div>

      <div className="grid grid--4-cols mobile-image">
        <ImageCard imageURL={mobileDeepEarth} textContent="Deep Earth" />
        <ImageCard imageURL={mobileNightArcade} textContent="Night Arcade" />
        <ImageCard imageURL={mobileSoccerTeam} textContent="Soccer Team VR" />
        <ImageCard imageURL={mobileGrid} textContent="The Grid" />
        <ImageCard imageURL={mobileFromAbove} textContent="From up above vr" />
        <ImageCard
          imageURL={mobilePocketBorealis}
          textContent="Pocket Borealis"
        />
        <ImageCard imageURL={mobileCuriosity} textContent="The curiosity" />
        <ImageCard imageURL={mobileFisheye} textContent="Make it Fisheye" />
      </div>
    </section>
  );
}
