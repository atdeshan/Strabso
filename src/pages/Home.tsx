import React, { useState, useEffect, useCallback, useRef } from "react";
import "../styles/Home.css";
import RotatableCarousel from "../components/RotatableCarousel";
import ServicesSection from "../components/ServiseSection";
import StatsCounter from "../components/StatsCounter";
import HowWeWork from "../components/HowWeWork";
import CaseStudies from "../components/CaseStudies";
import IndustriesServed from "../components/IndustriesServed";

const CYCLE_WORDS = ['ACTIVATE', 'INSPIRE', 'ELEVATE', 'CONNECT'];
const BRAND_LETTERS = ['S', 'T', 'R', 'A', 'B', 'S', 'O'];

const TICKER = [
  "Brand Activations", "Mall Activations", "Roadshows & SMMT", "Sampling Campaigns",
  "Selling Operations", "Corporate Events", "Government Activations", "Promoter Deployment",
  "Brand Activations", "Mall Activations", "Roadshows & SMMT", "Sampling Campaigns",
  "Selling Operations", "Corporate Events", "Government Activations", "Promoter Deployment",
];

const Home: React.FC = () => {
  const [eyebrowIn,   setEyebrowIn]   = useState(false);
  const [lineIn,      setLineIn]      = useState(false);
  const [lettersIn,   setLettersIn]   = useState<boolean[]>(Array(7).fill(false));
  const [shimmer,     setShimmer]     = useState(false);
  const [dividerIn,   setDividerIn]   = useState(false);
  const [taglineIn,   setTaglineIn]   = useState(false);
  const [cycleIn,     setCycleIn]     = useState(false);
  const [ctaIn,       setCtaIn]       = useState(false);

  const [wordIndex,   setWordIndex]   = useState(0);
  const [wordPhase,   setWordPhase]   = useState<'idle' | 'exiting' | 'entering'>('idle');

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const scrollToProjects = useCallback(() => {
    document.querySelector('[data-section="Projects"]')?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    const at = (ms: number, fn: () => void) => { timers.push(setTimeout(fn, ms)); };

    at(200,  () => { setEyebrowIn(true); setLineIn(true); });

    BRAND_LETTERS.forEach((_, i) => {
      at(900 + i * 95, () => {
        setLettersIn(prev => { const n = [...prev]; n[i] = true; return n; });
      });
    });

    at(1680, () => setShimmer(true));
    at(1820, () => { setDividerIn(true); setTaglineIn(true); });
    at(2250, () => setCycleIn(true));
    at(2680, () => setCtaIn(true));

    at(2750, () => {
      intervalRef.current = setInterval(() => {
        setWordPhase('exiting');
        setTimeout(() => {
          setWordIndex(prev => (prev + 1) % CYCLE_WORDS.length);
          setWordPhase('entering');
        }, 380);
        setTimeout(() => setWordPhase('idle'), 980);
      }, 2900);
    });

    return () => {
      timers.forEach(clearTimeout);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className="home-wrapper" role="main">

      {/* ── Cinematic Hero ─────────────────────────────── */}
      <section className="hero-cinema">
        <div className="cinema-ambient"   aria-hidden="true" />
        <div className="cinema-scanlines" aria-hidden="true" />

        <span className="c-corner c-corner--tl" aria-hidden="true" />
        <span className="c-corner c-corner--tr" aria-hidden="true" />
        <span className="c-corner c-corner--bl" aria-hidden="true" />
        <span className="c-corner c-corner--br" aria-hidden="true" />

        <div className="cinema-stage">

          {/* Eyebrow */}
          <p className={`cinema-eyebrow${eyebrowIn ? ' in' : ''}`} aria-hidden="true">
            <span className="eyebrow-dot">◆</span>
            Brand Activation Agency&ensp;&middot;&ensp;Sri Lanka&ensp;&middot;&ensp;Est.&nbsp;2020
            <span className="eyebrow-dot">◆</span>
          </p>

          {/* Sweep line */}
          <div className={`cinema-sweep${lineIn ? ' in' : ''}`} aria-hidden="true" />

          {/* Brand name — letter by letter */}
          <h1 className="cinema-brand" aria-label="Strabso">
            {BRAND_LETTERS.map((letter, i) => (
              <span key={i} className="lw" aria-hidden="true">
                <span className={`lc${lettersIn[i] ? ' in' : ''}`}>{letter}</span>
              </span>
            ))}
            {shimmer && <span className="brand-shimmer" aria-hidden="true" />}
          </h1>

          {/* Gold divider */}
          <div className={`cinema-gold${dividerIn ? ' in' : ''}`} aria-hidden="true" />

          {/* Tagline */}
          <p className={`cinema-tagline${taglineIn ? ' in' : ''}`}>
            Sri Lanka's premier on-ground marketing partner
          </p>

          {/* Cycling word */}
          <div className={`cinema-cycle-wrap${cycleIn ? ' in' : ''}`} aria-live="polite">
            <span className={`cinema-word phase-${wordPhase}`}>
              {CYCLE_WORDS[wordIndex]}
            </span>
          </div>

          {/* CTA */}
          <div className={`cinema-cta${ctaIn ? ' in' : ''}`}>
            <button className="cinema-btn" onClick={scrollToProjects}>
              <span>See Our Work</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="1.5"
                strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>

        </div>

        {/* Ticker */}
        <div className="cinema-ticker" aria-hidden="true">
          <div className="cinema-ticker-track">
            {TICKER.map((item, i) => (
              <span className="cinema-ticker-item" key={i}>
                {item}<span className="cinema-ticker-sep">&middot;</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats Counter ────────────────────────────────── */}
      <StatsCounter />

      {/* ── Services ─────────────────────────────────────── */}
      <div className="services-section">
        <ServicesSection />
      </div>

      {/* ── How We Work ──────────────────────────────────── */}
      <HowWeWork />

      {/* ── Industries Served ────────────────────────────── */}
      <IndustriesServed />

      {/* ── Brand Carousel ───────────────────────────────── */}
      <div className="carousel-section">
        <RotatableCarousel />
      </div>

      {/* ── Case Studies ─────────────────────────────────── */}
      <CaseStudies />

    </div>
  );
};

export default Home;
