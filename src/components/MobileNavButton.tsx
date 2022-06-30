import CloseIcon from "./Icons/CloseIcon";
import HamburgerIcon from "./Icons/HamburgerIcon";

import "../components/styles/MobileNavButton.css";

interface MobileNavButtonProps {
  navIsOpen: boolean;
}

export default function MobileNavButton(props: MobileNavButtonProps) {
  return (
    <button className="mobile-nav-button">
      {props.navIsOpen ? <CloseIcon /> : <HamburgerIcon />}
    </button>
  );
}
