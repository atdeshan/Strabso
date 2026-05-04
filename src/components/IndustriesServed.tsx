import React, { useEffect, useRef, useState } from 'react';

const INDUSTRIES = [
  {
    name: 'FMCG',
    desc: 'Sampling, roadshows & shelf-push campaigns for fast-moving brands.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" width="36" height="36">
        <path d="M8 32V16l12-8 12 8v16H8z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <rect x="15" y="22" width="10" height="10" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M20 8v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: 'Banking & Finance',
    desc: 'Corporate events, product launches & customer acquisition drives.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" width="36" height="36">
        <path d="M6 18L20 8l14 10H6z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <rect x="6" y="18" width="28" height="3" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="6" y="32" width="28" height="3" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M10 21v11M18 21v11M26 21v11M34 21v11" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    name: 'Telecom',
    desc: 'Subscriber acquisition, SIM distribution & awareness activations.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" width="36" height="36">
        <path d="M20 8C13.373 8 8 13.373 8 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M20 14c-3.314 0-6 2.686-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="20" cy="20" r="3" fill="currentColor" opacity="0.8"/>
        <path d="M20 26v6M17 32h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M32 8C25.373 8 20 13.373 20 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: 'Government',
    desc: 'Public awareness campaigns, institutional events & community outreach.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" width="36" height="36">
        <path d="M6 18L20 9l14 9H6z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <rect x="6" y="18" width="28" height="3" fill="currentColor" opacity="0.2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M10 21v10M18 21v10M26 21v10M34 21v10" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="6" y="31" width="28" height="3" rx="1" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    name: 'Healthcare',
    desc: 'Patient education drives, product sampling & healthcare professional outreach.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" width="36" height="36">
        <rect x="8" y="8" width="24" height="24" rx="4" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M20 14v12M14 20h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: 'Retail',
    desc: 'In-store promotions, footfall drives & experiential retail activations.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" width="36" height="36">
        <path d="M7 10h26l-3 14H10L7 10z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M10 24l-2 8h24l-2-8" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <circle cx="16" cy="36" r="2" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="26" cy="36" r="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M14 10l2-4h8l2 4" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: 'Consumer Goods',
    desc: 'Trial campaigns, loyalty programs & multi-city brand activation.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" width="36" height="36">
        <rect x="10" y="8" width="20" height="26" rx="3" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M15 14h10M15 19h10M15 24h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="28" cy="28" r="6" fill="#f5f4f0" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M26 28l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: 'Lifestyle & Beauty',
    desc: 'Mall activations, influencer events & premium brand experiences.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" width="36" height="36">
        <path d="M20 6l3.09 9.26L32 18l-7.5 5.5L27 33l-7-5.5L13 33l2.5-9.5L8 18l8.91-2.74L20 6z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

const IndustriesServed: React.FC = () => {
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
        .ind-section {
          background: #faf9f6;
          padding: 100px 48px;
        }

        .ind-inner {
          max-width: 1200px;
          margin: 0 auto;
        }

        .ind-header {
          text-align: center;
          margin-bottom: 64px;
        }

        .ind-eyebrow {
          font-family: 'Outfit', sans-serif;
          font-size: 10px;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: #e87f2a;
          margin: 0 0 16px;
        }

        .ind-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(32px, 4vw, 52px);
          font-weight: 400;
          color: #0a0a12;
          margin: 0 0 14px;
          line-height: 1.15;
        }

        .ind-subtitle {
          font-family: 'Outfit', sans-serif;
          font-size: 15px;
          color: rgba(0,0,0,0.45);
          max-width: 480px;
          margin: 0 auto;
          line-height: 1.7;
        }

        .ind-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .ind-card {
          background: #ffffff;
          border: 1px solid rgba(0,0,0,0.07);
          border-radius: 16px;
          padding: 28px 24px;
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.6s ease, transform 0.6s cubic-bezier(0.16,1,0.3,1),
                      border-color 0.3s ease, box-shadow 0.3s ease;
          cursor: default;
        }
        .ind-card.in {
          opacity: 1;
          transform: translateY(0);
        }
        .ind-card:nth-child(1)  { transition-delay: 0.03s; }
        .ind-card:nth-child(2)  { transition-delay: 0.08s; }
        .ind-card:nth-child(3)  { transition-delay: 0.13s; }
        .ind-card:nth-child(4)  { transition-delay: 0.18s; }
        .ind-card:nth-child(5)  { transition-delay: 0.23s; }
        .ind-card:nth-child(6)  { transition-delay: 0.28s; }
        .ind-card:nth-child(7)  { transition-delay: 0.33s; }
        .ind-card:nth-child(8)  { transition-delay: 0.38s; }

        .ind-card:hover {
          border-color: rgba(232,127,42,0.3);
          box-shadow: 0 8px 32px rgba(232,127,42,0.08);
        }
        .ind-card:hover .ind-icon { color: #e87f2a; }

        .ind-icon {
          color: rgba(0,0,0,0.35);
          margin-bottom: 16px;
          transition: color 0.3s ease;
          display: block;
        }

        .ind-name {
          font-family: 'Syne', sans-serif;
          font-size: 15px;
          font-weight: 600;
          color: #0a0a12;
          margin: 0 0 8px;
        }

        .ind-desc {
          font-family: 'Outfit', sans-serif;
          font-size: 13px;
          color: rgba(0,0,0,0.45);
          line-height: 1.65;
          margin: 0;
        }

        @media (max-width: 1024px) {
          .ind-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 600px) {
          .ind-section { padding: 64px 20px; }
          .ind-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <section className="ind-section">
        <div className="ind-inner" ref={ref}>
          <header className="ind-header">
            <p className="ind-eyebrow">Industries</p>
            <h2 className="ind-title">Industries We Serve</h2>
            <p className="ind-subtitle">
              From multinational FMCG giants to government institutions — we activate across every major sector in Sri Lanka.
            </p>
          </header>

          <div className="ind-grid">
            {INDUSTRIES.map((ind, i) => (
              <div key={i} className={`ind-card${inView ? ' in' : ''}`}>
                <span className="ind-icon">{ind.icon}</span>
                <h3 className="ind-name">{ind.name}</h3>
                <p className="ind-desc">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default IndustriesServed;
