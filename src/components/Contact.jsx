import { FaGithub, FaLinkedin } from "react-icons/fa";

import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <div className="Contact">
      <h2>CONTACT</h2>
      <ContactForm />
      <div className="contact-links">
        <div>
          <a href="https://github.com/erichkopp/" target="_blank" rel="noreferrer">
            <FaGithub />
            <span>GitHub</span>
          </a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/erich-kopp/" target="_blank" rel="noreferrer">
            <FaLinkedin />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  );
}