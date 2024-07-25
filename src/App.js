import React from "react";
import ParticlesBackground from "./assets/ParticlesBackground";
import Home from "./components/home";
import About from "./components/about";
import Skills from "./components/skills";

function App() {
  return (
   
   <div className="App">
      
      <ParticlesBackground />

      <div className="content">
        <Home />
        <About />
        <Skills />
      </div>
      
    </div>
  
  );
}

export default App;
