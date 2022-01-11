import React from 'react';
import picture from "../assets/sam4.jpeg";

function Tittle(props) {
    const {name, tag} = props;
    // console.log(props);
    // const name = "Harsha Sri Sameera";
    // const tag = "Hi, I'm an open source developer";
    return(
        <div className="container py-5">
        <div className="row text-center align-items-center my-5">
            <div  className="col-12 col-md-6">
                <img 
                    className="img-fluid rounded w-75" 
                    src={picture} 
                    alt="photo" 
                />
            </div>
            <div className="col-12 col-md-6 pt-5">
                <div className="font-weight-light" style={{fontSize: "50px"}}>
                   Hi, I'm<span className="text-success">{name}</span>
                </div>
                <h4 className="font-weight-light">{tag}</h4>
            </div> 
        </div>
        </div>
    );
}

export default Tittle;