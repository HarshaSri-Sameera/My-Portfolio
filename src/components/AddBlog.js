import React, { Component } from 'react'
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import ReactMarkdown from "react-markdown";
import { Consumer } from "../context.js";
import audio_on_click from '../assets/audio_on_click.mp3';
// import ReactAudioPlayer from 'react-audio-player';
import { v4 as uuid } from "uuid";

class AddProject extends Component {
    state = {
        title: "",
        imageUrl: "",
        description: "",
        body: "",
        submitMessage: "",
        submitMessageTextColor: ""
    };

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    };

    onBodyChange = (value) => {
        this.setState({
            body: value,
        })
    };

    onSubmit = (handler, event) => {    
        event.preventDefault(); // It's stops the page reload

        let isSucessful = true;
        const {name} = this.state; // destructuring to extract name property from state object

        if(isSucessful) {
            this.setState({
                submitMessage: `Project published successfully`,
                submitMessageTextColor: "text-successs",
            });
            var audio = document.getElementById("audio");
            audio.play();
        } else {
            this.setState({
                submitMessage: `Publish failed :(`,
                submitMessageTextColor: "text-danger",
            });
        }

        // const { imageUrl, title, excerpt, body } = this.state;
        const newBlog = {
            id: uuid(),
            title: this.state.title,
            imageUrl: this.state.imageUrl,
            description: this.state.description,
            body: this.state.body,
        }

        handler("ADD_BLOG", newBlog);
    };
  render() {
      return(
            <Consumer>
              {(value) => {
                   const { title, imageUrl, body, submitMessage, submitMessageTextColor } = this.state;
                   const { handler } = value;
                    return (
                       <div className="container-fluid my-5 py-5">
                           <h1 className="text-center my-5 font-weight-normal">
                               Add<span className="text-successs"> Blog</span>
                           </h1>
                           <div className="row px-3 px-lg-5">
                               <div className="col-12 col-lg-6 px-lg-5 text-weight-normal">
                                   <form onSubmit={this.onSubmit.bind(this, handler)}>
                                       <div className="form-group">
                                           <label htmlFor="imageUrl">Featured Image Url *</label>
                                           <input
                                               type="text"
                                               name="imageUrl"
                                               id="imageUrl"
                                               className="form-control"
                                               onChange={this.onChange}
                                               required
                                           />
                                       </div>
                                       <div className="form-group">
                                           <label htmlFor="imageUrl">Title *</label>
                                           <input
                                               type="text"
                                               name="title"
                                               id="title"
                                               className="form-control"
                                               onChange={this.onChange}
                                               required
                                           />
                                       </div>
                                       <div className="form-group">
                                           <label htmlFor="imageUrl">Excerpt *</label>
                                           <input
                                               type="text"
                                               name="text"
                                               id="text"
                                               className="form-control"
                                               onChange={this.onChange}
                                               required
                                           />
                                       </div>
                                       <SimpleMDE 
                                           onChange={this.onBodyChange}
                                        //    options={{
                                        //        hideIcons: ["preview", "side-by-side", "fullscreen"],
                                        //    }}
                                       />
                                       <button type="submit" className="btn btn-block my-5" style={{ backgroundColor: "black", color: "cornsilk" }}>
                                           Publish
                                       </button>
                                   </form>
                                   {/* <ReactAudioPlayer
                                    // id="audio"
                                    src="audio_on_click.mp3"
                                    autoPlay
                                    controls
                                    /> */}
                                   <audio id="audio" src={audio_on_click}></audio>
                                   <div className="text-center">
                                       <h5 className={submitMessageTextColor}>{submitMessage}</h5>
                                   </div>
                               </div>
               
                               <div className="col-12 col-lg-6 markdown">
                                   <div className="justify-content-center">
                                       <img src={imageUrl} alt={title} />
                                   </div>
               
                                   <h1 className="font-weight-light text-center my-5">
                                       {title}
                                   </h1>
               
                                   <ReactMarkdown>
                                       {body}
                                   </ReactMarkdown>
                               </div>
                           </div>
                       </div> 
                    );
              }}
            </Consumer>
      );
     
  }
}

export default AddProject;