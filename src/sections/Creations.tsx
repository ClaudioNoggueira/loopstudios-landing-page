import Button from "../components/Button";
import ImageCard from "../components/ImageCard";

import curiosity from "../images/desktop/creations/image-curiosity.jpg";
import deepEarth from "../images/desktop/creations/image-deep-earth.jpg";
import fisheye from "../images/desktop/creations/image-fisheye.jpg";
import fromAbove from "../images/desktop/creations/image-from-above.jpg";
import grid from "../images/desktop/creations/image-grid.jpg";
import nightArcade from "../images/desktop/creations/image-night-arcade.jpg";
import pocketBorealis from "../images/desktop/creations/image-pocket-borealis.jpg";
import soccerTeam from "../images/desktop/creations/image-soccer-team.jpg";

import "../sections/styles/Creations.css";

export default function Creations() {
  return (
    <section className="creations-section">
      <div className="flex">
        <h2>Our Creations</h2>
        <Button textContent="See All" className="btn--full" />
      </div>

      <div className="grid grid--4-cols">
        <ImageCard imageURL={deepEarth} textContent="Deep Earth" />
        <ImageCard imageURL={nightArcade} textContent="Night Arcade" />
        <ImageCard imageURL={soccerTeam} textContent="Soccer Team VR" />
        <ImageCard imageURL={grid} textContent="The Grid" />
        <ImageCard imageURL={fromAbove} textContent="From up above vr" />
        <ImageCard imageURL={pocketBorealis} textContent="Pocket Borealis" />
        <ImageCard imageURL={curiosity} textContent="The curiosity" />
        <ImageCard imageURL={fisheye} textContent="Make it Fisheye" />
      </div>
    </section>
  );
}
