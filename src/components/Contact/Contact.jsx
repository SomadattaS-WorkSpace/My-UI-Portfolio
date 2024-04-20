import React from "react";
import "../Contact/Contact.css";

import { getImageUrl } from "../../utils";

export const Contact = () => {
    return (
        <footer className="footer" id="contact">
            <div className="footerText">
                <h2>Contact</h2>
                <p>Feel free to Reach Out!</p>
            </div>
            <ul className="footerLinks">
                <li className="footerLink" >
                    <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" /> 
                    <a href="mailto:somadattasahu97@gmail.com">somadattasahu97@gmail.com</a>
                </li>
                <li className="footerLink">
                    <img src={getImageUrl("contact/linkedinIcon.png")} alt="Linkedin icon" /> 
                    <a href="https://www.linkedin.com/in/somadatta-sahu-7b30a71a0/">linkedin.com/somadatta</a>
                </li>
                <li className="footerLink">
                    <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" /> 
                    <a href="https://github.com/SomadattaS-WorkSpace">github.com/somadatta</a>
                </li>
            </ul>
        </footer>
    )
}