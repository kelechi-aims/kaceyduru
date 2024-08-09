import React from "react";

// pages
import Languages from "./Languages";
import ScollTop from "./ScrollTop";

// images
import profile from "./img/profile.jpg"

function About() {
  return (
    <>
    <h2 className="about-h2">About Me</h2>
    <section>
    <div className="about" id="about">
      <div className="about-img">
        <img src={profile} alt="profile" />
      </div>
      <div className="about-text">

        <p>Hello! I'm Arukwe Kelechi Denise, and I'm from Nigeria.</p>
        <p>With a strong foundation in mathematics, I have earned both my BSc and MSc in the field. My academic journey has honed my analytical and problem-solving skills, which I now apply to my passion for software engineering.</p><br></br>
        <p>Recently, I completed the ALX Software Engineering program, specializing in backend development. This intensive program equipped me with the technical skills and practical experience needed to excel in the world of software development.</p>
        <p>I am enthusiastic about transitioning into a software development career, where I can leverage my skills to create innovative solutions.</p>
      </div>
    </div>

    <div className="about-2" id="about-2">       
      <p> I am particularly interested in opportunities such as internships or entry-level positions that will allow me to showcase my abilities and continue growing as a developer.</p>
      
      <h3>Interests and Passions</h3>

      <ul className="a">
        <li><p>Professional: Backend development, problem-solving, continuous learning, and continuous learning.</p></li>
        <li><p>Personal I enjoy exploring new technologies, solving puzzles, and contributing to open-source projects.</p></li>
      </ul> 
        
      <h3>Goals and Aspirations</h3>
      <p>My goal is to become a proficient software engineer, capable of designing and implementing robust backend systems. I aspire to work on projects that challenge me and contribute positively to the tech community.</p>

      <h3>Fun Fact</h3>
      
      <p>In my free time, I enjoy solving complex mathematical problems and exploring the latest advancements in technology. I believe that a curious mind is key to continuous growth and innovation.</p>

      <a href="contact" className="btn">Contact Me</a>
    </div>
  </section>
  <Languages />
  <ScollTop />
  </>
  );  
}

export default About;