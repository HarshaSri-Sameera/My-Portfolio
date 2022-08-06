import React from 'react';
import { Link } from "react-router-dom";

function Footer() {
    return(
        <footer>
        <div className="container-fluid" style={{backgroundColor:"black"}}>
            <div className="py-5 text-center">
                    <h2 className="text-successs">Interested in working with me?</h2>
                    <Link to="/contact">
                        <button className="btn btn-outline-light btn-lg">Let's talk!</button>
                    </Link>
            </div>
            <div className="row text-center">
                <div className="col-12 col-md-4 pb-3 ">
                    <h5 className="text-successs">More Links <i className="fas fa-paperclip"></i></h5>
                    <Link to="/" className="text-successs d-block">Blogs</Link>
                    <Link to="/" className="text-successs d-block">Home</Link>
                    <Link to="/Contact" className="text-successs d-block">Contact Me</Link>
                    <Link to="/write-a-recomendation" className="text-successs d-block">Write A Recomendation</Link>
                </div>
                <div className="col-12 col-md-4 text-light text-justify">
                   <ul>
                       <li>
                        I workhard, enjoy doing my thing and I won't giveup easily.
                       </li>
                       <li>
                           Love to work in challenging environments, Can learn and grasp new skills very well.
                       </li>
                       <li>
                           I'm a Taekwondo martial artist, which always keeps me cool, dynamic, creative and stress free <i className="fas fa-peace align-middle text-dark bg-white"></i>
                       </li>
                   </ul>
                </div>
                <div className="col-12 col-md-4 pb-3">
                    {/* <!-- <h5 className="text-successss pb-3">Social</h5>
                    <a href="#" ><i className="fab fa-linkedin text-light h1 d-block"></i></a>
                    <a href="#" ><i className="fab fa-github-square text-light h2 d-block"></i></a>
                    <a href="#" ><i className="fas fa-envelope-square text-light d-block"></i></a> --> */}
                    
                    <div className="wrap">
                        <div className="icon">
                          <div className="first">Let's<br />Connect!</div>
                          <div className="second">
                            <div className="square-1"><a href="https://www.linkedin.com/in/harsha-sri-sameera-6366901a5/" target="_blank"><i className="fab fa-linkedin-in h1"></i></a></div>
                            <div className="square-2"><a href="/"><i className="fab fa-instagram h1"></i></a></div>
                            <div className="square-3"><a href="mailto:harshasrisameera2002@gmail.com" target="_top"><i className="far fa-envelope h1"></i></a></div>
                            <div className="square-4"><a href="https://github.com/HarshaSri-Sameera" target="_blank"><i className="fab fa-github h1"></i></a></div>
                          </div>
                        </div>
                      </div>
                </div>
            </div>
            <div className="text-muted text-center py-3">
                <p>Copyright @ Harsha Sri Sameera 2021</p>
            </div>
        </div>
        </footer>
    );
}

export default Footer;
