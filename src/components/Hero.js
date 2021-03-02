import { useState, useEffect } from "react";
import {useSpring, animated, config} from 'react-spring'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { transform } from "typescript";

export default function Hero() {
  // const animate = useSpring({config: { duration: 2250 }, opacity: 1, from: {opacity: 0}})
  const allTextAnimate = 
    useSpring({
      config: {duration: 2000},
      delay: 100,
      to: {opacity: 1},
      from: {opacity: 0}
    })

  return (
    <div className="Hero">
      <div className="container">
        <animated.div style={allTextAnimate} className="hero-text">
          <div>erich kopp</div>
          <div>front-end developer.</div>
        </animated.div>
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
