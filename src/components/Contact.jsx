import "../styles/Contact.css";
import avatarMovil from "../assets/avatarMovil.png";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

function Contact() {
  return (
    <section className="section-with-avatar fade-in" id="contact">
      <div className="section-avatar">
        <img src={avatarMovil} alt="Avatar con movil" />
      </div>

      <div className="section-text">
        <h2>Contáctame</h2>
        <p>
          ¿Quieres hablar sobre una oportunidad, un proyecto o una colaboración?
        </p>

        <ul className="contact-list">
          <li>
            {" "}
            <FaEnvelope /> Email:{" "}
            <a href="mailto:rebrodriguezd@gmail.com">rebrodriguezd@gmail.com</a>
          </li>
          <li>
            {" "}
            <FaLinkedin /> LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/rebecarodriguezd"
              target="_blank"
            >
              linkedin.com/in/rebecarodriguezd
            </a>
          </li>
          <li>
            {" "}
            <FaGithub /> GitHub:{" "}
            <a href="https://github.com/rebecaRodriguez01" target="_blank">
              github.com/rebecaRodriguez01
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
export default Contact;
