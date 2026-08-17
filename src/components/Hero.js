import { useSpring, animated } from 'react-spring'
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  const allTextAnimate = 
    useSpring({
      config: {duration: 2000},
      delay: 500,
      to: {opacity: 1},
      from: {opacity: 0}
    })

  return (
    <div className="Hero">
      <div className="container">
        <animated.div style={allTextAnimate} className="hero-text">
          <div>erich kopp</div>
          <div id="hero-subtitle">front-end developer.</div>
        </animated.div>
      </div>

      <div className="social-links">
        <a href="https://github.com/erichkopp/" target="_blank" rel="noreferrer" aria-label="github">
            <FaGithub/>
        </a>
        <a href="https://www.linkedin.com/in/erich-kopp/" target="_blank" rel="noreferrer" aria-label="linkedin">
            <FaLinkedin />
        </a>
    </div>
    </div>
  );
}
