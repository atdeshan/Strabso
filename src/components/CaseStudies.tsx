import React, { useEffect, useRef, useState } from 'react';
import cocaCola from '../assets/brands/coca_cola.webp';
import hnb     from '../assets/brands/hnb.png';
import maliban from '../assets/brands/maliban.png';

const CASES = [
  {
    logo: cocaCola,
    brand: 'Coca-Cola',
    category: 'Brand & Sampling Activation',
    headline: 'Taking the world\'s #1 beverage directly to Sri Lankan consumers.',
    result1: { value: '500K+', label: 'Samples Distributed' },
    result2: { value: '7',     label: 'Provinces' },
    result3: { value: '60',    label: 'Days' },
    accent: '#EF4444',
    bg: 'linear-gradient(135deg, rgba(239,68,68,0.06) 0%, rgba(255,255,255,0) 60%)',
  },
  {
    logo: hnb,
    brand: 'HNB Bank',
    category: 'Corporate Event Management',
    headline: 'Delivering premium corporate experiences for Sri Lanka\'s leading bank.',
    result1: { value: '12+',   label: 'Events Delivered' },
    result2: { value: '8K+',   label: 'Attendees' },
    result3: { value: '100%',  label: 'On-Time' },
    accent: '#1D4ED8',
    bg: 'linear-gradient(135deg, rgba(29,78,216,0.06) 0%, rgba(255,255,255,0) 60%)',
  },
  {
    logo: maliban,
    brand: 'Maliban',
    category: 'Roadshow & SMMT Activation',
    headline: 'Nationwide grassroots campaign bringing Maliban to every community.',
    result1: { value: '300+',  label: 'Locations' },
    result2: { value: '9',     label: 'Provinces' },
    result3: { value: '1M+',   label: 'Impressions' },
    accent: '#e87f2a',
    bg: 'linear-gradient(135deg, rgba(232,127,42,0.07) 0%, rgba(255,255,255,0) 60%)',
  },
];

const CaseStudies: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .cs-section {
          background: #ffffff;
          padding: 100px 48px;
        }

        .cs-inner {
          max-width: 1200px;
          margin: 0 auto;
        }

        .cs-header {
          text-align: center;
          margin-bottom: 64px;
        }

        .cs-eyebrow {
          font-family: 'Outfit', sans-serif;
          font-size: 10px;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: #e87f2a;
          margin: 0 0 16px;
        }

        .cs-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(32px, 4vw, 52px);
          font-weight: 400;
          color: #0a0a12;
          margin: 0 0 14px;
          line-height: 1.15;
        }

        .cs-subtitle {
          font-family: 'Outfit', sans-serif;
          font-size: 15px;
          color: rgba(0,0,0,0.45);
          max-width: 480px;
          margin: 0 auto;
          line-height: 1.7;
        }

        .cs-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }

        .cs-card {
          border: 1px solid rgba(0,0,0,0.07);
          border-radius: 20px;
          overflow: hidden;
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.7s ease, transform 0.7s cubic-bezier(0.16,1,0.3,1),
                      box-shadow 0.3s ease;
        }
        .cs-card.in {
          opacity: 1;
          transform: translateY(0);
        }
        .cs-card:nth-child(1) { transition-delay: 0.05s; }
        .cs-card:nth-child(2) { transition-delay: 0.15s; }
        .cs-card:nth-child(3) { transition-delay: 0.25s; }
        .cs-card:hover {
          box-shadow: 0 16px 48px rgba(0,0,0,0.1);
          transform: translateY(-4px);
        }

        .cs-card-top {
          padding: 32px 32px 24px;
        }

        .cs-logo-wrap {
          width: 80px;
          height: 48px;
          display: flex;
          align-items: center;
          margin-bottom: 24px;
        }

        .cs-logo-wrap img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
        }

        .cs-category {
          font-family: 'Outfit', sans-serif;
          font-size: 10px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          margin: 0 0 10px;
        }

        .cs-headline {
          font-family: 'Cormorant Garamond', serif;
          font-size: 20px;
          font-weight: 500;
          color: #0a0a12;
          line-height: 1.45;
          margin: 0;
        }

        .cs-accent-bar {
          height: 3px;
          margin: 24px 32px 0;
          border-radius: 2px;
        }

        .cs-results {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          padding: 24px 32px 32px;
          gap: 0;
          background: rgba(0,0,0,0.018);
        }

        .cs-result {
          text-align: center;
          padding: 0 8px;
          position: relative;
        }

        .cs-result + .cs-result::before {
          content: '';
          position: absolute;
          left: 0;
          top: 15%;
          height: 70%;
          width: 1px;
          background: rgba(0,0,0,0.08);
        }

        .cs-result-value {
          font-family: 'Syne', sans-serif;
          font-size: 22px;
          font-weight: 700;
          color: #0a0a12;
          display: block;
          line-height: 1;
          margin-bottom: 6px;
        }

        .cs-result-label {
          font-family: 'Outfit', sans-serif;
          font-size: 9.5px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: rgba(0,0,0,0.38);
        }

        @media (max-width: 1024px) {
          .cs-grid { grid-template-columns: 1fr; gap: 24px; max-width: 540px; margin: 0 auto; }
        }

        @media (max-width: 600px) {
          .cs-section { padding: 64px 20px; }
          .cs-card-top { padding: 24px 24px 18px; }
          .cs-accent-bar { margin: 18px 24px 0; }
          .cs-results { padding: 20px 24px 24px; }
        }
      `}</style>

      <section className="cs-section">
        <div className="cs-inner" ref={ref}>
          <header className="cs-header">
            <p className="cs-eyebrow">Case Studies</p>
            <h2 className="cs-title">Campaigns That Delivered</h2>
            <p className="cs-subtitle">
              Real results for real brands — a snapshot of activations that moved the needle.
            </p>
          </header>

          <div className="cs-grid">
            {CASES.map((c, i) => (
              <div key={i} className={`cs-card${inView ? ' in' : ''}`}>
                <div className="cs-card-top" style={{ background: c.bg }}>
                  <div className="cs-logo-wrap">
                    <img src={c.logo} alt={c.brand} />
                  </div>
                  <p className="cs-category" style={{ color: c.accent }}>{c.category}</p>
                  <p className="cs-headline">{c.headline}</p>
                </div>
                <div className="cs-accent-bar" style={{ background: c.accent }} />
                <div className="cs-results">
                  {[c.result1, c.result2, c.result3].map((r, j) => (
                    <div key={j} className="cs-result">
                      <span className="cs-result-value" style={{ color: c.accent }}>{r.value}</span>
                      <span className="cs-result-label">{r.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CaseStudies;
