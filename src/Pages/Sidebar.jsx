import { useState } from 'react';
import '../Style/Sidebar.css';
import logo from '../assets/Images/logo6.png';

function Sidebar({ active, setActive }) {
  const [isOpen, setIsOpen] = useState(false); // لإظهار/إخفاء السايدبار

  const links = ["home", "about", "Experience", "Skills", "Education", "Websites", "Contact"];
  const icons = ["fas fa-home", "fas fa-user", "fas fa-briefcase", "fas fa-cogs", "fas fa-graduation-cap", "fas fa-laptop-code", "fas fa-envelope"];

  return (
    <>
      {/* زر الهامبرجر */}
      <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <i className="fas fa-bars"></i>
      </button>

      {/* Sidebar */}
      <aside className={`sidebar ${isOpen ? 'show' : ''}`}>
        <img className="logo" src={logo} alt="logo error" />
        <div className="socials">
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
        <ul className="nav">
          {links.map((link, index) => (
            <li
              key={link}
              className={`nav-link ${active === link ? "active" : ""}`}
              onClick={() => {
                setActive(link);
                setIsOpen(false); // اغلاق السايدبار بعد الضغط
              }}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <i className={icons[index]}></i> {link.charAt(0).toUpperCase() + link.slice(1)}
            </li>
          ))}
        </ul>
        <footer className="footer">
          <p>Designed by <a href="https://www.linkedin.com/in/mai-mohamed-developer/">Mai Mohamed</a></p>
        </footer>
      </aside>
    </>
  );
}

export default Sidebar;
