
import React  from 'react';
import './Navbar.css';
import menuBurger from '../../images/menu_burger.png';

function Navbar(){

  return(
    <nav>
    <input type="checkbox" id="check"/>
    <label for="check" className="checkbtn">
    <img src={menuBurger} className="fas fa-bars btn-burger" alt="burger" />
    </label>
    {/* <label className="logo">SJHF</label> */}
      <ul>
        <li><a className="active" href="#" className="active">Acerca de mi</a></li>
        <li><a href="#">Proyectos</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>
    </nav>
) 
};

export default Navbar;
