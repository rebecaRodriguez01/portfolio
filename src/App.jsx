import "./App.css";
import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Prpojects";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  const [theme, setTheme] = useState("dark");

  // 🔥 toggle tema
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.body.className = newTheme;
  };

  // 🔥 aplicar tema al cargar
  useEffect(() => {
    document.body.className = theme;
  }, []);
  useEffect(() => {
  
    const elements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <div>
   <div className="theme-switch" onClick={toggleTheme}>
 
<div className="theme-switch" onClick={toggleTheme}>
  <div className={`switch-thumb ${theme}`}>
    {theme === "dark" ? (
      <FaMoon className="icon moon" />
    ) : (
      <FaSun className="icon sun" />
    )}
  </div>
</div>
</div>

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
