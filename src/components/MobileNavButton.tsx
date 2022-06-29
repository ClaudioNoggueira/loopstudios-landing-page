import CloseIcon from "./Icons/CloseIcon";
import HamburgerIcon from "./Icons/HamburgerIcon";

import "../components/styles/MobileNavButton.css";
import { useState } from "react";

export default function MobileNavButton() {
  const [navOpen, setNavOpen] = useState(false);

  function openAndCloseNav() {
    setNavOpen(!navOpen);
  }

  return (
    <button className="mobile-nav-button" onClick={openAndCloseNav}>
      {navOpen ? <CloseIcon /> : <HamburgerIcon />}
    </button>
  );
}
