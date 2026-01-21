import React, { useEffect, useRef, useState } from 'react';

// Types
interface Service {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  accent: string;
}

// Custom hook for intersection observer
const useInView = (threshold = 0.1) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isInView };
};

// Icon Components
const BrandActivationIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
    <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="2" fill="none" />
    <circle cx="24" cy="24" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
    <circle cx="24" cy="24" r="3" fill="currentColor" />
    <path d="M24 4V8M24 40V44M4 24H8M40 24H44" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M38 10L35 13M13 35L10 38M38 38L35 35M13 13L10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const EventIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
    <rect x="6" y="12" width="36" height="30" rx="3" stroke="currentColor" strokeWidth="2" fill="none" />
    <path d="M6 20H42" stroke="currentColor" strokeWidth="2" />
    <path d="M14 6V14M34 6V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <circle cx="16" cy="28" r="2" fill="currentColor" />
    <circle cx="24" cy="28" r="2" fill="currentColor" />
    <circle cx="32" cy="28" r="2" fill="currentColor" />
    <circle cx="16" cy="36" r="2" fill="currentColor" />
    <circle cx="24" cy="36" r="2" fill="currentColor" />
  </svg>
);

const RetailIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
    <path d="M8 16L12 8H36L40 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <rect x="8" y="16" width="32" height="26" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
    <path d="M18 16V12M30 16V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <rect x="14" y="24" width="8" height="10" rx="1" stroke="currentColor" strokeWidth="2" fill="none" />
    <rect x="26" y="24" width="8" height="6" rx="1" stroke="currentColor" strokeWidth="2" fill="none" />
  </svg>
);

const CreativeIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
    <circle cx="24" cy="16" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
    <path d="M24 26V44" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M18 32L24 26L30 32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="24" cy="16" r="4" fill="currentColor" />
  </svg>
);

const TradeIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
    <rect x="4" y="28" width="12" height="16" rx="1" stroke="currentColor" strokeWidth="2" fill="none" />
    <rect x="18" y="20" width="12" height="24" rx="1" stroke="currentColor" strokeWidth="2" fill="none" />
    <rect x="32" y="12" width="12" height="32" rx="1" stroke="currentColor" strokeWidth="2" fill="none" />
    <path d="M10 4L24 10L38 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const FabricationIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
    <path d="M8 40L20 8H28L40 40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 32H36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M16 24H32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <circle cx="24" cy="16" r="3" fill="currentColor" />
  </svg>
);

// Service Card Component
const ServiceCard: React.FC<{ service: Service; index: number; isInView: boolean }> = ({
  service,
  index,
  isInView,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="service-card"
      style={{
        '--delay': `${index * 0.1}s`,
        '--accent': service.accent,
      } as React.CSSProperties}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`card-inner ${isInView ? 'animate-in' : ''}`}>
        {/* Animated background gradient */}
        <div className="card-bg" />
        <div className="card-glow" />
        
        {/* Floating particles */}
        <div className="particles">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="particle" style={{ '--i': i } as React.CSSProperties} />
          ))}
        </div>

        {/* Content */}
        <div className="card-content">
          <div className={`icon-wrapper ${isHovered ? 'hovered' : ''}`}>
            <div className="icon-ring" />
            <div className="icon-ring icon-ring-2" />
            {service.icon}
          </div>

          <h3 className="card-title">{service.title}</h3>
          
          <p className="card-description">{service.description}</p>

          <div className="card-footer">
            <span className="learn-more">
              Explore
              <svg viewBox="0 0 24 24" fill="none" className="arrow-icon">
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>
        </div>

        {/* Corner accent */}
        <div className="corner-accent" />
      </div>
    </div>
  );
};

// Main Component
const ServicesSection: React.FC = () => {
  const { ref, isInView } = useInView(0.1);

  const services: Service[] = [
    {
      id: 1,
      icon: <BrandActivationIcon />,
      title: '360° Brand Activation',
      description:
        'We bring your brand to life through engaging, on-ground experiences that capture attention, create emotional impact, and inspire meaningful connections.',
      accent: '#3B82F6',
    },
    {
      id: 2,
      icon: <EventIcon />,
      title: 'Event Management',
      description:
        "From corporate events to grand-scale launches, we plan, manage, and execute seamless experiences that reflect your brand's essence.",
      accent: '#8B5CF6',
    },
    {
      id: 3,
      icon: <RetailIcon />,
      title: 'Retail Merchandising',
      description:
        'We manage national-scale merchandising teams and strategies that boost visibility, brand presence, and retail execution performance.',
      accent: '#EC4899',
    },
    {
      id: 4,
      icon: <CreativeIcon />,
      title: 'Creative Conceptualization',
      description:
        'Our in-house creative team brings bold ideas to life—transforming concepts into powerful campaigns, visuals, and stories that captivate.',
      accent: '#F59E0B',
    },
    {
      id: 5,
      icon: <TradeIcon />,
      title: 'Trade Fairs & Exhibitions',
      description:
        'We handle everything from stall design to complete execution, ensuring your brand stands out at trade shows and industry expos.',
      accent: '#10B981',
    },
    {
      id: 6,
      icon: <FabricationIcon />,
      title: 'Fabrication & Production',
      description:
        'From custom display units to large-scale event setups, we handle it all in-house with high-quality craftsmanship and attention to detail.',
      accent: '#06B6D4',
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Syne:wght@400;500;600;700;800&display=swap');

        .services-section {
          --bg-primary: transparent;
          --bg-secondary: transparent;
          --text-primary: #f8fafc;
          --text-secondary: #fbfbfb;
          --border-color: rgba(148, 163, 184, 0.15);
          
          font-family: 'Outfit', sans-serif;
          background: transparet;
          min-height: 100vh;
          padding: 6rem 2rem;
          position: relative;
          overflow: hidden;
        }

        /* Animated background mesh - disabled for transparent mode */
        .bg-mesh {
          display: none;
        }

        @keyframes meshMove {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }

        /* Grid pattern overlay - disabled for transparent mode */
        .grid-pattern {
          display: none;
        }

        .services-container {
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        /* Section Header */
        .section-header {
          text-align: center;
          margin-bottom: 5rem;
        }

        .section-label {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.5rem 1.25rem;
          background: rgba(59, 130, 246, 0.1);
          border: 1px solid rgba(59, 130, 246, 0.2);
          border-radius: 100px;
          font-size: 0.875rem;
          font-weight: 500;
          color: #3B82F6;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 1.5rem;
          opacity: 0;
          transform: translateY(20px);
          animation: fadeUp 0.6s ease forwards;
        }

        .section-label::before {
          content: '';
          width: 8px;
          height: 8px;
          background: #3B82F6;
          border-radius: 50%;
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.5); opacity: 0.5; }
        }

        .section-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2.5rem, 6vw, 4.5rem);
          font-weight: 700;
          color: var(--text-primary);
          line-height: 1.1;
          margin-bottom: 1.5rem;
          opacity: 0;
          transform: translateY(30px);
          animation: fadeUp 0.8s ease 0.2s forwards;
        }

        .section-title span {
          background: linear-gradient(135deg, #f53d00, #60fa4b, #069bff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .section-subtitle {
          font-size: 1.125rem;
          color: white !important;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.7;
          opacity: 0;
          transform: translateY(30px);
          animation: fadeUp 0.8s ease 0.4s forwards;
        }

        @keyframes fadeUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Services Grid */
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
          gap: 2rem;
          align-items: start;
        }

        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr;
          }
        }

        /* Service Card */
        .service-card {
          position: relative;
          perspective: 1000px;
        }

        .card-inner {
          position: relative;
          padding: 2.5rem;
          background: linear-gradient(
            135deg,
            rgba(15, 23, 42, 0.8),
            rgba(15, 23, 42, 0.4)
          );
          border: 1px solid var(--border-color);
          border-radius: 24px;
          overflow: hidden;
          transform: translateY(60px);
          opacity: 0;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          height: 350px;
        }

        .card-inner.animate-in {
          transform: translateY(0);
          opacity: 1;
          transition-delay: var(--delay);
        }

        .card-inner:hover {
          transform: translateY(-8px);
          border-color: var(--accent);
          box-shadow: 
            0 25px 50px -12px rgba(0, 0, 0, 0.5),
            0 0 0 1px var(--accent),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }

        .card-bg {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            transparent 0%,
            rgba(59, 130, 246, 0.05) 50%,
            transparent 100%
          );
          opacity: 0;
          transition: opacity 0.5s ease;
        }

        .card-inner:hover .card-bg {
          opacity: 1;
        }

        .card-glow {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(
            circle at center,
            var(--accent),
            transparent 40%
          );
          opacity: 0;
          transition: opacity 0.5s ease;
          pointer-events: none;
        }

        .card-inner:hover .card-glow {
          opacity: 0.1;
          animation: glowRotate 8s linear infinite;
        }

        @keyframes glowRotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        /* Particles */
        .particles {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
        }

        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: var(--accent);
          border-radius: 50%;
          opacity: 0;
          transition: opacity 0.5s ease;
        }

        .card-inner:hover .particle {
          opacity: 0.6;
          animation: float 3s ease-in-out infinite;
          animation-delay: calc(var(--i) * 0.2s);
        }

        .particle:nth-child(1) { top: 20%; left: 10%; }
        .particle:nth-child(2) { top: 60%; left: 85%; }
        .particle:nth-child(3) { top: 80%; left: 30%; }
        .particle:nth-child(4) { top: 40%; left: 70%; }
        .particle:nth-child(5) { top: 10%; left: 60%; }

        @keyframes float {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-20px) scale(1.5); }
        }

        /* Card Content */
        .card-content {
          position: relative;
          z-index: 2;
        }

        .icon-wrapper {
          position: relative;
          width: 80px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
          color: var(--accent);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .icon-wrapper.hovered {
          transform: scale(1.1) rotate(5deg);
        }

        .icon-ring {
          position: absolute;
          inset: 0;
          border: 2px solid var(--accent);
          border-radius: 20px;
          opacity: 0.3;
          transition: all 0.4s ease;
        }

        .icon-ring-2 {
          inset: -8px;
          border-radius: 24px;
          opacity: 0.15;
        }

        .icon-wrapper.hovered .icon-ring {
          transform: rotate(45deg);
          opacity: 0.6;
        }

        .icon-wrapper.hovered .icon-ring-2 {
          transform: rotate(-45deg) scale(1.1);
          opacity: 0.3;
        }

        .card-title {
          font-family: 'Syne', sans-serif;
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 1rem;
          transition: color 0.3s ease;
        }

        .card-inner:hover .card-title {
          color: var(--accent);
        }

        .card-description {
          font-size: 1rem;
          line-height: 1.7;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
        }

        .card-footer {
          display: flex;
          align-items: center;
        }

        .learn-more {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--accent);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .arrow-icon {
          width: 20px;
          height: 20px;
          transition: transform 0.3s ease;
        }

        .learn-more:hover .arrow-icon {
          transform: translateX(6px);
        }

        .corner-accent {
          position: absolute;
          bottom: 0;
          right: 0;
          width: 100px;
          height: 100px;
          background: linear-gradient(
            135deg,
            transparent 50%,
            var(--accent) 50%
          );
          opacity: 0.1;
          transition: all 0.4s ease;
        }

        .card-inner:hover .corner-accent {
          opacity: 0.2;
          width: 120px;
          height: 120px;
        }

        /* Decorative Elements - disabled for transparent mode */
        .floating-shapes {
          display: none;
        }

        .shape {
          display: none;
        }
      `}</style>

      <section className="services-section" ref={ref}>
        <div className="bg-mesh" />
        <div className="grid-pattern" />

        <div className="floating-shapes">
          <div className="shape shape-1" />
          <div className="shape shape-2" />
          <div className="shape shape-3" />
        </div>

        <div className="services-container">
          <header className="section-header">
            <span className="section-label">What We Do</span>
            <h2 className="section-title">
              Services That <span>Elevate</span> Your Brand
            </h2>
            <p className="section-subtitle">
              We craft immersive brand experiences that captivate audiences and
              drive meaningful connections through strategic creativity and
              flawless execution.
            </p>
          </header>

          <div className="services-grid">
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                index={index}
                isInView={isInView}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesSection;