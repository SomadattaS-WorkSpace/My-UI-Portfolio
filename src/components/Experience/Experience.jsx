import React from "react";
import "../Experience/Experience.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
    return (
        <section id="experience" className="expContainer">
            <h2 className="expTitle">Experience</h2>
            <div className="expContent">
                <div className="skills">{
                    skills.map((skill, id) => {
                        return (
                            <div key={id} className="skill">
                                <div className="skillImageContainer">
                                    <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                                </div>
                                <p>{skill.title}</p>
                            </div>
                        );
                    })}
                </div>
                <ul className="history">
                    {
                        history.map((historyItem, id)=>{
                            return (
                                <li key={id} className="historyItem">
                                    <img src={getImageUrl(historyItem.imageSrc)} alt={`${historyItem.organisation} Logo`} />
                                    <div className="historyItemDetails">
                                        <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                                        <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                                        <ul>{historyItem.experiences.map((experience, id) => {
                                            return(
                                                <li key={id}>{experience}</li>
                                            );
                                        })}</ul>
                                    </div>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        </section>
    )
}