import React from "react";
import projects from "../../data/projects.json"
import "../Projects/Projects.css";
import { ProjectCard } from "./ProjectCard";

export const Project = () =>{
    return(
        <section id="projects" className="projectContainer">
            <h2 className="projectTitle">Projects</h2>
            <div className="projects">
                {
                    projects.map((project, id) => {
                        return(
                            <ProjectCard key={id} project={project}/>
                        )
                    })
                }
            </div>
        </section>
    )
}