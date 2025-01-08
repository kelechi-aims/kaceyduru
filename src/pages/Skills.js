import React from "react";
import technical from "./img/technical.png";
import soft from "./img/soft.png"

function Skills() {
    return (
      <section className="skills" id="skills">
        <div className="main-text">
            <h2>My Skills</h2>
        </div>
        <div className="skills-content">           
            <div className="skill-box">
            <h3>Technical Skills</h3>
            <div className="skill-grid">
            <img src={technical} alt="skill1" />  
              <ul>
                <li><strong>Programming Languages:</strong> C, Python, JavaScript, TypeScript</li>
                <li><strong>Web Development:</strong> HTML, CSS, React, Vite, Angular</li>
                <li><strong>Database Management:</strong> MySQL, MongoDB</li>
                <li><strong>Software Development Methodologies:</strong> Agile, Waterfall</li>
                <li><strong>Version Control:</strong> Git & GitHub</li>
                <li><strong>API Development:</strong> RESTful APIs</li>
                <li><strong>Testing & Debugging:</strong> Unit Testing, Debugging Tools</li>
                <li><strong>System Architecture & Design:</strong> MVC, Microservices</li>
                <li><strong>Operating Systems:</strong> Ubuntu, Windows</li>
                <li><strong>Tools & Platforms:</strong> Microsoft Office, Google Workspace, Zoom, Google Meet</li>
              </ul>
            </div>
            </div>

            <div className="skill-box">
              <h3>Soft Skills</h3>
              <div className="skill-grid">
              <img src={soft} alt="skill2" />              
              <ul>
                <li><strong>Problem Solving:</strong> Analyzing complex issues and developing effective solutions</li>
                <li><strong>Critical Thinking:</strong> Evaluating information and making reasoned decisions</li>
                <li><strong>Effective Communication:</strong> Clearly conveying ideas and collaborating with teams</li>
                <li><strong>Adaptability & Flexibility:</strong> Adjusting to changing environments and challenges</li>
                <li><strong>Teamwork & Collaboration:</strong> Working effectively with others to achieve common goals</li>
                <li><strong>Attention to Detail:</strong> Ensuring accuracy and thoroughness in work</li>
                <li><strong>Time Management:</strong> Prioritizing tasks and managing time efficiently</li>
                <li><strong>Continuous Learning:</strong> Committing to ongoing personal and professional development</li>
                <li><strong>Emotional Intelligence:</strong> Understanding and managing emotions in the workplace</li>
              </ul>
              </div>
            </div>
            
        </div>
      </section>
    );
}

export default Skills