import React, { useEffect, useRef, useState } from 'react';

const STEPS = [
  {
    num: '01',
    title: 'Brief',
    desc: 'We listen first. Your brand story, target audience, goals, and budget shape everything that follows.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" width="32" height="32">
        <rect x="6" y="8" width="28" height="24" rx="3" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12 15h16M12 20h12M12 25h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Strategy',
    desc: 'We design a bespoke activation plan — channels, routes, timelines, and KPIs tailored to your market.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" width="32" height="32">
        <circle cx="20" cy="20" r="13" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M20 7v4M20 29v4M7 20h4M29 20h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="20" cy="20" r="4" fill="currentColor" opacity="0.7"/>
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Execution',
    desc: 'Our trained field teams bring the plan to life — on-ground, across all 9 provinces, on schedule.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" width="32" height="32">
        <path d="M8 20l8 8 16-16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="20" cy="20" r="13" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Report',
    desc: 'You receive a full performance report — reach, conversions, consumer feedback, and lessons learned.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" width="32" height="32">
        <rect x="6" y="6" width="12" height="28" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="22" y="14" width="12" height="20" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M9 28h6M25 22h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M14 10l8-4 10 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

const HowWeWork: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .hww-section {
          background: #faf9f6;
          padding: 100px 48px;
          position: relative;
          overflow: hidden;
        }

        .hww-inner {
          max-width: 1200px;
          margin: 0 auto;
        }

        .hww-header {
          text-align: center;
          margin-bottom: 72px;
        }

        .hww-eyebrow {
          font-family: 'Outfit', sans-serif;
          font-size: 10px;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: #e87f2a;
          margin: 0 0 16px;
        }

        .hww-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(32px, 4vw, 52px);
          font-weight: 400;
          color: #0a0a12;
          margin: 0 0 14px;
          line-height: 1.15;
        }

        .hww-subtitle {
          font-family: 'Outfit', sans-serif;
          font-size: 15px;
          color: rgba(0,0,0,0.45);
          max-width: 480px;
          margin: 0 auto;
          line-height: 1.7;
        }

        .hww-steps {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          position: relative;
          gap: 0;
        }

        /* Connecting line */
        .hww-steps::before {
          content: '';
          position: absolute;
          top: 44px;
          left: calc(12.5% + 24px);
          right: calc(12.5% + 24px);
          height: 1px;
          background: linear-gradient(90deg, rgba(232,127,42,0.3), rgba(201,169,110,0.5), rgba(232,127,42,0.3));
        }

        .hww-step {
          padding: 0 28px;
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.7s ease, transform 0.7s cubic-bezier(0.16,1,0.3,1);
        }
        .hww-step.in {
          opacity: 1;
          transform: translateY(0);
        }
        .hww-step:nth-child(1) { transition-delay: 0.05s; }
        .hww-step:nth-child(2) { transition-delay: 0.15s; }
        .hww-step:nth-child(3) { transition-delay: 0.25s; }
        .hww-step:nth-child(4) { transition-delay: 0.35s; }

        .step-icon-wrap {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: #ffffff;
          border: 1px solid rgba(232,127,42,0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 28px;
          color: #e87f2a;
          position: relative;
          z-index: 1;
          box-shadow: 0 2px 16px rgba(232,127,42,0.1);
        }

        .step-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 2px;
          color: rgba(232,127,42,0.7);
          margin-bottom: 10px;
          display: block;
        }

        .step-title {
          font-family: 'Syne', sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: #0a0a12;
          margin: 0 0 12px;
        }

        .step-desc {
          font-family: 'Outfit', sans-serif;
          font-size: 14px;
          color: rgba(0,0,0,0.5);
          line-height: 1.75;
          margin: 0;
        }

        @media (max-width: 1024px) {
          .hww-section { padding: 80px 32px; }
          .hww-steps::before { display: none; }
          .hww-steps { grid-template-columns: repeat(2, 1fr); gap: 48px; }
          .hww-step { padding: 0; }
        }

        @media (max-width: 600px) {
          .hww-section { padding: 64px 20px; }
          .hww-steps { grid-template-columns: 1fr; gap: 40px; }
          .hww-header { margin-bottom: 48px; }
        }
      `}</style>

      <section className="hww-section">
        <div className="hww-inner" ref={ref}>
          <header className="hww-header">
            <p className="hww-eyebrow">Our Process</p>
            <h2 className="hww-title">How We Work</h2>
            <p className="hww-subtitle">
              Every activation follows the same disciplined framework — from the first brief to the final report.
            </p>
          </header>

          <div className="hww-steps">
            {STEPS.map((step, i) => (
              <div key={i} className={`hww-step${inView ? ' in' : ''}`}>
                <div className="step-icon-wrap">{step.icon}</div>
                <span className="step-num">{step.num}</span>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HowWeWork;
