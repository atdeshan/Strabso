// pages/MainContent.tsx
import React, { useState, useRef, useEffect, useMemo } from "react";
import Navigation from "../components/Navigation";
import Home from "../pages/Home";
import ProjectShowcase from "../pages/Projects";
import AboutUs from "../pages/Aboutus";
import ContactUs from "../components/Contacts";
import CoverageMap from "../components/CoverageMap";
import Footer from "../components/Footer";

// Constants moved outside component to avoid recreation on each render
const NAVBAR_HEIGHT = 80; // Your navbar height in pixels
const EXTRA_OFFSET = 20; // Extra padding below navbar

const MainContent: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Home");

  // Create refs properly - each useRef call at the top level
  const homeRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  // Map section names to refs - memoized to maintain stable reference
  const sectionRefs = useMemo(() => ({
    Home: homeRef,
    Projects: projectsRef,
    About: aboutRef,
    Contact: contactRef,
  }), []);

  // Scroll to section with custom offset
  const scrollToSection = (sectionName: string) => {
    const ref = sectionRefs[sectionName as keyof typeof sectionRefs];
    if (ref && ref.current) {
      const elementPosition = ref.current.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - NAVBAR_HEIGHT - EXTRA_OFFSET;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // Scroll-based detection for active section (more reliable than Intersection Observer)
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + NAVBAR_HEIGHT + EXTRA_OFFSET + 100;

      // Get all sections with their positions
      const sections = Object.entries(sectionRefs);

      // Check from bottom to top - find the last section that starts before scroll position
      for (let i = sections.length - 1; i >= 0; i--) {
        const [name, ref] = sections[i];
        if (ref.current) {
          const sectionTop = ref.current.offsetTop;
          if (scrollPosition >= sectionTop) {
            setActiveTab(name);
            break;
          }
        }
      }
    };

    // Add scroll listener
    window.addEventListener("scroll", handleScroll);

    // Check initial position on mount
    handleScroll();

    // Cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionRefs]);

  return (
    <>
      <Navigation activeTab={activeTab} onTabClick={scrollToSection} />

      <main className="sections-container">
        <section ref={homeRef} data-section="Home" className="full-section">
          <Home />
        </section>

        <section ref={projectsRef} data-section="Projects" className="full-section">
          <ProjectShowcase />
        </section>

        <section ref={aboutRef} data-section="About" className="full-section">
          <AboutUs />
        </section>

        <section ref={contactRef} data-section="Contact" className="full-section">
          <ContactUs />
        </section>
      </main>

      <CoverageMap />
      <Footer />
    </>
  );
};

export default MainContent;