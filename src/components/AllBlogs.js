import React from 'react';
import { Consumer } from "../context.js";
import BlogCard from './BlogCard';

function AllBlogs() {
    return(
        <Consumer>
            {(value) => {
                const {blogs} = value;
                return(
                    <div className="container text-center my-3 py-3">
                    <h1 className="font-weight-light py-5">
                        Read My <span className="text-successs">Blogs</span>
                    </h1>
                    <div className="row my-3">
                        {blogs.map((blog) =>(
                            <div key={blog.id} className="col-12 col-md-6 py-3">
                                <BlogCard blog={blog} />
                            </div>
                        ))}
                    </div>
                    </div>
                );
            }}
        </Consumer>
    );
}

export default AllBlogs;