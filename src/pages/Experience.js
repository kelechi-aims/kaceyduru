import React from "react";
import experience from "./img/experience.jpg";
import Accounting from "./img/Accounting.png";
import assistant from "./img/assistant.png";
import educator from "./img/educator.png";

function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="main-text">
        <h2>My Experience</h2>
      </div>
      <br />
      <div className="experience-content">
        <div className="box">
          <div>
            <img src={experience} alt="worksforworks" />
            <h3>Software Engineering Portfolio Projects</h3>
            <h4><span>Backend Developer</span></h4>
            <p><strong>Duration:</strong> During ALX Software Engineering Program</p>
            <br />
          </div>
          <div className="roles" id="roles">
            <h3>Roles</h3>
            <ul>
            <li><p>Designed and implemented various backend systems using programming languages such as Python and JavaScript.</p></li>
            <li><p>Developed RESTful APIs and integrated them with front-end applications.</p></li>
            <li><p>Managed databases and ensured data integrity using SQL and NoSQL databases.</p></li>
            <li><p>Worked on debugging and optimizing code for performance.</p></li>
          </ul>
          <p><strong>Technologies Used:</strong> Python, JavaScript, Java, SQL, NoSQL, Git, REST APIs</p>
          </div>
        </div>

        <div className="box">
          <div>
            <img src={Accounting} alt="worksforworks" />
            <h3>Accounting Clerk and Salesperson</h3>
            <h4><span><strong>Company:</strong> Kacey Autos Signature</span></h4>
            <p><strong>Duration:</strong> 03/2019 – Present</p>
            <br />
          </div>
          <div>
            <h3>Roles</h3>
            <ul>
              <li><p>Managed day-to-day accounting operations, overseeing bookkeeping, invoice processing, and financial record maintenance.</p></li>
              <li><p>Led sales efforts, cultivating relationships with clients, negotiating deals, and achieving monthly sales targets.</p></li>
              <li><p>Collaborated with the marketing team to develop and implement strategies for improving financial efficiency and profitability.</p></li>
            </ul>
          </div>
        </div>

        <div className="box">
          <div>
            <img src={assistant} alt="worksforworks" />
            <h3>Assistant (Cars45)</h3>
            <h4><span><strong>Company:</strong> En & Jay Autos</span></h4>
            <p><strong>Duration:</strong> 01/2017 – 02/2019</p>
            <br />
          </div>
          <div>
            <h3>Roles</h3>
            <ul>
              <li><p>Provided administrative support to the management team, handling phone calls, scheduling appointments, and managing correspondence.</p></li>
              <li><p>Assisted in the preparation of reports, presentations, and other documentation to support decision-making and operational efficiency.</p></li>
              <li><p>Maintained office organization and efficiency by managing filing systems, supplies, and office equipment.</p></li>
            </ul>
          </div>
        </div>

        <div className="box">
          <div>
            <img src={educator} alt="worksforworks" />
            <h3>Educator</h3>
            <h4><span><strong>Company:</strong> Imola International High School, Oshodi, Lagos State</span></h4>
            <p><strong>Duration:</strong> 10/2013 – 04/2015</p>
            <br />
          </div>
          <div>
            <h3>Roles</h3>
            <ul>
              <li><p>Developed and delivered engaging lesson plans in accordance with curriculum standards, fostering student learning and participation.</p></li>
              <li><p>Conducted assessments and provided feedback to students to track progress and guide further learning.</p></li>
              <li><p>Collaborated with colleagues to develop interdisciplinary projects and activities to enhance student learning experiences.</p></li>
            </ul>
          </div>
          
        </div>

        <div className="box">
          <div>
            <img src={educator} alt="worksforworks" />
            <h3>Educator</h3>
            <h4><span><strong>Company:</strong> Imola International High School, Oshodi, Lagos State</span></h4>
            <p><strong>Duration:</strong> 10/2013 – 04/2015</p>
            <br />
          </div>
          <div>
            <h3>Roles</h3>
            <ul>
              <li><p>Developed and delivered engaging lesson plans in accordance with curriculum standards, fostering student learning and participation.</p></li>
              <li><p>Conducted assessments and provided feedback to students to track progress and guide further learning.</p></li>
              <li><p>Collaborated with colleagues to develop interdisciplinary projects and activities to enhance student learning experiences.</p></li>
          </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;