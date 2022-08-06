import React, { Component } from "react";
import { Consumer } from "../context.js";

class WriteARecomendation extends Component {
    constructor() {
        super();

      this.state = {
            name: "",
            email: "",
            company: "", 
            designation: "",
            recommendation: "",
        };
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    };

    onSubmit = (handler, event) => {
        event.preventDefault();

        const newRecommendation = {
            name: this.state.name,
            email: this.state.email,
            company: this.state.company,
            designation: this.state.designation,
            recommendation: this.state.recommendation,
        }

        handler("ADD_RECOMMENDATION", newRecommendation);
    };

    render() {
        return(
            <Consumer>
                {(value) => {
                    // const {tag, name, belongs} = this.state;
                    const { name, company, designation, recommendation } = this.state;
                    const {handler} = value;
                    return(
                        <div className="container my-5 nav-style">
                        <h1 className="font-weight-light text-center mt-5">
                            <span className="text-successs">Thank You!</span> I'm extremely grateful
                        </h1>
                        <div className="row justify-content-center">
                            <div className="col-11 col-lg-5">
                                <form onSubmit={this.onSubmit.bind(this, handler)}>
                                    <div className="form-group">
                                        <label htmlFor="name">
                                            <br/>
                                            <strong><em>Name *</em></strong></label>
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
                                        <label htmlFor="company"><strong><em>Company/Institute *</em></strong></label>
                                        <input
                                            type="text"
                                            name="company"
                                            className="form-control"
                                            onChange={this.onChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="Designation"><strong><em>Designation *</em></strong></label>
                                        <input 
                                            type="text"
                                            name="designation"
                                            className="form-control"
                                            onChange={this.onChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="Recommendation"><strong><em>Recommendation *</em></strong></label>
                                        <textarea onChange={this.onChange} name="recommendation" className="form-control" rows="5"></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-warning float-right" style={{ backgroundColor: "#D70040" }}>Lot's of Love</button>
                                </form>
                            </div>
                        </div>
                        </div>
                    );
                }}
            </Consumer>
        );
    }
}

export default WriteARecomendation;