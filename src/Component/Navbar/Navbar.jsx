import React  from 'react';
import './Navbar.scss';

function Navbar(){
  return(
    <nav>
      <a className="a-logo" href="#"><img src={require('../../images/logo.png')} className="logo" alt="logo" /></a>
      <ul className="uli">
        <li><a href="#about">SOBRE MI</a></li>
        <li><a href="#project">PROYECTOS</a></li>
        <li><a href="#contact">CONTACTO</a></li>
      </ul>
    </nav>
  ) 
};

export default Navbar;
