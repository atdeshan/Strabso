import { useNavigate } from 'react-router-dom';
import { Suspense, useCallback } from 'react';
import Model3D from '../components/3DModel';
import '../styles/Landing.css';

// Loading component with better UX
function ModelLoader() {
  return (
    <div className="loader" role="status" aria-label="Loading 3D model">
      <div className="loader-content">
        <div className="loader-spinner">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <p className="loader-text">Loading Experience...</p>
      </div>
    </div>
  );
}

function Landing() {
  const navigate = useNavigate();

  const handleGetStarted = useCallback(() => {
    navigate('/home');
  }, [navigate]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleGetStarted();
      }
    },
    [handleGetStarted]
  );

  return (
    <div className="landing-container" role="main" aria-label="Landing page">
      {/* Subtle ambient glow behind model */}
      <div className="ambient-glow" aria-hidden="true" />

      {/* 3D Model - Full focus */}
      <main className="model-stage" aria-label="Interactive 3D logo model">
        <Suspense fallback={<ModelLoader />}>
          <Model3D />
        </Suspense>
      </main>

      {/* Hint text for interaction */}
      <p className="interaction-hint" aria-hidden="true">
        Move your mouse to interact with the model
      </p>

      {/* Single CTA */}
      <button
        className="cta-button"
        onClick={handleGetStarted}
        onKeyDown={handleKeyDown}
        aria-label="Get started - Enter the main experience"
      >
        <span className="cta-text">Get Started</span>
        <svg
          className="cta-arrow"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M5 12h14M13 6l6 6-6 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}

export default Landing;