import React from 'react';
import Title from '../Titel/Title';
import './skills.css'
function Skills(props) {
    return (
        <div className="up">
            <Title title="skills"/>
            <div className="skill">
                     <div className="percent html">
                         <span>HTML</span>
                          <span>90%</span>
                     </div>
                     <div class="progress">
                          <div class="progress-value val-90"></div>
                    
            </div>
                     </div>
                    
            <div className="skill">
                    <div className="percent css"><span>CSS</span>
                                                 <span>80%</span>
                     </div>
                      <div class="progress">
                          <div class="progress-value val-80"></div>
                      </div>
            </div>
            <div className="skill">
                    <div className="percent JAVASCRIPT"><span>JAVASCRIPT</span>
                                                 <span>60%</span>
                     </div>
                      <div class="progress">
                          <div class="progress-value val-60"></div>
                      </div>
            </div>
            <div className="skill">
                    <div className="percent REACT-JS"><span>REACT JS</span>
                                                 <span>70%</span>
                     </div>
                      <div class="progress">
                          <div class="progress-value val-70"></div>
                      </div>
            </div>
            <div className="skill">
                    <div className="percent NODEJS"><span>NODE JS</span>
                                                 <span>50%</span>
                     </div>
                      <div class="progress">
                          <div class="progress-value val-50"></div>
                      </div>
            </div>
            
            
        </div>
    );
}

export default Skills;