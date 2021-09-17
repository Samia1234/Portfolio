import React from 'react';
import './footer.css'
import{AiFillFacebook,AiFillTwitterCircle,AiFillLinkedin,AiFillInstagram} from 'react-icons/ai'

function Footer(props) {
    return (
        <div className="icons">
            
            <div><AiFillFacebook/></div>
            <div><AiFillInstagram/></div>
            <div><AiFillLinkedin/></div>
            <div><AiFillTwitterCircle/></div>
         
        </div>
    );
}

export default Footer;