import { useState } from "react";
import FacebookIcon from "../components/Icons/FacebookIcon";
import InstagramIcon from "../components/Icons/InstagramIcon";
import PinterestIcon from "../components/Icons/PinterestIcon";
import TwitterIcon from "../components/Icons/TwitterIcon";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";

import "../sections/styles/Footer.css";

function getCurrentYear() {
  return new Date().getFullYear();
}

export default function Footer() {
  return (
    <footer className="main-footer flex">
      <div className="flex">
        <Logo />
        <div className="socials flex">
          <a href="#" className="footer-link">
            <FacebookIcon />
          </a>
          <a href="#" className="footer-link">
            <TwitterIcon />
          </a>
          <a href="#" className="footer-link">
            <PinterestIcon />
          </a>
          <a href="#" className="footer-link">
            <InstagramIcon />
          </a>
        </div>
      </div>
      <div className="flex">
        <Navbar />
        <p>
          © <span>{getCurrentYear()}</span> Loopstudios. All rights reserved.
        </p>
      </div>
      <div className="attribution flex">
        <span>
          Challenge by{" "}
          <a
            className="footer-link"
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
          >
            Frontend Mentor.
          </a>
        </span>
        <span>
          Coded by{" "}
          <a
            className="footer-link"
            href="https://github.com/ClaudioNoggueira"
            target={"_blank"}
          >
            Claudio Nogueira
          </a>
          .
        </span>
      </div>
    </footer>
  );
}
