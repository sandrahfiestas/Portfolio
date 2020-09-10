import React  from 'react';
import './Contact.css';

function Contact(){
  return(
    <section id="contact" className="container-contact">
      <h1 className="title-contact">CONTÁCTAME</h1>
      <div className="networks">
      
        <div className="network-uno">
        <a className="a-contact" target="_blank"  href="mailto:shfiestas@gmail.com">
            <img src={require('../../images/icon-gmail.png')} alt="icon-gmail" className="icon-network-uno"></img>
            <p className="p-network">Email Me</p>
        </a>
        </div>
      

        <div className="network-dos">
        <a className="a-contact" target="_blank"  href="https://www.linkedin.com/in/sandrahuam%C3%A1nfiestas/">
          <img src={require('../../images/icon-linkendin.png')} alt="icon-linkendIn" className="icon-network-dos"></img>
          <p className="p-network">LinkendIn</p>
        </a>
        </div>

        <div className="network-tres">
        <a className="a-contact" target="_blank"  href="https://github.com/sandrahfiestas">
          <img src={require('../../images/icon_github.png')} alt="icon-github" className="icon-network-tres"></img>
          <p className="p-network">GitHub</p>
        </a>
        </div>
      </div>
    </section>
    
  )
}

export default Contact;