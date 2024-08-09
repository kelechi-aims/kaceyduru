import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <>
    <header>
      <h2 className='logo'>E-Portfo<span>lio</span></h2>
      <ul className='navbar'>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="about">About Me</NavLink></li>
        <li><NavLink to="experience">Experience</NavLink></li>
        <li><NavLink to="skills">Skills</NavLink></li>
        <li><NavLink to="achievements">Achievements</NavLink></li>
        <li><NavLink to="projects">Projects</NavLink></li>
        <li><NavLink to="contact">Contact</NavLink></li>
      </ul>
    </header>
    <main>
      <Outlet />
    </main>
    <footer className='footer-layout'>
          <p>&copy; 2024 Kacey</p>
    </footer>
   </>
  );
}

export default RootLayout;