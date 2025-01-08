import React, { useEffect, useRef, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { VscThreeBars } from "react-icons/vsc";

const RootLayout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  // Detects clicks outside and close dropdown
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  },[])
  return (
    <div className='pagee'>
    <header>
      <NavLink to="/"><h2 className='logo'>Ka<span>cey</span></h2></NavLink>
      <button className="menu-toggle" onClick={toggleMenu}>
        <VscThreeBars />
      </button>
      <ul className={`navbar ${isOpen ? 'open' : ''}`} ref={menuRef}>
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
   </div>
  );
}

export default RootLayout;