import React from "react";
import ParticlesBackground from "./assets/ParticlesBackground";
import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/contact";


function App() {
  return (
    <div className="container">

      <ParticlesBackground/>
      <div className="panel">
        <Navbar />
      </div>
      
      <div id="home" className="panel">
        <Home />
      </div>
      
      <div id="about" className="panel">
        <About />
      </div>
      
      <div id="skills" className="panel">
        <Skills />
      </div>
      
      <div id="projects" className="panel">
        <Projects />
      </div>
      
      <div id="contact" className="panel">
        <Contact />
      </div>
    </div>
  );
}


export default App;
