import React from 'react';
import Title from '../Titel/Title';
import './about.css'
function About(props) {
    return (
        <div className="">
          <Title title="About Me"/>
          <div className="about-right">
            
     
           
            <div className="about_para">
              <p> it is my pleasure to come to my gallery, hope you find what you want and i will be glad to contact you for more information(: </p>
              <p>i am a junior front end devloper ,i have master deploma in IT,I love the web field and my goal is to become one of the best devlopers in the world,this why i devlop myself daily and focus very well on the quality of the work i do because it represents my personal image </p>
            </div>
            <div className="about_btn">
              <button  type="button"className="bttn bttn_pink">resume</button>
              <button  type="button"className="bttn bttn_white">projects</button>
            </div>
          </div>
         
        </div>
    );
}

export default About;