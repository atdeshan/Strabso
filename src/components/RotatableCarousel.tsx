import React, { useState, useEffect, useRef, useCallback } from 'react';
import type { CSSProperties } from 'react';

interface Card {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  description: string;
  accent: string;
}

interface Styles {
  [key: string]: CSSProperties;
}

const RotatingCarousel: React.FC = () => {
  const [rotation, setRotation] = useState<number>(0);
  const [targetRotation, setTargetRotation] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [velocity, setVelocity] = useState<number>(0);
  const [lastX, setLastX] = useState<number>(0);
  const [lastTime, setLastTime] = useState<number>(0);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const buttonAnimationRef = useRef<number | null>(null);
  const autoRotateRef = useRef<number | null>(null);
  const lastFrameTimeRef = useRef<number>(performance.now());

  const cards: Card[] = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop',
      title: 'Alpine Dreams',
      subtitle: 'Mountain Escapes',
      description: 'Discover breathtaking peaks and serene valleys in the heart of the Alps.',
      accent: '#ff6b6b',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=600&fit=crop',
      title: 'Ocean Serenity',
      subtitle: 'Coastal Paradise',
      description: 'Crystal waters meet golden sands in these pristine beach destinations.',
      accent: '#4ecdc4',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=400&h=600&fit=crop',
      title: 'Ancient Temples',
      subtitle: 'Cultural Heritage',
      description: 'Walk through centuries of history in these magnificent sacred spaces.',
      accent: '#feca57',
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=600&fit=crop',
      title: 'Urban Luxe',
      subtitle: 'City Retreats',
      description: 'Experience world-class hospitality in stunning metropolitan settings.',
      accent: '#a55eea',
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=600&fit=crop',
      title: 'Forest Whispers',
      subtitle: 'Nature Immersion',
      description: 'Reconnect with nature in lush, verdant woodland sanctuaries.',
      accent: '#26de81',
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&h=600&fit=crop',
      title: 'Desert Nights',
      subtitle: 'Starlit Adventures',
      description: 'Experience the magic of endless horizons under spectacular night skies.',
      accent: '#fd9644',
    },
  ];

  const cardCount: number = cards.length;
  const anglePerCard: number = 360 / cardCount;
  const radius: number = 320;
  const autoRotateSpeed: number = 0.08;

  const easeOutExpo = (t: number): number => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

  // Continuous smooth auto-rotation - starts immediately
  useEffect(() => {
    if (!autoRotate || isDragging || isAnimating) {
      if (autoRotateRef.current) {
        cancelAnimationFrame(autoRotateRef.current);
        autoRotateRef.current = null;
      }
      return;
    }

    const animate = (currentTime: number): void => {
      const deltaTime = currentTime - lastFrameTimeRef.current;
      lastFrameTimeRef.current = currentTime;
      
      const rotationIncrement = autoRotateSpeed * (deltaTime / 16.67);
      
      setRotation(prev => prev - rotationIncrement);
      
      autoRotateRef.current = requestAnimationFrame(animate);
    };

    lastFrameTimeRef.current = performance.now();
    autoRotateRef.current = requestAnimationFrame(animate);

    return () => {
      if (autoRotateRef.current) {
        cancelAnimationFrame(autoRotateRef.current);
      }
    };
  }, [autoRotate, isDragging, isAnimating]);

  // Smooth button animation for manual navigation
  useEffect(() => {
    if (!isAnimating || isDragging) return;

    const startRotation = rotation;
    const distance = targetRotation - startRotation;
    const duration = 800;
    const startTime = performance.now();

    const animateButton = (currentTime: number): void => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutExpo(progress);

      const newRotation = startRotation + distance * easedProgress;
      setRotation(newRotation);

      if (progress < 1) {
        buttonAnimationRef.current = requestAnimationFrame(animateButton);
      } else {
        setIsAnimating(false);
        setRotation(targetRotation);
      }
    };

    buttonAnimationRef.current = requestAnimationFrame(animateButton);

    return () => {
      if (buttonAnimationRef.current) {
        cancelAnimationFrame(buttonAnimationRef.current);
      }
    };
  }, [isAnimating, targetRotation]);

  // Momentum animation with smooth deceleration (for drag)
  useEffect(() => {
    if (isDragging || isAnimating || autoRotate) return;

    const animate = (): void => {
      setVelocity((prev) => {
        const newVelocity = prev * 0.92;
        if (Math.abs(newVelocity) < 0.02) return 0;
        setRotation((r) => r + newVelocity);
        return newVelocity;
      });
      animationRef.current = requestAnimationFrame(animate);
    };

    if (Math.abs(velocity) > 0.02) {
      animationRef.current = requestAnimationFrame(animate);
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isDragging, velocity, isAnimating, autoRotate]);

  // Update active index based on rotation
  useEffect(() => {
    const normalizedRotation = ((rotation % 360) + 360) % 360;
    const index = Math.round(normalizedRotation / anglePerCard) % cardCount;
    setActiveIndex((cardCount - index) % cardCount);
  }, [rotation, anglePerCard, cardCount]);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>): void => {
    setIsDragging(true);
    setIsAnimating(false);
    setLastX(e.clientX);
    setLastTime(Date.now());
    setVelocity(0);
    if (animationRef.current) cancelAnimationFrame(animationRef.current);
    if (buttonAnimationRef.current) cancelAnimationFrame(buttonAnimationRef.current);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>): void => {
    if (!isDragging) return;

    const currentX = e.clientX;
    const currentTime = Date.now();
    const deltaX = currentX - lastX;
    const deltaTime = Math.max(currentTime - lastTime, 1);

    const newVelocity = (deltaX / deltaTime) * 10;
    setVelocity(newVelocity);

    const rotationDelta = deltaX * 0.3;
    setRotation((prev) => prev + rotationDelta);

    setLastX(currentX);
    setLastTime(currentTime);
  };

  const handleMouseUp = (): void => {
    setIsDragging(false);
  };

  const handleMouseLeave = (): void => {
    if (isDragging) {
      setIsDragging(false);
    }
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>): void => {
    const touch = e.touches[0];
    setIsDragging(true);
    setIsAnimating(false);
    setLastX(touch.clientX);
    setLastTime(Date.now());
    setVelocity(0);
    if (buttonAnimationRef.current) cancelAnimationFrame(buttonAnimationRef.current);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>): void => {
    if (!isDragging) return;

    const touch = e.touches[0];
    const currentX = touch.clientX;
    const currentTime = Date.now();
    const deltaX = currentX - lastX;
    const deltaTime = Math.max(currentTime - lastTime, 1);

    const newVelocity = (deltaX / deltaTime) * 10;
    setVelocity(newVelocity);

    const rotationDelta = deltaX * 0.3;
    setRotation((prev) => prev + rotationDelta);

    setLastX(currentX);
    setLastTime(currentTime);
  };

  const handleTouchEnd = (): void => {
    setIsDragging(false);
  };

  const goToCard = useCallback(
    (index: number): void => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      if (buttonAnimationRef.current) cancelAnimationFrame(buttonAnimationRef.current);
      if (autoRotateRef.current) cancelAnimationFrame(autoRotateRef.current);

      setVelocity(0);

      const currentNormalized = ((rotation % 360) + 360) % 360;
      const targetAngle = (cardCount - index) * anglePerCard;

      let diff = targetAngle - currentNormalized;
      if (diff > 180) diff -= 360;
      if (diff < -180) diff += 360;

      const newTarget = rotation + diff;
      setTargetRotation(newTarget);
      setIsAnimating(true);
    },
    [rotation, cardCount, anglePerCard]
  );

  const goNext = useCallback((): void => {
    const nextIndex = (activeIndex + 1) % cardCount;
    goToCard(nextIndex);
  }, [activeIndex, cardCount, goToCard]);

  const goPrev = useCallback((): void => {
    const prevIndex = (activeIndex - 1 + cardCount) % cardCount;
    goToCard(prevIndex);
  }, [activeIndex, cardCount, goToCard]);

  const currentCard: Card | undefined = cards[activeIndex];

  return (
    <div style={styles.wrapper}>
      {/* Animated Background */}
      <div style={styles.background}>
        <div
          style={{
            ...styles.gradientOrb,
            background: `radial-gradient(circle, ${currentCard?.accent}40 0%, transparent 70%)`,
            left: '20%',
            top: '30%',
            animation: 'float 8s ease-in-out infinite',
          }}
        />
        <div
          style={{
            ...styles.gradientOrb,
            background: `radial-gradient(circle, ${currentCard?.accent}30 0%, transparent 60%)`,
            right: '15%',
            bottom: '20%',
            animation: 'float 10s ease-in-out infinite reverse',
          }}
        />
        <div style={styles.gridOverlay} />
        <div style={styles.noiseOverlay} />
      </div>

      {/* Info Panel */}
      <div style={styles.infoPanel}>
        <div style={styles.infoPanelContent}>
          <div style={styles.labelBadge}>
            <span style={{ color: currentCard?.accent, animation: autoRotate ? 'pulse 2s ease-in-out infinite' : 'none' }}>●</span> 
            {autoRotate ? 'Now Playing' : 'Featured Destination'}
          </div>
          <h2 style={styles.infoTitle} key={activeIndex}>
            {currentCard?.title}
          </h2>
          <p style={styles.infoSubtitle}>{currentCard?.subtitle}</p>
          <div
            style={{
              ...styles.divider,
              background: `linear-gradient(90deg, ${currentCard?.accent}, transparent)`,
            }}
          />
          <p style={styles.infoDescription}>{currentCard?.description}</p>

          {/* Auto-rotate toggle */}
          <button
            style={{
              ...styles.autoRotateBtn,
              background: autoRotate ? `${currentCard?.accent}20` : 'rgba(255,255,255,0.05)',
              borderColor: autoRotate ? currentCard?.accent : 'rgba(255,255,255,0.1)',
            }}
            onClick={() => setAutoRotate(!autoRotate)}
          >
            <div style={{
              ...styles.rotateIcon,
              animation: autoRotate ? 'spin 2s linear infinite' : 'none',
            }}>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke={autoRotate ? currentCard?.accent : 'rgba(255,255,255,0.5)'}
                strokeWidth="2"
              >
                <path d="M23 4v6h-6M1 20v-6h6" />
                <path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" />
              </svg>
            </div>
            <span style={{ color: autoRotate ? '#fff' : 'rgba(255,255,255,0.5)' }}>
              {autoRotate ? 'Auto-Rotating' : 'Auto-Rotate Off'}
            </span>
          </button>

          {/* Navigation dots */}
          <div style={styles.dotsContainer}>
            {cards.map((card, index) => (
              <button
                key={index}
                onClick={() => goToCard(index)}
                style={{
                  ...styles.dot,
                  ...(index === activeIndex
                    ? {
                        ...styles.dotActive,
                        background: card.accent,
                        boxShadow: `0 0 20px ${card.accent}80`,
                      }
                    : {}),
                }}
              />
            ))}
          </div>

          {/* Card counter */}
          <div style={styles.counter}>
            <span style={{ ...styles.counterCurrent, color: currentCard?.accent }}>
              {String(activeIndex + 1).padStart(2, '0')}
            </span>
            <span style={styles.counterDivider}>/</span>
            <span style={styles.counterTotal}>{String(cardCount).padStart(2, '0')}</span>
          </div>
        </div>
      </div>

      {/* 3D Carousel */}
      <div
        ref={containerRef}
        style={{
          ...styles.carouselContainer,
          cursor: isDragging ? 'grabbing' : 'grab',
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div style={styles.carousel}>
          <div
            style={{
              ...styles.carouselInner,
              transform: `rotateY(${rotation}deg)`,
            }}
          >
            {cards.map((card, index) => {
              const angle = index * anglePerCard;
              const isActive = index === activeIndex;

              return (
                <div
                  key={card.id}
                  style={{
                    ...styles.card,
                    transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                    opacity: isActive ? 1 : 0.5,
                    filter: isActive ? 'none' : 'brightness(0.5) saturate(0.7)',
                    boxShadow: isActive
                      ? `0 40px 80px -20px rgba(0, 0, 0, 0.9), 0 0 60px ${card.accent}40, inset 0 0 0 1px rgba(255,255,255,0.1)`
                      : '0 25px 50px -12px rgba(0, 0, 0, 0.8)',
                  }}
                  onClick={() => goToCard(index)}
                >
                  <div style={styles.cardImageContainer}>
                    <img
                      src={card.image}
                      alt={card.title}
                      style={styles.cardImage}
                      draggable={false}
                    />
                    <div
                      style={{
                        ...styles.cardGradient,
                        background: `linear-gradient(180deg, transparent 40%, ${card.accent}20 70%, rgba(0,0,0,0.95) 100%)`,
                      }}
                    />
                  </div>

                  <div style={styles.cardContent}>
                    <div
                      style={{
                        ...styles.cardAccentLine,
                        background: card.accent,
                      }}
                    />
                    <span style={styles.cardSubtitle}>{card.subtitle}</span>
                    <span style={styles.cardTitle}>{card.title}</span>
                  </div>

                  {isActive && (
                    <div
                      style={{
                        ...styles.activeIndicator,
                        borderColor: card.accent,
                        boxShadow: `inset 0 0 30px ${card.accent}30`,
                      }}
                    />
                  )}

                  <div style={styles.cardShine} />
                </div>
              );
            })}
          </div>
        </div>

        {/* Reflection */}
        <div style={styles.reflection}>
          <div
            style={{
              ...styles.carouselInner,
              transform: `rotateY(${rotation}deg) rotateX(180deg)`,
            }}
          >
            {cards.map((card, index) => {
              const angle = index * anglePerCard;
              return (
                <div
                  key={`reflection-${card.id}`}
                  style={{
                    ...styles.card,
                    ...styles.reflectionCard,
                    transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                  }}
                >
                  <img
                    src={card.image}
                    alt=""
                    style={styles.cardImage}
                    draggable={false}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Arrow controls */}
      <div style={styles.controls}>
        <button
          style={{
            ...styles.controlButton,
            borderColor: `${currentCard?.accent}50`,
          }}
          onClick={goPrev}
          onMouseDown={(e) => e.stopPropagation()}
          onMouseEnter={(e) => {
            const target = e.currentTarget;
            target.style.background = `${currentCard?.accent}30`;
            target.style.transform = 'scale(1.1)';
            target.style.boxShadow = `0 0 30px ${currentCard?.accent}50`;
          }}
          onMouseLeave={(e) => {
            const target = e.currentTarget;
            target.style.background = 'rgba(255, 255, 255, 0.05)';
            target.style.transform = 'scale(1)';
            target.style.boxShadow = 'none';
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <button
          style={{
            ...styles.controlButton,
            borderColor: `${currentCard?.accent}50`,
          }}
          onClick={goNext}
          onMouseDown={(e) => e.stopPropagation()}
          onMouseEnter={(e) => {
            const target = e.currentTarget;
            target.style.background = `${currentCard?.accent}30`;
            target.style.transform = 'scale(1.1)';
            target.style.boxShadow = `0 0 30px ${currentCard?.accent}50`;
          }}
          onMouseLeave={(e) => {
            const target = e.currentTarget;
            target.style.background = 'rgba(255, 255, 255, 0.05)';
            target.style.transform = 'scale(1)';
            target.style.boxShadow = 'none';
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>

      {/* Rotation speed indicator */}
      {autoRotate && (
        <div style={styles.speedIndicator}>
          <div style={{
            ...styles.speedBar,
            background: `linear-gradient(90deg, ${currentCard?.accent}, ${currentCard?.accent}50)`,
            animation: 'slideProgress 3s linear infinite',
          }} />
        </div>
      )}

      {/* Keyframe animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -30px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.95); }
        }
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.8); }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes slideProgress {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
};

const styles: Styles = {
  wrapper: {
    position: 'relative',
    width: '100%',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif",
    userSelect: 'none',
    background: 'transparent',
  },
  background: {
    position: 'absolute',
    inset: 0,
    zIndex: 0,
    background: 'transparent',
  },
  gradientOrb: {
    position: 'absolute',
    width: '600px',
    height: '600px',
    borderRadius: '50%',
    filter: 'blur(80px)',
    transition: 'background 0.8s ease',
  },
  gridOverlay: {
    display: 'none',
  },
  noiseOverlay: {
    display: 'none',
  },
  infoPanel: {
    position: 'absolute',
    left: '5%',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 10,
    width: '320px',
  },
  infoPanelContent: {
    background: 'rgba(255, 255, 255, 0.03)',
    backdropFilter: 'blur(40px)',
    borderRadius: '24px',
    padding: '36px',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    boxShadow: '0 40px 80px -20px rgba(0, 0, 0, 0.5)',
  },
  labelBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '11px',
    fontWeight: '600',
    color: 'rgba(255, 255, 255, 0.5)',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    marginBottom: '16px',
  },
  infoTitle: {
    fontSize: '36px',
    fontWeight: '700',
    color: '#ffffff',
    margin: '0 0 8px 0',
    letterSpacing: '-1px',
    lineHeight: 1.1,
    animation: 'fadeSlideIn 0.5s ease',
  },
  infoSubtitle: {
    fontSize: '13px',
    color: 'rgba(255, 255, 255, 0.4)',
    margin: '0 0 24px 0',
    textTransform: 'uppercase',
    letterSpacing: '3px',
    fontWeight: '500',
  },
  divider: {
    height: '3px',
    borderRadius: '3px',
    marginBottom: '24px',
    transition: 'background 0.5s ease',
  },
  infoDescription: {
    fontSize: '15px',
    color: 'rgba(255, 255, 255, 0.6)',
    lineHeight: 1.7,
    margin: '0 0 28px 0',
  },
  autoRotateBtn: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '12px 18px',
    borderRadius: '12px',
    border: '1px solid',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    marginBottom: '24px',
    fontSize: '13px',
    fontWeight: '500',
    width: '100%',
    justifyContent: 'center',
  },
  rotateIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dotsContainer: {
    display: 'flex',
    gap: '10px',
    justifyContent: 'center',
    marginBottom: '24px',
  },
  dot: {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    background: 'rgba(255, 255, 255, 0.2)',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    padding: 0,
  },
  dotActive: {
    transform: 'scale(1.4)',
  },
  counter: {
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'center',
    gap: '4px',
  },
  counterCurrent: {
    fontSize: '32px',
    fontWeight: '700',
    transition: 'color 0.5s ease',
  },
  counterDivider: {
    fontSize: '20px',
    color: 'rgba(255, 255, 255, 0.2)',
    fontWeight: '300',
  },
  counterTotal: {
    fontSize: '16px',
    color: 'rgba(255, 255, 255, 0.3)',
    fontWeight: '500',
  },
  carouselContainer: {
    position: 'relative',
    width: '100%',
    height: '600px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    perspective: '1400px',
    zIndex: 5,
    marginLeft: '18%',
  },
  carousel: {
    position: 'relative',
    width: '240px',
    height: '360px',
    transformStyle: 'preserve-3d',
  },
  carouselInner: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    transformStyle: 'preserve-3d',
  },
  card: {
    position: 'absolute',
    width: '240px',
    height: '360px',
    borderRadius: '20px',
    overflow: 'hidden',
    cursor: 'pointer',
    transition: 'opacity 0.5s ease, filter 0.5s ease, box-shadow 0.5s ease',
    backfaceVisibility: 'hidden',
  },
  cardImageContainer: {
    width: '100%',
    height: '100%',
    position: 'relative',
  },
  cardImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    pointerEvents: 'none',
  },
  cardGradient: {
    position: 'absolute',
    inset: 0,
    transition: 'background 0.5s ease',
  },
  cardContent: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: '24px',
  },
  cardAccentLine: {
    width: '40px',
    height: '3px',
    borderRadius: '3px',
    marginBottom: '12px',
  },
  cardSubtitle: {
    display: 'block',
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: '11px',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    marginBottom: '6px',
  },
  cardTitle: {
    display: 'block',
    color: '#ffffff',
    fontSize: '20px',
    fontWeight: '700',
    letterSpacing: '-0.5px',
  },
  activeIndicator: {
    position: 'absolute',
    inset: 0,
    borderRadius: '20px',
    border: '2px solid',
    pointerEvents: 'none',
    transition: 'all 0.5s ease',
  },
  cardShine: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '50%',
    background: 'linear-gradient(180deg, rgba(255,255,255,0.12) 0%, transparent 100%)',
    pointerEvents: 'none',
  },
  reflection: {
    position: 'absolute',
    bottom: '-380px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '240px',
    height: '360px',
    transformStyle: 'preserve-3d',
    opacity: 0.15,
    maskImage: 'linear-gradient(transparent 60%, black 100%)',
    WebkitMaskImage: 'linear-gradient(transparent 60%, black 100%)',
  },
  reflectionCard: {
    opacity: 0.4,
    filter: 'blur(2px)',
  },
  controls: {
    position: 'absolute',
    bottom: '50px',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    gap: '16px',
    zIndex: 10,
  },
  controlButton: {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    background: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid',
    color: '#ffffff',
    cursor: 'pointer',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backdropFilter: 'blur(20px)',
  },
  speedIndicator: {
    position: 'absolute',
    bottom: '30px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '200px',
    height: '3px',
    background: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '3px',
    overflow: 'hidden',
    zIndex: 10,
  },
  speedBar: {
    height: '100%',
    width: '50%',
    borderRadius: '3px',
  },
};

export default RotatingCarousel;