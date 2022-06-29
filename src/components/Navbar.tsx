import "../components/styles/Navbar.css";
import MobileNavButton from "./MobileNavButton";

export default function Navbar() {
  return (
    <>
      <nav className="main-nav flex">
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

      <MobileNavButton />
    </>
  );
}
