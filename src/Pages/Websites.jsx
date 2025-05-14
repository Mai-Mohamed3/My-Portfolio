import React, { useState, useEffect } from 'react';
import '../Style/Websites.css';
import zoome from '../assets/Images/zoome.png'
import semsem from '../assets/Images/semsem.png'
import beba from '../assets/Images/beba.png'
import lavida from '../assets/Images/lavida.png'
import amado from '../assets/Images/amado.png'
import elyoum7 from '../assets/Images/elyoum7.png'
import veg from '../assets/Images/veg.png'
import fittness from '../assets/Images/fittness.png'
import landing from '../assets/Images/landing.png'
import admin from '../assets/Images/admin.png'
import aveda from '../assets/Images/aveda.png'


const data = [
  {
    id: 1,
    title: "Zoome Website",
    description: "Zoome Advertising is startup company established in 2024",
    image: zoome,
    link: "https://www.zoome-adv.com/",
    github:"https://github.com/Mai-Mohamed3/Zoome-Website",
    date: "May 7, 2025"
  },
  {
    id: 2,
    title: "Personal Portfolio",
    description: "Senior Data Quality , Senior Instractor & Data Analyst Freelancer",
    image: semsem,
    link: "https://mai-mohamed3.github.io/Hossam-Portfolio.githup.io/",
    github:"https://github.com/Mai-Mohamed3/Hossam-Portfolio.githup.io",
    date: "Mar 15, 2025"
  },
  {
    id: 3,
    title: "Personal Portfolio",
    description: "Embedded Software Developer , web developer & Freelancer",
    image: beba,
    link: "https://mai-mohamed3.github.io/Habiba-s-Portfolio.github.io/",
    github:"https://github.com/Mai-Mohamed3/Habiba-s-Portfolio.github.io",
    date: "April 3, 2045"
  },
  {
    id: 4,
    title: " Amado",
    description: "The E-commerce Shopping Clothes Website is a user-friendly platform offering a seamlessshopping ",
    image:amado,
    link: "https://mai-mohamed3.github.io/-Amado-E-COMMERCE/",
    github:"https://github.com/Mai-Mohamed3/-Amado-E-COMMERCE",
    date: "Jun 12, 2025"
  },
  {
    id: 5,
    title: "Lavida",
    description: "A user-friendly Online Supermarket Website with categorized products",
    image:lavida,
    link: "https://mai-mohamed3.github.io/Lavida-Ecommerce/",
    github:"https://github.com/Mai-Mohamed3/Lavida-Ecommerce",
    date: "Des 10, 2024"
  },
  {
    id: 6,
    title: "VegFood",
    description: "The Online Food Website is a user-friendly platform offering a variety of food items ",
    image:veg,
    link: "https://mai-mohamed3.github.io/VegFood-Ecommerce/",
    github:"https://github.com/Mai-Mohamed3/VegFood-Ecommerce",
    date: "Des 20, 2024"
  },
  {
    id: 7,
    title: "Imitation Of El-Youm7",
    description: "elyoum7The News Website Clone, inspired by Youm7",
    image: elyoum7,
    link: "https://mai-mohamed3.github.io/Elyoum7/",
    github:"https://github.com/Mai-Mohamed3/Elyoum7",
    date: "Des 28, 2024"
  },
  {
    id: 8,
    title: "Fittness Dashboard",
    description: "A modern and interactive Fitness Dashboard designed to help users track their activities and manage their training goals.",
    image: fittness,
    link: "https://mai-mohamed3.github.io/Fitness-Tracker-Dashboard-/",
    github:"https://github.com/Mai-Mohamed3/Fitness-Tracker-Dashboard-",
    date: "April 16, 2025"
  },
  {
    id: 9,
    title: "Aveda",
    description: "A convenient online supermarket offering a wide range of groceries and household essentials delivered to your door.",
    image: aveda,
    link: "https://mai-mohamed3.github.io/Aveda-Ecommerce/",
    github:"https://github.com/Mai-Mohamed3/Aveda-Ecommerce",
    date: "may 9, 2023"
  },
  {
    id: 10,
    title: " Admin Dashboard",
    description: "An intuitive admin dashboard designed to efficiently manage users, content, and site analytics in one place.",
    image: admin,
    link: "https://mai-mohamed3.github.io/Admin-dashboard/",
    github:"https://github.com/Mai-Mohamed3/Admin-dashboard",
    date: "April 11, 2025"
  },
  {
    id: 11,
    title: "Furniture-Ecommerce",
    description: "A stylish furniture website offering modern and elegant pieces for every room in your home.",
    image: landing,
    link: "https://mai-mohamed3.github.io/shop-Ecommerce/",
    github:"https://github.com/Mai-Mohamed3/shop-Ecommerce",
    date: "April 9, 2025"
  }/* ,
  {
    id: 12,
    title: "المدينة القديمة",
    description: "تاريخ وحضارة",
    image: "https://via.placeholder.com/300x200?text=Old+Town",
    link: "https://example.com/old-town",
    github:"",
    date: "April 12, 2045"
  } */
];


function Websites() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false); // حالة لتتبع التمرير فوق الكروت
  const [cardsToShow, setCardsToShow] = useState(window.innerWidth <= 991 ? 1 : 2);

useEffect(() => {
  const handleResize = () => {
    setCardsToShow(window.innerWidth <= 991 ? 1 : 2);
  };

  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);

const visibleCards = data.slice(currentIndex, currentIndex + cardsToShow);

  const handleNext = () => {
  setCurrentIndex((prevIndex) =>
    prevIndex + cardsToShow >= data.length ? 0 : prevIndex + cardsToShow
  );
};

const handlePrev = () => {
  setCurrentIndex((prevIndex) =>
    prevIndex - cardsToShow < 0 ? data.length - cardsToShow : prevIndex - cardsToShow
  );
};


  // إيقاف الـ auto scroll عند التمرير فوق الكروت
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [isHovered]); // عندما يكون mouseHovered يتغير، يتوقف التمرير التلقائي

  return (
    <section className="about-section website">
      <div className="about-img slide-down">
        <h2 className="contact-title">
          {"Websites".split("").map((char, index) => (
            <span key={index} className="stroked-text">{char}</span>
          ))}
        </h2>
      </div>
      <div className='website-text'>
        <p className="slide-right">Explore a collection of modern, responsive,
           and fully functional websites I've developed—each tailored to meet unique business needs with clean design,
           optimized performance, and user-friendly interfaces.
           These projects highlight my skills in front-end and back-end development, 
           bringing ideas to life with precision and creativity.
        </p>
      </div>
      <div className="carousel-container">
        <button onClick={handlePrev} className="arrow left">{'<'}</button>
        <div className="cards-wrapper">
          {visibleCards.map((card) => (
            <div 
              className="card" 
              key={card.id}
              onMouseEnter={() => setIsHovered(true)} // إيقاف التمرير التلقائي
              onMouseLeave={() => setIsHovered(false)} // إعادة تشغيل التمرير التلقائي
            >
              <div className="card-image slide-down">
                <img src={card.image} alt={card.title} />
                <div className="hover-overlay">
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                  <div className='buttons'>
                    <a href={card.link} className="card-button" target="_blank" rel="noopener noreferrer">
                      Website 
                    </a>
                    <a href={card.github} className="card-button" target="_blank" rel="noopener noreferrer">Github</a>
                  </div>
                  <span>{card.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button onClick={handleNext} className="arrow right">{'>'}</button>
      </div>
      <div className="socials website-socials">
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
    </section>
  );
}

export default Websites;