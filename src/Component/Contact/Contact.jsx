import React  from 'react';
import './Contact.scss';

function Contact(){
  return(
    <section id="contact" className="container-contact">
        <p className="subtitle-two">¿Listo para hablar sobre trabajar juntos?</p>
        <h1 className="title-contact">CONTÁCTAME</h1>
        <div className="networking">

        <div className="btn-network">
          <a className="a-network" target="_blank"  href="mailto:shfiestas@gmail.com">
              <div className="div-icon-network">
               <img src={require('../../images/icon-gmail.png')} alt="icon-gmail" className="icon-network"></img>
              </div>
              <p className="p-network">Email Me</p>
          </a>
        </div>
      
        <div className="btn-network">
          <a className="a-network" target="_blank"  href="https://www.linkedin.com/in/sandrahuam%C3%A1nfiestas/">
              <div className="div-icon-network">
                <img src={require('../../images/icon-linkendin.png')} alt="icon-linkendIn" className="icon-network"></img>
              </div>
              <p className="p-network">LinkendIn</p>
          </a>
        </div>

        <div className="btn-network">
         <a className="a-network" target="_blank"  href="https://github.com/sandrahfiestas">
            <div className="div-icon-network">
              <img src={require('../../images/icon_github.png')} alt="icon-github" className="icon-network"></img>
            </div>
            <p className="p-network">GitHub</p>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact;