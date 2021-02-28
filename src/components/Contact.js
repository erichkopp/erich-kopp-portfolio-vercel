import { FaGithub, FaLinkedin } from "react-icons/fa";

import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <div className="Contact">
      <h2>CONTACT</h2>
      <ContactForm />
      <div className="contact-links">
        <div>
          <FaGithub />
          <span>GitHub</span>
        </div>
        <div>
          <FaLinkedin />
          <span>LinkedIn</span>
        </div>
      </div>
    </div>
  );
}