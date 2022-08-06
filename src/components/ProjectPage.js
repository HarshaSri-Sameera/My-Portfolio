import React from 'react';
import { Consumer } from "../context";
import ReactMarkdown from "react-markdown";

function ProjectPage(props) {
  return (
    <Consumer>
      {(value) => {
        const { projects } = value;
        const id = props.match.params.id;
        const project = projects.filter((project) => project.id == id)[0];
        const { imageUrl, title, body } = project;
        
        return (
          <div className="container markdown col-12 col-lg-6 py-5 my-5">
            <div className="justify-content-center">
                <img src={imageUrl} alt={title} className="w-100" />
            </div>

            <h1 className="font-weight-light text-center my-5">
                {title}
            </h1>

            <ReactMarkdown>
                {body}
            </ReactMarkdown>
            {/* <h1>Project {props.match.params.id}</h1> */}
          </div>
        );
      }}
    </Consumer>
  );
}

export default ProjectPage;