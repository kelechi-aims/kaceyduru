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
        <p>I recently completed the ALX Software Engineering program, where I specialized in backend development. However, my journey as a developer extends beyond backend systems. With hands-on experience in frontend technologies such as HTML, CSS, JavaScript, React, Tailwind CSS, and Angular, I am equipped to handle both frontend and backend development. This comprehensive skill set allows me to build fully functional, responsive, and scalable web applications from start to finish.</p>
        <p>I am passionate about working on end-to-end solutions, from designing intuitive user interfaces to developing robust server-side logic and database integrations. My goal is to leverage my diverse skill set to build innovative, efficient, and user-friendly applications.</p>
        
      </div>
    </div>

    <div className="about-2" id="about-2">       
    <p>I am particularly interested in opportunities such as internships or entry-level positions where I can continue growing as a full-stack developer, tackling real-world problems and delivering impactful solutions.</p>
      
      <h3>Interests and Passions</h3>

      <ul className="a">
        <li><p>Professional: Full-stack development, problem-solving, continuous learning, and building scalable, user-friendly applications.</p></li>
        <li><p>Personal I enjoy exploring new technologies, solving puzzles, and contributing to open-source projects.</p></li>
      </ul> 
        
      <h3>Goals and Aspirations</h3>
      <p>My goal is to become a proficient full-stack developer, capable of designing and implementing both frontend and backend systems. I aspire to work on projects that challenge me, deepen my understanding of full-stack development, and contribute positively to the tech community.</p>

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