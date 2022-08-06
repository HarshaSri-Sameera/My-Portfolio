import React from "react";
import ProjectCard from "./ProjectCard";
import { Consumer } from "../context";
import { Link } from "react-router-dom";

function ProjectSection() {
    return(
        <Consumer>
            {(value) => {
                const { projects } = value;
                return (
                    <div className="container py-4 text-center">
                    <h1 className="font-weight-light">
                        My<span className="text-successs"> Projects</span>
                    </h1>
                    <div className="lead pb-4">I build Products. Just like this website</div>
                    <div className="row my-3">
                        {
                            projects.slice(0, 3).map((project) => 
                            (
                                <div key={project.id} className="col-12 col-md-4 my-2">
                                    <ProjectCard 
                                    project = {project}
                                        // id={project.id}
                                        // title={project.title} 
                                        // description={project.description} 
                                        // imageUrl={project.imageUrl}
                                    />
                                </div>
                            ))
                        }
                    </div>
                    <div className="my-5">
                        <Link to="/all/projects" className="text-dark text-right">
                            <h5>
                                See my projects
                                <i className="fas fa-arrow-circle-right align-middle"></i>
                            </h5>
                        </Link>
                    </div>
                    </div>
                );
            }}
        </Consumer>
    );
    
//     const projects = [
//     {
//         id: 1,
//         title: 'Project 1',
//         imageUrl: project1,
//         description: 'Project description 1',
//     },
//     {
//         id: 2,
//         title: 'Project 2',
//         imageUrl: project2,
//         description: 'Project description 2'
//     },
//     {
//         id: 3,
//         title: 'Project 3',
//         imageUrl: project3,
//         description: 'Project description 3'
//     },
//    ]; 
}

export default ProjectSection;