import React from 'react';
import './work.css'

import{ works} from './data.js'
import Title from '../Titel/Title';
function Work(props) {
    return (
        <div className="">
            <Title title="Works"/>
        <div className="flex-container">
            {
                works.map((work,index)=>(
                  
                    <div className="work">
                        
                    <img src={process.env.PUBLIC_URL+work.image} className="img-work"/>
                    <h1>{work.title}</h1>
                    <p>{work.description} </p>
                         
                </div>
              
              ))
            }
           
        </div>
        </div>
    );
}

export default Work;