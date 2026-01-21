// pages/MainContent.tsx
import React, { useState, useRef, useEffect } from "react";
import Navigation from "../components/Navigation";
import Home from "../pages/Home";
import ProjectShowcase from "../pages/Projects";
import AboutUs from "../pages/Aboutus";

const MainContent: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Home");

  // ========== ADJUST THESE VALUES ==========
  const NAVBAR_HEIGHT = 80;  // Your navbar height in pixels
  const EXTRA_OFFSET = 20;   // Extra padding below navbar
  // =========================================

  // Create refs properly - each useRef call at the top level
  const homeRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);

  // Map section names to refs
  const sectionRefs = {
    Home: homeRef,
    Projects: projectsRef,
    About: aboutRef,
  };

  // Scroll to section with custom offset
  const scrollToSection = (sectionName: string) => {
    const ref = sectionRefs[sectionName as keyof typeof sectionRefs];
    if (ref && ref.current) {
      const elementPosition = ref.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - NAVBAR_HEIGHT - EXTRA_OFFSET;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // Intersection Observer to detect which section is in view
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: `-${NAVBAR_HEIGHT + EXTRA_OFFSET}px 0px -40% 0px`,
      threshold: [0, 0.1, 0.5, 0.9, 1],
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      // Find all intersecting sections
      const intersectingSections = entries
        .filter((entry) => entry.isIntersecting)
        .map((entry) => ({
          id: entry.target.getAttribute("data-section"),
          ratio: entry.intersectionRatio,
          boundingRect: entry.boundingClientRect,
        }));

      if (intersectingSections.length > 0) {
        // When scrolling up, prioritize the section that's higher on the page
        // When scrolling down, prioritize the section with highest intersection ratio
        const topMostSection = intersectingSections.reduce((prev, current) => {
          // If one section has significantly more visibility, use that
          if (current.ratio > prev.ratio + 0.1) return current;
          if (prev.ratio > current.ratio + 0.1) return prev;

          // Otherwise, use the one that's higher on the page (smaller top value)
          return current.boundingRect.top < prev.boundingRect.top ? current : prev;
        });

        if (topMostSection.id) {
          setActiveTab(topMostSection.id);
        }
      }
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    Object.entries(sectionRefs).forEach(([name, ref]) => {
      if (ref.current) {
        ref.current.setAttribute("data-section", name);
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

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
        
        {/* <section ref={contactRef} data-section="Contact" className="full-section">
          <ContactUs />
        </section>  */}
        
      </main>
    </>
  );
};

export default MainContent;