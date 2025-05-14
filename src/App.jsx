import { useState } from "react";
import Sidebar from "./Pages/Sidebar";
import About from "./Pages/AboutMe";
import HeroSection from "./Pages/HeroSection";
import Experience from "./Pages/Experience";
import Skills from "./Pages/Skills";
import Education from "./Pages/Education";
import Websites from "./Pages/Websites";
import Contact from "./Pages/Contact";
import "./App.css";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div className="container">
      <Sidebar active={activeSection} setActive={setActiveSection} />
      
      <main className="main-content">
        {activeSection === "home" && <HeroSection />}
        {activeSection === "about" && <About />}
        {activeSection === "Experience" && <Experience />}
        {activeSection === "Skills" && <Skills />}
        {activeSection === "Education" && <Education />}
        {activeSection === "Websites" && <Websites />}
        {activeSection === "Contact Me" && <Contact />}
      </main>
    </div>
  );
}
