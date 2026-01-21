import React, { useEffect, useRef } from 'react';
import ContactUs from '../components/Contacts';

const AboutUs: React.FC = () => {
  const statsRef = useRef<HTMLDivElement>(null);

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

  const teamMembers = [
    {
      name: 'Sarah Mitchell',
      role: 'Founder & Creative Director',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop',
      description: 'With 15+ years in luxury events, Sarah brings visionary creativity to every project.',
    },
    {
      name: 'James Chen',
      role: 'Head of Operations',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop',
      description: 'James ensures flawless execution with military precision and genuine care.',
    },
    {
      name: 'Amara Okonkwo',
      role: 'Brand Experience Lead',
      image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=500&fit=crop',
      description: 'Amara transforms brand visions into immersive, unforgettable experiences.',
    },
    {
      name: 'David Rosenberg',
      role: 'Technical Director',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop',
      description: 'David orchestrates the technical magic that brings events to life.',
    },
  ];

  const values = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
          <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: 'Innovation',
      description: 'We push creative boundaries to deliver experiences that have never been seen before.',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
          <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: 'Passion',
      description: 'Every event is a labor of love, crafted with dedication and genuine enthusiasm.',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
          <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: 'Excellence',
      description: 'We accept nothing less than perfection in every detail, every moment, every time.',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
          <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: 'Collaboration',
      description: 'Your vision combined with our expertise creates something truly extraordinary.',
    },
  ];

  const milestones = [
    { year: '2015', event: 'Strabsol Founded', description: 'Started with a vision to transform brand experiences' },
    { year: '2017', event: 'First Major Festival', description: 'Produced Desert Nights with 10,000+ attendees' },
    { year: '2019', event: 'International Expansion', description: 'Opened offices in Dubai and Singapore' },
    { year: '2021', event: 'Industry Recognition', description: 'Won Best Event Agency at Global Awards' },
    { year: '2023', event: '500+ Events Milestone', description: 'Celebrated our landmark achievement' },
    { year: '2024', event: 'Innovation Hub Launch', description: 'Opened state-of-the-art creative studio' },
  ];

  return (
    <div className="about-us-page">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Outfit:wght@300;400;500;600&display=swap');

        .about-us-page {
          --color-bg: #0a0a0f;
          --color-bg-secondary: #12121a;
          --color-text: #ffffff;
          --color-text-muted: #a0a0b0;
          --color-accent: #f97316;
          --color-accent-hover: #fb923c;
          --color-border: rgba(255, 255, 255, 0.1);
          --font-display: 'Playfair Display', Georgia, serif;
          --font-body: 'Outfit', sans-serif;
          
          background-color: var(--color-bg);
          color: var(--color-text);
          font-family: var(--font-body);
          min-height: 100vh;
          overflow-x: hidden;
        }

        /* Hero Section */
        .hero-section {
          position: relative;
          min-height: 90vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .hero-bg {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(249, 115, 22, 0.15) 0%, transparent 50%),
                      linear-gradient(225deg, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
                      var(--color-bg);
        }

        .hero-bg::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px);
          background-size: 50px 50px;
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
          font-size: clamp(3rem, 8vw, 6rem);
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
          font-size: 1.25rem;
          color: var(--color-text-muted);
          max-width: 600px;
          margin: 0 auto 3rem;
          line-height: 1.8;
          animation: fadeInUp 0.8s ease-out 0.4s both;
        }

        .scroll-indicator {
          position: absolute;
          bottom: 3rem;
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
          padding: 8rem 2rem;
          position: relative;
        }

        .story-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6rem;
          align-items: center;
        }

        .story-image-wrapper {
          position: relative;
        }

        .story-image {
          width: 100%;
          height: 600px;
          object-fit: cover;
          border-radius: 12px;
        }

        .story-image-accent {
          position: absolute;
          bottom: -2rem;
          right: -2rem;
          width: 200px;
          height: 200px;
          border: 2px solid var(--color-accent);
          border-radius: 12px;
          z-index: -1;
        }

        .story-content h2 {
          font-family: var(--font-display);
          font-size: 3rem;
          font-weight: 500;
          margin-bottom: 2rem;
          line-height: 1.2;
        }

        .story-content h2 .accent {
          font-style: italic;
          color: var(--color-accent);
        }

        .story-content p {
          color: var(--color-text-muted);
          font-size: 1.1rem;
          line-height: 1.9;
          margin-bottom: 1.5rem;
        }

        .founder-quote {
          margin-top: 3rem;
          padding: 2rem;
          background: var(--color-bg-secondary);
          border-left: 3px solid var(--color-accent);
          border-radius: 0 12px 12px 0;
        }

        .founder-quote blockquote {
          font-family: var(--font-display);
          font-style: italic;
          font-size: 1.25rem;
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
          padding: 8rem 2rem;
          background: var(--color-bg-secondary);
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
          margin: 0 auto 5rem;
        }

        .section-header h2 {
          font-family: var(--font-display);
          font-size: 2.75rem;
          font-weight: 500;
          margin-bottom: 1rem;
        }

        .section-header h2 .accent {
          font-style: italic;
          color: var(--color-accent);
        }

        .section-header p {
          color: var(--color-text-muted);
          font-size: 1.1rem;
          line-height: 1.7;
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .value-card {
          padding: 2.5rem;
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
          font-size: 1.5rem;
          font-weight: 500;
          margin-bottom: 1rem;
        }

        .value-card p {
          color: var(--color-text-muted);
          font-size: 0.95rem;
          line-height: 1.7;
        }

        /* Timeline Section */
        .timeline-section {
          padding: 8rem 2rem;
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
          gap: 4rem;
        }

        .timeline-item {
          display: flex;
          align-items: center;
          gap: 4rem;
        }

        .timeline-item:nth-child(even) {
          flex-direction: row-reverse;
        }

        .timeline-content {
          flex: 1;
          padding: 2rem;
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
          font-size: 2.5rem;
          font-weight: 600;
          color: var(--color-accent);
          margin-bottom: 0.5rem;
        }

        .timeline-event {
          font-size: 1.25rem;
          font-weight: 500;
          margin-bottom: 0.5rem;
        }

        .timeline-description {
          color: var(--color-text-muted);
          font-size: 0.95rem;
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

        /* Team Section */
        .team-section {
          padding: 8rem 2rem;
          background: var(--color-bg-secondary);
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .team-card {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          aspect-ratio: 3/4;
          group: team-card;
        }

        .team-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .team-card:hover img {
          transform: scale(1.1);
        }

        .team-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(10, 10, 15, 0.95) 0%, rgba(10, 10, 15, 0.5) 50%, transparent 100%);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 1.5rem;
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .team-card:hover .team-overlay {
          opacity: 1;
        }

        .team-info {
          transform: translateY(20px);
          transition: transform 0.4s ease;
        }

        .team-card:hover .team-info {
          transform: translateY(0);
        }

        .team-name {
          font-family: var(--font-display);
          font-size: 1.5rem;
          font-weight: 500;
          margin-bottom: 0.25rem;
        }

        .team-role {
          color: var(--color-accent);
          font-size: 0.9rem;
          margin-bottom: 0.75rem;
        }

        .team-description {
          color: var(--color-text-muted);
          font-size: 0.85rem;
          line-height: 1.6;
        }

        /* Stats Banner */
        .stats-banner {
          padding: 6rem 2rem;
          background: linear-gradient(135deg, rgba(249, 115, 22, 0.1) 0%, var(--color-bg) 100%);
          border-top: 1px solid var(--color-border);
          border-bottom: 1px solid var(--color-border);
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 3rem;
          max-width: 1000px;
          margin: 0 auto;
          text-align: center;
        }

        .stat-item h3 {
          font-family: var(--font-display);
          font-size: 4rem;
          font-weight: 600;
          color: var(--color-accent);
          margin-bottom: 0.5rem;
        }

        .stat-item p {
          color: var(--color-text-muted);
          font-size: 1rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        /* CTA Section */
        .cta-section {
          padding: 8rem 2rem;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .cta-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, rgba(249, 115, 22, 0.15), transparent 70%);
        }

        .cta-content {
          position: relative;
          z-index: 10;
          max-width: 700px;
          margin: 0 auto;
        }

        .cta-title {
          font-family: var(--font-display);
          font-size: 3.5rem;
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
          font-size: 1.2rem;
          line-height: 1.8;
          margin-bottom: 3rem;
        }

        .cta-button {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem 2.5rem;
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

        /* Responsive Styles */
        @media (max-width: 1024px) {
          .story-container {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .story-image {
            height: 400px;
          }

          .values-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .team-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
          }

          .timeline-line {
            left: 20px;
          }

          .timeline-item,
          .timeline-item:nth-child(even) {
            flex-direction: row;
            gap: 2rem;
          }

          .timeline-dot {
            order: -1;
          }
        }

        @media (max-width: 640px) {
          .hero-title {
            font-size: 2.5rem;
          }

          .values-grid {
            grid-template-columns: 1fr;
          }

          .team-grid {
            grid-template-columns: 1fr;
          }

          .stats-grid {
            grid-template-columns: 1fr;
          }

          .stat-item h3 {
            font-size: 3rem;
          }

          .cta-title {
            font-size: 2.5rem;
          }

          .story-content h2,
          .section-header h2 {
            font-size: 2rem;
          }

          .team-overlay {
            opacity: 1;
          }
        }
      `}</style>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-bg" />
        <div className="hero-content">
          <span className="hero-label">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" style={{ width: '16px', height: '16px' }}>
              <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
            </svg>
            Our Story
          </span>
          <h1 className="hero-title">
            Crafting <span className="accent">Extraordinary</span> Experiences
          </h1>
          <p className="hero-description">
            We are Strabsol — where passion meets precision, and every event becomes an unforgettable journey that transcends expectations.
          </p>
        </div>
        <div className="scroll-indicator">
          <span>Scroll to explore</span>
          <div className="scroll-line" />
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section">
        <div className="story-container">
          <div className="story-image-wrapper fade-up">
            <img
              src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=1000&fit=crop"
              alt="Event venue with elegant lighting"
              className="story-image"
            />
            <div className="story-image-accent" />
          </div>
          <div className="story-content fade-up">
            <h2>
              Where <span className="accent">Vision</span> Meets Reality
            </h2>
            <p>
              Founded in 2015, Strabsol emerged from a simple belief: every brand deserves an experience that resonates, inspires, and transforms. What started as a small team of passionate event enthusiasts has grown into a full-service experiential agency trusted by global brands.
            </p>
            <p>
              We don't just plan events — we architect moments. From intimate corporate gatherings to large-scale festivals that draw thousands, our approach combines strategic thinking with boundless creativity.
            </p>
            <p>
              Our journey has taken us across continents, working with Fortune 500 companies, emerging startups, and everything in between. But no matter the scale, our commitment remains the same: to create experiences that leave lasting impressions.
            </p>
            <div className="founder-quote">
              <blockquote>
                "Every event is a story waiting to be told. Our job is to make that story unforgettable."
              </blockquote>
              <cite>— Sarah Mitchell, Founder & Creative Director</cite>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="section-header fade-up">
          <h2>
            Our Core <span className="accent">Values</span>
          </h2>
          <p>
            These principles guide everything we do, from the first brainstorm to the final applause.
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
            <h3>500+</h3>
            <p>Events Delivered</p>
          </div>
          <div className="stat-item fade-up" style={{ transitionDelay: '0.1s' }}>
            <h3>50K+</h3>
            <p>Attendees Reached</p>
          </div>
          <div className="stat-item fade-up" style={{ transitionDelay: '0.2s' }}>
            <h3>15</h3>
            <p>Countries Served</p>
          </div>
          <div className="stat-item fade-up" style={{ transitionDelay: '0.3s' }}>
            <h3>98%</h3>
            <p>Client Satisfaction</p>
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

      {/* Team Section */}
      <section className="team-section">
        <div className="section-header fade-up">
          <h2>
            Meet Our <span className="accent">Team</span>
          </h2>
          <p>
            The creative minds and strategic thinkers who bring your vision to life.
          </p>
        </div>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card fade-up" style={{ transitionDelay: `${index * 0.1}s` }}>
              <img src={member.image} alt={member.name} />
              <div className="team-overlay">
                <div className="team-info">
                  <h3 className="team-name">{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                  <p className="team-description">{member.description}</p>
                </div>
              </div>
            </div>
          ))}
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
          {/* <button className="cta-button">
            Start Your Journey
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button> */}
        </div>
      </section>
    <div>
        <ContactUs />
    </div>
    </div>
  );
};

export default AboutUs;