import "../styles/Navbar.css";
import { useState } from "react";

function scrollToSection(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-left">
        <h2 className="logo">Portfolio</h2>

        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li>
            <a onClick={() => scrollToSection("hero")} href="#hero">
              Inicio
            </a>
          </li>
          <li>
            <a onClick={() => scrollToSection("about")} href="#about">
              Sobre mí
            </a>
          </li>
          <li>
            <a onClick={() => scrollToSection("skills")} href="#skills">
              Skills
            </a>
          </li>
          <li>
            <a onClick={() => scrollToSection("projects")} href="#projects">
              Proyectos
            </a>
          </li>
          <li>
            <a onClick={() => scrollToSection("contact")} href="#contact">
              Contactame
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
