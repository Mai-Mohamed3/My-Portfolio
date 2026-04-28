import statsData from "./StatsData";
import "../Style/StatsSection.css";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, x: 60 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function StatsSection() {
  return (
    <section>

      {/* Title */}
      <div className="about-img slide-down">
        <h2 className="contact-title">
          {"Highlights".split("").map((char, index) => (
            <span key={index} className="stroked-text">
              {char}
            </span>
          ))}
        </h2>
      </div>

      <motion.section
        className="stats-section"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {statsData.map((stat, index) => (
          <motion.div
            key={stat.id}
            className={`stat-card timeline-item ${index % 2 === 0 ? "left" : "right"}`}
            variants={cardVariants}
          >
            <span className="circle"></span>
            <div className="content">
              <h1 className="number">{stat.number}</h1>
              <h3 className="title">{stat.title}</h3>
              {stat.subtitle && <p className="subtitle">{stat.subtitle}</p>}
            </div>

          </motion.div>
        ))}
      </motion.section>

    </section>
  );
}