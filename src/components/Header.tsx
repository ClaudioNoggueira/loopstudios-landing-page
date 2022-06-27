import Logo from "./Logo";
import "./styles/Header.css";
import heroImg from "../images/desktop/image-hero.jpg";

export default function Header() {
  return (
    <header className="main-header flex">
      <Logo />

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
    </header>
  );
}