import React  from 'react';

function Navbar(){
  return(
    <nav className="d-flex">
      <a className="a-logo" href="#"><img src={require('../images/logo.png')} className="logo" alt="logo" /></a>
      <ul className="nav-uli">
        <li className="nav-item"><a href="#about">SOBRE MI</a></li>
        <li className="nav-item"><a href="#project">PROYECTOS</a></li>
        <li className="nav-item"><a href="#contact">CONTACTO</a></li>
      </ul>
    </nav>
  ) 
};

export default Navbar;
