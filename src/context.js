import React, { Component } from 'react';
import project1 from "./assets/project1.png";
import project2 from "./assets/project2.png";
import project3 from "./assets/project3.png";
import blog1 from "./assets/blog1.png";
import blog2 from "./assets/blog2.png";
import blog3 from "./assets/blog3.png";
import html from "./assets/html.png";
import css from "./assets/css.png";
import js from "./assets/js.png";
import bootstrap from "./assets/bootstrap.png";
import python from "./assets/python.png";
import flask from "./assets/flask.png";
import react from "./assets/react.png";
import java from "./assets/java.png";
import axios from 'axios'; // To send the http requests to the server

const Context = React.createContext();

export class Provider extends Component {
    // addProjectHandler = (newProject) => {
    //     this.setState({
    //         projects: [newProject, ...this.state.projects],
    //     });
    // };
    handler = (action, newObject) => {
        // eslint-disable-next-line default-case
        switch(action) {
            case "ADD_PROJECT":
                this.setState({
                    projects: [newObject, ...this.state.projects],
                });
                break;
            
            case "ADD_BLOG":
                this.setState({
                    blogs: [newObject, ...this.state.blogs],
                });
                break;
            
            case "ADD_RECOMMENDATION":
                this.setState({
                    Blocks: [newObject, ...this.state.Blocks],
                });
                break;
        }   
    };

    state = {
        // addProjectHandler: this.addProjectHandler,
        handler: this.handler,
        blogs: [
            {
                id: 1,
                title: 'Blog 1',
                imageUrl: blog1,
                description: 'Blog description 1',
                body: 'body 1', 
            },
            {
                id: 2,
                title: 'Blog 2',
                imageUrl: blog2,
                description: 'Blog description 2',
                body: 'body 2', 
            },
            {
                id: 3,
                title: 'Blog 3',
                imageUrl: blog3,
                description: 'Blog description 3',
                body: 'body 3', 
            },
           ],
        Blocks: [
            {
                id: 1,
                name: 'Random guy 1',
                company: 'ABC Company',
                designation: 'CEO',
                recommendation: 'She is a a good girl',
            },
            {
                id: 2,
                name: 'Random guy 2',
                company: 'XYZ company',
                designation: 'Director',
                recommendation: 'She is hardworking and an excellent developer',
            },
            {
                id: 3,
                name: 'Random guy 3',
                company: 'DEF company',
                designation: 'Manager',
                recommendation: 'She is lazy but has good communication skills',
                
            },
            {
                id: 4,
                name: 'Random guy 4',
                company: 'JKL company',
                designation: 'SDE',
                recommendation: 'She gets things done quickly!',
            },
        ],
        skills: [
            {
                id:1,
                name: "HTML5",
                imageUrl: html,
                starTotal: 3,
                starActive: 2,
            },
            {
                id:2,
                name: "CSS3",
                imageUrl: css,
                starTotal: 3,
                starActive: 3,
            },
            {
                id:3,
                name: "JavaScript",
                imageUrl: js,
                starTotal: 3,
                starActive: 2,
            },
            {
                id:4,
                name: "Bootstrap 4",
                imageUrl: bootstrap,
                starTotal: 3,
                starActive: 3,
            },
            {
                id:5,
                name: "Python",
                imageUrl: python,
                starTotal: 3,
                starActive: 3,
            },
            {
                id:6,
                name: "Flask",
                imageUrl: flask,
                starTotal: 3,
                starActive: 2,
            },
            {
                id:7,
                name: "React",
                imageUrl: react,
                starTotal: 3,
                starActive: 2,
            },
            {
                id:8,
                name: "Java",
                imageUrl: java,
                starTotal: 3,
                starActive: 2,
            },
        ],
     projects: [
            {
                id: 1,
                title: 'Project 1',
                imageUrl: project1,
                excerpt: 'Project description 1',
                body: 'body 1',
            },
            {
                id: 2,
                title: 'Project 2',
                imageUrl: project2,
                excerpt: 'Project description 2',
                body: 'body 2',
            },
            {
                id: 3,
                title: 'Project 3',
                imageUrl: project3,
                excerpt: 'Project description 3',
                body: 'body 3',
            },
            {
                id: 4,
                title: 'Project 3',
                imageUrl: project2,
                excerpt: 'Project description 3',
                body: 'body 4',
            },
           ],
    }

    async componentDidMount() {
        const response =  await axios.get("http://127.0.0.1:9000/api/recommendations");
        // console.log(response);
        if(response.data.isSuccessful && response.data.results.length != 0)
        {
            this.setState({
                Blocks: response.data.results,
            });
        }
        const response1 = await axios.get("http://127.0.0.1:9000/api/skills");
        // console.log(response1);
        if(response.data.isSuccessful)
        {
            this.setState({
                skills: response1.data.results,
            });
        }
    }

    render() {
        return(
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        );
    }
}

export const Consumer = Context.Consumer;