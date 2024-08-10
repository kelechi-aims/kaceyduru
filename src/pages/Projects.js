import React from "react";

const Projects = () => {
  return (
    <section className="portfolio" id="portfolio">
      <div className="main-text">
        <h4>Some of My Distinguished Works</h4>
      </div>

      <div className="portfolio-content">
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

        <div className="row">
          <a href="https://www.geeksforgeeks.org/forecast-weather-project-check-today-weather-for-any-location/" target="_blank" rel="noopener noreferrer">
            <img src="img/profile.jpg" alt="view"/>
          </a>
          <div className="main-row">
            <div className="row-text">
              <h6>Machine Learning</h6>
            </div>
          </div>
          <h3>Boston House Price Prediction</h3>
        </div>
      </div>
    </section>
  );
}

export default Projects;