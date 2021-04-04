import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

function ProjectsCarousel(){
  const [projects, setProjects] = useState({});

  useEffect(() => {
    fetch('../../portfolio.json')
    .then((response) => response.json())
    .then((datos) => {
      setProjects(datos);
    });
  });

  return(
  <section id="project" className="section-projects">
    <div className="container-projects">
    <h2 className="subtitle">Proyectos</h2>
      <Carousel>
      {projects.length && projects.map((project, index) => 
        <Carousel.Item>
        <div className="card-project" key={project.title}>
            <div className="div-image">
            <a href={project.image} className="a-img" data-lightbox="roadtrip" data-title={project.title}><img src={project.image} className="image-project" alt={project.title}></img></a>             
            </div>
          
            <div className="div-detail">
              <div> 
                <h1 className="title-project">{project.title}</h1>
                {project.name.length ? <h2 className="sub-title">"{project.name}"</h2> : ""}
                <p className="p-information">{project.description}</p>
                <p className="p-information">{project.technology}</p>
              </div>
              <div className="div-btn">
                 {project.linkWeb.length 
                    ?
                    <button className="base_buttons"><a target="_blank"  href={project.linkWeb}>DEMO</a></button>
                    :
                    "" 
                 }
                 <button className="base_buttons"><a target="_blank"  href={project.linkRepo}>CÓDIGO</a></button>
              </div>
            </div>
          </div>
        </Carousel.Item>
      )}
      </Carousel>
      </div>
    </section>

  );
}

export default ProjectsCarousel;
