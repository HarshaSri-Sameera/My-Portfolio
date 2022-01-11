import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Tittle from './components/Tittle';
import Aboutme from './components/Aboutme';
import Footer from './components/Footer';
import ProjectSection from './components/ProjectSection';
import BlockSection from './components/BlockSection';

function App() {
  return (
    <div>
      <Navbar />
      <Tittle name = "Harsha Sri Sameera" tag = "Hi, I'm an open source developer"/>
      <BlockSection />
      <ProjectSection />
      <Aboutme />
      <Footer />
    </div>
  );
}
export default App;
