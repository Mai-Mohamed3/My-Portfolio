import React from "react";
import "../Style/Skills.css";
import { FaCode } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";

const skills = {
  code: ["HTML", "CSS", "Bootstrap", "JavaScript (ES6+)", "TypeScript", "DOM Manipulation", "Event Handling", "Async/Await", "Fetch API", "SEO Optimization", "Responsive Design", "Media Queries", "Web Accessibility", "Performance Optimization"],
  frameworks: ["React.js", "Context API", "React Router", "Axios", "Framer Motion", "Three.js", "React Three Fiber", "Styled Components", "React Testing Library", "Vite"],
  database: ["HTTP", "REST APIs", "Node Js", "SQL", "PostgreSQL", "MongoDB"],
  Tools: ["Git", "GitHub"],
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
        <div className="skills-box technical">
          <h3 className="skills-title">
            <FaCode className="icon" /> Technical Skills
          </h3>
          <div className="sub-skills-section">
            <h4 className="sub-title">Code & Web Fundamentals</h4>
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
            <h4 className="sub-title">Frameworks & Libraries</h4>
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
            <h4 className="sub-title">Backend, APIs & Database</h4>
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

          <div className="sub-skills-section">
            <h4 className="sub-title">Tools & Version Control</h4>
            <ul className="skills-list">
              {skills.Tools.map((item, index) => (
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

        <div className="skills-box">
          <h3 className="skills-title">
            <GiSkills className="icon" /> Soft Skills
          </h3>
          <ul className="skills-list soft-skills">
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
