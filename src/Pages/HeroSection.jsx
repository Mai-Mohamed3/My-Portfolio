import React, { useEffect, useState } from "react";
import "../Style/HeroSection.css";
import heroData from "./heroData";


// React Component (HeroSection)
const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animate, setAnimate] = useState(false);
  const [initialTextAnimation, setInitialTextAnimation] = useState(true);


  useEffect(() => {
    setAnimate(true);

    const interval = setInterval(() => {
      setAnimate(false);
      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % heroData.length);
        setAnimate(true);
      }, 400);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  const current = heroData[activeIndex];

  

  return (
    <section className="digital-section">
      <div className="content-wrapper">
        {/* Text Section */}
        <div className="text-section">
        <h2 className={`${animate ? "slide-down delay-4" : ""}`}>
          {/* أول كلمة – كل حرف داخل span بborder */}
          {current.title.split(" ")[0].split("").map((char, i) => (
            <span className="highlight-letter" key={`highlight-${i}`}>
              {char}
            </span>
          ))}{" "}
          <br />
          {/* باقي العنوان بعد أول كلمة */}
          {current.title.split(" ").slice(1).join(" ")}
        </h2>
          <p className={`${animate ? "slide-left delay-5" : ""}`}>
            {current.desc}
          </p>

          <div className={`buttons ${initialTextAnimation ? "slide-left delay-6" : ""}`}>
            {current.buttons.map((btn, idx) => {
              if (btn === "Download CV") {
                return (
                  <a
                    key={idx}
                    href="/resume.pdf"
                    download
                    className="btn white"
                  >
                    {btn} &rarr;
                  </a>
                );
              }

              if (btn === "Explore My Work") {
                return (
                  <button
                    key={idx}
                    className="btn red"
                    onClick={() => setActiveSection("websites")}
                  >
                    {btn} &rarr;
                  </button>
                );
              }

              return (
                <button key={idx} className={`btn ${idx === 1 ? "red" : "white"}`}>
                  {btn} &rarr;
                </button>
              );
            })}
          </div>
        </div>

        {/* Images Section */}
        <div className="image-section">
          {current.images.map((img, index) => (
            <img
              key={`${img.className}-${activeIndex}`} 
              src={img.src}
              alt={`slide-${index}`}
              className={`img ${img.className} ${animate ? `slide-up delay-${index + 1}` : ""}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default HeroSection;