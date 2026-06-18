import React from "react";
import "../styles/Hero.css";
import miFoto from "../assets/foto.png";

function Hero() {
  return (
    <section id="hero" className="fade-in">
      <div className="hero-content">
        <h1>Hola! Soy Rebeca Rodríguez</h1>
        <p>Software engineer | Backend & Software Architecture</p>
      </div>

      <div className="hero-image">
    <img src={miFoto} alt="Mi foto" />
  </div>
    </section>
  );
}
export default Hero;
