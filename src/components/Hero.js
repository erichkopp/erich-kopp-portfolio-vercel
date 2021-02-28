import { useState, useEffect } from "react";
// import curvesBG from "../images/curvesBG.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <div className="Hero">
      <div className="container">
        {/* <img
          src={curvesBG}
          alt={curvesBG}
        /> */}
        <div className="hero-text">
          <div>erich kopp</div>
          <div>front-end developer.</div>
        </div>
      </div>

      <div className="social-links">
        <a href="https://github.com/erichkopp/" target="_blank" rel="noreferrer">
            <FaGithub/>
        </a>
        <a href="https://www.linkedin.com/in/erich-kopp/" target="_blank" rel="noreferrer">
            <FaLinkedin />
        </a>
    </div>
    </div>
  );
}
