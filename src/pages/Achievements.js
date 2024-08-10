import React from "react";

function Achievements() {
    return (
      <section className="achievement" id="achievement">
        <div className="main-text">
          <h4>Some of My Major Achievements</h4>
        </div>
        <div className="portfolio-content">

            <div className="row">
              <img src="img/profile.jpg" alt="software" />
              <div className="main-row">
                <div className="row-text">
                    <h6>Software Engineering Portfolio Projects - Backend Developer</h6>
                </div>
              </div>
              <h3>Successfully completed multiple backend projects, demonstrating proficiency in various technologies. Developed a full-fledged backend system for a mock e-commerce application as part of a capstone project.</h3>
            </div>

            <div className="row">
              <img src="img/profile.jpg" alt="salesperson" />
              <div className="main-row">
                <div className="row-text">
                  <h6>Accounting Clerk and Salesperson - Kacey Autos Signature.</h6>
                </div>
              </div>
              <h3>Implemented streamlined accounting processes, reducing invoice processing time by 20% and minimizing errors. Increased sales revenue by 15% within the first year through effective customer relationship management and strategic marketing initiatives.</h3>          
            </div>

            <div className="row">
              <img src="img/profile.jpg" alt="assistant" />
              <div className="main-row">
                <div className="row-text">
                  <h6>Assistant (Cars45) - En & Jay Autos</h6>
                </div>
              </div>
              <h3>Implemented a digital filing system, reducing paper waste and improving document retrieval time by 30%. Received commendations for professionalism and efficiency in handling customer inquiries and resolving issues.</h3>
            </div> 

            <div className="row">      
              <img src="img/profile.jpg" alt="assistant" />
                <div className="main-row">
                  <div className="row-text">
                    <h6>Educator - Imola International High School, Oshodi, Lagos State</h6>
                  </div>
                </div>
                <h3>Implemented innovative teaching strategies, resulting in a 25% improvement in student test scores on standardized assessments. Recognized as “Teacher of the Month” for exceptional dedication and commitment to student success.</h3>
              </div> 

            <div className="row">  
              <img src="img/profile.jpg" alt="assistant" />
                <div className="main-row">
                  <div className="row-text">
                    <h6>Educator - Oluwaseun Comprehensive High School, Ore, Ondo</h6>
                  </div>
                </div>
                <h3>Implemented differentiated instruction techniques, resulting in a 15% increase in student engagement and participation. Facilitated a mathematics club to provide additional academic support and enrichment opportunities for students.</h3>
            </div> 

        </div>
      </section>
    );
}

export default Achievements;