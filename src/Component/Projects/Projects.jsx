import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Projects.scss';


function Projects(){
  const [projects, setProjects] = useState({});
  useEffect(() => {
      axios.get('https://backend-portfolio-shfiestas.herokuapp.com/portfolio')
      .then(
          res => setProjects(res.data)
      )}, [setProjects])


  return(
    <section id="project" className="container-projects">
    <h2 className="subtitle">Proyectos</h2>
 
      <div className="main-card">
        {projects.length && projects.map((project, index) => 
          <div className="card-project">

            <div className="card-image gallery">
            <a href={project.image} className="a-img" data-lightbox="roadtrip" data-title={project.title}><img src={project.image} className="img-project" alt={project.title}></img></a>             
            </div>
          
            <div className="card-information">
              <div className="div-information"> 
                <h1 className="title-project">{project.title}</h1>
                {project.name.length ? <h2>"{project.name}"</h2> : ""}
                <p className="p-information">{project.description}</p>
                <p className="p-information">{project.technology}</p>
              </div>
              <div>
              {project.linkWeb.length 
                ?
                  <button className="btn-project"><a target="_blank"  href={project.linkWeb}>DEMO</a></button>
                :
                  "" 
              }
                <button className="btn-project"><a target="_blank"  href={project.linkRepo}>CÓDIGO</a></button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
  };

  export default Projects;