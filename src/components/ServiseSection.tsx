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

const MallIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
    <rect x="6" y="16" width="36" height="28" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
    <path d="M6 16L24 4L42 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="14" y="28" width="8" height="16" rx="1" stroke="currentColor" strokeWidth="2" fill="none" />
    <rect x="26" y="24" width="10" height="8" rx="1" stroke="currentColor" strokeWidth="2" fill="none" />
    <path d="M16 24H20M28 36H34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const RoadshowIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
    <rect x="6" y="18" width="28" height="18" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
    <path d="M34 24H42V32C42 33.1046 41.1046 34 40 34H34V24Z" stroke="currentColor" strokeWidth="2" fill="none" />
    <circle cx="14" cy="36" r="4" stroke="currentColor" strokeWidth="2" fill="none" />
    <circle cx="30" cy="36" r="4" stroke="currentColor" strokeWidth="2" fill="none" />
    <path d="M12 18V12L20 8L28 12V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const SamplingIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
    <path d="M12 8H36C38.2091 8 40 9.79086 40 12V20L24 28L8 20V12C8 9.79086 9.79086 8 12 8Z" stroke="currentColor" strokeWidth="2" fill="none" />
    <path d="M8 20V36C8 38.2091 9.79086 40 12 40H36C38.2091 40 40 38.2091 40 36V20" stroke="currentColor" strokeWidth="2" fill="none" />
    <circle cx="24" cy="28" r="4" fill="currentColor" />
    <path d="M16 16H32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const SellingIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
    <rect x="4" y="28" width="12" height="16" rx="1" stroke="currentColor" strokeWidth="2" fill="none" />
    <rect x="18" y="20" width="12" height="24" rx="1" stroke="currentColor" strokeWidth="2" fill="none" />
    <rect x="32" y="12" width="12" height="32" rx="1" stroke="currentColor" strokeWidth="2" fill="none" />
    <path d="M10 4L24 10L38 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <circle cx="38" cy="8" r="3" fill="currentColor" />
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

const GovernmentIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
    <path d="M6 20L24 8L42 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="6" y="20" width="36" height="4" stroke="currentColor" strokeWidth="2" fill="none" />
    <rect x="10" y="24" width="6" height="16" stroke="currentColor" strokeWidth="2" fill="none" />
    <rect x="21" y="24" width="6" height="16" stroke="currentColor" strokeWidth="2" fill="none" />
    <rect x="32" y="24" width="6" height="16" stroke="currentColor" strokeWidth="2" fill="none" />
    <rect x="6" y="40" width="36" height="4" stroke="currentColor" strokeWidth="2" fill="none" />
  </svg>
);

const PromoterIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
    <circle cx="24" cy="14" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
    <path d="M12 44V38C12 33.5817 15.5817 30 20 30H28C32.4183 30 36 33.5817 36 38V44" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M36 14L44 10M36 18L44 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <circle cx="44" cy="16" r="4" stroke="currentColor" strokeWidth="2" fill="none" />
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
      title: 'Brand Activations',
      description:
        'We bring your brand to life through engaging, on-ground experiences that capture attention, create emotional impact, and inspire meaningful connections with your target audience.',
      accent: '#4294f7',
    },
    {
      id: 2,
      icon: <MallIcon />,
      title: 'Mall Activations',
      description:
        'Strategic mall activations that maximize footfall and engagement, creating memorable brand experiences in high-traffic retail environments across Sri Lanka.',
      accent: '#8B5CF6',
    },
    {
      id: 3,
      icon: <RoadshowIcon />,
      title: 'Roadshows & SMMT Activations',
      description:
        'Mobile marketing excellence with nationwide roadshows and SMMT activations, taking your brand directly to communities across all 9 provinces.',
      accent: '#EC4899',
    },
    {
      id: 4,
      icon: <SamplingIcon />,
      title: 'Sampling Campaigns',
      description:
        'Product sampling campaigns that put your offerings directly in the hands of consumers, driving trial, awareness, and conversion effectively.',
      accent: '#F59E0B',
    },
    {
      id: 5,
      icon: <SellingIcon />,
      title: 'Selling Operations',
      description:
        'End-to-end selling operations with trained teams that drive sales, manage distribution, and deliver measurable results for your brand.',
      accent: '#10B981',
    },
    {
      id: 6,
      icon: <EventIcon />,
      title: 'Corporate & Public Events',
      description:
        'From corporate gatherings to large-scale public events, we plan, manage, and execute seamless experiences that leave lasting impressions.',
      accent: '#06B6D4',
    },
    {
      id: 7,
      icon: <GovernmentIcon />,
      title: 'Government & Institutional Activations',
      description:
        'Specialized activations for government and institutional clients, leveraging our strong relationships and expertise in public sector engagement.',
      accent: '#EF4444',
    },
    {
      id: 8,
      icon: <PromoterIcon />,
      title: 'Promoter Deployment Projects',
      description:
        'Long-term promoter deployment solutions with trained brand ambassadors who represent your brand professionally across retail and field locations.',
      accent: '#14B8A6',
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
          background: transparent;
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
          color: #f20000;
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
          background: #ff0505;
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
          background: linear-gradient(135deg, #f53d00, #60fa4b, #f3ff06);
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
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          align-items: stretch;
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
          height: 100%;
          min-height: 350px;
          display: flex;
          flex-direction: column;
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
          display: flex;
          flex-direction: column;
          flex: 1;
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
          flex: 1;
        }

        .card-footer {
          display: flex;
          align-items: center;
          margin-top: auto;
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

        /* ========== LARGE DESKTOP (1200px - 1400px) ========== */
        @media screen and (max-width: 1400px) {
          .services-grid {
            grid-template-columns: repeat(4, 1fr);
            gap: 1.25rem;
          }

          .card-inner {
            padding: 1.75rem;
            min-height: 300px;
          }
        }

        /* ========== TABLET LANDSCAPE (1024px - 1200px) ========== */
        @media screen and (max-width: 1200px) {
          .services-section {
            padding: 5rem 1.5rem;
          }

          .services-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }

          .card-inner {
            padding: 2rem;
            min-height: 320px;
          }

          .section-header {
            margin-bottom: 4rem;
          }
        }

        /* ========== TABLET PORTRAIT (768px - 1024px) ========== */
        @media screen and (max-width: 1024px) {
          .services-section {
            padding: 4rem 1.5rem;
          }

          .services-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }

          .card-inner {
            padding: 1.75rem;
            min-height: 300px;
            border-radius: 20px;
          }

          .icon-wrapper {
            width: 70px;
            height: 70px;
            margin-bottom: 1.25rem;
          }

          .icon-wrapper svg {
            width: 40px;
            height: 40px;
          }

          .card-title {
            font-size: 1.35rem;
            margin-bottom: 0.875rem;
          }

          .card-description {
            font-size: 0.95rem;
            line-height: 1.6;
            margin-bottom: 1.25rem;
          }

          .section-header {
            margin-bottom: 3.5rem;
          }

          .section-subtitle {
            font-size: 1rem;
            max-width: 500px;
          }

          .corner-accent {
            width: 80px;
            height: 80px;
          }

          .card-inner:hover .corner-accent {
            width: 100px;
            height: 100px;
          }
        }

        /* ========== MOBILE LANDSCAPE / LARGE MOBILE (576px - 767px) ========== */
        @media screen and (max-width: 767px) {
          .services-section {
            padding: 3.5rem 1.25rem;
          }

          .services-grid {
            grid-template-columns: 1fr;
            gap: 1.25rem;
            max-width: 500px;
            margin: 0 auto;
          }

          .card-inner {
            padding: 1.75rem;
            min-height: auto;
            border-radius: 18px;
          }

          /* Disable hover effects on mobile - use active state instead */
          .card-inner:hover {
            transform: none;
          }

          .card-inner:active {
            transform: scale(0.98);
            border-color: var(--accent);
          }

          .icon-wrapper {
            width: 65px;
            height: 65px;
            margin-bottom: 1rem;
          }

          .icon-wrapper svg {
            width: 36px;
            height: 36px;
          }

          .icon-ring-2 {
            inset: -6px;
          }

          .card-title {
            font-size: 1.25rem;
            margin-bottom: 0.75rem;
          }

          .card-description {
            font-size: 0.9rem;
            line-height: 1.6;
            margin-bottom: 1rem;
          }

          .section-header {
            margin-bottom: 3rem;
          }

          .section-label {
            font-size: 0.75rem;
            padding: 0.4rem 1rem;
            gap: 0.5rem;
          }

          .section-label::before {
            width: 6px;
            height: 6px;
          }

          .section-title {
            margin-bottom: 1.25rem;
          }

          .section-subtitle {
            font-size: 0.95rem;
            line-height: 1.6;
            padding: 0 0.5rem;
          }

          .learn-more {
            font-size: 0.8rem;
          }

          .arrow-icon {
            width: 18px;
            height: 18px;
          }

          .corner-accent {
            width: 70px;
            height: 70px;
          }

          /* Reduce particle effects on mobile for performance */
          .particle {
            width: 3px;
            height: 3px;
          }

          /* Disable glow rotation animation on mobile */
          .card-inner:hover .card-glow {
            animation: none;
          }
        }

        /* ========== SMALL MOBILE (up to 480px) ========== */
        @media screen and (max-width: 480px) {
          .services-section {
            padding: 3rem 1rem;
          }

          .services-grid {
            gap: 1rem;
          }

          .card-inner {
            padding: 1.5rem;
            border-radius: 16px;
          }

          .icon-wrapper {
            width: 60px;
            height: 60px;
            margin-bottom: 1rem;
          }

          .icon-wrapper svg {
            width: 32px;
            height: 32px;
          }

          .icon-ring {
            border-width: 1.5px;
            border-radius: 16px;
          }

          .icon-ring-2 {
            inset: -5px;
            border-radius: 18px;
          }

          .card-title {
            font-size: 1.15rem;
            margin-bottom: 0.625rem;
          }

          .card-description {
            font-size: 0.875rem;
            line-height: 1.55;
            margin-bottom: 0.875rem;
          }

          .section-header {
            margin-bottom: 2.5rem;
          }

          .section-label {
            font-size: 0.7rem;
            padding: 0.35rem 0.875rem;
            margin-bottom: 1rem;
          }

          .section-subtitle {
            font-size: 0.9rem;
            line-height: 1.55;
          }

          .learn-more {
            font-size: 0.75rem;
            gap: 0.375rem;
          }

          .arrow-icon {
            width: 16px;
            height: 16px;
          }

          .corner-accent {
            width: 60px;
            height: 60px;
          }

          /* Hide particles on very small screens for performance */
          .particles {
            display: none;
          }

          /* Simplify card background effects */
          .card-glow {
            display: none;
          }
        }

        /* ========== EXTRA SMALL MOBILE (up to 360px) ========== */
        @media screen and (max-width: 360px) {
          .services-section {
            padding: 2.5rem 0.75rem;
          }

          .card-inner {
            padding: 1.25rem;
            border-radius: 14px;
          }

          .icon-wrapper {
            width: 55px;
            height: 55px;
          }

          .icon-wrapper svg {
            width: 28px;
            height: 28px;
          }

          .card-title {
            font-size: 1.1rem;
          }

          .card-description {
            font-size: 0.85rem;
          }

          .section-label {
            font-size: 0.65rem;
          }

          .section-subtitle {
            font-size: 0.85rem;
          }
        }

        /* ========== REDUCED MOTION (Accessibility) ========== */
        @media (prefers-reduced-motion: reduce) {
          .card-inner {
            transition: none;
          }

          .card-inner.animate-in {
            transform: none;
            opacity: 1;
            transition-delay: 0s;
          }

          .section-label,
          .section-title,
          .section-subtitle {
            animation: none;
            opacity: 1;
            transform: none;
          }

          .icon-wrapper {
            transition: none;
          }

          .card-glow,
          .particle,
          .corner-accent {
            animation: none;
          }

          .section-label::before {
            animation: none;
          }
        }

        /* ========== TOUCH DEVICE OPTIMIZATIONS ========== */
        @media (hover: none) and (pointer: coarse) {
          .card-inner:hover {
            transform: none;
            border-color: var(--border-color);
            box-shadow: none;
          }

          .card-inner:hover .card-title {
            color: var(--text-primary);
          }

          .card-inner:hover .card-bg,
          .card-inner:hover .card-glow {
            opacity: 0;
          }

          .card-inner:hover .particle {
            opacity: 0;
          }

          .card-inner:hover .corner-accent {
            width: 100px;
            height: 100px;
            opacity: 0.1;
          }

          .icon-wrapper.hovered {
            transform: none;
          }

          .icon-wrapper.hovered .icon-ring,
          .icon-wrapper.hovered .icon-ring-2 {
            transform: none;
            opacity: 0.3;
          }

          /* Active state for touch */
          .card-inner:active {
            transform: scale(0.98);
            border-color: var(--accent);
            transition: transform 0.1s ease;
          }
        }

        /* ========== LANDSCAPE ORIENTATION ON MOBILE ========== */
        @media screen and (max-height: 500px) and (orientation: landscape) {
          .services-section {
            padding: 2rem 1.5rem;
          }

          .section-header {
            margin-bottom: 2rem;
          }

          .services-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
          }

          .card-inner {
            min-height: auto;
            padding: 1.25rem;
          }

          .icon-wrapper {
            width: 50px;
            height: 50px;
            margin-bottom: 0.75rem;
          }

          .icon-wrapper svg {
            width: 28px;
            height: 28px;
          }

          .card-title {
            font-size: 1rem;
            margin-bottom: 0.5rem;
          }

          .card-description {
            font-size: 0.8rem;
            line-height: 1.4;
            margin-bottom: 0.75rem;
          }
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
              Your <span>360°</span> Brand Partner
            </h2>
            <p className="section-subtitle">
              From concept to execution, we deliver end-to-end brand activation
              and experiential marketing solutions across all 9 provinces of
              Sri Lanka.
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