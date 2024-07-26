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
   
   <div className="App">
      
      <ParticlesBackground />

      <div className="content">
       
       <div className="section">
         <Navbar />
       </div>

        <div id="home" className="section">
          <Home/>
        </div>

        <div id="about" className="section">
          <About/>
        </div>

        <div id="skills" className="section">
          <Skills/>
        </div>

        <div id="contact" className="section">
          <Contact/>
        </div>
      </div>
      
    </div>
  
  );
}

export default App;
