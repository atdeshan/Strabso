import React, { useEffect, useRef, useState } from 'react';

const AboutUs: React.FC = () => {
  const statsRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const animatedElements = document.querySelectorAll('.fade-up');
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const values = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="value-svg-icon">
          <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: 'Innovation',
      description: 'Innovative event and activation concepts that set your brand apart from the competition.',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="value-svg-icon">
          <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: 'Brand-First',
      description: 'Deep brand-first strategic thinking — not just BTL execution, but complete brand elevation.',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="value-svg-icon">
          <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: 'Regional Reach',
      description: 'Strong North & East regional resource network with island-wide coverage across Sri Lanka.',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="value-svg-icon">
          <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: 'Government Relations',
      description: 'Government sector approvals, involvement & collaborations for seamless execution.',
    },
  ];

  const milestones = [
    { year: '2020', event: 'Strabso Founded', description: 'Started with a vision to transform brand activations in Sri Lanka' },
    { year: '2021', event: 'Major Brand Partnerships', description: 'Partnered with Coca-Cola, HNB, and leading FMCG brands' },
    { year: '2022', event: 'North & East Expansion', description: 'Established strong presence in Northern and Eastern regions' },
    { year: '2023', event: 'Corporate Events', description: 'Executed Coca-Cola Annual Sales Conference and Award Ceremonies' },
    { year: '2024', event: '360° Solutions', description: 'Launched complete end-to-end brand activation services' },
    { year: '2025', event: 'Industry Leader', description: 'Targeting top 5 agency position with 360° client solutions' },
  ];

  return (
    <div className="about-us-page">
      <style>{`

        .about-us-page {
          --color-bg: #ffffff;
          --color-bg-secondary: rgba(0, 0, 0, 0.03);
          --color-text: #111111;
          --color-text-muted: #666666;
          --color-accent: #e87f2a;
          --color-accent-hover: #c0522a;
          --color-border: rgba(0, 0, 0, 0.1);
          --font-display: 'Playfair Display', Georgia, serif;
          --font-body: 'Outfit', sans-serif;

          background-color: var(--color-bg);
          color: var(--color-text);
          font-family: var(--font-body);
          min-height: 100vh;
          overflow-x: hidden;
        }

        /* Value SVG Icon Styling */
        .value-svg-icon {
          width: 32px;
          height: 32px;
        }

        /* Hero Section */
        .hero-section {
          position: relative;
          min-height: 90vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          padding: 2rem;
        }

        .hero-bg {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(249, 115, 22, 0.1) 0%, transparent 50%),
                      linear-gradient(225deg, rgba(139, 92, 246, 0.08) 0%, transparent 50%);
          pointer-events: none;
        }

        .hero-bg::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px);
          background-size: 50px 50px;
          pointer-events: none;
        }

        .hero-content {
          position: relative;
          z-index: 10;
          text-align: center;
          max-width: 900px;
          padding: 2rem;
        }

        .hero-label {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1.25rem;
          background: rgba(249, 115, 22, 0.15);
          border: 1px solid rgba(249, 115, 22, 0.3);
          border-radius: 100px;
          font-size: 0.875rem;
          color: var(--color-accent);
          margin-bottom: 2rem;
          animation: fadeInDown 0.8s ease-out;
        }

        .hero-title {
          font-family: var(--font-display);
          font-size: clamp(2.5rem, 8vw, 6rem);
          font-weight: 500;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          animation: fadeInUp 0.8s ease-out 0.2s both;
        }

        .hero-title .accent {
          font-style: italic;
          color: var(--color-accent);
        }

        .hero-description {
          font-size: clamp(1rem, 3vw, 1.25rem);
          color: var(--color-text-muted);
          max-width: 600px;
          margin: 0 auto 3rem;
          line-height: 1.8;
          animation: fadeInUp 0.8s ease-out 0.4s both;
        }

        .scroll-indicator {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          color: var(--color-text-muted);
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          animation: fadeIn 1s ease-out 1s both;
        }

        .scroll-line {
          width: 1px;
          height: 60px;
          background: linear-gradient(to bottom, var(--color-accent), transparent);
          animation: scrollPulse 2s ease-in-out infinite;
        }

        /* Story Section */
        .story-section {
          padding: 6rem 1.5rem;
          position: relative;
        }

        .story-container {
          max-width: 1100px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 3rem;
        }

        .story-heading {
          text-align: center;
        }

        .story-heading h2 {
          font-family: var(--font-display);
          font-size: clamp(2rem, 5vw, 3rem);
          font-weight: 500;
          line-height: 1.2;
          margin-bottom: 1rem;
        }

        .story-heading h2 .accent {
          font-style: italic;
          color: var(--color-accent);
        }

        .story-heading-line {
          width: 60px;
          height: 2px;
          background: var(--color-accent);
          margin: 0 auto;
          opacity: 0.6;
        }

        .vision-mission-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          width: 100%;
        }

        .vm-card {
          padding: 2.5rem;
          border: 1px solid rgba(0,0,0,0.07);
          border-radius: 16px;
          background: rgba(0,0,0,0.02);
          backdrop-filter: blur(10px);
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          transition: border-color 0.3s ease, transform 0.3s ease;
        }

        .vm-card:hover {
          border-color: rgba(0,0,0,0.14);
          transform: translateY(-4px);
        }

        .vm-card-icon {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          background: rgba(0,0,0,0.05);
          color: var(--color-accent);
          flex-shrink: 0;
        }

        .vm-card-label {
          font-size: 0.75rem;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--color-accent);
          font-weight: 500;
        }

        .vm-card-text {
          color: var(--color-text-muted);
          font-size: clamp(0.95rem, 1.8vw, 1.05rem);
          line-height: 1.9;
        }

        .founder-quote {
          width: 100%;
          padding: 2rem 2.5rem;
          background: var(--color-bg-secondary);
          border-left: 3px solid var(--color-accent);
          border-radius: 0 16px 16px 0;
        }

        .founder-quote blockquote {
          font-family: var(--font-display);
          font-style: italic;
          font-size: clamp(1rem, 2.5vw, 1.25rem);
          line-height: 1.7;
          margin-bottom: 1rem;
        }

        .founder-quote cite {
          color: var(--color-accent);
          font-style: normal;
          font-size: 0.9rem;
        }

        /* Values Section */
        .values-section {
          padding: 6rem 1.5rem;
          background: var(--color-bg-secondary);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          position: relative;
          overflow: hidden;
        }

        .values-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--color-border), transparent);
        }

        .section-header {
          text-align: center;
          max-width: 600px;
          margin: 0 auto 4rem;
          padding: 0 1rem;
        }

        .section-header h2 {
          font-family: var(--font-display);
          font-size: clamp(2rem, 5vw, 2.75rem);
          font-weight: 500;
          margin-bottom: 1rem;
        }

        .section-header h2 .accent {
          font-style: italic;
          color: var(--color-accent);
        }

        .section-header p {
          color: var(--color-text-muted);
          font-size: clamp(0.95rem, 2vw, 1.1rem);
          line-height: 1.7;
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .value-card {
          padding: 2rem;
          background: var(--color-bg);
          border: 1px solid var(--color-border);
          border-radius: 16px;
          text-align: center;
          transition: all 0.4s ease;
        }

        .value-card:hover {
          border-color: var(--color-accent);
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(249, 115, 22, 0.1);
        }

        .value-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 64px;
          height: 64px;
          background: linear-gradient(135deg, rgba(249, 115, 22, 0.2), rgba(249, 115, 22, 0.05));
          border-radius: 50%;
          color: var(--color-accent);
          margin-bottom: 1.5rem;
        }

        .value-card h3 {
          font-family: var(--font-display);
          font-size: 1.35rem;
          font-weight: 500;
          margin-bottom: 0.75rem;
        }

        .value-card p {
          color: var(--color-text-muted);
          font-size: 0.9rem;
          line-height: 1.7;
        }

        /* Timeline Section */
        .timeline-section {
          padding: 6rem 1.5rem;
          position: relative;
        }

        .timeline-container {
          max-width: 900px;
          margin: 0 auto;
          position: relative;
        }

        .timeline-line {
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(to bottom, var(--color-accent), var(--color-border));
          transform: translateX(-50%);
        }

        .timeline-items {
          display: flex;
          flex-direction: column;
          gap: 3rem;
        }

        .timeline-item {
          display: flex;
          align-items: center;
          gap: 3rem;
        }

        .timeline-item:nth-child(even) {
          flex-direction: row-reverse;
        }

        .timeline-content {
          flex: 1;
          padding: 1.5rem;
          background: var(--color-bg-secondary);
          border-radius: 16px;
          border: 1px solid var(--color-border);
          transition: all 0.3s ease;
        }

        .timeline-content:hover {
          border-color: var(--color-accent);
        }

        .timeline-year {
          font-family: var(--font-display);
          font-size: clamp(1.75rem, 4vw, 2.5rem);
          font-weight: 600;
          color: var(--color-accent);
          margin-bottom: 0.5rem;
        }

        .timeline-event {
          font-size: clamp(1rem, 2.5vw, 1.25rem);
          font-weight: 500;
          margin-bottom: 0.5rem;
        }

        .timeline-description {
          color: var(--color-text-muted);
          font-size: 0.9rem;
        }

        .timeline-dot {
          width: 16px;
          height: 16px;
          background: var(--color-accent);
          border-radius: 50%;
          flex-shrink: 0;
          position: relative;
          z-index: 10;
          box-shadow: 0 0 20px rgba(249, 115, 22, 0.5);
        }

        /* Stats Banner */
        .stats-banner {
          padding: 5rem 1.5rem;
          background: linear-gradient(135deg, rgba(232, 127, 42, 0.07) 0%, rgba(245, 244, 240, 0.8) 100%);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border-top: 1px solid var(--color-border);
          border-bottom: 1px solid var(--color-border);
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
          max-width: 1000px;
          margin: 0 auto;
          text-align: center;
        }

        .stat-item h3 {
          font-family: var(--font-display);
          font-size: clamp(2.5rem, 6vw, 4rem);
          font-weight: 600;
          color: var(--color-accent);
          margin-bottom: 0.5rem;
        }

        .stat-item p {
          color: var(--color-text-muted);
          font-size: clamp(0.8rem, 2vw, 1rem);
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        /* CTA Section */
        .cta-section {
          padding: 6rem 1.5rem;
          text-align: center;
          position: relative;
          overflow: hidden;
          background: linear-gradient(160deg, #fff8f2 0%, #fdebd4 45%, #fad9b0 100%);
        }

        .cta-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 60% 40%, rgba(232, 127, 42, 0.18), transparent 65%);
          pointer-events: none;
        }

        .cta-content {
          position: relative;
          z-index: 10;
          max-width: 700px;
          margin: 0 auto;
          padding: 0 1rem;
        }

        .cta-title {
          font-family: var(--font-display);
          font-size: clamp(2rem, 6vw, 3.5rem);
          font-weight: 500;
          margin-bottom: 1.5rem;
          line-height: 1.2;
        }

        .cta-title .accent {
          font-style: italic;
          color: var(--color-accent);
        }

        .cta-description {
          color: var(--color-text-muted);
          font-size: clamp(1rem, 2.5vw, 1.2rem);
          line-height: 1.8;
          margin-bottom: 2rem;
        }

        .cta-button {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem 2rem;
          background: var(--color-accent);
          color: var(--color-bg);
          font-weight: 500;
          font-size: 1rem;
          border: none;
          border-radius: 100px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .cta-button:hover {
          background: var(--color-accent-hover);
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(249, 115, 22, 0.3);
        }

        .cta-button svg {
          width: 20px;
          height: 20px;
          transition: transform 0.3s ease;
        }

        .cta-button:hover svg {
          transform: translateX(4px);
        }

        /* Animations */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes scrollPulse {
          0%, 100% { opacity: 1; transform: scaleY(1); }
          50% { opacity: 0.5; transform: scaleY(0.8); }
        }

        .fade-up {
          opacity: 0;
          transform: translateY(40px);
          transition: all 0.8s ease-out;
        }

        .fade-up.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        /* ========== TABLET STYLES (768px - 1024px) ========== */
        @media (max-width: 1024px) {
          .hero-section {
            min-height: 80vh;
          }

          .hero-content {
            padding: 1.5rem;
          }

          .story-container {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .values-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.25rem;
          }

          .value-card {
            padding: 1.75rem;
          }

          .value-icon {
            width: 56px;
            height: 56px;
            margin-bottom: 1.25rem;
          }

          .value-svg-icon {
            width: 28px;
            height: 28px;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
          }

          .timeline-line {
            left: 24px;
          }

          .timeline-item,
          .timeline-item:nth-child(even) {
            flex-direction: row;
            gap: 1.5rem;
            padding-left: 0;
          }

          .timeline-dot {
            order: -1;
            margin-left: 16px;
          }

          .timeline-content {
            flex: 1;
          }

          .timeline-item > div:last-child {
            display: none;
          }

        }

        /* ========== MOBILE STYLES (up to 767px) ========== */
        @media (max-width: 767px) {
          .hero-section {
            min-height: 85vh;
            padding: 1rem;
          }

          .hero-content {
            padding: 1rem;
          }

          .hero-label {
            padding: 0.4rem 1rem;
            font-size: 0.75rem;
            margin-bottom: 1.5rem;
          }

          .hero-title {
            margin-bottom: 1.25rem;
          }

          .hero-description {
            margin-bottom: 2rem;
            line-height: 1.7;
          }

          .scroll-indicator {
            bottom: 1.5rem;
          }

          .scroll-line {
            height: 40px;
          }

          .story-section {
            padding: 4rem 1rem;
          }

          .story-container {
            gap: 2rem;
          }

          .vision-mission-grid {
            grid-template-columns: 1fr;
          }

          .vm-card {
            padding: 1.75rem;
          }

          .founder-quote {
            padding: 1.25rem 1.5rem;
          }

          .values-section {
            padding: 4rem 1rem;
          }

          .section-header {
            margin-bottom: 3rem;
          }

          .values-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .value-card {
            padding: 1.5rem;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .value-card:hover {
            transform: none;
          }

          .value-card:active {
            transform: scale(0.98);
          }

          .value-icon {
            width: 52px;
            height: 52px;
            margin-bottom: 1rem;
          }

          .value-svg-icon {
            width: 24px;
            height: 24px;
          }

          .value-card h3 {
            font-size: 1.25rem;
            margin-bottom: 0.5rem;
          }

          .value-card p {
            font-size: 0.85rem;
          }

          .timeline-section {
            padding: 4rem 1rem;
          }

          .timeline-line {
            left: 12px;
          }

          .timeline-items {
            gap: 2rem;
          }

          .timeline-item,
          .timeline-item:nth-child(even) {
            gap: 1rem;
          }

          .timeline-dot {
            width: 12px;
            height: 12px;
            margin-left: 6px;
          }

          .timeline-content {
            padding: 1.25rem;
          }

          .timeline-year {
            margin-bottom: 0.25rem;
          }

          .timeline-event {
            margin-bottom: 0.25rem;
          }

          .timeline-description {
            font-size: 0.85rem;
          }

          .stats-banner {
            padding: 3.5rem 1rem;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }

          .stat-item h3 {
            margin-bottom: 0.25rem;
          }

          .cta-section {
            padding: 4rem 1rem;
          }

          .cta-description {
            margin-bottom: 1.5rem;
          }

          .cta-button {
            padding: 0.875rem 1.75rem;
            font-size: 0.95rem;
          }
        }

        /* ========== SMALL MOBILE STYLES (up to 480px) ========== */
        @media (max-width: 480px) {
          .hero-section {
            min-height: 80vh;
          }

          .hero-label {
            padding: 0.35rem 0.875rem;
            font-size: 0.7rem;
            margin-bottom: 1.25rem;
          }

          .story-section {
            padding: 3rem 1rem;
          }

          .founder-quote {
            padding: 1rem;
          }

          .values-section {
            padding: 3rem 1rem;
          }

          .section-header {
            margin-bottom: 2.5rem;
          }

          .value-card {
            padding: 1.25rem;
          }

          .timeline-section {
            padding: 3rem 1rem;
          }

          .timeline-content {
            padding: 1rem;
          }

          .stats-banner {
            padding: 3rem 1rem;
          }

          .stats-grid {
            gap: 1.25rem;
          }

          .cta-section {
            padding: 3rem 1rem;
          }

          .cta-button {
            width: 100%;
            justify-content: center;
          }
        }

        /* ========== EXTRA SMALL MOBILE (up to 360px) ========== */
        @media (max-width: 360px) {
          .hero-content {
            padding: 0.75rem;
          }

          .timeline-line {
            left: 8px;
          }

          .timeline-dot {
            width: 10px;
            height: 10px;
            margin-left: 3px;
          }

          .timeline-item,
          .timeline-item:nth-child(even) {
            gap: 0.75rem;
          }
        }

        /* ========== TOUCH DEVICE OPTIMIZATIONS ========== */
        @media (hover: none) and (pointer: coarse) {
          .value-card:hover {
            transform: none;
            border-color: var(--color-border);
            box-shadow: none;
          }

          .value-card:active {
            transform: scale(0.98);
            border-color: var(--color-accent);
          }

          .timeline-content:hover {
            border-color: var(--color-border);
          }

          .timeline-content:active {
            border-color: var(--color-accent);
          }

          .cta-button:hover {
            transform: none;
            box-shadow: none;
          }

          .cta-button:active {
            transform: scale(0.98);
          }
        }

        /* ========== REDUCED MOTION ========== */
        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }

          .fade-up {
            opacity: 1;
            transform: none;
          }

          .scroll-line {
            animation: none;
          }
        }

        /* ========== LANDSCAPE MOBILE ========== */
        @media screen and (max-height: 500px) and (orientation: landscape) {
          .hero-section {
            min-height: 100vh;
            padding: 1rem 2rem;
          }

          .hero-content {
            padding: 1rem;
          }

          .hero-label {
            margin-bottom: 1rem;
          }

          .hero-description {
            margin-bottom: 1.5rem;
          }

          .scroll-indicator {
            display: none;
          }

          .story-container {
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
          }

          .values-grid {
            grid-template-columns: repeat(4, 1fr);
          }

          .value-card {
            padding: 1rem;
          }

          .stats-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        /* ========== HIGH DPI SCREENS ========== */
        @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
          .hero-bg::before {
            background-size: 40px 40px;
          }
        }
      `}</style>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-bg" />
        <div className="hero-content">
          <span className="hero-label">
            <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '16px', height: '16px' }}>
              <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
            </svg>
            Who We Are
          </span>
          <h1 className="hero-title">
            Your <span className="accent">360°</span> Brand Partner
          </h1>
          <p className="hero-description">
            Strabso is a full-service activation and events agency delivering end-to-end brand solutions with a strong presence across Sri Lanka, including the North and East regions.
          </p>
        </div>
        {!isMobile && (
          <div className="scroll-indicator">
            <span>Scroll to explore</span>
            <div className="scroll-line" />
          </div>
        )}
      </section>

      {/* Story Section */}
      <section className="story-section">
        <div className="story-container">
          {/* Heading */}
          <div className="story-heading fade-up">
            <h2>Our <span className="accent">Vision</span> & Mission</h2>
            <div className="story-heading-line" />
          </div>

          {/* Vision & Mission Cards */}
          <div className="vision-mission-grid fade-up">
            <div className="vm-card">
              <div className="vm-card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <circle cx="12" cy="12" r="3"/>
                  <line x1="12" y1="2" x2="12" y2="5"/>
                  <line x1="12" y1="19" x2="12" y2="22"/>
                  <line x1="2" y1="12" x2="5" y2="12"/>
                  <line x1="19" y1="12" x2="22" y2="12"/>
                </svg>
              </div>
              <span className="vm-card-label">Vision</span>
              <p className="vm-card-text">
                To identify ourselves as one of the top 5 agencies in the industry by 2025, while being the only agency providing a complete 360° solution to its clients.
              </p>
            </div>

            <div className="vm-card">
              <div className="vm-card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                </svg>
              </div>
              <span className="vm-card-label">Mission</span>
              <p className="vm-card-text">
                To provide clients with a 360° business solution, reducing operational hassle, building long-term trust, and delivering high-quality execution at every touchpoint.
              </p>
            </div>
          </div>

          {/* Founder Quote */}
          <div className="founder-quote fade-up">
            <blockquote>
              "At Strabo pvt ltd, we are driven to partnering with you to shape powerful brands and elevate them to new heights through bold events and impactful brand activations."
            </blockquote>
            <cite>— Rumesh Chandrakumar, Founder</cite>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="section-header fade-up">
          <h2>
            Our Key <span className="accent">Strengths</span>
          </h2>
          <p>
            What sets Strabso apart — our unique capabilities that deliver results for your brand.
          </p>
        </div>
        <div className="values-grid">
          {values.map((value, index) => (
            <div key={index} className="value-card fade-up" style={{ transitionDelay: `${index * 0.1}s` }}>
              <div className="value-icon">{value.icon}</div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Banner */}
      <section className="stats-banner" ref={statsRef}>
        <div className="stats-grid">
          <div className="stat-item fade-up">
            <h3>100+</h3>
            <p>Activations Delivered</p>
          </div>
          <div className="stat-item fade-up" style={{ transitionDelay: '0.1s' }}>
            <h3>25+</h3>
            <p>Major Brands</p>
          </div>
          <div className="stat-item fade-up" style={{ transitionDelay: '0.2s' }}>
            <h3>9</h3>
            <p>Provinces Covered</p>
          </div>
          <div className="stat-item fade-up" style={{ transitionDelay: '0.3s' }}>
            <h3>360°</h3>
            <p>Complete Solutions</p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="timeline-section">
        <div className="section-header fade-up">
          <h2>
            Our <span className="accent">Journey</span>
          </h2>
          <p>
            From humble beginnings to industry leadership, here's how we've grown.
          </p>
        </div>
        <div className="timeline-container">
          <div className="timeline-line" />
          <div className="timeline-items">
            {milestones.map((milestone, index) => (
              <div key={index} className="timeline-item fade-up">
                <div className="timeline-content">
                  <div className="timeline-year">{milestone.year}</div>
                  <div className="timeline-event">{milestone.event}</div>
                  <div className="timeline-description">{milestone.description}</div>
                </div>
                <div className="timeline-dot" />
                <div style={{ flex: 1 }} />
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content fade-up">
          <h2 className="cta-title">
            Ready to Create Something <span className="accent">Unforgettable</span>?
          </h2>
          <p className="cta-description">
            Let's collaborate to bring your next event to life. Whether you have a clear vision or just the spark of an idea, we're here to make it extraordinary.
          </p>
        </div>
      </section>

    </div>
  );
};

export default AboutUs;

