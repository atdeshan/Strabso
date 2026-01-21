import { useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import '../styles/Landing.css';

function Landing() {
  const navigate = useNavigate();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      opacity: number;
      color: string;
    }> = [];

    // Colors matching the home page service icons
    const colors = [
      '59, 130, 246',   // Blue
      '139, 92, 246',   // Purple
      '236, 72, 153',   // Pink
      '34, 197, 94',    // Green (from Elevate gradient)
      '250, 204, 21',   // Yellow (from Elevate gradient)
    ];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      particles = [];
      const count = Math.floor((canvas.width * canvas.height) / 15000);
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: Math.random() * 2 + 1,
          opacity: Math.random() * 0.5 + 0.2,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, ${p.opacity})`;
        ctx.fill();

        // Connect nearby particles
        particles.slice(i + 1).forEach((p2) => {
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(139, 92, 246, ${0.15 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animationId = requestAnimationFrame(drawParticles);
    };

    resize();
    createParticles();
    drawParticles();

    window.addEventListener('resize', () => {
      resize();
      createParticles();
    });

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  const handleGetStarted = () => {
    navigate('/home');
  };

  return (
    <div className="landing-container">
      <canvas ref={canvasRef} className="particle-canvas" />
      
      {/* Animated background shapes */}
      <div className="bg-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
      </div>

      {/* Noise overlay */}
      <div className="noise-overlay"></div>

      {/* Main content */}
      <div className="landing-content">
        <div className="brand-badge">
          <span className="badge-dot"></span>
          <span>Brand Strategy Studio</span>
        </div>

        <h1 className="landing-title">
          <span className="title-line">
            <span className="char" style={{ animationDelay: '0.1s' }}>S</span>
            <span className="char" style={{ animationDelay: '0.15s' }}>T</span>
            <span className="char" style={{ animationDelay: '0.2s' }}>R</span>
            <span className="char" style={{ animationDelay: '0.25s' }}>A</span>
            <span className="char" style={{ animationDelay: '0.3s' }}>B</span>
            <span className="char" style={{ animationDelay: '0.35s' }}>S</span>
            <span className="char" style={{ animationDelay: '0.4s' }}>O</span>
          </span>
        </h1>

        <div className="tagline-wrapper">
          <div className="tagline-line"></div>
          <p className="landing-tagline">We Are Brand Activists</p>
          <div className="tagline-line"></div>
        </div>

        <p className="landing-description">
          Transforming visions into memorable brand experiences through 
          strategic thinking and creative excellence.
        </p>

        <button className="get-started-btn" onClick={handleGetStarted}>
          <span className="btn-text">Get Started</span>
          <span className="btn-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </span>
          <span className="btn-bg"></span>
        </button>
      </div>

      {/* Corner accents */}
      <div className="corner-accent top-left"></div>
      <div className="corner-accent top-right"></div>
      <div className="corner-accent bottom-left"></div>
      <div className="corner-accent bottom-right"></div>
    </div>
  );
}

export default Landing;