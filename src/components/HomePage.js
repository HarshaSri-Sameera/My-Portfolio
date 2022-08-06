import React from 'react';
import Tittle from './Tittle';
import Aboutme from './Aboutme';
import ProjectSection from './ProjectSection';
import BlogSection from './BlogSection';
import BlockSection from './BlockSection';
import Technology from './Technology';
import '../App.css';

function HomePage() {
    return(
        <div>
            <Tittle name = "Harsha Sri Sameera" tag = "Nice to meet you." />
            <BlockSection />
            <Technology />
            <ProjectSection />
            <BlogSection />
            <Aboutme />
        </div>
    );
}

export default HomePage;