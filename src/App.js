import React, { useState, useEffect } from 'react';
import ParticlesBackground from "./assets/ParticlesBackground";
import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/contact";


function App() {

  const [showScrollTopButton, setShowScrollTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTopButton(true);
      } else {
        setShowScrollTopButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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

      {showScrollTopButton && (
        <button onClick={scrollToTop} className="scroll-to-top">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" fill="currentColor" className="bi bi-arrow-up" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V3.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 3.707V11.5a.5.5 0 0 0 .5.5z"/>
          </svg>
        </button>
      )}

    </div>
  );
}

export default App;
