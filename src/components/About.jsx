import "../styles/About.css";
import avatarSaludando from "../assets/avatarSaludando.png";

function About() {
  return (
    <section id="about" className="fade-in section-with-avatar">
      <div className="section-avatar">
        <img src={avatarSaludando} alt="Avatar Saludando" />
      </div>
      <div className="section-text">
        <h2>Sobre mí</h2>
        <p>
          Soy ingeniera informática con experiencia en desarrollo backend,
          especializada en Java. Actualmente estoy enfocada en reforzar mis
          habilidades en desarrollo web y arquitectura de software, construyendo
          proyectos propios mientras busco mi primera oportunidad en el sector.
          Me interesa crear soluciones escalables y bien estructuradas,
          aplicando buenas prácticas de arquitectura de software.
        </p>
      </div>
    </section>
  );
}
export default About;
