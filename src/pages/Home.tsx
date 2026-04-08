import React, { useState, useEffect, useCallback } from "react";
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
    <div
      className="home-wrapper home-fade-in"
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
            <p className="subtitle home-subtitle-in">
              Your gateway to stunning visuals and seamless navigation.
              <br />
              We create unforgettable experiential events.
            </p>

            {/* CTA Buttons */}
            <div className="cta-buttons home-cta-in">
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
            </div>
          </header>
        </div>

        {/* Right Side - Image */}
        <div className="home-image home-image-in">
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
        </div>
      </div>

      <div className="services-section">
        <ServicesSection />
      </div>
      {/* Carousel Section Below */}
      <div className="carousel-section">
        <RotatableCarousel />
      </div>

    </div>
  );
};

export default Home;