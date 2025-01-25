import React from "react";
import "../Styles/skills.css";
  // Import all images from the assets folder
  import htmlImage from "../assets/html.png";
  import cssImage from "../assets/css.png";
  import jsImage from "../assets/c++.png";
  import reactImage from "../assets/c++.png";
  import nodeImage from "../assets/c++.png";
  import cImage from "../assets/c.png";
  import cppImage from "../assets/c++.png";
  import pythonImage from "../assets/python.png";
  import leetcodeImage from "../assets/leetcode.png";
  import hackerrankImage from "../assets/hackerrank.png";
  import codechefImage from "../assets/codechef.png";
function Skills() {


  const skills = [
    { name: "HTML", image: htmlImage },
    { name: "CSS", image: cssImage },
    { name: "JavaScript", image: jsImage },
    { name: "React", image: reactImage },
    { name: "Node.js", image: nodeImage },
    { name: "C", image: cImage },
    { name: "C++", image: cppImage },
    { name: "Python", image: pythonImage },
  ];

  const platforms = [
    { name: "LeetCode", image: leetcodeImage },
    { name: "HackerRank", image: hackerrankImage },
    { name: "CodeChef", image: codechefImage },
  ];

  return (
    <section className="skills" id="skills">
      <div className="skills_container">
        <h1 className="skills_head">SKILLS</h1>
        <div className="skills_grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill_item">
              <img src={skill.image} alt={`${skill.name} logo`} className="skill_image" />
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
        <h2 className="platforms_head">Coding Platforms</h2>
        <div className="platforms_grid">
          {platforms.map((platform, index) => (
            <div key={index} className="platform_item">
              <img
                src={platform.image}
                alt={`${platform.name} logo`}
                className="platform_image"
              />
              <p>{platform.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
