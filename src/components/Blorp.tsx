import React, { useEffect, useRef, useState, useCallback } from 'react';
import '../styles/Blorp.css';

// ─── Phrase banks ─────────────────────────────────────────────────────────────
const sectionPhrases = {
  hero:    ['hi human!', 'welcome :3', 'oo a visitor', 'blorp blorp', 'wave!', '👋', 'hey hey'],
  work:    ['ooh shiny', 'this one slaps', 'fav project', 'art!', 'cool one', 'they made this :)', 'I helped', 'good taste'],
  about:   ["that's us!", 'nice humans', 'they feed me', 'two humans + me', "we're a team", 'yawn', 'cozy'],
  contact: ['say hiii!', 'they bite. jk.', 'send a message!', 'be friends?', "don't be shy", 'mailbox time', '✉ ✉ ✉'],
  default: ['blorp', '...', '*hum*', '★', ':3', 'oo'],
} as const;

type Section = keyof typeof sectionPhrases;

const PET_PHRASES    = ['<3', 'yay!', 'hehe', 'blorp!', ':3', 'more!', 'teehee', '♥'];
const NEAR_PHRASES   = ['ooh shiny', 'cool one', 'they made this :)', 'art!', 'good taste'];
const HOVER_PHRASES  = ['ooh', 'click it!', "what's this?", 'go on', 'press it!'];
const SCROLL_PHRASES = ['wheee', 'slow down!', 'where we going?', 'zoom!'];
const WAKE_PHRASE    = 'hi! :3';
const FAREWELLS      = [
  'aw, leaving already?',
  'come back soon! :)',
  'bye human!! 👋',
  "don't forget about me!",
  'thanks for petting me 💜',
];

const MILESTONES: Record<number, string> = {
  1:   'first one!',
  10:  'we friends now :)',
  50:  'you really like me huh',
  100: "I'd die for u",
};

// ─── Helpers ──────────────────────────────────────────────────────────────────
const getHomePos = () => ({
  x: window.innerWidth  - 120,
  y: window.innerHeight - 120,
});

const todayStr = () => {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
};

// ─── Daily Treat ──────────────────────────────────────────────────────────────
interface TreatProps {
  blorpPos: { x: number; y: number };
  onCollect: () => void;
}

const DailyTreat: React.FC<TreatProps> = ({ blorpPos, onCollect }) => {
  const [origin] = useState(() => {
    const margin = 140;
    return {
      x: margin + Math.random() * (window.innerWidth  - margin * 2 - 40),
      y: margin + Math.random() * (window.innerHeight - margin * 2 - 40),
    };
  });

  const [dragPos, setDragPos]   = useState(origin);
  const [dragging, setDragging] = useState(false);
  const dragStart = useRef({ mx: 0, my: 0, ox: 0, oy: 0 });

  const tryCollect = useCallback((x: number, y: number) => {
    const bx = blorpPos.x + 32;
    const by = blorpPos.y + 32;
    if (Math.hypot(x - bx, y - by) < 64) {
      onCollect();
    } else {
      setDragPos(origin);
    }
  }, [blorpPos, onCollect, origin]);

  useEffect(() => {
    if (!dragging) return;
    const onMove = (e: MouseEvent) => {
      setDragPos({
        x: dragStart.current.ox + e.clientX - dragStart.current.mx,
        y: dragStart.current.oy + e.clientY - dragStart.current.my,
      });
    };
    const onUp = (e: MouseEvent) => {
      setDragging(false);
      tryCollect(
        dragStart.current.ox + e.clientX - dragStart.current.mx + 20,
        dragStart.current.oy + e.clientY - dragStart.current.my + 20,
      );
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
    };
  }, [dragging, tryCollect]);

  return (
    <div
      className={`blorp-treat${dragging ? ' blorp-treat-drag' : ''}`}
      style={{ left: dragPos.x, top: dragPos.y }}
      onMouseDown={e => {
        e.preventDefault();
        setDragging(true);
        dragStart.current = { mx: e.clientX, my: e.clientY, ox: dragPos.x, oy: dragPos.y };
      }}
      onTouchEnd={() => onCollect()}
      onClick={() => onCollect()}
      role="button"
      tabIndex={0}
      aria-label="Daily treat — drag to Blorp or click!"
      onKeyDown={e => e.key === 'Enter' && onCollect()}
    >
      <svg viewBox="0 0 16 16" shapeRendering="crispEdges" width="40" height="40">
        <rect x="3"  y="4"  width="10" height="8"  fill="#ff9b6a"/>
        <rect x="2"  y="5"  width="1"  height="6"  fill="#ff9b6a"/>
        <rect x="13" y="5"  width="1"  height="6"  fill="#ff9b6a"/>
        <rect x="4"  y="3"  width="8"  height="1"  fill="#ff9b6a"/>
        <rect x="4"  y="12" width="8"  height="1"  fill="#ff9b6a"/>
        <rect x="3"  y="4"  width="10" height="2"  fill="#ff5d8f"/>
        <rect x="2"  y="5"  width="1"  height="1"  fill="#ff5d8f"/>
        <rect x="13" y="5"  width="1"  height="1"  fill="#ff5d8f"/>
        <rect x="7"  y="7"  width="2"  height="2"  fill="#faf8f3"/>
        <rect x="5"  y="4"  width="1"  height="1"  fill="#fff066"/>
        <rect x="9"  y="4"  width="1"  height="1"  fill="#6b3eff"/>
        <rect x="11" y="5"  width="1"  height="1"  fill="#06d6a0"/>
      </svg>
    </div>
  );
};

// ─── Blorp mascot ─────────────────────────────────────────────────────────────
const Blorp: React.FC = () => {

  // ── Pet count + one-time localStorage cleanup ─────────────────────────────
  const [petCount, setPetCount] = useState<number>(() => {
    try {
      localStorage.removeItem('blorp-affection');
      localStorage.removeItem('blorp-seen-tutorial');
      return Math.max(0, parseInt(localStorage.getItem('blorp-pet-count') ?? '0', 10) || 0);
    } catch { return 0; }
  });

  // ── Home base ─────────────────────────────────────────────────────────────
  const homeRef   = useRef(getHomePos());
  const posRef    = useRef(getHomePos());
  const targetRef = useRef(getHomePos());
  const [displayPos, setDisplayPos] = useState(posRef.current);

  useEffect(() => {
    const onResize = () => { homeRef.current = getHomePos(); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // ── Cursor ────────────────────────────────────────────────────────────────
  const mouseRef    = useRef({ x: 0, y: 0 });
  const lastMoveRef = useRef(Date.now());

  // ── Eye offset ────────────────────────────────────────────────────────────
  const [eyeOffset, setEyeOffset] = useState({ px: 0, py: 0 });

  // ── Section awareness ─────────────────────────────────────────────────────
  const [currentSection, setCurrentSection] = useState<Section>('hero');

  // ── Behavioural state ─────────────────────────────────────────────────────
  const [sleeping,    setSleeping]    = useState(false);
  const [facingLeft,  setFacingLeft]  = useState(false);
  const [wiggling,    setWiggling]    = useState(false);
  const [excited,     setExcited]     = useState(false);
  const [celebrating, setCelebrating] = useState(false);

  const sleepingRef = useRef(false);
  useEffect(() => { sleepingRef.current = sleeping; }, [sleeping]);

  // ── Speech bubble ─────────────────────────────────────────────────────────
  const [bubble, setBubble] = useState<{ text: string; key: number } | null>(null);
  const bubbleKeyRef  = useRef(0);
  const bubbleTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const showBubble = useCallback((text: string, duration = 2600) => {
    const key = ++bubbleKeyRef.current;
    setBubble({ text, key });
    if (bubbleTimerRef.current) clearTimeout(bubbleTimerRef.current);
    bubbleTimerRef.current = setTimeout(() => {
      setBubble(b => b?.key === key ? null : b);
    }, duration);
  }, []);

  // ── Hearts ────────────────────────────────────────────────────────────────
  const [hearts, setHearts] = useState<Array<{ id: number; x: number; y: number }>>([]);
  const heartIdRef = useRef(0);

  const spawnHearts = useCallback((count = 3) => {
    const { x: cx, y: cy } = posRef.current;
    const batch = Array.from({ length: count }, () => ({
      id: heartIdRef.current++,
      x: cx + 8  + Math.random() * 48,
      y: cy + 4  + Math.random() * 24,
    }));
    setHearts(prev => [...prev, ...batch]);
    setTimeout(() => setHearts(prev => prev.filter(h => !batch.some(b => b.id === h.id))), 1600);
  }, []);

  // ── Z letters ─────────────────────────────────────────────────────────────
  const [zLetters, setZLetters] = useState<Array<{ id: number; x: number; y: number }>>([]);
  const zIdRef = useRef(0);

  // ── Daily treat ───────────────────────────────────────────────────────────
  const [showTreat,  setShowTreat]  = useState(false);
  const [treatToast, setTreatToast] = useState(false);

  useEffect(() => {
    const delay = 5000 + Math.random() * 5000;
    const t = setTimeout(() => {
      try {
        if (localStorage.getItem('blorp-last-treat-date') !== todayStr()) setShowTreat(true);
      } catch {}
    }, delay);
    return () => clearTimeout(t);
  }, []);

  const collectTreat = useCallback(() => {
    setShowTreat(false);
    try { localStorage.setItem('blorp-last-treat-date', todayStr()); } catch {}
    setCelebrating(true);
    setTimeout(() => setCelebrating(false), 1000);
    spawnHearts(8);
    showBubble('TREAT DAY!! 🍪', 3200);
    setTreatToast(true);
    setTimeout(() => setTreatToast(false), 3600);
  }, [spawnHearts, showBubble]);

  // ── Section IntersectionObserver ──────────────────────────────────────────
  useEffect(() => {
    const sectionMap: Record<string, Section> = {
      Home: 'hero', Projects: 'work', About: 'about', Contact: 'contact',
    };
    const els = document.querySelectorAll('[data-section]');
    if (!els.length) return;

    const ratios = new Map<Element, number>();
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => ratios.set(e.target, e.intersectionRatio));
      let best: { ratio: number; section: Section } = { ratio: 0, section: 'hero' };
      ratios.forEach((ratio, el) => {
        const key = sectionMap[(el as HTMLElement).dataset.section ?? ''];
        if (key && ratio > best.ratio) best = { ratio, section: key };
      });
      if (best.ratio > 0) setCurrentSection(best.section);
    }, { threshold: [0, 0.1, 0.25, 0.5, 0.75, 1] });

    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  // ── Mouse tracking + eye tracking + wake ──────────────────────────────────
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseRef.current    = { x: e.clientX, y: e.clientY };
      lastMoveRef.current = Date.now();

      if (sleepingRef.current) {
        setSleeping(false);
        showBubble(WAKE_PHRASE, 2000);
      }

      const cx    = posRef.current.x + 32;
      const cy    = posRef.current.y + 32;
      const dx    = e.clientX - cx;
      const dy    = e.clientY - cy;
      const angle = Math.atan2(dy, dx);
      const dist  = Math.min(Math.hypot(dx, dy) / 280, 1);
      setEyeOffset({
        px: Math.round(Math.cos(angle) * dist),
        py: Math.round(Math.sin(angle) * dist),
      });
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, [showBubble]);

  // ── Sleep detection (6s idle → go home → sleep) ───────────────────────────
  useEffect(() => {
    const interval = setInterval(() => {
      if (Date.now() - lastMoveRef.current > 6000 && !sleepingRef.current) {
        targetRef.current = { ...homeRef.current };
        setTimeout(() => {
          if (!sleepingRef.current && Date.now() - lastMoveRef.current > 6000) {
            setSleeping(true);
          }
        }, 2500);
      }
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // ── Z letters when sleeping ───────────────────────────────────────────────
  useEffect(() => {
    if (!sleeping) { setZLetters([]); return; }
    const interval = setInterval(() => {
      const id = zIdRef.current++;
      const x  = posRef.current.x + 50 + Math.random() * 18;
      const y  = posRef.current.y - 6;
      setZLetters(prev => [...prev.slice(-6), { id, x, y }]);
      setTimeout(() => setZLetters(prev => prev.filter(z => z.id !== id)), 2300);
    }, 1600);
    return () => clearInterval(interval);
  }, [sleeping]);

  // ── Wandering (60% near home / 25% anywhere / 15% cursor) ─────────────────
  useEffect(() => {
    const pick = () => {
      if (sleepingRef.current) return;
      const home = homeRef.current;
      const r    = Math.random();
      const W    = window.innerWidth  - 64;
      const H    = window.innerHeight - 64;

      if (r < 0.60) {
        const a = Math.random() * Math.PI * 2;
        const d = Math.random() * 200;
        targetRef.current = {
          x: Math.max(40, Math.min(W - 40, home.x + Math.cos(a) * d)),
          y: Math.max(40, Math.min(H - 40, home.y + Math.sin(a) * d)),
        };
      } else if (r < 0.85) {
        const m = 80;
        targetRef.current = {
          x: m + Math.random() * (W - m * 2),
          y: m + Math.random() * (H - m * 2),
        };
      } else if (mouseRef.current.x > 0) {
        targetRef.current = {
          x: Math.max(40, Math.min(W - 40, mouseRef.current.x - 32 + (Math.random() - 0.5) * 130)),
          y: Math.max(40, Math.min(H - 40, mouseRef.current.y - 32 + (Math.random() - 0.5) * 130)),
        };
      }
    };
    const interval = setInterval(pick, 4000);
    setTimeout(pick, 800);
    return () => clearInterval(interval);
  }, []);

  // ── RAF lerp loop ─────────────────────────────────────────────────────────
  useEffect(() => {
    let raf: number;
    const animate = () => {
      const { x: px, y: py } = posRef.current;
      const { x: tx, y: ty } = targetRef.current;
      const speed = currentSection === 'about' ? 0.025 : 0.04;
      const nx = px + (tx - px) * speed;
      const ny = py + (ty - py) * speed;
      if (Math.abs(nx - px) > 0.3) setFacingLeft(nx < px);
      posRef.current = { x: nx, y: ny };
      setDisplayPos({ x: nx, y: ny });
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [currentSection]);

  // ── Proximity to project cards (excitement) ───────────────────────────────
  useEffect(() => {
    const check = () => {
      const cx = posRef.current.x + 32;
      const cy = posRef.current.y + 32;
      let near = false;
      document.querySelectorAll('.pc-card').forEach(el => {
        const r = el.getBoundingClientRect();
        if (Math.hypot(cx - (r.left + r.width / 2), cy - (r.top + r.height / 2)) < 220) near = true;
      });
      setExcited(near);
      if (near && Math.random() < 0.22) {
        showBubble(NEAR_PHRASES[Math.floor(Math.random() * NEAR_PHRASES.length)]);
      }
    };
    const interval = setInterval(check, 2000);
    return () => clearInterval(interval);
  }, [showBubble]);

  // ── Idle chatter (3s / 40%) ───────────────────────────────────────────────
  useEffect(() => {
    const interval = setInterval(() => {
      if (!sleepingRef.current && Math.random() < 0.40) {
        const pool = sectionPhrases[currentSection] ?? sectionPhrases.default;
        showBubble(pool[Math.floor(Math.random() * pool.length)]);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [showBubble, currentSection]);

  // ── Hover reactions on links / buttons / cards ────────────────────────────
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | null = null;
    const onOver = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest('a, button, .pc-card')) return;
      timer = setTimeout(() => {
        if (Math.random() < 0.30) showBubble(HOVER_PHRASES[Math.floor(Math.random() * HOVER_PHRASES.length)]);
      }, 500);
    };
    const onOut = () => { if (timer) { clearTimeout(timer); timer = null; } };
    document.addEventListener('mouseover', onOver, { passive: true });
    document.addEventListener('mouseout',  onOut,  { passive: true });
    return () => {
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseout',  onOut);
      if (timer) clearTimeout(timer);
    };
  }, [showBubble]);

  // ── Fast-scroll reactions (>800px/s, throttled 4s) ────────────────────────
  useEffect(() => {
    let lastY    = window.scrollY;
    let lastTime = Date.now();
    let cooldown = false;
    const onScroll = () => {
      const now = Date.now();
      const dy  = Math.abs(window.scrollY - lastY);
      const dt  = now - lastTime;
      if (dt > 0 && (dy / dt) * 1000 > 800 && !cooldown && !sleepingRef.current) {
        showBubble(SCROLL_PHRASES[Math.floor(Math.random() * SCROLL_PHRASES.length)]);
        cooldown = true;
        setTimeout(() => { cooldown = false; }, 4000);
      }
      lastY    = window.scrollY;
      lastTime = now;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [showBubble]);

  // ── Exit-intent farewell ──────────────────────────────────────────────────
  useEffect(() => {
    const onLeave = (e: MouseEvent) => {
      if (e.clientY > 0) return;
      try {
        if (sessionStorage.getItem('blorp-said-bye')) return;
        if (parseInt(localStorage.getItem('blorp-pet-count') ?? '0', 10) === 0) return;
        sessionStorage.setItem('blorp-said-bye', '1');
      } catch { return; }

      targetRef.current = { x: window.innerWidth / 2 - 32, y: window.innerHeight * 0.28 };
      setTimeout(() => {
        showBubble(FAREWELLS[Math.floor(Math.random() * FAREWELLS.length)], 3200);
        spawnHearts(5);
      }, 900);
      setTimeout(() => { targetRef.current = { ...homeRef.current }; }, 4200);
    };
    document.documentElement.addEventListener('mouseleave', onLeave);
    return () => document.documentElement.removeEventListener('mouseleave', onLeave);
  }, [showBubble, spawnHearts]);

  // ── Click / pet ───────────────────────────────────────────────────────────
  const handleClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    if (sleepingRef.current) {
      setSleeping(false);
      showBubble(WAKE_PHRASE, 2000);
      return;
    }
    const next = petCount + 1;
    setPetCount(next);
    try { localStorage.setItem('blorp-pet-count', String(next)); } catch {}
    spawnHearts();
    setWiggling(true);
    setTimeout(() => setWiggling(false), 700);
    showBubble(MILESTONES[next] ?? PET_PHRASES[Math.floor(Math.random() * PET_PHRASES.length)], MILESTONES[next] ? 3500 : 2600);
  }, [petCount, spawnHearts, showBubble]);

  // ── Derived ───────────────────────────────────────────────────────────────
  const cls = [
    'blorp-mascot',
    sleeping                      && 'blorp-sleeping',
    (wiggling || celebrating)     && 'blorp-wiggle',
    excited && !sleeping          && 'blorp-excited',
  ].filter(Boolean).join(' ');

  const lx = 12 + eyeOffset.px;
  const ly = 17 + eyeOffset.py;
  const rx = 18 + eyeOffset.px;
  const ry = 17 + eyeOffset.py;

  return (
    <>
      {showTreat && <DailyTreat blorpPos={displayPos} onCollect={collectTreat} />}

      {treatToast && (
        <div className="blorp-toast" role="status">
          ★ daily treat collected — come back tomorrow!
        </div>
      )}

      <div
        className={cls}
        style={{ left: Math.round(displayPos.x), top: Math.round(displayPos.y) }}
        onClick={handleClick}
        role="img"
        aria-label="Blorp — click to pet!"
        title="Click to pet Blorp!"
      >
        <div
          className="blorp-mascot-body"
          style={{ transform: `scaleX(${facingLeft ? -1 : 1})` }}
          aria-hidden="true"
        >
          <svg viewBox="0 0 32 32" shapeRendering="crispEdges" style={{ width: '100%', height: '100%' }}>
            <rect x="8"  y="14" width="16" height="12" fill="#5b2fd4"/>
            <rect x="6"  y="16" width="2"  height="8"  fill="#5b2fd4"/>
            <rect x="24" y="16" width="2"  height="8"  fill="#5b2fd4"/>
            <rect x="10" y="12" width="12" height="2"  fill="#5b2fd4"/>
            <rect x="12" y="10" width="8"  height="2"  fill="#5b2fd4"/>
            <rect x="10" y="14" width="2"  height="4"  fill="#7a52e8"/>
            <rect x="12" y="12" width="2"  height="2"  fill="#7a52e8"/>
            <rect x="13" y="6"  width="2"  height="4"  fill="#5b2fd4"/>
            <rect x="17" y="4"  width="2"  height="6"  fill="#5b2fd4"/>
            <rect x="12" y="4"  width="4"  height="2"  fill="#e87f2a"/>
            <rect x="16" y="2"  width="4"  height="2"  fill="#e87f2a"/>
            {sleeping ? (
              <>
                <rect x="11" y="19" width="4" height="1" fill="#7a52e8"/>
                <rect x="17" y="19" width="4" height="1" fill="#7a52e8"/>
              </>
            ) : (
              <>
                <rect x="11" y="16" width="4" height="4" fill="white"/>
                <rect x="17" y="16" width="4" height="4" fill="white"/>
                <rect x={lx} y={ly} width="2" height="2" fill="#06060f"/>
                <rect x={rx} y={ry} width="2" height="2" fill="#06060f"/>
              </>
            )}
            {sleeping ? (
              <rect x="13" y="22" width="6" height="1" fill="#5b2fd4"/>
            ) : (
              <>
                <rect x="13" y="22" width="2" height="2" fill="#06060f"/>
                <rect x="17" y="22" width="2" height="2" fill="#06060f"/>
                <rect x="15" y="23" width="2" height="1" fill="#06060f"/>
              </>
            )}
            <rect x="10" y="26" width="4" height="2" fill="#3d1d9e"/>
            <rect x="18" y="26" width="4" height="2" fill="#3d1d9e"/>
            <rect x="4"  y="10" width="1" height="1" fill="#c9a96e" opacity="0.75"/>
            <rect x="27" y="8"  width="1" height="1" fill="#c9a96e" opacity="0.75"/>
            <rect x="3"  y="21" width="1" height="1" fill="#e87f2a" opacity="0.5"/>
            <rect x="28" y="20" width="1" height="1" fill="#e87f2a" opacity="0.4"/>
          </svg>
        </div>

        {bubble && (
          <div key={bubble.key} className="blorp-bubble" role="status" aria-live="polite">
            {bubble.text}
          </div>
        )}
      </div>

      {hearts.map(h => (
        <div key={h.id} className="blorp-heart" style={{ left: h.x, top: h.y }} aria-hidden="true">♥</div>
      ))}

      {zLetters.map(z => (
        <div key={z.id} className="blorp-z" style={{ left: z.x, top: z.y }} aria-hidden="true">z</div>
      ))}
    </>
  );
};

export default Blorp;
