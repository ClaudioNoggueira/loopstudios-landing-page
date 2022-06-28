import Logo from "../components/Logo";
import Navbar from "../components/Navbar";
import "../sections/styles/Header.css";

export default function Header() {
  return (
    <header className="main-header flex">
      <Logo />
      <Navbar />
    </header>
  );
}
