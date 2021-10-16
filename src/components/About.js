import {
  DiHtml5,
  DiCss3,
  DiPython,
  DiReact,
  DiNodejsSmall,
  DiJsBadge
} from "react-icons/di";
import { FaFigma } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";

export default function About() {
  return (
    <div className="About">
      <h2>ABOUT</h2>

      <div
        className="about-paragraph"
      >
        I am currently working in the e-Commerce tech space as a QA Engineer. My focus is primarily on front-end technologies, but I work in all aspects of web development (front-end, back-end, QA testing). Many of my personal projects incorporate other interests and hobbies of mine (photography, music, cycling) and I always have something in the works that marries my love of development with my other non-tech-related pursuits. 
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
            <DiNodejsSmall />
            <span>NODEJS</span>
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
