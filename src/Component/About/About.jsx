import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './About.css'

function About(){
    const [data, setData] = useState({});
    useEffect(() => {
        axios.get('https://backend-portfolio-shfiestas.herokuapp.com/about')
        .then(
            res => setData(res.data[0])
        )         
    })
    return(
        <div id="about" className="about">
            <div className="div-presentation">
                <div className="detail-presentation">
                    <h2 className="hi-about">Hola, mi nombre es</h2>
                    <h1 className="name-about">{data.name}</h1>
                    <h2 className="profession">{data.profession}</h2>
                </div>
                <div className="div-photo">
                    <img className="about-photo" alt="profile" src={data.photo}></img>
                </div>
            </div>

            <div className="div-about-me">
                <h1 className="title-about-me">ACERCA DE MI</h1>
                <p className="p-about-me">{data.about_me}</p>
                <button className="btn-cv"><a target="_blank"  href="https://drive.google.com/file/d/1MwxxzKvFkpwNt3mwzFtsM5X7sanIpwMk/view?usp=sharing">Ver CV</a></button>
            </div>
        </div>
    )
};

export default About;
