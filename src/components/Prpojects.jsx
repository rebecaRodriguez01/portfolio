import "../styles/Projects.css";

function Projects(){
    const projects = [
        {
            title: "Sistema de gestión IT",
            description: "Aplicación para gestionar intervenciones en un entorno IT",
        },
        {
            title : "API REST con Spring",
            description :"API backend desarrollada con Java y Spring Boot",
        },
    ]
    return(
        <section id="projects" className="fade-in">
            <h2>Proyectos</h2>
            <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
        </section>

    );

}
export default Projects;
