import React  from 'react';
import './Skills.css';

function Skills(){

  return(
      <section className="container-skills">
        <h2 className="subtitle">Skills</h2>
        <div className="skills">
        <img src={require('../../images/icon_html.png')} alt="icon_html" className="skills-icons"></img>
        <img src={require('../../images/icon_css.png')} alt="icon_css" className="skills-icons"></img>
        <img src={require('../../images/icon_javascript.png')} alt="icon_javascript" className="skills-icons"></img>
        <img src={require('../../images/icon_sass.png')} alt="icon_sass" className="skills-icons"></img>
        <img src={require('../../images/icon_reactjs.png')} alt="icon_reactjs" className="skills-icons"></img>
        <img src={require('../../images/icon_angular.png')} alt="icon_angular" className="skills-icons"></img>
        <img src={require('../../images/icon_firebase.png')} alt="icon_firebase" className="skills-icons"></img>
        <img src={require('../../images/icon_git.png')} alt="icon_git" className="skills-icons"></img>
        <img src={require('../../images/icon_nodejs.png')} alt="icon_nodejs" className="skills-icons"></img>
        <img src={require('../../images/icon_jest.png')} alt="icon_jest" className="skills-icons"></img>
        <img src={require('../../images/icon_github.png')} alt="icon_github" className="skills-icons"></img>
        <img src={require('../../images/icon_heroku.png')} alt="icon_heroku" className="skills-icons"></img>
        <img src={require('../../images/icon_figma.png')} alt="icon_figma" className="skills-icons"></img>
        <img src={require('../../images/icon_trello.png')} alt="icon_trello" className="skills-icons"></img>
        </div>

    </section>
  ) 
};

export default Skills;

            {/* <div className="subtitle">
                <h2>Skills</h2>
                <ul className="about-skills">
                    {data.skills && data.skills.map((skill, index) =>
                        <p className="skill">{skill}</p>
                    )}
                </ul>
            </div> */}
