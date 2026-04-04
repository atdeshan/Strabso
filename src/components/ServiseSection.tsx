import React, { useEffect, useRef, useState } from 'react';

// Types
interface Service {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  accent: string;
  highlights: string[];
  stats: { value: string; label: string }[];
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

// Service Modal Component
const ServiceModal: React.FC<{ service: Service; onClose: () => void }> = ({ service, onClose }) => {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div
        className="modal-panel"
        style={{ '--accent': service.accent } as React.CSSProperties}
        onClick={e => e.stopPropagation()}
      >
        <div className="modal-glow" />
        <button className="modal-close" onClick={onClose} aria-label="Close">
          <svg viewBox="0 0 24 24" fill="none" width="20" height="20">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        <div className="modal-header-row">
          <div className="modal-icon-wrapper">
            <div className="modal-icon-ring" />
            {service.icon}
          </div>
          <div>
            <h2 className="modal-title">{service.title}</h2>
            <div className="modal-divider" />
          </div>
        </div>

        <p className="modal-description">{service.description}</p>

        {/* Stats */}
        <div className="modal-stats">
          {service.stats.map((s, i) => (
            <div key={i} className="modal-stat">
              <span className="modal-stat-value">{s.value}</span>
              <span className="modal-stat-label">{s.label}</span>
            </div>
          ))}
        </div>

        {/* Highlights */}
        <div className="modal-highlights">
          <p className="modal-highlights-title">What's included</p>
          <ul className="modal-highlights-list">
            {service.highlights.map((h, i) => (
              <li key={i} className="modal-highlight-item">
                <span className="modal-highlight-dot" />
                {h}
              </li>
            ))}
          </ul>
        </div>

        <button className="modal-cta" onClick={onClose}>
          Got it
        </button>
      </div>
    </div>
  );
};

// Service Card Component
const ServiceCard: React.FC<{ service: Service; index: number; isInView: boolean; onExplore: (service: Service) => void }> = ({
  service,
  index,
  isInView,
  onExplore,
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
        <div className="card-bg" />
        <div className="card-glow" />

        <div className="particles">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="particle" style={{ '--i': i } as React.CSSProperties} />
          ))}
        </div>

        <div className="card-content">
          <div className={`icon-wrapper ${isHovered ? 'hovered' : ''}`}>
            <div className="icon-ring" />
            <div className="icon-ring icon-ring-2" />
            {service.icon}
          </div>

          <h3 className="card-title">{service.title}</h3>
          <p className="card-description">{service.description}</p>

          <div className="card-footer">
            <button className="learn-more" onClick={() => onExplore(service)}>
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
            </button>
          </div>
        </div>

        <div className="corner-accent" />
      </div>
    </div>
  );
};

// Main Component
const ServicesSection: React.FC = () => {
  const { ref, isInView } = useInView(0.1);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const services: Service[] = [
    {
      id: 1,
      icon: <BrandActivationIcon />,
      title: 'Brand Activations',
      description:
        'We bring your brand to life through engaging, on-ground experiences that capture attention, create emotional impact, and inspire meaningful connections with your target audience.',
      accent: '#4294f7',
      highlights: [
        'Tailored on-ground activation strategies',
        'Trained brand ambassador teams',
        'Real-time performance tracking',
        'Post-activation analytics & reporting',
      ],
      stats: [
        { value: '200+', label: 'Activations Done' },
        { value: '9', label: 'Provinces Covered' },
        { value: '98%', label: 'Client Satisfaction' },
      ],
    },
    {
      id: 2,
      icon: <MallIcon />,
      title: 'Mall Activations',
      description:
        'Strategic mall activations that maximize footfall and engagement, creating memorable brand experiences in high-traffic retail environments across Sri Lanka.',
      accent: '#8B5CF6',
      highlights: [
        'Premium mall locations island-wide',
        'Interactive consumer engagement zones',
        'Footfall & conversion measurement',
        'Fully managed setup and teardown',
      ],
      stats: [
        { value: '50+', label: 'Mall Venues' },
        { value: '1M+', label: 'Consumers Reached' },
        { value: '3x', label: 'Avg. Footfall Boost' },
      ],
    },
    {
      id: 3,
      icon: <RoadshowIcon />,
      title: 'Roadshows & SMMT Activations',
      description:
        'Mobile marketing excellence with nationwide roadshows and SMMT activations, taking your brand directly to communities across all 9 provinces.',
      accent: '#EC4899',
      highlights: [
        'Full nationwide route planning',
        'Custom branded vehicles & structures',
        'Community engagement at grassroots level',
        'Live reporting from each location',
      ],
      stats: [
        { value: '9', label: 'Provinces Reached' },
        { value: '300+', label: 'Locations Visited' },
        { value: '500K+', label: 'People Engaged' },
      ],
    },
    {
      id: 4,
      icon: <SamplingIcon />,
      title: 'Sampling Campaigns',
      description:
        'Product sampling campaigns that put your offerings directly in the hands of consumers, driving trial, awareness, and conversion effectively.',
      accent: '#F59E0B',
      highlights: [
        'Targeted demographic profiling',
        'High-volume sample distribution',
        'Consumer feedback collection',
        'Conversion rate optimisation',
      ],
      stats: [
        { value: '2M+', label: 'Samples Distributed' },
        { value: '40%', label: 'Avg. Trial-to-Purchase' },
        { value: '100+', label: 'Brands Supported' },
      ],
    },
    {
      id: 5,
      icon: <SellingIcon />,
      title: 'Selling Operations',
      description:
        'End-to-end selling operations with trained teams that drive sales, manage distribution, and deliver measurable results for your brand.',
      accent: '#10B981',
      highlights: [
        'Dedicated trained sales teams',
        'Territory-based coverage planning',
        'Daily sales reporting & KPIs',
        'Flexible short & long-term deployment',
      ],
      stats: [
        { value: '150+', label: 'Sales Specialists' },
        { value: '25%', label: 'Avg. Sales Uplift' },
        { value: '60+', label: 'Active Clients' },
      ],
    },
    {
      id: 6,
      icon: <EventIcon />,
      title: 'Corporate & Public Events',
      description:
        'From corporate gatherings to large-scale public events, we plan, manage, and execute seamless experiences that leave lasting impressions.',
      accent: '#06B6D4',
      highlights: [
        'End-to-end event planning & logistics',
        'Venue sourcing and setup',
        'AV, staging & production management',
        'Guest experience & crowd management',
      ],
      stats: [
        { value: '120+', label: 'Events Executed' },
        { value: '50K+', label: 'Max Event Attendance' },
        { value: '100%', label: 'On-time Delivery' },
      ],
    },
    {
      id: 7,
      icon: <GovernmentIcon />,
      title: 'Government & Institutional Activations',
      description:
        'Specialized activations for government and institutional clients, leveraging our strong relationships and expertise in public sector engagement.',
      accent: '#EF4444',
      highlights: [
        'Deep public sector expertise',
        'Compliance-ready execution frameworks',
        'Multi-stakeholder coordination',
        'Nationwide institutional reach',
      ],
      stats: [
        { value: '30+', label: 'Govt. Projects' },
        { value: '25', label: 'Districts Covered' },
        { value: '10+', label: 'Ministries Served' },
      ],
    },
    {
      id: 8,
      icon: <PromoterIcon />,
      title: 'Promoter Deployment Projects',
      description:
        'Long-term promoter deployment solutions with trained brand ambassadors who represent your brand professionally across retail and field locations.',
      accent: '#14B8A6',
      highlights: [
        'Rigorous promoter screening & training',
        'Ongoing performance monitoring',
        'Retail & field deployment flexibility',
        'Dedicated account management',
      ],
      stats: [
        { value: '500+', label: 'Active Promoters' },
        { value: '1000+', label: 'Retail Outlets Covered' },
        { value: '95%', label: 'Retention Rate' },
      ],
    },
  ];

  return (
    <>
      <style>{`

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

        /* ========== MODAL ========== */
        .modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.75);
          backdrop-filter: blur(8px);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
          animation: backdropIn 0.25s ease;
        }

        @keyframes backdropIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .modal-panel {
          position: relative;
          background: linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(15, 23, 42, 0.85));
          border: 1px solid var(--accent);
          border-radius: 28px;
          padding: 3rem 2.5rem 2.5rem;
          max-width: 520px;
          width: 100%;
          overflow: hidden;
          animation: modalIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        @keyframes modalIn {
          from { opacity: 0; transform: scale(0.85) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }

        .modal-glow {
          position: absolute;
          top: -60%;
          left: -40%;
          width: 180%;
          height: 180%;
          background: radial-gradient(circle, var(--accent), transparent 55%);
          opacity: 0.08;
          pointer-events: none;
        }

        .modal-close {
          position: absolute;
          top: 1.25rem;
          right: 1.25rem;
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 50%;
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255,255,255,0.6);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .modal-close:hover {
          background: rgba(255,255,255,0.14);
          color: white;
        }

        .modal-icon-wrapper {
          position: relative;
          width: 80px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent);
          margin-bottom: 1.5rem;
        }

        .modal-icon-ring {
          position: absolute;
          inset: 0;
          border: 2px solid var(--accent);
          border-radius: 20px;
          opacity: 0.35;
        }

        .modal-title {
          font-family: 'Syne', sans-serif;
          font-size: 1.75rem;
          font-weight: 700;
          color: #f8fafc;
          margin-bottom: 1rem;
        }

        .modal-divider {
          width: 48px;
          height: 3px;
          background: var(--accent);
          border-radius: 2px;
          margin-bottom: 1.25rem;
          opacity: 0.8;
        }

        .modal-description {
          font-size: 1.05rem;
          line-height: 1.75;
          color: rgba(255,255,255,0.72);
          margin-bottom: 2rem;
        }

        .modal-header-row {
          display: flex;
          align-items: flex-start;
          gap: 1.25rem;
          margin-bottom: 1rem;
        }

        .modal-stats {
          display: flex;
          gap: 0;
          margin-bottom: 1.5rem;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 16px;
          overflow: hidden;
        }

        .modal-stat {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 1rem 0.5rem;
          border-right: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.03);
        }

        .modal-stat:last-child {
          border-right: none;
        }

        .modal-stat-value {
          font-family: 'Syne', sans-serif;
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--accent);
          line-height: 1;
          margin-bottom: 0.35rem;
        }

        .modal-stat-label {
          font-size: 0.72rem;
          color: rgba(255,255,255,0.5);
          text-align: center;
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }

        .modal-highlights {
          margin-bottom: 2rem;
        }

        .modal-highlights-title {
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: rgba(255,255,255,0.4);
          margin-bottom: 0.75rem;
        }

        .modal-highlights-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .modal-highlight-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.95rem;
          color: rgba(255,255,255,0.75);
          line-height: 1.4;
        }

        .modal-highlight-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--accent);
          flex-shrink: 0;
          opacity: 0.85;
        }

        .modal-cta {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.85rem 2rem;
          background: var(--accent);
          color: white;
          font-size: 0.95rem;
          font-weight: 600;
          border: none;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.25s ease;
          letter-spacing: 0.02em;
        }

        .modal-cta:hover {
          opacity: 0.88;
          transform: translateY(-2px);
        }

        .learn-more {
          background: none;
          border: none;
          padding: 0;
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
                onExplore={setSelectedService}
              />
            ))}
          </div>
        </div>
      </section>

      {selectedService && (
        <ServiceModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
    </>
  );
};

export default ServicesSection;