import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// pages
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Experience from './pages/Experience';
import Achievements from './pages/Achievements';
import Skills from './pages/Skills';
//import Por from './pages/POR';
//import ScrollTop from './pages/ScrollTop';
import RootLayout from './Layouts/RootLayout';

// style
import './Myapp.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' Component={RootLayout}>
      <Route index Component={Home} />
      <Route path='about' Component={About} />
      <Route path='experience' Component={Experience} />
      <Route path='skills' Component={Skills} />
      <Route path='achievements' Component={Achievements} />
      <Route path='projects' Component={Projects} />
      <Route path='contact' Component={Contact} />
    </Route>
  )
)
function Myapp()  {
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default Myapp;