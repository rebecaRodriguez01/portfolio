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
          Ingeniera informática con experiencia en desarrollo backend utilizando
          Java, trabajando con APIs REST, bases de datos PostgreSQL y
          arquitecturas por capas. Actualmente estoy reforzando mis habilidades
          en desarrollo frontend con React y profundizando en arquitectura de
          software, construyendo proyectos propios para consolidar conocimientos
          y buenas prácticas de desarrollo. Busco mi primera oportunidad
          profesional como desarrolladora backend o software engineer junior,
          donde aportar una base técnica sólida y seguir creciendo en entornos
          de desarrollo reales.
        </p>
      </div>
    </section>
  );
}
export default About;
