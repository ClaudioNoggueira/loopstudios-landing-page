import { useState } from "react";
import "../components/styles/Navbar.css";
import MobileNavButton from "./MobileNavButton";

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  function openAndCloseNav() {
    setNavOpen(!navOpen);
  }

  return (
    <>
      <nav className={`main-nav flex ${navOpen ? "nav-open" : ""}`}>
        <a href="#About" className="nav-link">
          About
        </a>
        <a href="#Carrers" className="nav-link">
          Carrers
        </a>
        <a href="#Events" className="nav-link">
          Events
        </a>
        <a href="#Products" className="nav-link">
          Products
        </a>
        <a href="#Support" className="nav-link">
          Support
        </a>
      </nav>

      <div className="mobile-nav-container" onClick={openAndCloseNav}>
        <MobileNavButton navIsOpen={navOpen} />
      </div>
    </>
  );
}
