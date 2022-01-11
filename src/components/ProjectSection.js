import React from "react";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import ProjectCard from "./ProjectCard";

function ProjectSection() {
    const projects = [
    {
        id: 1,
        title: 'Project 1',
        imageUrl: "https://d2slcw3kip6qmk.cloudfront.net/marketing/blog/2017Q2/project-planning-header@2x.png",
        description: 'Project description 1',
    },
    {
        id: 2,
        title: 'Project 2',
        imageUrl: {project2},
        description: 'Project description 2'
    },
    {
        id: 3,
        title: 'Project 3',
        imageUrl: {project3},
        description: 'Project description 3'
    },
   ]; 
    return (
        <div className="container py-4 text-center">
        <h1 className="font-weight-light">
            My<span className="text-success"> Projects</span>
        </h1>
        <div className="lead pb-4">I build Products. Just like this website</div>
        <div className="row my-3">
            {
                projects.map((project) => 
                (
                    <div key={project.id} className="col-12 col-md-4 my-2">
                        <ProjectCard 
                            title={project.title} 
                            description={project.description} 
                            imageUrl={project.imageUrl}
                        />
                    </div>
                ))
            }
        </div>
        <div className="my-5">
            <a href="/" className="text-dark text-right">
                <h5>
                    See my projects 
                    <i className="fas fa-arrow-circle-right align-middle"></i>
                </h5>
            </a>
        </div>
        </div>
    );
}

export default ProjectSection;