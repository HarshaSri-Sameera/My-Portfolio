import React from 'react';
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-sm fixed-top bg-white">
        <div className="container my-2">
            <Link to="/">
                <a href="/" className="navbar-brand text-dark font-weight-bold">
                    Dark Fire
                </a>
            </Link>
            <Link to="/contact" className="ml-auto mx-3">
                <button className="btn btn-outline-info text-weight-bold" style={{border: "1px solid #0b867c", borderRadius: "5px"}}>
                    <span className="text-successs">Contact me</span>
                </button>
            </Link>
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
