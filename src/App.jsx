import { useEffect, useRef, useState } from "react";
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
  const topRef = useRef(null); // ده العنصر اللي هنسكرول له

  useEffect(() => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [activeSection]);

  return (
    <div className="container">
      <Sidebar active={activeSection} setActive={setActiveSection} />
      
      <main className="main-content" ref={topRef}>
        {activeSection === "home" && <HeroSection />}
        {activeSection === "about" && <About />}
        {activeSection === "Experience" && <Experience />}
        {activeSection === "Skills" && <Skills />}
        {activeSection === "Education" && <Education />}
        {activeSection === "Websites" && <Websites />}
        {activeSection === "Contact" && <Contact />}
      </main>
    </div>
  );
}
