import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import "../styles/Home.css";
import RotatableCarousel from "../components/RotatableCarousel";
import welcomeSVG from "../assets/welcome.png";
import ServicesSection from "../components/ServiseSection";

const Home: React.FC = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const fullText = "Welcome to Strabso";
  const typingSpeed = 100; // milliseconds per character

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, typingSpeed);

      return () => clearTimeout(timeout);
    } else {
      setIsTypingComplete(true);
    }
  }, [currentIndex, fullText]);

  const scrollToServices = useCallback(() => {
    const servicesSection = document.querySelector('.services-section');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const scrollToContact = useCallback(() => {
    const contactSection = document.querySelector('[data-section="About"]');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="home-wrapper"
      role="main"
      aria-label="Home page"
    >
      <div className="home-container">
        {/* Left Side - Welcome Section */}
        <div className="home-content">
          <header className="home-header">
            <h1 className="typing-text" aria-label={fullText}>
              <span aria-hidden="true">{displayedText}</span>
              <span
                className={`cursor ${isTypingComplete ? 'cursor-idle' : ''}`}
                aria-hidden="true"
              >
                |
              </span>
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 0.8 }}
              className="subtitle"
            >
              Your gateway to stunning visuals and seamless navigation.
              <br />
              We create unforgettable experiential events.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5, duration: 0.6 }}
              className="cta-buttons"
            >
              <button
                className="primary-btn"
                onClick={scrollToServices}
                aria-label="Explore our services"
              >
                Explore Services
              </button>
              <button
                className="secondary-btn"
                onClick={scrollToContact}
                aria-label="Contact us"
              >
                Contact Us
              </button>
            </motion.div>
          </header>
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
              alt="Strabso - Creative event experiences illustration"
              className="hero-image"
              loading="eager"
            />
            {/* Glowing effect behind image */}
            <div className="image-glow" aria-hidden="true"></div>
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