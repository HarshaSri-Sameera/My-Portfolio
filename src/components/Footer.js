import React from 'react';

function Footer() {
    return(
        <footer>
        <div className="container-fluid" style={{backgroundColor:"black"}}>
            <div className="py-5 text-center">
                    <h2 className="text-light">Interested in working with me?</h2>
                    <button className="btn btn-outline-light btn-lg">Let's talk!</button>
            </div>
            <div className="row text-center">
                <div className="col-12 col-md-4 pb-3 ">
                    <h5 className="text-success">More Links <i className="fas fa-paperclip"></i></h5>
                    <a href="/" className="text-light d-block">Blogs</a>
                    <a href="/" className="text-light d-block">Home</a>
                    <a href="/" className="text-light d-block">contact me</a>
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
                    {/* <!-- <h5 className="text-success pb-3">Social</h5>
                    <a href="#" ><i className="fab fa-linkedin text-light h1 d-block"></i></a>
                    <a href="#" ><i className="fab fa-github-square text-light h2 d-block"></i></a>
                    <a href="#" ><i className="fas fa-envelope-square text-light d-block"></i></a> --> */}
                    
                    <div className="wrap">
                        <div className="icon">
                          <div className="first">Let's<br />Connect!</div>
                          <div className="second">
                            <div className="square-1"><a href="/"><i className="fab fa-linkedin-in h1"></i></a></div>
                            <div className="square-2"><a href="/"><i className="fab fa-instagram h1"></i></a></div>
                            <div className="square-3"><a href="/"><i className="far fa-envelope h1"></i></a></div>
                            <div className="square-4"><a href="/"><i className="fab fa-github h1"></i></a></div>
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
