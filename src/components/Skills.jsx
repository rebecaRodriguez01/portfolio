import "../styles/Skills.css";
import avatarOrdenador from "../assets/avatarOrdenador.png";
import javaIcon from "../assets/javaIcon.png"
import reactIcon from "../assets/React-icon.png"
import postgreIcon from "../assets/Logo_PostgreSQL.png"
import viteIcon from "../assets/vite.png"

function Skills() {
  return (
    <section className="section-with-avatar fade-in" id="skills">
      <div className="section-text">
        <h2>Mis Skills</h2>
        <p>
          Tecnologías y herramientas que manejo para crear aplicaciones
          profesionales:
        </p>

        <div className="skills-grid">
          <div className="skill-card">
            <div className="skill-icon"><img src={javaIcon} alt="Icono de Java" /></div>
            <span className="skill-name">Java</span>
            <div className="skill-bar">
              <div
                className="skill-progress"
                style={{ width: "90%", background: "#c77dff" }}
              ></div>
            </div>
          </div>

          <div className="skill-card">
          <div className="skill-icon"><img src={reactIcon} alt="Icono de React" /></div>
            <span className="skill-name">React.js</span>
            <div className="skill-bar">
              <div
                className="skill-progress"
                style={{ width: "85%", background: "#9d4edd" }}
              ></div>
            </div>
          </div>

          <div className="skill-card">
          <div className="skill-icon"><img src={postgreIcon} alt="Icono de Postgre" /></div>
            <span className="skill-name">PostgreSQL</span>
            <div className="skill-bar">
              <div
                className="skill-progress"
                style={{ width: "80%", background: "#7b2cbf" }}
              ></div>
            </div>
          </div>

          <div className="skill-card">
          <div className="skill-icon"><img src={viteIcon} alt="Icono de Vite" /></div>
            <span className="skill-name">Vite</span>
            <div className="skill-bar">
              <div
                className="skill-progress"
                style={{ width: "70%", background: "#5a189a" }}
              ></div>
            </div>
          </div>
          
        </div>
      </div>
      <div className="section-avatar">
        <img src={avatarOrdenador} alt="Avatar con ordenador" />
      </div>
    </section>
  );
}
export default Skills;
