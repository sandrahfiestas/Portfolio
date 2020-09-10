import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Projects.css';


function Projects(){
  const [projects, setProjects] = useState({});
  useEffect(() => {
      axios.get('https://backend-portfolio-shfiestas.herokuapp.com/portfolio')
      .then(
          res => setProjects(res.data)
      )}, [setProjects])

              {/* <div className="subtitle">
                <h2>Skills</h2>
                <ul className="about-skills">
                    {data.skills && data.skills.map((skill, index) =>
                        <p className="skill">{skill}</p>
                    )}
                </ul>
            </div> */}

  return(
    <section id="project" className="container-projects">
    <h2 className="subtitle">Proyectos</h2>
 
      <div className="main-card">
        {projects.length && projects.map((project, index) => 
          <div className="card-project">

            <div className="card-image">
              <img src={project.image} className="img-project" alt={project.title}></img>
            </div>
          
            <div className="card-information">
              <div className="div-information">
                <h1>{project.title}</h1>
                <h3>{project.name}</h3>
                <p className="p-information">{project.description}</p>
                <p className="p-information">{project.technology}</p>
              </div>
              <div>
                <button className="btn-project"><a target="_blank"  href={project.linkWeb}>DEMO</a></button>
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