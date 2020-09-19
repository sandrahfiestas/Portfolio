import React from 'react';
import Particles from 'react-particles-js';
import './Particles.css';

function ParticlesEffect(){

  return(
    <div className="div-particles">
      <Particles  
          height={"90vh"}
          params={{
          particles: {
          color: '#fff', // Color vertice
          color_random: false,
          // shape: 'circle', // "circle", "edge" or "triangle" 
          shape: {
            type: "image",
            stroke: {
              width: 0,
              color: "#ffffff"
            },
            polygon: {
              nb_sides: 5
            },
            image: [
                {
                src: require('../../images/icon_html.png'),
                width: 100,
                height: 100
              },
              {
                src: require('../../images/icon_css.png'),
                width: 100,
                height: 100
              },
              {
                src: require('../../images/icon_sass.png'),
                width: 100,
                height: 100
              },
              {
                src: require('../../images/icon_js.png'),
                width: 100,
                height: 100
              },
              {
                src: require('../../images/icon_react.png'),
                width: 100,
                height: 100
              },
              {
                src: require('../../images/icon_angular.png'),
                width: 100,
                height: 100
              },
              {
                src: require('../../images/icon_firebase.png'),
                width: 100,
                height: 100
              },
              {
                src: require('../../images/icon_git.png'),
                width: 100,
                height: 100
              },
              {
                src: require('../../images/icon_jest.png'),
                width: 100,
                height: 100
              },
              {
                src: require('../../images/icon_heroku.png'),
                width: 100,
                height: 100
              }
            ]
          },
          opacity: {
            opacity: 1, // Opacidad vertice
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0,
              sync: false
            }
          },
          size: {
            value: 20,
            random: false,
          },
          nb: 180,
          line_linked: {
            enable_auto: true,
            distance: 120,
            color: '#01a9db', // Color arista
            opacity: 1, // Opacidad arista
            width: 0.6,
            condensed_mode: {
              enable: false,
              rotateX: 600,
              rotateY: 600
            }
          },
          anim: {
            enable: true,
            speed: 0.5 // Velocidad en que se mueven las aristas
          }
        },
        interactivity: {
          enable: true,
          mouse: {
            distance: 3
          },
          detect_on: 'canvas', // "canvas" or "window"
          mode: 'grab', // "grab" of false
          line_linked: {
            opacity: .5
          },
          events: {
            onclick: {
              enable: true,
              mode: 'push', // "push" or "remove"
              nb: 4
            },
            onresize: {
              enable: true,
              mode: 'bounce', // "out" or "bounce"
              density_auto: false,
              density_area: 800 // nb_particles = particles.nb * (canvas width *  canvas height / 1000) / density_area
            }
          }
        },
          retina_detect: true
        }}
      />
    </div>
  );               
}
export default ParticlesEffect;
