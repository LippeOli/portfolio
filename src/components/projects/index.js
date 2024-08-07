import React from 'react';
import Urbverde from '../../assets/fotos/urbVerde.png';
import './styles.css';

const projectsData = [
  {
    title: "Sistema de chamados",
    description: "Projeto fullstack desenvolvido utilizando React e Firebase. O sistema é projetado para atender as necessidades da empresa ao gerenciar chamados de clientes, com suporte para diversos tipos de chamados, como suporte técnico, visita técnica e questões financeiras.",
    image: Urbverde,
    technologies: ["JavaScript", "React", "Firebase"],
    projectLink: "#",
    repoLink: "#",
  },
  {
    title: "Secure Auth",
    description: "Projeto full stack destinado a fornecer funcionalidades de autenticação de usuário. Permite que os usuários se autentiquem via e-mail e senha, bem como através de contas do Google e do GitHub. Além disso, os usuários podem selecionar um avatar ou carregar uma foto para usar como avatar.",
    image: "/path/to/your/image.png", // Altere o caminho da imagem conforme necessário
    technologies: ["JavaScript", "React", "Firebase"],
    projectLink: "#",
    repoLink: "#",
  },
];

const Projects = () => {
  return (
    <section className="projects">
      <h2>Portfólio</h2>
      <div className="projects-container">
        {projectsData.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image">
              <img src={project.image} alt={`${project.title} screenshot`} />
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="technologies">
                {project.technologies.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.projectLink} className="btn">Ver Projeto</a>
                <a href={project.repoLink} className="btn">Repositório</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
