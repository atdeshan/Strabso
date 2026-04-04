import React, { useState, useEffect, useRef } from 'react';

import cocaCola  from '../assets/brands/coca_cola.webp';
import lankasoy  from '../assets/brands/lankasoy.png';
import hemas     from '../assets/brands/hemas.png';
import fems      from '../assets/brands/fems.jpg';
import vivya     from '../assets/brands/vivya.jpeg';
import uswaththe from '../assets/brands/uswaththe.png';
import zesta     from '../assets/brands/zesta.jpg.webp';
import vibe      from '../assets/brands/vibe.jpeg';
import hnb       from '../assets/brands/hnb.png';
import maliban   from '../assets/brands/maliban.png';
import watawala  from '../assets/brands/watawala.jpg';

// ─── Types ──────────────────────────────────────────────────────────────────

interface Brand {
  id: number;
  image: string;
  name: string;
  category: string;
  description: string;
  color: string;
}

// ─── Data ────────────────────────────────────────────────────────────────────

const BRANDS: Brand[] = [
  { id: 1,  image: cocaCola,   name: 'Coca-Cola',  category: 'Beverages',          description: 'On-ground brand activations and sampling campaigns driving nationwide consumer engagement.',  color: '#EF4444' },
  { id: 2,  image: hemas,      name: 'Hemas',      category: 'Healthcare & FMCG',  description: 'Promoter deployment and retail activation programs across all 9 provinces of Sri Lanka.',       color: '#3B82F6' },
  { id: 3,  image: maliban,    name: 'Maliban',    category: 'Biscuits & FMCG',   description: 'Nationwide sampling and selling operations delivering measurable sales uplift.',                  color: '#F97316' },
  { id: 4,  image: zesta,      name: 'Zesta',      category: 'Tea & Beverages',   description: 'Mall activations and roadshows bringing the Zesta brand to communities island-wide.',             color: '#10B981' },
  { id: 5,  image: watawala,   name: 'Watawala',   category: 'Tea & Beverages',   description: 'Strategic brand activation campaigns building consumer loyalty across key markets.',               color: '#22C55E' },
  { id: 6,  image: hnb,        name: 'HNB',        category: 'Banking & Finance',  description: 'Corporate event management and institutional activation projects across Sri Lanka.',               color: '#DC2626' },
  { id: 7,  image: lankasoy,   name: 'Lankasoy',   category: 'FMCG',              description: 'Product sampling and community engagement driving trial and brand awareness.',                      color: '#84CC16' },
  { id: 8,  image: vibe,       name: 'Vibe',       category: 'Lifestyle',         description: 'High-energy brand activations and experiential events connecting with youth audiences.',            color: '#06B6D4' },
  { id: 9,  image: fems,       name: 'Fems',       category: 'Consumer Goods',    description: 'Targeted sampling campaigns and in-store promoter deployment for maximum reach.',                  color: '#EC4899' },
  { id: 10, image: vivya,      name: 'Vivya',      category: 'Lifestyle & Beauty', description: 'Mall and SMMT activations creating memorable brand touchpoints with consumers.',                 color: '#8B5CF6' },
  { id: 11, image: uswaththe,  name: 'Uswaththe',  category: 'Natural Products',   description: 'Grassroots roadshow campaigns building authentic brand connections across communities.',           color: '#F59E0B' },
];

const COUNT      = BRANDS.length;
const ANGLE_STEP = 360 / COUNT;
const AUTO_SPEED = 0.04;          // degrees per frame at 60 fps
const SNAP_EPS   = 0.08;          // snap threshold in degrees
const EASE       = 0.13;          // snap easing factor (0–1)
const FRICTION   = 0.90;          // drag momentum friction

// ─── NavButton ───────────────────────────────────────────────────────────────

const NavButton: React.FC<{
  onClick: () => void;
  color?: string;
  label: string;
  children: React.ReactNode;
}> = ({ onClick, color, label, children }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseDown={(e) => e.stopPropagation()}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label={label}
      style={{
        width: 48,
        height: 48,
        borderRadius: '50%',
        border: `1px solid ${hovered && color ? `${color}55` : 'rgba(255,255,255,0.14)'}`,
        background: hovered && color ? `${color}20` : 'rgba(255,255,255,0.05)',
        color: '#fff',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backdropFilter: 'blur(12px)',
        transition: 'border-color 0.3s ease, background 0.3s ease',
        flexShrink: 0,
      }}
    >
      {children}
    </button>
  );
};

// ─── RotatingCarousel ────────────────────────────────────────────────────────

const RotatingCarousel: React.FC = () => {
  // ── Responsive breakpoints
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  // ── React state – only updated when the active brand changes (not every frame)
  const [activeIndex, setActiveIndex] = useState(0);
  const [grabbing,    setGrabbing]    = useState(false);

  // ── All animation state in refs – avoids stale closures in the RAF loop
  const rotRef        = useRef(0);              // current rotation (degrees)
  const velRef        = useRef(0);              // post-drag momentum
  const snapRef       = useRef<number | null>(null); // snap target (null = none)
  const isDragRef     = useRef(false);
  const isPausedRef   = useRef(false);          // true while hovering carousel
  const lastXRef      = useRef(0);
  const lastTRef      = useRef(0);
  const dragDeltaRef  = useRef(0);
  const activeIdxRef  = useRef(0);             // mirror of activeIndex for RAF loop
  const rafRef        = useRef<number | null>(null);

  // ── DOM refs
  const innerRef    = useRef<HTMLDivElement>(null); // rotating ring
  const containerRef = useRef<HTMLDivElement>(null); // carousel viewport

  // ── Derived layout values
  const radius = isMobile ? 260 : isTablet ? 360 : 440;
  const cardW  = isMobile ? 140 : isTablet ? 180 : 210;
  const cardH  = isMobile ? 155 : isTablet ? 200 : 230;

  // ── Screen-size detection
  useEffect(() => {
    const check = () => {
      setIsMobile(window.innerWidth <= 767);
      setIsTablet(window.innerWidth > 767 && window.innerWidth <= 1024);
    };
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // ── Non-passive touchmove (needed to call preventDefault and block page scroll)
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onTouchMove = (e: TouchEvent) => {
      if (!isDragRef.current) return;
      e.preventDefault();
      moveDrag(e.touches[0].clientX);
    };
    el.addEventListener('touchmove', onTouchMove, { passive: false });
    return () => el.removeEventListener('touchmove', onTouchMove);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // ── Single RAF animation loop
  // All values are accessed via refs → no stale-closure bugs, no dependency array needed.
  useEffect(() => {
    const snapToNearest = () => {
      const norm = ((rotRef.current % 360) + 360) % 360;
      let diff = Math.round(norm / ANGLE_STEP) * ANGLE_STEP - norm;
      if (diff >  180) diff -= 360;
      if (diff < -180) diff += 360;
      snapRef.current = rotRef.current + diff;
      velRef.current  = 0;
    };

    const tick = () => {
      if (!isDragRef.current) {
        if (snapRef.current !== null) {
          // ── Snap to nearest card
          const diff = snapRef.current - rotRef.current;
          if (Math.abs(diff) < SNAP_EPS) {
            rotRef.current = snapRef.current;
            snapRef.current = null;
          } else {
            rotRef.current += diff * EASE;
          }
        } else if (Math.abs(velRef.current) > 0.05) {
          // ── Post-drag momentum with friction
          velRef.current  *= FRICTION;
          rotRef.current  += velRef.current;
          if (Math.abs(velRef.current) <= 0.05) snapToNearest();
        } else if (!isPausedRef.current) {
          // ── Continuous auto-rotate
          rotRef.current -= AUTO_SPEED;
        }
      }

      // Apply rotation directly to DOM – no React re-render needed
      if (innerRef.current) {
        innerRef.current.style.transform = `rotateY(${rotRef.current}deg)`;
      }

      // Update active index state only when it actually changes
      const norm   = ((rotRef.current % 360) + 360) % 360;
      const idx    = Math.round(norm / ANGLE_STEP) % COUNT;
      const active = (COUNT - idx) % COUNT;
      if (active !== activeIdxRef.current) {
        activeIdxRef.current = active;
        setActiveIndex(active);
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, []); // intentionally empty – all state via refs

  // ── Navigation helpers
  const goToCard = (index: number) => {
    const norm = ((rotRef.current % 360) + 360) % 360;
    let diff = (COUNT - index) * ANGLE_STEP - norm;
    if (diff >  180) diff -= 360;
    if (diff < -180) diff += 360;
    snapRef.current = rotRef.current + diff;
    velRef.current  = 0;
  };

  const goNext = () => goToCard((activeIdxRef.current + 1) % COUNT);
  const goPrev = () => goToCard((activeIdxRef.current - 1 + COUNT) % COUNT);

  // ── Drag helpers
  const startDrag = (x: number) => {
    isDragRef.current   = true;
    lastXRef.current    = x;
    lastTRef.current    = Date.now();
    dragDeltaRef.current = 0;
    velRef.current      = 0;
    snapRef.current     = null;
    setGrabbing(true);
  };

  const moveDrag = (x: number) => {
    if (!isDragRef.current) return;
    const dx = x - lastXRef.current;
    const dt = Math.max(Date.now() - lastTRef.current, 1);
    velRef.current       = (dx / dt) * 12;
    rotRef.current      += dx * 0.28;
    dragDeltaRef.current += Math.abs(dx);
    lastXRef.current    = x;
    lastTRef.current    = Date.now();
  };

  const endDrag = () => {
    if (!isDragRef.current) return;
    isDragRef.current = false;
    setGrabbing(false);
    // Momentum + snap handled in the RAF loop
  };

  const handleCardClick = (index: number) => {
    if (dragDeltaRef.current < 5) goToCard(index);
  };

  // ── Active brand
  const active = BRANDS[activeIndex];

  // ─────────────────────────────────────────────────────────────────────────
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        padding: isMobile ? '40px 16px 60px' : '60px 40px 80px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: isMobile ? '32px' : '44px',
        userSelect: 'none',
        overflow: 'hidden',
        fontFamily: "'Outfit', -apple-system, sans-serif",
      }}
      onKeyDown={(e) => {
        if (e.key === 'ArrowRight') goNext();
        if (e.key === 'ArrowLeft')  goPrev();
      }}
      tabIndex={0}
      aria-label="Brand partners carousel"
    >

      {/* ── Ambient colour orb ─────────────────────────────────── */}
      <div style={{
        position: 'absolute',
        top: '25%',
        left: '50%',
        width: isMobile ? '420px' : '760px',
        height: isMobile ? '320px' : '560px',
        transform: 'translate(-50%, -50%)',
        background: `radial-gradient(ellipse, ${active?.color}22 0%, transparent 65%)`,
        filter: 'blur(80px)',
        pointerEvents: 'none',
        transition: 'background 0.9s ease',
        zIndex: 0,
      }} />

      {/* ── 3D Carousel viewport ───────────────────────────────── */}
      <div
        ref={containerRef}
        style={{
          position: 'relative',
          width: '100%',
          height: cardH + 40,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          perspective: isMobile ? '900px' : isTablet ? '1400px' : '1900px',
          zIndex: 5,
          cursor: grabbing ? 'grabbing' : 'grab',
        }}
        onMouseEnter={() => { isPausedRef.current = true; }}
        onMouseLeave={() => { isPausedRef.current = false; endDrag(); }}
        onMouseDown={(e)  => startDrag(e.clientX)}
        onMouseMove={(e)  => moveDrag(e.clientX)}
        onMouseUp={endDrag}
        onTouchStart={(e) => { isPausedRef.current = true; startDrag(e.touches[0].clientX); }}
        onTouchEnd={() => { endDrag(); isPausedRef.current = false; }}
      >
        {/* Rotating ring – transform updated directly by RAF */}
        <div
          ref={innerRef}
          style={{
            position: 'relative',
            width: cardW,
            height: cardH,
            transformStyle: 'preserve-3d',
          }}
        >
          {BRANDS.map((brand, i) => {
            const isActive = i === activeIndex;
            return (
              <div
                key={brand.id}
                style={{
                  position: 'absolute',
                  inset: 0,
                  transform: `rotateY(${i * ANGLE_STEP}deg) translateZ(${radius}px)`,
                  backfaceVisibility: 'hidden',
                  borderRadius: 18,
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'opacity 0.5s ease, filter 0.5s ease, box-shadow 0.5s ease',
                  opacity: isActive ? 1 : 0.4,
                  filter: isActive ? 'none' : 'brightness(0.4) saturate(0.5)',
                  boxShadow: isActive
                    ? `0 0 50px ${brand.color}45, 0 24px 60px rgba(0,0,0,0.65), inset 0 0 0 1.5px ${brand.color}35`
                    : '0 8px 24px rgba(0,0,0,0.5)',
                  background: `radial-gradient(ellipse at 50% 35%, ${brand.color}18 0%, rgba(10,10,18,0.97) 65%)`,
                }}
                onClick={() => handleCardClick(i)}
              >
                {/* Logo */}
                <div style={{
                  width: '100%',
                  height: '100%',
                  boxSizing: 'border-box',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 36,
                }}>
                  <img
                    src={brand.image}
                    alt={brand.name}
                    draggable={false}
                    style={{
                      maxWidth: '100%',
                      maxHeight: '100%',
                      objectFit: 'contain',
                      filter: 'drop-shadow(0 2px 10px rgba(0,0,0,0.55))',
                    }}
                  />
                </div>

                {/* Active ring border */}
                {isActive && (
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    borderRadius: 18,
                    border: `1.5px solid ${brand.color}60`,
                    pointerEvents: 'none',
                  }} />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Info panel ─────────────────────────────────────────── */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 14,
        maxWidth: 480,
        width: '100%',
        zIndex: 10,
        textAlign: 'center',
      }}>

        {/* Counter  01 ── 11 */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          fontSize: 11,
          letterSpacing: '3px',
          color: 'rgba(255,255,255,0.3)',
        }}>
          <span style={{ color: active?.color, fontWeight: 700, fontSize: 13 }}>
            {String(activeIndex + 1).padStart(2, '0')}
          </span>
          <span style={{
            display: 'inline-block',
            width: 28,
            height: 1,
            background: 'rgba(255,255,255,0.15)',
          }} />
          <span>{String(COUNT).padStart(2, '0')}</span>
        </div>

        {/* Category */}
        <span style={{
          fontSize: 10,
          letterSpacing: '4px',
          textTransform: 'uppercase',
          color: active?.color,
          fontWeight: 600,
          transition: 'color 0.5s ease',
        }}>
          {active?.category}
        </span>

        {/* Brand name */}
        <span style={{
          display: 'block',
          fontSize: isMobile ? 38 : 52,
          fontFamily: "'Playfair Display', Georgia, serif",
          fontWeight: 400,
          color: '#ffffff',
          lineHeight: 1.1,
          letterSpacing: '-0.5px',
          transition: 'all 0.4s ease',
        }}>
          {active?.name}
        </span>

        {/* Accent line */}
        <div style={{
          width: 36,
          height: 2,
          borderRadius: 2,
          background: active?.color ?? '#ffffff',
          transition: 'background 0.5s ease',
        }} />

        {/* Description */}
        <p style={{
          fontSize: isMobile ? 13 : 14,
          color: 'rgba(255,255,255,0.45)',
          lineHeight: 1.85,
          margin: 0,
          transition: 'all 0.4s ease',
          minHeight: isMobile ? 0 : 52, // prevent layout jump when text length differs
        }}>
          {active?.description}
        </p>

        {/* Navigation row */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: isMobile ? 14 : 18,
          marginTop: 8,
        }}>
          <NavButton onClick={goPrev} color={active?.color} label="Previous brand">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.5"
              strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </NavButton>

          {/* Pill-dot indicators */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            {BRANDS.map((_, i) => (
              <button
                key={i}
                onClick={() => goToCard(i)}
                onMouseDown={(e) => e.stopPropagation()}
                aria-label={`Go to ${BRANDS[i].name}`}
                style={{
                  width:  i === activeIndex ? 22 : 6,
                  height: 6,
                  borderRadius: 3,
                  border: 'none',
                  padding: 0,
                  cursor: 'pointer',
                  transition: 'width 0.35s cubic-bezier(0.4,0,0.2,1), background 0.4s ease',
                  background: i === activeIndex
                    ? (active?.color ?? '#ffffff')
                    : 'rgba(255,255,255,0.18)',
                }}
              />
            ))}
          </div>

          <NavButton onClick={goNext} color={active?.color} label="Next brand">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.5"
              strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </NavButton>
        </div>
      </div>

      <style>{`
        @media (prefers-reduced-motion: reduce) {
          * { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
        }
      `}</style>
    </div>
  );
};

export default RotatingCarousel;
