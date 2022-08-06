import React from 'react';
import BlogCard from "./BlogCard";
import { Consumer } from "../context";
import { Link } from "react-router-dom";

function BlogSection() {
    return(
        <Consumer>
            {(value) => {
                const { blogs } = value;
                return (
                    <div className="container py-2 text-center">
                    <h1 className="font-weight-light">
                        My<span className="text-successs"> Blogs</span>
                    </h1>
                    <div className="lead pb-4">Upon my interest on writing</div>
                    <div className="row my-3">
                        {
                            blogs.slice(0,3).map((blog) => 
                            (
                                <div key={blog.id} className="col-12 col-md-4 my-2">
                                    <BlogCard 
                                    blog={blog}
                                        // id={blog.id}
                                        // title={blog.title} 
                                        // description={blog.description}
                                        // imageUrl={blog.imageUrl} 
                                    />
                                </div>
                            ))
                        }
                    </div>
                    <div className="my-5">
                        <Link to="/all/blogs" className="text-dark text-right">
                            <h5>
                                Read my Blogs 
                                <i className="fas fa-arrow-circle-right align-middle"></i>
                            </h5>
                        </Link>
                    </div>
                    </div>
                );
            }}
        </Consumer>
    );
}

export default BlogSection;
