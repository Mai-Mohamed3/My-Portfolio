import React from "react";
import "../Style/Skills.css";
import { FaCode } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";

const skills = {
  code: ["HTML", "CSS", "JavaScript", "TypeScript", "Node Js"],
  frameworks: ["React", "Bootstrap", "jQuery"],
  database: ["SQL", "MongoDB"],
};

const softSkills = [
  "Team Leadership",
  "Communication",
  "Teamwork",
  "Problem Solving",
  "Time Management",
  "Creativity",
];

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
        <div className="about-img slide-down">
          <h2 className="contact-title">
            {"Skills".split("").map((char, index) => (
                <span key={index} className="stroked-text">
                {char}
                </span>
            ))}
          </h2>
        </div>

        <div className="skills-container">
        {/* Technical Skills */}
        <div className="skills-box technical">
          <h3 className="skills-title">
            <FaCode className="icon" /> Technical Skills
          </h3>
          <div className="sub-skills-section">
            <h4 className="sub-title">Code</h4>
            <ul className="skills-list">
              {skills.code.map((item, index) => (
                <li
                  className="skill-item from-left"
                  key={index}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="sub-skills-section">
            <h4 className="sub-title">Frameworks</h4>
            <ul className="skills-list">
              {skills.frameworks.map((item, index) => (
                <li
                  className="skill-item from-left"
                  key={index}
                  style={{ animationDelay: `${(skills.code.length + index) * 0.2}s` }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="sub-skills-section">
            <h4 className="sub-title">Database</h4>
            <ul className="skills-list">
              {skills.database.map((item, index) => (
                <li
                  className="skill-item from-left"
                  key={index}
                  style={{ animationDelay: `${(skills.code.length + skills.frameworks.length + index) * 0.2}s` }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Soft Skills */}
        <div className="skills-box ">
          <h3 className="skills-title">
            <GiSkills className="icon" /> Soft Skills
          </h3>
          <ul className="skills-list ">
            {softSkills.map((skill, index) => (
              <li
                className="skill-item from-right soft "
                key={index}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
