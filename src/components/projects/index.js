import React from 'react';
import Urbverde from '../../assets/fotos/urbVerde.png';
import ClinicaFO from '../../assets/fotos/ClinicaFO';
import SetCadastro from '../../assets/fotos/Set Cadastro.png';
import './styles.css';

const projectsData = [

  //UrbVerde
  {
    title: "Plataforma UrbVerde",
    description: "Projeto fullstack para desenvolver a plataforma da UrbVerde. Ela foi desenvolvida em VueJS, especializada na geração de mapas para gestão ambiental. O sistema permite o mapeamento de áreas verdes e a análise de dados geoespaciais para planejamento urbano sustentável.",
    image: Urbverde,
    technologies: [
      { name: 'VueJS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg'},
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' }
    ],
    projectLink: "https://urbverde.iau.usp.br/",
    repoLink: "https://github.com/UrbVerde/urbverde-ui",
  },

  //Set Cadastro
  {
    title: "Set Cadastro",
    description: "Projeto backend em Spring Boot Java, voltado para o cadastros de usuário e alocado em um Banco de Dados MySQL. Oferece funcionalidades robustas de autenticação e controle de acesso, ideal para aplicações corporativas.",
    image: SetCadastro,
    technologies: [
  
      { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg'},
      { name: 'Spring Boot', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg'},
      { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'}

    ],
    projectLink: "#",
    repoLink: "https://github.com/LippeOli/Set-Login-Backend",
  },
  //ClinicaFO
  {
    title: "ClinicaFO",
    description: "Desenvolvimento de um site responsivo e moderno para uma clínica odontológica. O site inclui seções para agendamento de consultas, informações sobre tratamentos e perfis dos profissionais, tudo integrado a um sistema de gestão de conteúdo fácil de usar.",
    image: ClinicaFO,
    technologies: [
  
      { name: 'WordPress', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg'},
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'},

    ],
    projectLink: "http://clinicafo.rf.gd/?i=1",
    repoLink: "https://github.com/LippeOli",
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
              <div className="technologies">
                {project.technologies.map((tech, i) => (
                  <div key={i} className="tech-icon">
                    <img src={tech.icon} alt={tech.name} />
                  </div>
                ))}
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-links">
                <a href={project.projectLink} className="btn">Ver Projeto</a>
                <a href={project.repoLink} className="btn btn-repo">Repositório</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};


export default Projects;
