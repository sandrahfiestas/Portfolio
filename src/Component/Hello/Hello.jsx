import React from 'react';
import ParticlesEffect from './Particles';
import Typical from 'react-typical';
import './Hello.scss';

function Hello() {

  return (
    <div className="div-hello">
      <ParticlesEffect />    
      
        <div className="div-name">
        <h4 className="hi">HOLA, soy</h4>
        <h1 className="name">Sandra Huamán Fiestas</h1>
        <p className="line"></p>
          <h3 className="texts">
            <Typical
              loop={Infinity}
              wrapper="b"
              steps={[
                  'Front-end Developer',
                  500,
                  // 'Professional in Computing and Informatics',
                  // 500,
              ]}
            />   
          </h3>
      </div>

        <button className="btn-down">
        <a className="a-about" href="#about">
          <i class="fas fa-angle-double-down"></i>
        </a>
        </button>

    </div>
  );
};

export default Hello;