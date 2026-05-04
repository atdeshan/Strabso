import React, { useState, useEffect, useRef, useCallback } from 'react';

// ─── URL helper ────────────────────────────────────────────────────────────────
const BASE = import.meta.env.BASE_URL;
function g(folder: string, file: string): string {
  return `${BASE}gallery/${encodeURIComponent(folder)}/${encodeURIComponent(file)}`;
}

// ─── Types ──────────────────────────────────────────────────────────────────────
interface Project {
  id: number;
  title: string;
  category: string;
  location: string;
  year: string;
  coverImage: string;
  photos: string[];
}

// ─── Project data ───────────────────────────────────────────────────────────────
const projects: Project[] = [
  {
    id: 1,
    title: "Coca Cola Annual Business Con 2025",
    category: "Business Conference",
    location: "Colombo",
    year: "2025",
    coverImage: g("Coca Cola Annual Business Con 2025", "cover.jpg"),
    photos: [
      g("Coca Cola Annual Business Con 2025", "cover.jpg"),
      g("Coca Cola Annual Business Con 2025", "coca1.jpg"),
      g("Coca Cola Annual Business Con 2025", "coco2.jpg"),
      g("Coca Cola Annual Business Con 2025", "coca3.jpg"),
      g("Coca Cola Annual Business Con 2025", "coca4.jpg"),
    ],
  },
  {
    id: 2,
    title: "Elephant House – Vibe Activations",
    category: "Brand Activation",
    location: "Island-wide",
    year: "2024–2025",
    coverImage: g("Elephant House – Vibe SMMT Activation", "cover.jpg"),
    photos: [
      g("Elephant House – Vibe SMMT Activation", "cover.jpg"),
      g("Elephant House – Vibe SMMT Activation", "eh.jpg"),
      g("Elephant House – Vibe SMMT Activation", "eh2.jpg"),
      g("Elephant House – Vibe SMMT Activation", "movie_cover.jpg"),
      g("Elephant House – Vibe SMMT Activation", "movie_eh.jpg"),
    ],
  },
  {
    id: 3,
    title: "Roza Pasta – Christmas Mall Activation",
    category: "Mall Activation",
    location: "Colombo",
    year: "2024",
    coverImage: g("Roza Pasta – Christmas Mall Activation", "cover.jpg"),
    photos: [
      g("Roza Pasta – Christmas Mall Activation", "cover.jpg"),
      g("Roza Pasta – Christmas Mall Activation", "ro1.jpg"),
      g("Roza Pasta – Christmas Mall Activation", "ro2.png"),
    ],
  },
  {
    id: 4,
    title: "Uswatta – Jo-Pet Big Match Selling Operation",
    category: "Selling Operation",
    location: "Island-wide",
    year: "2024",
    coverImage: g("Uswatta – Jo-Pet Big Match- Selling Operation ", "cover.jpg"),
    photos: [
      g("Uswatta – Jo-Pet Big Match- Selling Operation ", "cover.jpg"),
      g("Uswatta – Jo-Pet Big Match- Selling Operation ", "us1.jpg"),
    ],
  },
  {
    id: 5,
    title: "Vivya – MT Activation",
    category: "Modern Trade Activation",
    location: "Island-wide",
    year: "2024",
    coverImage: g("Vivya – MT Activation ", "cover.jpg"),
    photos: [
      g("Vivya – MT Activation ", "cover.jpg"),
      g("Vivya – MT Activation ", "vv1.jpg"),
      g("Vivya – MT Activation ", "vv2.jpg"),
    ],
  },
  {
    id: 6,
    title: "Xtra – SL & AFG Cricket Tournament 2024",
    category: "Sports Activation",
    location: "Colombo",
    year: "2024",
    coverImage: g("Xtra – SL AFG One Day Cricket Tournament 2024", "cover.jpg"),
    photos: [
      g("Xtra – SL AFG One Day Cricket Tournament 2024", "cover.jpg"),
      g("Xtra – SL AFG One Day Cricket Tournament 2024", "ext1.jpg"),
      g("Xtra – SL AFG One Day Cricket Tournament 2024", "ext2.jpg"),
      g("Xtra – SL AFG One Day Cricket Tournament 2024", "ext3.png"),
    ],
  },
  {
    id: 7,
    title: "Maliban – Non Fat Mall Activation",
    category: "Mall Activation",
    location: "Colombo",
    year: "2025",
    coverImage: g("Maliban - Non Fat Mall Activation", "cover.jpg"),
    photos: [
      g("Maliban - Non Fat Mall Activation", "cover.jpg"),
      g("Maliban - Non Fat Mall Activation", "mal.jpg"),
      g("Maliban - Non Fat Mall Activation", "mal1.jpg"),
    ],
  },
  {
    id: 8,
    title: "Anchor – Nallur Festival Door to Door",
    category: "Door to Door Activation",
    location: "Jaffna",
    year: "2025",
    coverImage: g("Anchor - Nallur Festival - Door to Door Activation", "cover.jpg"),
    photos: [
      g("Anchor - Nallur Festival - Door to Door Activation", "cover.jpg"),
      g("Anchor - Nallur Festival - Door to Door Activation", "ac.jpg"),
    ],
  },
  {
    id: 9,
    title: "Kesha – Office Activation",
    category: "Office Activation",
    location: "Colombo",
    year: "2025",
    coverImage: g("Kesha - Office Activation", "cover.jpg"),
    photos: [
      g("Kesha - Office Activation", "cover.jpg"),
      g("Kesha - Office Activation", "ks1.jpg"),
    ],
  },
  {
    id: 10,
    title: "Lanka Soy – Town Activation",
    category: "Town Activation",
    location: "Island-wide",
    year: "2025",
    coverImage: g("Lanka Soy Town Activation", "cover.jpg"),
    photos: [
      g("Lanka Soy Town Activation", "cover.jpg"),
      g("Lanka Soy Town Activation", "ls.jpg"),
      g("Lanka Soy Town Activation", "ls1.jpg"),
    ],
  },
  {
    id: 11,
    title: "Sting – Holy Activation",
    category: "Brand Activation",
    location: "Island-wide",
    year: "2025",
    coverImage: g("Sting - Holy Activation", "cover.jpg"),
    photos: [
      g("Sting - Holy Activation", "cover.jpg"),
      g("Sting - Holy Activation", "stng.jpg"),
    ],
  },
  {
    id: 12,
    title: "HNB – SOLO Merchant Activation",
    category: "Merchant Activation",
    location: "Island-wide",
    year: "2025",
    coverImage: g("HNB - SOLO Merchant Activation", "cover.jpg"),
    photos: [
      g("HNB - SOLO Merchant Activation", "cover.jpg"),
      g("HNB - SOLO Merchant Activation", "hnb.jpg"),
      g("HNB - SOLO Merchant Activation", "hnb1.jpg"),
    ],
  },
];

const stats = [
  { number: "100+", label: "Activations" },
  { number: "25+",  label: "Brand Partners" },
  { number: "9",    label: "Provinces" },
];


// ─── Lazy background image ──────────────────────────────────────────────────────
const LazyBg: React.FC<{ src: string; className?: string }> = ({ src, className }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setLoaded(true); obs.disconnect(); } },
      { rootMargin: '300px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        backgroundImage: loaded ? `url('${src}')` : 'none',
        backgroundColor: loaded ? undefined : 'rgba(255,255,255,0.04)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '100%',
        transition: 'background-image 0.3s ease',
      }}
    />
  );
};

// ─── Lightbox ───────────────────────────────────────────────────────────────────
const Lightbox: React.FC<{
  project: Project;
  startIndex: number;
  onClose: () => void;
}> = ({ project, startIndex, onClose }) => {
  const [idx, setIdx] = useState(startIndex);
  const touchX = useRef<number | null>(null);

  const prev = useCallback(() => setIdx(i => (i - 1 + project.photos.length) % project.photos.length), [project.photos.length]);
  const next = useCallback(() => setIdx(i => (i + 1) % project.photos.length), [project.photos.length]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose, next, prev]);

  return (
    <div
      className="lb-overlay"
      onClick={onClose}
      onTouchStart={e => { touchX.current = e.touches[0].clientX; }}
      onTouchEnd={e => {
        if (touchX.current === null) return;
        const dx = touchX.current - e.changedTouches[0].clientX;
        if (Math.abs(dx) > 50) dx > 0 ? next() : prev();
        touchX.current = null;
      }}
    >
      <div className="lb-box" onClick={e => e.stopPropagation()}>
        {/* Header */}
        <div className="lb-header">
          <span className="lb-title">{project.title}</span>
          <div className="lb-header-right">
            <span className="lb-counter">{idx + 1} / {project.photos.length}</span>
            <button className="lb-close" onClick={onClose} aria-label="Close">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Main image */}
        <div className="lb-img-wrap">
          <button className="lb-nav lb-nav-prev" onClick={prev} aria-label="Previous">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18L9 12l6-6"/>
            </svg>
          </button>
          <img
            key={idx}
            src={project.photos[idx]}
            alt={`${project.title} ${idx + 1}`}
            className="lb-img"
            decoding="async"
          />
          <button className="lb-nav lb-nav-next" onClick={next} aria-label="Next">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>
        </div>

        {/* Thumbnails */}
        {project.photos.length > 1 && (
          <div className="lb-thumbs">
            {project.photos.map((p, i) => (
              <button
                key={i}
                className={`lb-thumb${i === idx ? ' lb-thumb-active' : ''}`}
                onClick={() => setIdx(i)}
                aria-label={`Photo ${i + 1}`}
              >
                <img src={p} alt="" loading="lazy" decoding="async" />
              </button>
            ))}
          </div>
        )}

        {/* Mobile swipe hint */}
        <p className="lb-swipe-hint">Swipe to navigate</p>
      </div>
    </div>
  );
};

// ─── Project card ───────────────────────────────────────────────────────────────
const ProjectCard: React.FC<{ project: Project; index: number; onOpen: (id: number) => void }> = ({ project, index, onOpen }) => (
  <article
    className="pc-card"
    style={{ animationDelay: `${(index % 4) * 0.08}s` }}
    onClick={() => onOpen(project.id)}
    role="button"
    tabIndex={0}
    aria-label={`View ${project.title} gallery`}
    onKeyDown={e => e.key === 'Enter' && onOpen(project.id)}
  >
    <div className="pc-img-wrap">
      <LazyBg src={project.coverImage} className="pc-img" />
      <div className="pc-overlay" />
      <div className="pc-badge">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="2"/>
          <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor"/>
          <path d="M21 15L16 10 5 21" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        {project.photos.length}
      </div>
      <div className="pc-cta">
        <span>View Gallery</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 17L17 7M17 7H7M17 7v10"/>
        </svg>
      </div>
    </div>
    <div className="pc-info">
      <span className="pc-category">{project.category}</span>
      <h3 className="pc-title">{project.title}</h3>
      <div className="pc-meta">
        <span>{project.location}</span>
        <span className="pc-dot">·</span>
        <span>{project.year}</span>
      </div>
    </div>
  </article>
);

// ─── Main page ──────────────────────────────────────────────────────────────────
const Projects: React.FC = () => {
  const [lightboxId, setLightboxId] = useState<number | null>(null);
  const activeProject = lightboxId != null ? projects.find(p => p.id === lightboxId) ?? null : null;

  return (
    <div className="proj-page">
      <style>{`
        /* ── Page ── */
        .proj-page {
          min-height: 100vh;
          background: #07070f;
          color: #fff;
          font-family: 'Outfit', sans-serif;
          padding: 110px 40px 80px;
        }
        .proj-inner { max-width: 1400px; margin: 0 auto; }

        /* ── Header ── */
        .proj-header { margin-bottom: 56px; }
        .proj-eyebrow {
          font-size: 11px;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: #d4af37;
          margin-bottom: 16px;
        }
        .proj-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(40px, 6vw, 72px);
          font-weight: 500;
          line-height: 1.05;
          margin: 0 0 20px;
          color: #fff;
        }
        .proj-heading em {
          font-style: italic;
          color: #e87f2a;
        }
        .proj-rule {
          width: 60px; height: 2px;
          background: rgba(255,255,255,0.25);
          border: none; margin: 0;
        }

        /* ── Stats strip ── */
        .proj-stats {
          display: flex;
          gap: 0;
          margin-bottom: 64px;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 12px;
          overflow: hidden;
        }
        .proj-stat {
          flex: 1;
          padding: 24px 28px;
          border-right: 1px solid rgba(255,255,255,0.1);
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .proj-stat:last-child { border-right: none; }
        .proj-stat-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(32px, 4vw, 48px);
          font-weight: 500;
          color: #e87f2a;
          line-height: 1;
        }
        .proj-stat-label {
          font-size: 11px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.5);
        }

        /* ── Grid ── */
        .proj-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 28px;
        }

        /* ── Card ── */
        .pc-card {
          cursor: pointer;
          animation: pcFadeUp 0.5s ease both;
          border-radius: 10px;
          overflow: hidden;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          transition: border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
        }
        .pc-card:hover {
          border-color: rgba(232,127,42,0.4);
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.4);
        }
        .pc-card:focus-visible {
          outline: 2px solid #e87f2a;
          outline-offset: 2px;
        }
        @keyframes pcFadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ── Card image ── */
        .pc-img-wrap {
          position: relative;
          aspect-ratio: 4/5;
          overflow: hidden;
        }
        .pc-img {
          transition: transform 0.6s cubic-bezier(0.16,1,0.3,1);
        }
        .pc-card:hover .pc-img {
          transform: scale(1.05);
        }
        .pc-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.75) 100%);
        }
        .pc-badge {
          position: absolute;
          top: 12px; right: 12px;
          background: rgba(0,0,0,0.55);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 20px;
          padding: 5px 10px;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.5px;
          display: flex;
          align-items: center;
          gap: 5px;
          color: rgba(255,255,255,0.85);
        }
        .pc-cta {
          position: absolute;
          bottom: 16px; left: 16px;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #fff;
          opacity: 0;
          transform: translateY(8px);
          transition: opacity 0.3s ease, transform 0.3s ease;
        }
        .pc-card:hover .pc-cta {
          opacity: 1;
          transform: translateY(0);
        }

        /* ── Card info ── */
        .pc-info { padding: 14px 16px 16px; }
        .pc-category {
          display: inline-block;
          font-size: 10px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #e87f2a;
          margin-bottom: 6px;
        }
        .pc-title {
          font-family: 'Outfit', sans-serif;
          font-size: 14px;
          font-weight: 500;
          color: rgba(255,255,255,0.9);
          margin: 0 0 8px;
          line-height: 1.4;
        }
        .pc-meta {
          font-size: 11px;
          color: rgba(255,255,255,0.4);
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .pc-dot { opacity: 0.4; }

        /* ── Lightbox ── */
        .lb-overlay {
          position: fixed; inset: 0;
          background: rgba(0,0,0,0.97);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: lbFadeIn 0.25s ease;
        }
        @keyframes lbFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        .lb-box {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          padding: 16px 20px 16px;
          box-sizing: border-box;
        }
        .lb-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 12px;
          flex-shrink: 0;
        }
        .lb-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(16px, 2.5vw, 22px);
          color: rgba(255,255,255,0.9);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 70%;
        }
        .lb-header-right {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-shrink: 0;
        }
        .lb-counter {
          font-size: 13px;
          letter-spacing: 2px;
          color: rgba(255,255,255,0.45);
        }
        .lb-close {
          width: 40px; height: 40px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.15);
          background: rgba(255,255,255,0.07);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.2s;
          flex-shrink: 0;
        }
        .lb-close:hover { background: rgba(255,255,255,0.18); }
        .lb-img-wrap {
          flex: 1;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          min-height: 0;
        }
        .lb-img {
          max-width: 92%;
          max-height: 100%;
          object-fit: contain;
          border-radius: 6px;
          animation: lbImgIn 0.3s cubic-bezier(0.16,1,0.3,1);
        }
        @keyframes lbImgIn {
          from { opacity: 0; transform: scale(0.95); }
          to   { opacity: 1; transform: scale(1); }
        }
        .lb-nav {
          position: absolute;
          top: 50%; transform: translateY(-50%);
          width: 52px; height: 52px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.15);
          background: rgba(255,255,255,0.08);
          backdrop-filter: blur(10px);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.2s;
          z-index: 2;
        }
        .lb-nav:hover { background: rgba(255,255,255,0.2); }
        .lb-nav-prev { left: 16px; }
        .lb-nav-next { right: 16px; }
        .lb-thumbs {
          display: flex;
          justify-content: center;
          gap: 8px;
          padding: 14px 0 4px;
          overflow-x: auto;
          flex-shrink: 0;
          scrollbar-width: none;
        }
        .lb-thumbs::-webkit-scrollbar { display: none; }
        .lb-thumb {
          width: 56px; height: 42px;
          border-radius: 5px;
          overflow: hidden;
          border: 2px solid transparent;
          cursor: pointer;
          flex-shrink: 0;
          padding: 0;
          background: none;
          opacity: 0.45;
          transition: opacity 0.2s, border-color 0.2s;
        }
        .lb-thumb img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .lb-thumb-active { opacity: 1; border-color: #e87f2a; }
        .lb-thumb:hover { opacity: 0.85; }
        .lb-swipe-hint {
          text-align: center;
          font-size: 11px;
          letter-spacing: 1px;
          color: rgba(255,255,255,0.25);
          margin: 6px 0 0;
          flex-shrink: 0;
          display: none;
        }

        /* ── Responsive ── */
        @media (max-width: 1200px) {
          .proj-page { padding: 100px 28px 60px; }
          .proj-grid { grid-template-columns: repeat(3, 1fr); gap: 20px; }
        }
        @media (max-width: 900px) {
          .proj-page { padding: 90px 20px 60px; }
          .proj-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; }
          .proj-stats { margin-bottom: 40px; }
          .proj-stat { padding: 18px 16px; }
          .proj-header { margin-bottom: 36px; }
        }
        @media (max-width: 600px) {
          .proj-page { padding: 80px 12px 48px; }
          .proj-grid { grid-template-columns: repeat(2, 1fr); gap: 10px; }
          .proj-stats { margin-bottom: 28px; border-radius: 10px; }
          .proj-stat { padding: 14px 12px; gap: 2px; }
          .proj-stat-num { font-size: 26px; }
          .proj-stat-label { font-size: 9px; letter-spacing: 1px; }
          .proj-heading { font-size: clamp(32px, 9vw, 44px); }
          .proj-header { margin-bottom: 24px; }
          .pc-img-wrap { aspect-ratio: 1/1; }
          .pc-info { padding: 10px 12px 12px; }
          .pc-title { font-size: 12px; margin-bottom: 4px; }
          .pc-category { font-size: 9px; margin-bottom: 4px; }
          .pc-meta { font-size: 10px; }
          .pc-cta { display: none; }
          .lb-nav { width: 40px; height: 40px; }
          .lb-nav-prev { left: 6px; }
          .lb-nav-next { right: 6px; }
          .lb-swipe-hint { display: block; }
          .lb-nav { display: none; }
          .lb-box { padding: 12px 14px 12px; }
          .lb-thumb { width: 48px; height: 36px; }
        }
        @media (max-width: 380px) {
          .proj-grid { grid-template-columns: 1fr; gap: 14px; }
          .pc-img-wrap { aspect-ratio: 16/9; }
        }
        @media (hover: none) and (pointer: coarse) {
          .pc-card:hover { transform: none; }
          .pc-cta { opacity: 1; transform: none; }
        }
        @media (prefers-reduced-motion: reduce) {
          .pc-card { animation: none; opacity: 1; }
          .lb-overlay, .lb-img { animation: none; }
        }
      `}</style>

      <div className="proj-inner">
        {/* Header */}
        <header className="proj-header">
          <p className="proj-eyebrow">Our Work</p>
          <h1 className="proj-heading">
            Projects
          </h1>
          <hr className="proj-rule" />
        </header>

        {/* Stats */}
        <div className="proj-stats" role="list">
          {stats.map(s => (
            <div key={s.label} className="proj-stat" role="listitem">
              <span className="proj-stat-num">{s.number}</span>
              <span className="proj-stat-label">{s.label}</span>
            </div>
          ))}
        </div>

        {/* Grid */}
        <div className="proj-grid">
          {projects.map((p, i) => (
            <ProjectCard
              key={p.id}
              project={p}
              index={i}
              onOpen={id => setLightboxId(id)}
            />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {activeProject && (
        <Lightbox
          project={activeProject}
          startIndex={0}
          onClose={() => setLightboxId(null)}
        />
      )}
    </div>
  );
};

export default Projects;
