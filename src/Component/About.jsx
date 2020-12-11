import React from 'react';

function About(){
    return(
        <section>
            <div id="about" className="div-about-me">
              <div className="div-photo">
                <img className="photo" alt="photo" src={require('../images/photo.png')}></img>
              </div>
              <div className="div-about-text">        
               <h1 className="title-about-me">ACERCA DE MI</h1>
               <p className="p-about-me">
                Soy Front-end Developer y Profesional Técnico en Computación e Informática.
                Autodidacta entusiasta, con facilidad para trabajar en equipo
                y siempre dispuesta a recibir feedback.
                Me encanta aprender sobre nuevas tecnologías,
                saber qué problemas están resolviendo
                y cómo puedo usarlas para crear productos mejores y escalables.
                Disfruto de las actividades familiares y los juegos de mesa son
                la forma más divertida de pasar mi tiempo libre.
                </p>
               <button className="base_buttons"><a className="cover-all" target="_blank"  href="https://drive.google.com/file/d/1MwxxzKvFkpwNt3mwzFtsM5X7sanIpwMk/view?usp=sharing">Ver CV</a></button>
              </div>
            </div>          
        </section>
    )
};

export default About;
