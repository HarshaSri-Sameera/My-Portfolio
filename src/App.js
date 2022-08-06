import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contact from './components/Contact';
import WriteARecomendation from './components/WriteARecomendation';
import NotFoundPage from './components/NotFoundPage';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ProjectPage from './components/ProjectPage';
import HomePage from './components/HomePage';
import BlogPage from './components/BlogPage';
import AddProject from './components/AddProject';
import { Provider } from "./context";
import AllProjects from "./components/AllProjects";
import AllBlogs from "./components/AllBlogs";
import AddBlog from "./components/AddBlog";
import test from "./components/test";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    /* all the child components should be present inside this BrowserRouter */
    <Provider>
      <BrowserRouter>  
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/write-a-recomendation" component={WriteARecomendation} />
          <Route exact path="/all/projects" component={AllProjects} />
          <Route exact path="/all/blogs" component={AllBlogs} />
          <Route exact path="/add/project" component={AddProject} />
          <Route exact path="/add/blog" component={AddBlog} />
          <Route exact path="/project/:id" component={ProjectPage} />
          <Route exact path="/blog/:id" component={BlogPage} />
          <Route exact path="/test" component={test} />
          <Route>
            <NotFoundPage />
          </Route> 
        </Switch>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}
export default App;
