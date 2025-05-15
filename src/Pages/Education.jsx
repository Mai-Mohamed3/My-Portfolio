import React from "react";
import "../Style/Experience.css";

const education = [
  {
    title: "Front-End React Developer",
    company: "Google Developer Groups on Campus: CIC",
    job: "Internship - Hybrid",
    year: "Mar 2025 - Present",
  },
  {
    title: "Front-End React & UI/UX Developer",
    company: "Freelance Yard Digital Egypt Pioneers Initiative DEPI",
    job: "Internship - Hybrid",
    year: "Aug 2024 - May 2025",
  },
  {
    title: "Bachelor of Computer & Artificial Intelligence",
    company: "Menoufia University",
    job: "Computer Science Department",
    year: "Sep 2020 - May 2024",
  },
  {
    title: "Power Bi and SQL .",
    company: "Information Technology InstitutePower",
    job: "Internship - Remote",
    year: "Aug 2022 - Sep 2022",
  },
];

const Education = () => {
  return (
    <section  className="education" id="education">
        <div className="about-img slide-down">
          <h2 className="contact-title">
          {"Education".split("").map((char, index) => (
              <span key={index} className="stroked-text">
              {char}
              </span>
          ))}
          </h2>
        </div>
        <div className="timeline-row edu">
        {education.map((exp, index) => (
          <div className="timeline-col " key={index}>
            <div className="timeline-item">
              <div className="timeline-icon"></div>
              <div className="timeline-content ">
                <span className="year">{exp.year}</span>
                <h3 className="title">{exp.title}</h3>
                <p className="company">{exp.company}</p>
                <p className="job">{exp.job}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
