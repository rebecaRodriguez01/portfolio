import "../styles/Contact.css";
import avatarMovil from "../assets/avatarMovil.png";

function Contact() {
  return (
    <section className="section-with-avatar fade-in" id="contact">
  <div className="section-avatar">
    <img src={avatarMovil} alt="Avatar con movil" />
  </div>

  <div className="section-text">
    <h2>Contáctame</h2>
    <p>
      ¿Quieres hablar sobre un proyecto, colaboración o una oportunidad laboral? 
      Puedes escribirme aquí:
    </p>

    <ul className="contact-list">
      <li>Email: <a href="mailto:tuemail@ejemplo.com">tuemail@ejemplo.com</a></li>
      <li>LinkedIn: <a href="https://www.linkedin.com/in/tuusuario" target="_blank">linkedin.com/in/tuusuario</a></li>
      <li>GitHub: <a href="https://github.com/tuusuario" target="_blank">github.com/tuusuario</a></li>
    </ul>
  </div>
</section>
  );
}
export default Contact;
