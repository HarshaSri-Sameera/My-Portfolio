import React from 'react';
import picture from "../assets/me.jpg";
import PropTypes from "prop-types";
// import { Typewriter, useTypewriter, Cursor } from 'react-simple-typewriter';

function Tittle(props) {
    const {name, tag} = props;
    // console.log(props);
    // const name = "Harsha Sri Sameera";
    // const tag = "Hi, I'm an open source developer";
    // const scriptTag = document.createElement('script');

    return(
        <div className="container py-5">
            <div className="row my-5">
                <div  className="col-12 col-md-6 text-center align-items-center">
                    <img 
                        className="img-fluid rounded w-75" 
                        src={picture} 
                        alt="photo" 
                    />
                </div>
                
                <div className="col-12 col-md-6 mt-5 text-center">
                    <div className="font-weight-light text-center mt-5" style={{fontSize: "50px"}}>
                    Hi, I'm<span className="text-successs"> {name}</span>
                    </div>
                    <h4 className="font-weight-light">{tag}</h4>
                </div> 
            </div>
        </div>
    );
}

Tittle.defaultProps = {
    name: "Harsha Sri Sameera",
    tag: "I'm an open source developer"
};

Tittle.propTypes = {
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired
}
export default Tittle;