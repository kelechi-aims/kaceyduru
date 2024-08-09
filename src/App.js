import React from 'react';
import { /*BrowserRouter as Router,*/ Route, Routes, withRouter } from 'react-router-dom';
//import Header from './pages/Header';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Experience from './pages/Experience';
import Languages from './pages/Languages';
import Achievements from './pages/Achievements';
import Skills from './pages/Skills';
import Por from './pages/POR';
import ScrollTop from './pages/ScrollTop';
import './Myapp.css';

function App() {
  return (
      <div className="App">
        
        <Routes>
          <Route exact path="/" component={<Home />} /> 
          <Route path="/about" component={<About />} />
          <Route path="/experience" component={<Experience />} />
          <Route path="/skills" component={<Skills />} />
          <Route path="/achievements" component={<Achievements />} />
          <Route path="/projects" component={<Projects />} />
          <Route path="/contact" component={<Contact />} />
        </Routes> 
        <Home />
        <About /> 
        <Languages />
        <Experience />
        <Skills />
        <Achievements />
        <Projects />
        <Por />
        <Contact />
        <ScrollTop />
               
      </div>
    
  );
}

export default withRouter(App);
