import React from 'react';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-sm fixed-top bg-white">
        <div className="container my-2">
            <a href="/" className="navbar-brand text-dark font-weight-bold">
                Harsha Sri Sameera
            </a>
            <button className="btn btn-outline-success text-weight-normal ml-auto mx-3">
                Contact me
            </button>
            <button className="navbar-toggler mx-3"
                    data-toggle="collapse"
                    data-target="#collapseNav"
            >
                <i className="fas fa-hamburger"></i>
            </button>
            <div className="collapse navbar-collapse flex-grow-0" id="collapseNav">
                <div className="navbar-nav">
                    <a href="/" className="nav-item-nav-link text-dark h6 mx-1 my-auto">
                        Projects
                    </a>
                    <a href="/" className="nav-item-nav-link text-dark h6 mx-1 my-auto">
                        Blogs
                    </a>
                </div>
            </div>
        </div>
        </nav>
    );
}

export default Navbar;
