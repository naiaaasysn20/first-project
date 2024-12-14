import React from 'react';
import { Link } from 'react-router-dom';



const Footer = () => {
    return (
    
        <div id="div-footer" className="clearfix">
    <div className='container'>
        <div id="details-container">
            <a href="index.html" >PresenceLink</a>
            <h2>About us</h2>
        </div>

        <div id="contacts-container">
            <h1>Contact us</h1>
            <nav>
                <li>
                    <a href="https://www.facebook.com/lotnmaininc" title="Facebook" target="_blank">
                        <i className="fa-brands fa-facebook"></i>
                    </a>
                </li>
                <li>
                    <a href="https://www.youtube.com/@lotnchurchweb/videos" title="Youtube" target="_blank">
                        <i className="fa-brands fa-youtube"></i>
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/lotnnamerica/?hl=en" title="Instagram" target="_blank">
                        <i className="fa-brands fa-square-instagram"></i>
                    </a>
                </li>
            </nav>
        </div>

        <div id="legal-information"> All rights reserved <i className="fa-regular fa-copyright"></i></div>
        </div>
     </div>
    
    )
};

export default Footer;