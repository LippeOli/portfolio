import React, { useEffect } from 'react';
import './styles.css';

function Navbar() {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const navbarLinks = document.querySelectorAll('.navbar-link');
      let currentSection = "";

      sections.forEach(section => {
        const sectionTop = section.offsetTop - 60;
        if (window.pageYOffset >= sectionTop) {
          currentSection = section.getAttribute('id');
        }
      });

      navbarLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
          link.classList.add('active');
        }
      });

      const activeLink = document.querySelector('.navbar-link.active');
      const circle = document.querySelector('.navbar .circle');
      if (activeLink && circle) {
        const linkRect = activeLink.getBoundingClientRect();
        const containerRect = document.querySelector('.navbar-container').getBoundingClientRect();
        const leftPosition = linkRect.left - containerRect.left + linkRect.width / 2;
        circle.style.left = `${leftPosition}px`; // Move o círculo para a posição correta
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="circle"></div> {/* Círculo que se move */}
        <ul className="navbar-menu">
          <li className="navbar-item">
            <a href="#home" className="navbar-link">Home</a>
          </li>
          <li className="navbar-item">
            <a href="#about" className="navbar-link">About</a>
          </li>
          <li className="navbar-item">
            <a href="#skills" className="navbar-link">Skills</a>
          </li>
          <li className="navbar-item">
            <a href="#projects" className="navbar-link">Projects</a>
          </li>
          <li className="navbar-item">
            <a href="#contact" className="navbar-link">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
