import React from 'react';
import { Consumer } from "../context";
import ReactMarkdown from "react-markdown";

function BlogPage(props) {
  return(
    <Consumer>
      {(value) => {
        const { blogs } = value;
        const id = props.match.params.id;
        const blog = blogs.filter((blog) => blog.id == id)[0];
        const { imageUrl, title, body } = blog;

        return(
          <div className="container col-12 col-lg-6 markdown py-5 my-5">
            {/* <h1>Blog {props.match.params.id}</h1> */}
            <div className="justify-content-center">
              <img src={imageUrl} alt={title} className="w-100" />
            </div>

            <h1 className="font-weight-light text-center my-5">
                {title}
            </h1>

            <ReactMarkdown>
                {body}
            </ReactMarkdown>
        </div>
        );
      }}
    </Consumer>
  );
}

export default BlogPage;