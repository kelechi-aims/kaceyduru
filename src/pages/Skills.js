import React from "react";
import skill1 from "./img/skill1.jpg"

function Skills() {
    return (
      <section className="skills" id="skills">
        <div className="main-text">
            <h2>My Skills</h2>
        </div>
        <div className="skills-content">
            <div className="box">
              <img src={skill1} alt="skill1" />
              <h3>Competitive Programming</h3>
              <p>Competitive programming is a sport of coding, where individuals engage in solving algorithmic challenges against the clock, showcasing their problem-solving skills and efficiency in crafting elegant and optimized solutions.</p>
            </div>
            <div className="box">
              <img src="img/profile.jpg" alt="skill2" />
              <h3>Front-end Development</h3>
              <p>Front-end development is the art of bringing digital creativity to life, focusing on the user interface and user experience to seamlessly merge design with functionality, shaping the visual and interactive elements of websites.</p>
            </div>
            <div className="box">
              <img src="img/profile.jpg" alt="skill3" />
              <h3>Machine Learning</h3>
              <p>Machine learning is a transformative field at the intersection of computer science and A.I., empowering systems to learn from data, recognize patterns, and make intelligent decisions, entering in a automated insights and problem-solving.</p>
            </div>
        </div>
      </section>
    );
}

export default Skills