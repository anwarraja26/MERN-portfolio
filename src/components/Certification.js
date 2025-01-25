import React from "react";
import "../Styles/certifications.css";

import fullstackImg from "../assets/fullstack.jpg";
import sqlImg from "../assets/sql.jpg";
import nptelCImg from "../assets/nptel c.jpg";
import nptelPythonImg from "../assets/nptel python.jpg";
import courseraPythonImg from "../assets/py.jpg";
import hackerRankPythonImg from "../assets/pythonbasics.jpg";

function Certification() {
  return (
    <section className="certificate" id="certification">
      <div className="certification_container">
        <h1 className="certification_head">CERTIFICATIONS</h1>
        
        <ul className="certification_list">
          <li>
            <img 
              src={fullstackImg} 
              alt="Fullstack Web Development" 
              className="certificate_image"
            />
            Fullstack Web Development - UDEMY
          </li>
          <li>
            <img 
              src={sqlImg} 
              alt="SQL Certification" 
              className="certificate_image"
            />
            SQL Certification - SKILL RACK
          </li>
          <li>
            <img 
              src={nptelCImg} 
              alt="NPTEL C Certification" 
              className="certificate_image"
            />
            Programming in C - National Program on Technology Enhanced Learning
          </li>
          <li>
            <img 
              src={nptelPythonImg} 
              alt="NPTEL Python Certification" 
              className="certificate_image"
            />
            Programming in Python - National Program on Technology Enhanced Learning
          </li>
          <li>
            <img 
              src={courseraPythonImg} 
              alt="Coursera Python Certification" 
              className="certificate_image"
            />
            Python Certification - Coursera
          </li>
          <li>
            <img 
              src={hackerRankPythonImg} 
              alt="HackerRank Python Basic" 
              className="certificate_image"
            />
            Python Basic - HackerRank
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Certification;
