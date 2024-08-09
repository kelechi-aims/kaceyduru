import React from "react";
import JavaScript from "./img/JavaScript.png";
import python from "./img/python.png";
import html from "./img/html.png";
import c from "./img/c.png";
import typescript from "./img/typescript.svg";
import css from "./img/css.png";

function Languages() {
  return (
    <div className="inner">
      <div className="Tech_header">
        <h1>Languages</h1>
      </div>
      <div className="Tcontainer">
        <div className="skill-box">
          <div className="skill-title">
            <div className="tech_img">
              <img className="skill-icon" src={c} alt="C Programming Language" />
            </div>
            <h3>C</h3>
          </div>
        </div>
        <div className="skill-box">
          <div className="skill-title">
            <div className="tech_img">
              <img className="skill-icon" src={typescript} alt="Typescript Programming Laguage" />
              </div>
              <h3>C++</h3>
          </div>
        </div>
        <div className="skill-box">
          <div className="skill-title">
            <div className="tech_img">
              <img className="skill-icon" src={html} alt="Html" />
              </div>
              <h3>HTML</h3>
          </div>
        </div>
        <div className="skill-box">
          <div className="skill-title">
            <div className="tech_img">
              <img className="skill-icon" src={css} alt="Css" />
              </div>
              <h3>Css</h3>
          </div>
        </div>
        <div className="skill-box">
          <div className="skill-title">
            <div className="tech_img">
              <img className="skill-icon" src={JavaScript} alt="JavaScript" />
              </div>
              <h3>JavaScript</h3>
          </div>
        </div>
        <div className="skill-box">
          <div className="skill-title">
            <div className="tech_img">
              <img className="skill-icon" src={python} alt="Python" />
              </div>
              <h3>Python</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Languages;