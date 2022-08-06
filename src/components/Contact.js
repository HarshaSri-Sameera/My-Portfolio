import React, { Component } from "react";

class Contact extends Component {
    constructor() {             // can use the state without a constructor
        super();

        this.state = {
            name: "",
            email: "",
            description: "", 
            submitMessage: "",
            submitMessgaeTextColor: "",
        };
    }
    
    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value, 
        });
    };

    onSubmit = (event) => {
        event.preventDefault(); // It's stops the page reload

        let isSucessful = true;
        const {name} = this.state; // destructuring to extract name property from state object

        if(isSucessful) {
            this.setState({
                submitMessage: `Thank you ${name}. I will contact you soon :) `,
                submitMessgaeTextColor: "text-successs",
            });
        } else {
            this.setState({
                submitMessage: `Oops, something went wrong ${name}. could you please retry!`,
                submitMessgaeTextColor: "text-danger",
            });
        }
    };

    componentDidMount() {
        console.log("component did mount");
    }

    componentWillUnmount() {
        console.log("component will unmount");
    }

    componentDidUpdate() {
        console.log("component did update");
    }
    render() {
        console.log("render");
        const {submitMessgaeTextColor, submitMessage} = this.state;

        return (
            <div className="container my-5 nav-style">
                <h1 className="font-weight-light text-center mt-5">
                    <span className="text-successs">Delighted!</span> for your attention
                </h1>
                <div className="row justify-content-center mt-4">
                    <div className="col-11 col-lg-5">
                        <form onSubmit = {this.onSubmit}>
                            <div className="form-group">
                                <label htmlFor="name"><b><em>Name *</em></b></label>
                                <input 
                                    type="text" 
                                    name="name" 
                                    className="form-control" 
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email"><strong><em>Email *</em></strong></label>
                                <input 
                                    type="email" 
                                    name="email" 
                                    className="form-control"
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="description"><em><b>Tell me about your Project *</b></em></label>
                                <textarea name="description" className="form-control" rows="5" onChange={this.onChange}></textarea>
                            </div>
                            <button type="submit" className="btn btn-dark float-right" style={{ backgroundColor: "black" }}>Let's talk business</button>
                        </form>
                    </div>
                </div>
                <div className="py-5 mx-2 text-center">
                    <h5 className = {submitMessgaeTextColor}>{submitMessage}</h5>
                </div>
            </div>
        );
    }
}

export default Contact;