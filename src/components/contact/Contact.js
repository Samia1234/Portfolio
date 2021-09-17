import React from 'react';
import Title from '../Titel/Title';
import './contact.css'
function Contact(props) {
    return (
        <div className="cent text-center">
            <Title title="contact"/>
            <form method="" action="">
                <div className="div-input">
                     <label for="first-name">Name</label>
                     <input type="text" id="first-name" placeholder="Enter your first name here"/>    
                </div>
                <div className="div-input">
                     <label for="email">Email</label>
                     <input type="email" id="email" placeholder="Enter your Email here"/>    
                </div>
                <div className="div-input">
                     <label for="message">Message</label>
                     <textarea placeholder="enter your message" rows="3"></textarea>
                </div>
              
                     <button className="bttn mt-3">Send</button>
               
            </form>
        </div>
    );
}

export default Contact;