import {
  DiHtml5,
  DiCss3,
  DiPython,
  DiReact,
  DiRuby,
  DiJsBadge
} from "react-icons/di";
// import { FaFigma } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";

export default function About() {
  return (
    <div className="About">
      <h2>ABOUT</h2>

      <div
        className="about-paragraph"
      >
        I am currently working in the e-Commerce tech space. My focus is primarily on front-end technologies, but I enjoy working on all aspects of web development. Many of my personal projects incorporate other interests and hobbies of mine (photography, music, the outdoors) and I always have something in the works that marries my love of development with my other non-tech-related pursuits. 
      </div>


      <div className="skills-container">
        <h2>TECHNOLOGIES</h2>

        <div className="skills-icons">
          <div>
            <DiHtml5 />
            <span>HTML</span>
          </div>
          <div>
            <DiCss3 />
            <span>CSS</span>
          </div>
          <div>
            <DiReact />
            <span>REACT</span>
          </div>
          <div>
            <DiPython />
            <span>PYTHON</span>
          </div>
          <div>
            <FiFigma />
            <span>FIGMA</span>
          </div>
          <div>
            <DiRuby />
            <span>RUBY</span>
          </div>
          <div>
            <DiJsBadge />
            <span>JAVASCRIPT</span>
          </div>
        </div>
      </div>
    </div>
  );
}
