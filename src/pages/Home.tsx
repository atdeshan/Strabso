import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../styles/Home.css";
import RotatableCarousel from "../components/RotatableCarousel";
import welcomeSVG from "../assets/welcome.svg";
import ServicesSection from "../components/ServiseSection";

const Home: React.FC = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Welcome to Strabso";
  const typingSpeed = 100; // milliseconds per character

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, typingSpeed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="home-wrapper"
    >
      <div className="home-container">
        {/* Left Side - Welcome Section */}
        <div className="home-content">
          <div className="home-header">
            <h1 className="typing-text">
              {displayedText}
              <span className="cursor">|</span>
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 0.8 }}
              className="subtitle"
            >
              Your gateway to stunning visuals <br />and seamless navigation.<br /> Explore now!
              
            </motion.p>
           
          </div>
        </div>

        {/* Right Side - Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="home-image"
        >
          <div className="image-container">
            <img 
              src={welcomeSVG} 
              alt="Strabso Visual" 
              className="hero-image"
            />
            {/* Optional: Add a glowing effect */}
            <div className="image-glow"></div>
          </div>
        </motion.div>
      </div>
      <div className="services-section">
        <ServicesSection />
      </div>
      {/* Carousel Section Below */}
      <div className="carousel-section">
        <RotatableCarousel />
      </div>
      
    </motion.div>
  );
};

export default Home;