import React from "react";
import "../styles/Hero.css";
import miFoto from "../assets/foto.png";
import { FaDownload } from "react-icons/fa";
import { downloadFile } from "../utils/downloadFile";
import { scrollToSection } from "../utils/scrollToSection";
import cv from "../assets/RebecaRodríguez.pdf";

function Hero() {
  return (
    <section id="hero" className="fade-in">
      <div className="hero-content">
        <h1>Hola! Soy Rebeca Rodríguez</h1>
        <h3>Backend Developer & Software Architecture</h3>

        <div className="hero-buttons">
          <button
            className="btn"
           onClick={() => scrollToSection("projects")} href="#projects"
          >
            Ver proyectos
          </button>
          <button
            className="btn"
            onClick={() => downloadFile(cv, "CV-RebecaRodríguez.pdf")}
          >
            <FaDownload /> Descargar CV
          </button>
        </div>
      </div>

      <div className="hero-image">
        <img src={miFoto} alt="Mi foto" />
      </div>
    </section>
  );
}
export default Hero;
