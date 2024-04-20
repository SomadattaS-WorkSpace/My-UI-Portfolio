import React from "react";
import { getImageUrl } from "../../utils";
import "../Projects/ProjectCard.css";

export const ProjectCard = ( {project : {title, imageSrc, description, skills, demo, source}} ) => {

    return (
            <div className="cardContainer">
                <img src={getImageUrl(imageSrc)} className="cardImg" alt={title} />
                <h3 className="cardTitle">{title}</h3>
                <p className="cardDescription" >{description}</p>
                <ul className="cardSkills">{
                    skills.map((skill, id) => {
                        return (
                            <li key={id} className="cardSkill">{skill}</li>
                        )
                    })
                }</ul>
                <div className="cardLinks">
                    <a href={demo} className="cardLink">Demo</a>
                    <a href={source} className="cardLink">Source</a>
                </div>
            </div>
    )
}