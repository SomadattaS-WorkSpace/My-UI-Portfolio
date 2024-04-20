import React from "react";
import { getImageUrl } from "../../utils";
import "../About/About.css";

export const About = () => {
    return(
        <section className="aboutContainer" id="about">
            <h2 className="aboutTitle">About</h2>
            <div className="aboutContent">
                <img src={getImageUrl("about/aboutImage.png")} 
                alt="me setting with laptop" className="aboutImg" />
                <ul className="aboutItems">
                    <li className="aboutItem">
                        <img src={getImageUrl("about/cursorIcon.png")} alt="cursor Icon" />
                        <div className="aboutItemText">
                            <h3>Frontend Developer</h3>
                            <p>I'm a frontend developer with experience in building responsive and optmized sites.</p>
                        </div>
                    </li>
                    <li className="aboutItem">
                        <img src={getImageUrl("about/serverIcon.png")} alt="server Icon" />
                        <div className="aboutItemText">
                            <h3>Backend Developer</h3>
                            <p>I have experience developing and optmised back-end systems and APIs.</p>
                        </div>
                    </li>
                    <li className="aboutItem"> 
                        <img src={getImageUrl("about/cursorIcon.png")} alt="UI Icon" />
                        <div className="aboutItemText">
                            <h3>UI Designer</h3>
                            <p>I have designed multiple landing pages and created design systems as well.</p>
                        </div>
                    </li>

                </ul>
            </div>
        </section>
    )
}