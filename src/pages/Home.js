import React from "react";
import video1 from "./img/video1.mp4"

function Home() {
  return (
    <>
    <section className="home" id="home">
        <video autoPlay loop muted playsInline className="back-video">
          <source src={video1} type="video/mp4" />
        </video>
        <div className="home-text">
          <h4>Hello</h4>
          <h1>I'm Arukwe Kelechi Denise</h1>
          <p>A Mathematician and a motivated and passionate beginner in software engineering eager to contribute to dynamic backend development projects. Committed to learning and applying new technologies to solve complex problems in a collaborative environment.</p>
          <a href="https://www.linkedin.com/in/kelechi-denise/" className="btn" target="_blank" rel="noopener noreferrer">Download Resume</a>
          </div>
    </section>
    </>
    )
}

export default Home;