
import React  from 'react';
import './Navbar.css';

function Navbar(){

  return(
    <nav>
    <input type="checkbox" id="check"/>
    <label for="check" className="checkbtn">
    <img src={require('../../images/menu_burger.png')} className="fas fa-bars btn-burger" alt="burger" />
    </label>
    {/* <label className="logo">SJHF</label> */}
      <ul className="uli">
        <li><a className="" href="#about">ABOUT</a></li>
        <li><a href="#project">PROJECTS</a></li>
        <li><a href="#contact">CONTACT</a></li>
      </ul>
    </nav>
) 
};

export default Navbar;
