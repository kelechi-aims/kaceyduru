import React from "react";
import JavaScript from "./img/JavaScript.png";
import python from "./img/python.png";
import html from "./img/html.png";
import c from "./img/c.png";
import typescript from "./img/typescript.svg";
import css from "./img/css.png";
import reacter from "./img/reacter.png";
import node from "./img/node.png";
import angular from "./img/angular.png";
import mongodb from "./img/mongodb.png"
import mysgl from "./img/mysql.png";
import ex from "./img/ex.png";


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
              <img className="skill-icon" src={css} alt="Css" />
            </div>
            <h3>Css</h3>
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

        <div className="skill-box">
          <div className="skill-title">
            <div className="tech_img">
              <img className="skill-icon" src={typescript} alt="Typescript Programming Laguage" />
              </div>
              <h3>TypeScript</h3>
          </div>
        </div>

        <div className="skill-box">
          <div className="skill-title">
            <div className="tech_img">
              <img className="skill-icon" src={reacter} alt="Typescript Programming Laguage" />
              </div>
              <h3>React</h3>
          </div>
        </div>

        <div className="skill-box">
          <div className="skill-title">
            <div className="tech_img">
              <img className="skill-icon" src={css} alt="Typescript Programming Laguage" />
              </div>
              <h3>Tailwind CSS</h3>
          </div>
        </div>

        <div className="skill-box">
          <div className="skill-title">
            <div className="tech_img">
              <img className="skill-icon" src={angular} alt="Typescript Programming Laguage" />
              </div>
              <h3>Angular</h3>
          </div>
        </div>

        <div className="skill-box">
          <div className="skill-title">
            <div className="tech_img">
              <img className="skill-icon" src={node} alt="Typescript Programming Laguage" />
              </div>
              <h3>Node.js</h3>
          </div>
        </div>

        <div className="skill-box">
          <div className="skill-title">
            <div className="tech_img">
              <img className="skill-icon" src={ex} alt="Typescript Programming Laguage" />
              </div>
              <h3>Express</h3>
          </div>
        </div>

        <div className="skill-box">
          <div className="skill-title">
            <div className="tech_img">
              <img className="skill-icon" src={mysgl} alt="Typescript Programming Laguage" />
              </div>
              <h3>MySQL</h3>
          </div>
        </div>

        <div className="skill-box">
          <div className="skill-title">
            <div className="tech_img">
              <img className="skill-icon" src={mongodb} alt="Typescript Programming Laguage" />
              </div>
              <h3>MongoDB</h3>
          </div>
        </div>

        
      </div>
      
    </div>
  );
}

export default Languages;