import React, { useEffect, useRef, useState } from 'react';

const STATS = [
  { to: 200, suffix: '+',  label: 'Activations\nExecuted' },
  { to: 9,   suffix: '',   label: 'Provinces\nCovered' },
  { to: 1,   suffix: 'M+', label: 'Consumers\nReached' },
  { to: 500, suffix: '+',  label: 'Active\nPromoters' },
];

function useCountUp(to: number, duration: number, active: boolean, delay: number) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) return;
    let raf: number;
    const startTime = performance.now() + delay;
    const tick = (now: number) => {
      if (now < startTime) { raf = requestAnimationFrame(tick); return; }
      const p = Math.min((now - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      setVal(Math.floor(ease * to));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setVal(to);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, to, duration, delay]);
  return val;
}

const StatItem: React.FC<{ stat: typeof STATS[0]; active: boolean; index: number }> = ({ stat, active, index }) => {
  const val = useCountUp(stat.to, 1800, active, index * 180);
  return (
    <div className="stat-item">
      <div className="stat-number">{val}{stat.suffix}</div>
      <div className="stat-label">{stat.label.replace('\\n', '\n')}</div>
    </div>
  );
};

const StatsCounter: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setActive(true); obs.disconnect(); } },
      { threshold: 0.35 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .stats-band {
          background: #09090f;
          padding: 64px 48px;
          position: relative;
          overflow: hidden;
        }

        .stats-band::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(201,169,110,0.3), transparent);
        }
        .stats-band::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(201,169,110,0.3), transparent);
        }

        .stats-inner {
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          position: relative;
        }

        .stat-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 0 24px;
          position: relative;
        }

        .stat-item + .stat-item::before {
          content: '';
          position: absolute;
          left: 0;
          top: 10%;
          height: 80%;
          width: 1px;
          background: linear-gradient(to bottom, transparent, rgba(201,169,110,0.25), transparent);
        }

        .stat-number {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(48px, 5vw, 72px);
          font-weight: 300;
          line-height: 1;
          background: linear-gradient(135deg, #c9a96e 0%, #e87f2a 50%, #f5c878 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 14px;
          filter: drop-shadow(0 0 18px rgba(232,127,42,0.25));
        }

        .stat-label {
          font-family: 'Outfit', sans-serif;
          font-size: 10px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.38);
          line-height: 1.8;
          white-space: pre-line;
        }

        @media (max-width: 768px) {
          .stats-band { padding: 48px 24px; }
          .stats-inner { grid-template-columns: repeat(2, 1fr); gap: 40px 0; }
          .stat-item:nth-child(3)::before { display: none; }
        }

        @media (max-width: 420px) {
          .stats-inner { grid-template-columns: repeat(2, 1fr); }
          .stat-number { font-size: 40px; }
        }
      `}</style>

      <div className="stats-band" ref={ref}>
        <div className="stats-inner">
          {STATS.map((s, i) => (
            <StatItem key={i} stat={s} active={active} index={i} />
          ))}
        </div>
      </div>
    </>
  );
};

export default StatsCounter;
