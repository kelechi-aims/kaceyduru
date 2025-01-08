import React from "react";
import mobi from "./img/mobi.png";
import fiverr from "./img/fiverr.png"

const Projects = () => {
  return (
    <section className="portfolio" id="portfolio">
      <div className="main-text">
        <h4>Some of My Distinguished Works</h4>
      </div>

      <div className="portfolio-content">
        <div className="row">
          <a href="https://www.linkedin.com/in/kelechi-denise/" target="_blank" rel="noopener noreferrer">
            <img src={mobi} alt="view"/>
          </a>
          <div className="main-row">
            <div className="row-text"> 
              <h6>Virtual Card Holder</h6> 
            </div> 
          </div> 
          <p><strong>Description:</strong> Contributed to the development of a virtual card holder application. Focused on creating a user-friendly frontend interface with Vite and Tailwind CSS, and integrated backend functionality for card management and secure data handling.</p> 
          <p><strong>Technologies Used:</strong> Vite, Tailwind CSS, Node.js, Express.js, MongoDB</p>
        </div>

        <div className="row">
          <a href="https://www.linkedin.com/in/kelechi-denise/" target="_blank" rel="noopener noreferrer">
            <img src={fiverr} alt="view"/>
          </a>
          <div className="main-row"> 
            <div className="row-text"> 
              <h6>Fiverr Clone</h6> 
            </div> 
          </div> 
          <p><strong>Description:</strong> Built a Fiverr-inspired UI clone to replicate a marketplace experience. Developed reusable React components for an interactive and responsive user interface, ensuring cross-device compatibility.</p> 
          <p><strong>Technologies Used:</strong> React.js, CSS, JavaScript</p>
        </div>

        <div className="row">
          <a href="https://www.linkedin.com/in/kelechi-denise/" target="_blank" rel="noopener noreferrer">
            <img src="img/profile.jpg" alt="view"/>
          </a>
          <div className="main-row"> 
            <div className="row-text"> 
              <h6>Voting App</h6> 
            </div> 
          </div> 
          <p><strong>Description:</strong> Developed a real-time voting application as part of a team. Designed and implemented backend server logic, RESTful APIs, and secure user authentication. Integrated features for poll creation, voting, and real-time results updates using WebSockets.</p> 
          <p><strong>Technologies Used:</strong> Node.js, Express.js, WebSocket, MongoDB, JavaScript, Tailwind CSS</p>
        </div>


        <div className="row">
          <a href="https://www.linkedin.com/in/kelechi-denise/" target="_blank" rel="noopener noreferrer">
            <img src="img/profile.jpg" alt="view"/>
          </a>
          <div className="main-row">
            <div className="row-text">
              <h6>GeoChat</h6>
            </div>
          </div>
          <p><strong>Description:</strong> Worked in a team to create GeoChat, a real-time chat application with geolocation features. Developed functionalities for user authentication, chat room creation, and real-time messaging using Websockets.</p>
          <p><strong>Technologies Used:</strong> JavaScript (Node.js), Express.js, Socket.io, HTML/CSS</p>
      </div>

      <div className="row">
        <a href="https://www.geeksforgeeks.org/forecast-weather-project-check-today-weather-for-any-location/" target="_blank" rel="noopener noreferrer">
          <img src="img/profile.jpg" alt="view"/>
        </a>
        <div className="main-row">
          <div className="row-text">
            <h6>Automech Locator</h6>
          </div>
        </div>
        <p><strong>Description:</strong> Contributed to the development of Automech Locator, a web application designed to help users locate nearby auto mechanic workshops. Implemented features such as user registration and workshop search functionality.</p>
        <p><strong>Technologies Used:</strong> JavaScript (Node.js), Express.js, MongoDB, HTML/CSS</p>
      </div>

      <div className="row">
        <a href="https://www.geeksforgeeks.org/forecast-weather-project-check-today-weather-for-any-location/" target="_blank" rel="noopener noreferrer">
          <img src="img/profile.jpg" alt="view"/>
        </a>
        <div className="main-row">
          <div className="row-text">
            <h6>Simple Shell</h6>
          </div>
        </div>
        <p><strong>Description:</strong> Collaborated with a team to develop a custom Unix shell called Simple Shell. Implemented features such as command parsing, executing system commands, and handling input/output redirection. Designed the user interface for improved usability and efficiency.</p>
        <p><strong>Technologies Used:</strong> C programming language, Unix system calls</p>
      </div>

      </div>
    </section>
  );
}

export default Projects;