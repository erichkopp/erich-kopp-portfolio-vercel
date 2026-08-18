import { FaGithub, FaLinkedin } from "react-icons/fa";
import {
  DiHtml5,
  DiCss3,
  DiPython,
  DiReact,
  DiNodejsSmall,
  DiJsBadge
} from "react-icons/di";
import { SiTypescript, SiClaude, SiGit } from "react-icons/si";
import { FiFigma } from "react-icons/fi";

export default function About() {
  return (
    <div className="About">
      <h2>ABOUT</h2>

      <div
        className="about-paragraph"
      >
         I have a strong <span className="highlight">professional</span> background working on <span className="highlight">full-stack web applications</span>, with an emphasis on <span className="highlight">front-end technologies</span>. I have a passion for creating user-friendly and <span className="highlight">visually appealing</span> web applications that provide a seamless user experience. I have worked on all aspects of the development cycle, also including <span className="highlight">QA testing</span> and merchant-facing <span className="highlight">technical support</span>. This gives me a  <span className="highlight">unique perspective</span> to understand the needs of both end users and business stakeholders. My personal projects often combine my love for development with my other interests, such as <span className="highlight">photography, music, and the outdoors</span>. I am always looking for new challenges and opportunities to grow as a developer and to create innovative solutions that make a positive impact on users.
      </div>

      <div className="links-container">
        <h2>LINKS</h2>

        <div className="links-icons">
          <a href="https://github.com/erichkopp/" target="_blank" rel="noreferrer" aria-label="github">
              <FaGithub/> GitHub
          </a>
          <a href="https://www.linkedin.com/in/erich-kopp/" target="_blank" rel="noreferrer" aria-label="linkedin">
              <FaLinkedin /> LinkedIn
          </a>
        </div>
      </div>

      <div className="skills-container">
        <h2>TECHNOLOGIES</h2>

        <div className="skills-icons">
          <div>
            <DiHtml5 aria-label="HTML" />
            <span>HTML</span>
          </div>
          <div>
            <DiCss3 aria-label="CSS" />
            <span>CSS</span>
          </div>
          <div>
            <DiReact aria-label="React" />
            <span>REACT</span>
          </div>
          <div>
            <DiPython aria-label="Python" />
            <span>PYTHON</span>
          </div>
          <div>
            <SiTypescript aria-label="Typescript" />
            <span>TYPESCRIPT</span>
          </div>
          <div>
            <DiNodejsSmall aria-label="Node.js" />
            <span>NODEJS</span>
          </div>
          <div>
            <DiJsBadge aria-label="JavaScript" />
            <span>JAVASCRIPT</span>
          </div>
          <div>
            <FiFigma aria-label="Figma" />
            <span>FIGMA</span>
          </div>
          <div>
            <SiClaude aria-label="Claude Code" />
            <span>CLAUDE CODE</span>
          </div>
          <div>
            <SiGit aria-label="Git" />
            <span>GIT</span>
          </div>
        </div>
      </div>
    </div>
  );
}
