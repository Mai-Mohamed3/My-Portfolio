import '../Style/About.css';

function About() {
  return (
    <section id='about' className="about-section">
      <div className="about-container">
        <div className="about-img slide-down">
          <h2 className="contact-title">
          {"About Me".split("").map((char, index) => (
              <span key={index} className="stroked-text">
              {char}
              </span>
          ))}
          </h2>
        </div>

        <div className="about-text">
          <p className="slide-right">
            Hi, I'm <span>Mai Mohamed</span>, a <strong>Frontend React Developer</strong> with a passion for <span>building dynamic</span> and <span>user-friendly websites</span> and <span>web applications</span>.
          </p>
          <p className="slide-left">
            I am an expert in HTML, CSS, React, JavaScript, TypeScript, Node Js and have experience with SQL. I excel at creating websites that are seamless, inexpensive, and accessible to all users. I am also committed to meeting deadlines and can deliver earlier.
          </p>
          <p className="slide-right">
            I also make the client follow up on the work, give feedback on the progress, and provide after-sales service.
          </p>
          <p className="slide-left">
            I am eager to grow and contribute to impactful projects that make a difference in life.
          </p>
          <p>
           Let's bring your ideas to life — contact me at <span>+20 1143607452</span> to get started....
          </p>

          <div className="socials about-socials">
            <a href="mailto:mai.mo.alii3.com" className="icon1" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-envelope icon1"></i>
            </a>
            <a href="https://github.com/Mai-Mohamed3" className=" icon2" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github icon2"></i>
            </a>
            <a href="https://www.linkedin.com/in/mai-mohamed-developer/" className="icon3" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in icon3"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
