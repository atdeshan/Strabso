import React, { useEffect, useRef, useState } from 'react';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';

const GEO_URL =
  'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json';

const PROVINCES = [
  { name: 'Northern',      coordinates: [80.50, 9.00] as [number, number], delay: 0   },
  { name: 'North Central', coordinates: [80.40, 8.35] as [number, number], delay: 120 },
  { name: 'North Western', coordinates: [79.88, 7.85] as [number, number], delay: 200 },
  { name: 'Eastern',       coordinates: [81.20, 7.80] as [number, number], delay: 290 },
  { name: 'Western',       coordinates: [79.92, 6.92] as [number, number], delay: 360 },
  { name: 'Central',       coordinates: [80.63, 7.29] as [number, number], delay: 430 },
  { name: 'Sabaragamuwa',  coordinates: [80.40, 6.68] as [number, number], delay: 500 },
  { name: 'Uva',           coordinates: [81.05, 6.99] as [number, number], delay: 570 },
  { name: 'Southern',      coordinates: [80.55, 6.10] as [number, number], delay: 640 },
];

const CoverageMap: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [activeProvinces, setActiveProvinces] = useState<boolean[]>(
    Array(9).fill(false)
  );

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    const timers = PROVINCES.map((p, i) =>
      setTimeout(() => {
        setActiveProvinces(prev => {
          const next = [...prev];
          next[i] = true;
          return next;
        });
      }, 400 + p.delay)
    );
    return () => timers.forEach(clearTimeout);
  }, [inView]);

  return (
    <>
      <style>{`
        .map-section {
          background: #06060f;
          padding: 100px 48px;
          position: relative;
          overflow: hidden;
        }

        .map-section::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(201,169,110,0.25), transparent);
        }

        .map-ambient {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 600px; height: 600px;
          background: radial-gradient(ellipse, rgba(232,127,42,0.06) 0%, transparent 65%);
          pointer-events: none;
        }

        .map-inner {
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
          position: relative;
          z-index: 1;
        }

        .map-eyebrow {
          font-family: 'Outfit', sans-serif;
          font-size: 10px;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: rgba(201,169,110,0.7);
          margin: 0 0 20px;
        }

        .map-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(34px, 4vw, 56px);
          font-weight: 300;
          color: #ffffff;
          margin: 0 0 20px;
          line-height: 1.12;
        }

        .map-title span {
          background: linear-gradient(135deg, #c9a96e, #e87f2a);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .map-desc {
          font-family: 'Outfit', sans-serif;
          font-size: 15px;
          color: rgba(255,255,255,0.42);
          line-height: 1.75;
          margin: 0 0 48px;
          max-width: 380px;
        }

        .map-province-list {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px 24px;
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .map-province-item {
          font-family: 'Outfit', sans-serif;
          font-size: 12px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.22);
          display: flex;
          align-items: center;
          gap: 10px;
          transition: color 0.5s ease;
        }
        .map-province-item.active { color: rgba(255,255,255,0.68); }

        .map-province-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: rgba(232,127,42,0.25);
          flex-shrink: 0;
          transition: background 0.5s ease, box-shadow 0.5s ease;
        }
        .map-province-item.active .map-province-dot {
          background: #e87f2a;
          box-shadow: 0 0 8px rgba(232,127,42,0.6);
        }

        .map-svg-col {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .map-svg-wrap {
          width: 220px;
          filter: drop-shadow(0 0 40px rgba(232,127,42,0.12));
        }

        .map-svg-wrap svg {
          width: 100%;
          height: auto;
          overflow: visible;
        }

        .prov-pulse {
          animation: provPulse 2.5s ease-in-out infinite;
          transform-box: fill-box;
          transform-origin: center;
        }

        @keyframes provPulse {
          0%, 100% { opacity: 0.45; transform: scale(1); }
          50%       { opacity: 0.85; transform: scale(1.55); }
        }

        @media (max-width: 900px) {
          .map-inner { grid-template-columns: 1fr; gap: 48px; }
          .map-svg-col { order: -1; }
          .map-svg-wrap { width: 180px; }
          .map-desc { max-width: 100%; }
        }

        @media (max-width: 600px) {
          .map-section { padding: 64px 20px; }
          .map-province-list { grid-template-columns: 1fr; }
        }
      `}</style>

      <section className="map-section" ref={ref}>
        <div className="map-ambient" aria-hidden="true" />
        <div className="map-inner">

          {/* Text column */}
          <div className="map-text-col">
            <p className="map-eyebrow">Nationwide Reach</p>
            <h2 className="map-title">
              All <span>9 Provinces.</span>
              <br />One Partner.
            </h2>
            <p className="map-desc">
              From Jaffna in the north to Matara in the south, our field teams
              operate across every province in Sri Lanka — giving your brand
              true nationwide coverage.
            </p>
            <ul className="map-province-list">
              {PROVINCES.map((p, i) => (
                <li
                  key={i}
                  className={`map-province-item${activeProvinces[i] ? ' active' : ''}`}
                >
                  <span className="map-province-dot" />
                  {p.name}
                </li>
              ))}
            </ul>
          </div>

          {/* Map column — real geographic data via react-simple-maps */}
          <div className="map-svg-col">
            <div className="map-svg-wrap">
              <ComposableMap
                projection="geoMercator"
                projectionConfig={{
                  scale: 3800,
                  center: [80.77, 7.875],
                }}
                width={200}
                height={280}
              >
                <Geographies geography={GEO_URL}>
                  {({ geographies }) =>
                    geographies
                      .filter(geo => geo.id === '144')
                      .map(geo => (
                        <Geography
                          key={geo.rsmKey}
                          geography={geo}
                          fill="rgba(255,255,255,0.05)"
                          stroke="rgba(201,169,110,0.35)"
                          strokeWidth={0.8}
                          style={{
                            default: { outline: 'none' },
                            hover:   { outline: 'none' },
                            pressed: { outline: 'none' },
                          }}
                        />
                      ))
                  }
                </Geographies>

                {PROVINCES.map((p, i) => (
                  <Marker key={i} coordinates={p.coordinates}>
                    <g
                      style={{
                        opacity: activeProvinces[i] ? 1 : 0,
                        transition: `opacity 0.6s ease ${p.delay}ms`,
                      }}
                    >
                      {/* Outer glow ring */}
                      <circle
                        r={10}
                        fill="rgba(232,127,42,0.08)"
                        stroke="rgba(232,127,42,0.2)"
                        strokeWidth={0.8}
                        className="prov-pulse"
                        style={{ animationDelay: `${i * 0.28}s` }}
                      />
                      {/* Inner dot */}
                      <circle r={3} fill="#e87f2a" opacity={0.9} />
                      <circle r={1.5} fill="#f5c878" />
                    </g>
                  </Marker>
                ))}
              </ComposableMap>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default CoverageMap;
