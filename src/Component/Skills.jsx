import React  from 'react';

function Skills(){
  return(
      <section className="container-skills">
        <h2 className="subtitle">Skills</h2>
        <div className="skills">
          <div className="skills-details">
            <img src={require('../images/icon_html.png')} alt="icon_html" className="skills-icons"></img>
            <p>HTML</p>
          </div>
          <div className="skills-details">
            <img src={require('../images/icon_css.png')} alt="icon_css" className="skills-icons"></img>
            <p>CSS</p>
          </div>
          <div className="skills-details">
            <img src={require('../images/icon_sass.png')} alt="icon_javascript" className="skills-icons"></img>
            <p>SASS</p>
          </div>
          <div className="skills-details">
            <img src={require('../images/icon_bootstrap.png')} alt="icon_bootstrap" className="skills-icons"></img>
            <p>Bootstrap</p>
          </div>
          <div className="skills-details">
            <img src={require('../images/icon_js.png')} alt="icon_javascript" className="skills-icons"></img>
            <p>JavaScript</p>
          </div>
          <div className="skills-details">
            <img src={require('../images/icon_react.png')} alt="icon_reactjs" className="skills-icons"></img>
            <p>React</p>
          </div>
          <div className="skills-details">
            <img src={require('../images/icon_firebase.png')} alt="icon_firebase" className="skills-icons"></img>
            <p>Firebase</p>
          </div>
          <div className="skills-details">
            <img src={require('../images/icon_git.png')} alt="icon_git" className="skills-icons"></img>
            <p>Git</p>
          </div>
          <div className="skills-details">
            <img src={require('../images/icon_nodejs.png')} alt="icon_nodejs" className="skills-icons"></img>
            <p>Node.js</p>
          </div>
          <div className="skills-details">
            <img src={require('../images/icon_jest.png')} alt="icon_jest" className="skills-icons"></img>
            <p>Jest</p>
          </div>
          <div className="skills-details">
            <img src={require('../images/icon_github.png')} alt="icon_github" className="skills-icons"></img>
            <p>GitHub</p>
          </div>
          <div className="skills-details">
            <img src={require('../images/icon_vercel.png')} alt="icon_vercel" className="skills-icons"></img>
            <p>Vercel</p>
          </div>
        </div>
    </section>
  ) 
};

export default Skills;

