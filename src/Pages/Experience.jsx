import React from "react";
import "../Style/Experience.css";

const experiences = [
  {
    title: "Front-End React Developer",
    company: "Zoome Advertising",
    job: "Part-Time",
    year: "2025 - Present",
  },
  {
    title: "Front-End React & UI/UX Developer",
    company: "Freelance Yard",
    job: "Freelancer",
    year: "2025 - Present",
  },
  {
    title: "Front-End React & UI/UX Developer",
    company: "Remote Tasks",
    job: "Freelancer",
    year: "2025 - Present",
  },
];

const Experience = () => {
  return (
    <section className="experience" id="experience">
        <div className="about-img slide-down">
          <h2 className="contact-title">
          {"Experience".split("").map((char, index) => (
              <span key={index} className="stroked-text">
              {char}
              </span>
          ))}
          </h2>
        </div>
        <div className="timeline-row">
        {experiences.map((exp, index) => (
          <div className="timeline-col" key={index}>
            <div className="timeline-item">
              <div className="timeline-icon"></div>
              <div className="timeline-content">
                <span className="year">{exp.year}</span>
                <h3 className="title">{exp.title}</h3>
                <p className="company">({exp.company})</p>
                <p className="job">({exp.job})</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
