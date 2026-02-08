import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
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

/**
 * RotatingCarousel - An optimized 3D carousel component
 *
 * Performance optimizations:
 * - Memoized responsive styles and dimensions
 * - useCallback for all event handlers to prevent re-renders
 * - Consolidated drag logic for mouse and touch events
 * - Optimized button hover handlers
 *
 * Layout improvements:
 * - Flexbox-based responsive layout with proper spacing
 * - Balanced two-column desktop layout (info panel + carousel)
 * - Centered single-column mobile layout
 * - Improved vertical and horizontal alignment
 * - Better positioned controls and UI elements
 */
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
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isTablet, setIsTablet] = useState<boolean>(false);
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const buttonAnimationRef = useRef<number | null>(null);
  const autoRotateRef = useRef<number | null>(null);
  const lastFrameTimeRef = useRef<number>(0);
  const dragDistanceRef = useRef<number>(0);

  // Refs to capture current values for effects without triggering re-runs
  const isDraggingRef = useRef(isDragging);
  const rotationRef = useRef(rotation);

  // Keep refs in sync with state
  isDraggingRef.current = isDragging;
  rotationRef.current = rotation;

  // Detect screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 767);
      setIsTablet(window.innerWidth > 767 && window.innerWidth <= 1024);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

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
  
  // Responsive radius and card sizes
  const getRadius = () => {
    if (isMobile) return 180;
    if (isTablet) return 250;
    return 320;
  };
  
  const getCardWidth = () => {
    if (isMobile) return 180;
    if (isTablet) return 210;
    return 240;
  };
  
  const getCardHeight = () => {
    if (isMobile) return 270;
    if (isTablet) return 315;
    return 360;
  };

  // Memoize dimensions to avoid recalculation on every render
  const dimensions = useMemo(() => ({
    radius: getRadius(),
    cardWidth: getCardWidth(),
    cardHeight: getCardHeight(),
  }), [isMobile, isTablet]);

  const { radius, cardWidth, cardHeight } = dimensions;
  const autoRotateSpeed: number = 0.08;

  const easeOutExpo = useCallback((t: number): number => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)), []);

  // Continuous smooth auto-rotation - starts immediately
  useEffect(() => {
    if (!autoRotate || isDragging || isAnimating || isHovering) {
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
  }, [autoRotate, isDragging, isAnimating, isHovering]);

  // Smooth button animation for manual navigation
  useEffect(() => {
    if (!isAnimating || isDraggingRef.current) return;

    const startRotation = rotationRef.current;
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

  // Consolidated drag handlers (defined after goToCard)
  const handleMouseDown = useCallback((e: React.MouseEvent<HTMLDivElement>): void => {
    setIsDragging(true);
    setIsAnimating(false);
    setLastX(e.clientX);
    setLastTime(Date.now());
    setVelocity(0);
    dragDistanceRef.current = 0;
    if (animationRef.current) cancelAnimationFrame(animationRef.current);
    if (buttonAnimationRef.current) cancelAnimationFrame(buttonAnimationRef.current);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>): void => {
    if (!isDragging) return;

    const currentX = e.clientX;
    const currentTime = Date.now();
    const deltaX = currentX - lastX;
    const deltaTime = Math.max(currentTime - lastTime, 1);

    const newVelocity = (deltaX / deltaTime) * 10;
    setVelocity(newVelocity);

    const rotationDelta = deltaX * (isMobile ? 0.4 : 0.3);
    setRotation((prev) => prev + rotationDelta);

    dragDistanceRef.current += Math.abs(deltaX);
    setLastX(currentX);
    setLastTime(currentTime);
  }, [isDragging, lastX, lastTime, isMobile]);

  const handleMouseUp = useCallback((): void => {
    if (!isDragging) return;
    setIsDragging(false);
    const normalized = ((rotation % 360) + 360) % 360;
    const nearestIndex = Math.round(normalized / anglePerCard) % cardCount;
    goToCard((cardCount - nearestIndex) % cardCount);
  }, [isDragging, rotation, anglePerCard, cardCount, goToCard]);

  const handleMouseLeave = useCallback((): void => {
    setIsHovering(false);
    if (isDragging) {
      handleMouseUp();
    }
  }, [isDragging, handleMouseUp]);

  const handleTouchStart = useCallback((e: React.TouchEvent<HTMLDivElement>): void => {
    const touch = e.touches[0];
    setIsDragging(true);
    setIsAnimating(false);
    setLastX(touch.clientX);
    setLastTime(Date.now());
    setVelocity(0);
    dragDistanceRef.current = 0;
    if (buttonAnimationRef.current) cancelAnimationFrame(buttonAnimationRef.current);
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent<HTMLDivElement>): void => {
    if (!isDragging) return;

    const touch = e.touches[0];
    const currentX = touch.clientX;
    const currentTime = Date.now();
    const deltaX = currentX - lastX;
    const deltaTime = Math.max(currentTime - lastTime, 1);

    const newVelocity = (deltaX / deltaTime) * 10;
    setVelocity(newVelocity);

    const rotationDelta = deltaX * (isMobile ? 0.4 : 0.3);
    setRotation((prev) => prev + rotationDelta);

    dragDistanceRef.current += Math.abs(deltaX);
    setLastX(currentX);
    setLastTime(currentTime);
  }, [isDragging, lastX, lastTime, isMobile]);

  const handleTouchEnd = useCallback((): void => {
    if (!isDragging) return;
    setIsDragging(false);
    const normalized = ((rotation % 360) + 360) % 360;
    const nearestIndex = Math.round(normalized / anglePerCard) % cardCount;
    goToCard((cardCount - nearestIndex) % cardCount);
  }, [isDragging, rotation, anglePerCard, cardCount, goToCard]);

  const handleCarouselEnter = useCallback((): void => {
    setIsHovering(true);
  }, []);

  const currentCard: Card | undefined = cards[activeIndex];

  // Optimized card click handler
  const handleCardClick = useCallback((index: number): void => {
    if (dragDistanceRef.current < 6) {
      goToCard(index);
    }
  }, [goToCard]);

  // Memoize responsive styles to avoid recreation on every render
  const responsiveStyles = useMemo((): Styles => ({
    wrapper: {
      position: 'relative',
      width: '100%',
      minHeight: isMobile ? 'auto' : '100vh',
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      alignItems: 'center',
      justifyContent: isMobile ? 'center' : 'space-between',
      overflow: 'hidden',
      fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif",
      userSelect: 'none',
      background: 'transparent',
      padding: isMobile ? '40px 16px 140px' : isTablet ? '60px 40px 140px' : '80px 60px 180px',
      gap: isMobile ? '32px' : isTablet ? '40px' : '60px',
    },
    background: {
      position: 'absolute',
      inset: 0,
      zIndex: 0,
      background: 'transparent',
    },
    gradientOrb: {
      position: 'absolute',
      width: isMobile ? '300px' : isTablet ? '450px' : '700px',
      height: isMobile ? '300px' : isTablet ? '450px' : '700px',
      borderRadius: '50%',
      filter: isMobile ? 'blur(60px)' : isTablet ? 'blur(70px)' : 'blur(90px)',
      transition: 'background 0.8s ease',
      opacity: isMobile ? 0.5 : isTablet ? 0.7 : 0.8,
    },
    infoPanel: {
      position: 'relative',
      zIndex: 10,
      width: isMobile ? '100%' : isTablet ? '320px' : '380px',
      maxWidth: isMobile ? '100%' : 'none',
      order: isMobile ? 2 : 0,
      flexShrink: 0,
      alignSelf: isMobile ? 'center' : 'center',
    },
    infoPanelContent: {
      background: 'rgba(255, 255, 255, 0.03)',
      backdropFilter: 'blur(40px)',
      borderRadius: isMobile ? '20px' : isTablet ? '24px' : '28px',
      padding: isMobile ? '28px' : isTablet ? '32px' : '40px',
      border: '1px solid rgba(255, 255, 255, 0.08)',
      boxShadow: '0 40px 80px -20px rgba(0, 0, 0, 0.5)',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    labelBadge: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      fontSize: isMobile ? '10px' : '11px',
      fontWeight: '600',
      color: 'rgba(255, 255, 255, 0.5)',
      textTransform: 'uppercase',
      letterSpacing: '2px',
      marginBottom: isMobile ? '12px' : '16px',
    },
    infoTitle: {
      fontSize: isMobile ? '28px' : isTablet ? '32px' : '36px',
      fontWeight: '700',
      color: '#ffffff',
      margin: '0 0 8px 0',
      letterSpacing: '-1px',
      lineHeight: 1.1,
      animation: 'titleFadeIn 0.5s ease',
    },
    infoSubtitle: {
      fontSize: isMobile ? '11px' : '13px',
      color: 'rgba(255, 255, 255, 0.4)',
      margin: isMobile ? '0 0 16px 0' : '0 0 24px 0',
      textTransform: 'uppercase',
      letterSpacing: '3px',
      fontWeight: '500',
    },
    divider: {
      height: '3px',
      borderRadius: '3px',
      marginBottom: isMobile ? '16px' : '24px',
      transition: 'background 0.5s ease',
    },
    infoDescription: {
      fontSize: isMobile ? '14px' : '15px',
      color: 'rgba(255, 255, 255, 0.6)',
      lineHeight: 1.7,
      margin: isMobile ? '0 0 20px 0' : '0 0 28px 0',
    },
    autoRotateBtn: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      padding: isMobile ? '10px 14px' : '12px 18px',
      borderRadius: '12px',
      border: '1px solid',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      marginBottom: isMobile ? '16px' : '24px',
      fontSize: isMobile ? '12px' : '13px',
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
      gap: isMobile ? '8px' : '10px',
      justifyContent: 'center',
      marginBottom: isMobile ? '16px' : '24px',
    },
    dot: {
      width: isMobile ? '8px' : '10px',
      height: isMobile ? '8px' : '10px',
      borderRadius: '50%',
      background: 'rgba(255, 255, 255, 0.2)',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      padding: 0,
    },
    dotActive: {
      transform: isMobile ? 'scale(1.3)' : 'scale(1.4)',
    },
    counter: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'center',
      gap: '4px',
    },
    counterCurrent: {
      fontSize: isMobile ? '26px' : '32px',
      fontWeight: '700',
      transition: 'color 0.5s ease',
    },
    counterDivider: {
      fontSize: isMobile ? '16px' : '20px',
      color: 'rgba(255, 255, 255, 0.2)',
      fontWeight: '300',
    },
    counterTotal: {
      fontSize: isMobile ? '14px' : '16px',
      color: 'rgba(255, 255, 255, 0.3)',
      fontWeight: '500',
    },
    carouselContainer: {
      position: 'relative',
      flex: isMobile ? '0 0 auto' : '1 1 auto',
      maxWidth: isMobile ? '100%' : isTablet ? '500px' : '600px',
      height: isMobile ? `${cardHeight + 60}px` : isTablet ? '500px' : '600px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      perspective: isMobile ? '1000px' : isTablet ? '1200px' : '1400px',
      zIndex: 5,
      order: isMobile ? 1 : 0,
    },
    carousel: {
      position: 'relative',
      width: `${cardWidth}px`,
      height: `${cardHeight}px`,
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
      width: `${cardWidth}px`,
      height: `${cardHeight}px`,
      borderRadius: isMobile ? '16px' : '20px',
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
      padding: isMobile ? '16px' : '24px',
    },
    cardAccentLine: {
      width: isMobile ? '30px' : '40px',
      height: '3px',
      borderRadius: '3px',
      marginBottom: isMobile ? '8px' : '12px',
    },
    cardSubtitle: {
      display: 'block',
      color: 'rgba(255, 255, 255, 0.6)',
      fontSize: isMobile ? '9px' : '11px',
      fontWeight: '600',
      textTransform: 'uppercase',
      letterSpacing: '2px',
      marginBottom: isMobile ? '4px' : '6px',
    },
    cardTitle: {
      display: 'block',
      color: '#ffffff',
      fontSize: isMobile ? '16px' : '20px',
      fontWeight: '700',
      letterSpacing: '-0.5px',
    },
    activeIndicator: {
      position: 'absolute',
      inset: 0,
      borderRadius: isMobile ? '16px' : '20px',
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
      bottom: isMobile ? '-290px' : isTablet ? '-340px' : '-380px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: `${cardWidth}px`,
      height: `${cardHeight}px`,
      transformStyle: 'preserve-3d',
      opacity: isMobile ? 0.1 : isTablet ? 0.12 : 0.15,
      maskImage: 'linear-gradient(transparent 60%, black 100%)',
      WebkitMaskImage: 'linear-gradient(transparent 60%, black 100%)',
      display: isMobile ? 'none' : 'block', // Hide reflection on mobile for performance
    },
    reflectionCard: {
      opacity: 0.4,
      filter: 'blur(2px)',
    },
    controls: {
      position: 'absolute',
      bottom: isMobile ? '80px' : isTablet ? '100px' : '120px',
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      gap: isMobile ? '16px' : '28px',
      zIndex: 20,
      justifyContent: 'center',
    },
    controlButton: {
      width: isMobile ? '52px' : '66px',
      height: isMobile ? '52px' : '66px',
      borderRadius: '50%',
      background: 'rgba(255, 255, 255, 0.06)',
      border: '1px solid rgba(255, 255, 255, 0.08)',
      color: '#ffffff',
      cursor: 'pointer',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backdropFilter: 'blur(18px)',
      boxShadow: '0 15px 40px -15px rgba(0,0,0,0.7)',
    },
    speedIndicator: {
      position: 'absolute',
      bottom: isMobile ? '100px' : isTablet ? '70px' : '80px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: isMobile ? '150px' : '200px',
      height: '3px',
      background: 'rgba(255, 255, 255, 0.1)',
      borderRadius: '3px',
      overflow: 'hidden',
      zIndex: 10,
      display: isMobile ? 'none' : 'block', // Hide on mobile
    },
    speedBar: {
      height: '100%',
      width: '50%',
      borderRadius: '3px',
    },
    gridOverlay: {
      display: 'none',
    },
    noiseOverlay: {
      display: 'none',
    },
    swipeHint: {
      position: 'absolute',
      top: '20px',
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      color: 'rgba(255, 255, 255, 0.5)',
      fontSize: '13px',
      fontWeight: '500',
      zIndex: 15,
      animation: 'swipeHintFadeIn 1s ease 1s both',
      background: 'rgba(0, 0, 0, 0.3)',
      backdropFilter: 'blur(10px)',
      padding: '8px 16px',
      borderRadius: '20px',
      border: '1px solid rgba(255, 255, 255, 0.1)',
    },
    floorGlow: {
      position: 'absolute',
      bottom: isMobile ? '140px' : isTablet ? '160px' : '180px',
      left: '50%',
      width: isMobile ? '280px' : isTablet ? '420px' : '520px',
      height: isMobile ? '60px' : '80px',
      transform: 'translateX(-50%)',
      background: `radial-gradient(ellipse at center, ${currentCard?.accent || '#ff6b6b'}55 0%, transparent 65%)`,
      filter: 'blur(32px)',
      opacity: 0.6,
      pointerEvents: 'none',
    },
  }), [isMobile, isTablet, cardWidth, cardHeight, currentCard?.accent]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLDivElement>): void => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      goNext();
    }
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      goPrev();
    }
    if (e.key === ' ') {
      e.preventDefault();
      setAutoRotate((prev) => !prev);
    }
  }, [goNext, goPrev]);

  // Optimized button hover handlers
  const handleControlButtonEnter = useCallback((e: React.MouseEvent<HTMLButtonElement>): void => {
    if (isMobile || !currentCard) return;
    const target = e.currentTarget;
    target.style.background = `${currentCard.accent}30`;
    target.style.transform = 'scale(1.1)';
    target.style.boxShadow = `0 0 30px ${currentCard.accent}50`;
  }, [isMobile, currentCard]);

  const handleControlButtonLeave = useCallback((e: React.MouseEvent<HTMLButtonElement>): void => {
    if (isMobile) return;
    const target = e.currentTarget;
    target.style.background = 'rgba(255, 255, 255, 0.05)';
    target.style.transform = 'scale(1)';
    target.style.boxShadow = 'none';
  }, [isMobile]);

  return (
    <div
      style={responsiveStyles.wrapper}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      aria-label="Rotating destination carousel"
    >
      {/* Animated Background */}
      <div style={responsiveStyles.background}>
        <div
          style={{
            ...responsiveStyles.gradientOrb,
            background: `radial-gradient(circle, ${currentCard?.accent}40 0%, transparent 70%)`,
            left: '20%',
            top: '30%',
            animation: 'float 8s ease-in-out infinite',
          }}
        />
        <div
          style={{
            ...responsiveStyles.gradientOrb,
            background: `radial-gradient(circle, ${currentCard?.accent}30 0%, transparent 60%)`,
            right: '15%',
            bottom: '20%',
            animation: 'float 10s ease-in-out infinite reverse',
          }}
        />
        <div style={responsiveStyles.gridOverlay} />
        <div style={responsiveStyles.noiseOverlay} />
      </div>

      {/* Info Panel */}
      <div style={responsiveStyles.infoPanel}>
        <div style={responsiveStyles.infoPanelContent}>
          <div style={responsiveStyles.labelBadge}>
            <span style={{ color: currentCard?.accent, animation: autoRotate ? 'pulse 2s ease-in-out infinite' : 'none' }}>●</span> 
            {autoRotate ? 'Now Playing' : 'Featured Destination'}
          </div>
          <h2 style={responsiveStyles.infoTitle} key={activeIndex}>
            {currentCard?.title}
          </h2>
          <p style={responsiveStyles.infoSubtitle}>{currentCard?.subtitle}</p>
          <div
            style={{
              ...responsiveStyles.divider,
              background: `linear-gradient(90deg, ${currentCard?.accent}, transparent)`,
            }}
          />
          <p style={responsiveStyles.infoDescription}>{currentCard?.description}</p>

          {/* Auto-rotate toggle */}
          <button
            style={{
              ...responsiveStyles.autoRotateBtn,
              background: autoRotate ? `${currentCard?.accent}20` : 'rgba(255,255,255,0.05)',
              borderColor: autoRotate ? currentCard?.accent : 'rgba(255,255,255,0.1)',
            }}
            onClick={() => setAutoRotate(!autoRotate)}
          >
            <div style={{
              ...responsiveStyles.rotateIcon,
              animation: autoRotate ? 'spin 2s linear infinite' : 'none',
            }}>
              <svg
                width={isMobile ? "14" : "16"}
                height={isMobile ? "14" : "16"}
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
          <div style={responsiveStyles.dotsContainer}>
            {cards.map((card, index) => (
              <button
                key={index}
                onClick={() => goToCard(index)}
                style={{
                  ...responsiveStyles.dot,
                  ...(index === activeIndex
                    ? {
                        ...responsiveStyles.dotActive,
                        background: card.accent,
                        boxShadow: `0 0 20px ${card.accent}80`,
                      }
                    : {}),
                }}
              />
            ))}
          </div>

          {/* Card counter */}
          <div style={responsiveStyles.counter}>
            <span style={{ ...responsiveStyles.counterCurrent, color: currentCard?.accent }}>
              {String(activeIndex + 1).padStart(2, '0')}
            </span>
            <span style={responsiveStyles.counterDivider}>/</span>
            <span style={responsiveStyles.counterTotal}>{String(cardCount).padStart(2, '0')}</span>
          </div>
        </div>
      </div>

      {/* 3D Carousel */}
      <div
        ref={containerRef}
        style={{
          ...responsiveStyles.carouselContainer,
          cursor: isDragging ? 'grabbing' : 'grab',
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleCarouselEnter}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div style={responsiveStyles.carousel}>
          <div
            style={{
              ...responsiveStyles.carouselInner,
              transform: `rotateY(${rotation}deg)`,
            }}
          >
            {cards.map((card, index) => {
              const angle = index * anglePerCard;
              const isActive = index === activeIndex;
              const isHover = hoverIndex === index && !isMobile;
              const scale = isActive ? (isHover ? 1.08 : 1.04) : 0.94;

              return (
                <div
                  key={card.id}
                  style={{
                    ...responsiveStyles.card,
                    transform: `rotateY(${angle}deg) translateZ(${radius}px) scale(${scale})`,
                    opacity: isActive ? 1 : 0.5,
                    filter: isActive ? 'none' : 'brightness(0.5) saturate(0.7)',
                    boxShadow: isActive
                      ? `0 40px 80px -20px rgba(0, 0, 0, 0.9), 0 0 60px ${card.accent}40, inset 0 0 0 1px rgba(255,255,255,0.1)`
                      : '0 25px 50px -12px rgba(0, 0, 0, 0.8)',
                  }}
                  onClick={() => handleCardClick(index)}
                  onMouseEnter={() => setHoverIndex(index)}
                  onMouseLeave={() => setHoverIndex(null)}
                >
                  <div style={responsiveStyles.cardImageContainer}>
                    <img
                      src={card.image}
                      alt={card.title}
                      style={responsiveStyles.cardImage}
                      draggable={false}
                    />
                    <div
                      style={{
                        ...responsiveStyles.cardGradient,
                        background: `linear-gradient(180deg, transparent 40%, ${card.accent}20 70%, rgba(0,0,0,0.95) 100%)`,
                      }}
                    />
                  </div>

                  <div style={responsiveStyles.cardContent}>
                    <div
                      style={{
                        ...responsiveStyles.cardAccentLine,
                        background: card.accent,
                      }}
                    />
                    <span style={responsiveStyles.cardSubtitle}>{card.subtitle}</span>
                    <span style={responsiveStyles.cardTitle}>{card.title}</span>
                  </div>

                  {isActive && (
                    <div
                      style={{
                        ...responsiveStyles.activeIndicator,
                        borderColor: card.accent,
                        boxShadow: `inset 0 0 30px ${card.accent}30`,
                      }}
                    />
                  )}

                  <div style={responsiveStyles.cardShine} />
                </div>
              );
            })}
          </div>
        </div>

        {/* Reflection - Hidden on mobile */}
        {!isMobile && (
          <div style={responsiveStyles.reflection}>
            <div
              style={{
                ...responsiveStyles.carouselInner,
                transform: `rotateY(${rotation}deg) rotateX(180deg)`,
              }}
            >
              {cards.map((card, index) => {
                const angle = index * anglePerCard;
                return (
                  <div
                    key={`reflection-${card.id}`}
                    style={{
                      ...responsiveStyles.card,
                      ...responsiveStyles.reflectionCard,
                      transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                    }}
                  >
                    <img
                      src={card.image}
                      alt=""
                      style={responsiveStyles.cardImage}
                      draggable={false}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Arrow controls */}
      <div style={responsiveStyles.floorGlow} />
      <div style={responsiveStyles.controls}>
        <button
          style={{
            ...responsiveStyles.controlButton,
            borderColor: `${currentCard?.accent}50`,
          }}
          onClick={goPrev}
          aria-label="Previous card"
          onMouseDown={(e) => e.stopPropagation()}
          onTouchStart={(e) => e.stopPropagation()}
          onMouseEnter={handleControlButtonEnter}
          onMouseLeave={handleControlButtonLeave}
        >
          <svg
            width={isMobile ? "20" : "24"}
            height={isMobile ? "20" : "24"}
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
            ...responsiveStyles.controlButton,
            borderColor: `${currentCard?.accent}50`,
          }}
          onClick={goNext}
          aria-label="Next card"
          onMouseDown={(e) => e.stopPropagation()}
          onTouchStart={(e) => e.stopPropagation()}
          onMouseEnter={handleControlButtonEnter}
          onMouseLeave={handleControlButtonLeave}
        >
          <svg
            width={isMobile ? "20" : "24"}
            height={isMobile ? "20" : "24"}
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

      {/* Rotation speed indicator - Hidden on mobile */}
      {autoRotate && !isMobile && (
        <div style={responsiveStyles.speedIndicator}>
          <div style={{
            ...responsiveStyles.speedBar,
            background: `linear-gradient(90deg, ${currentCard?.accent}, ${currentCard?.accent}50)`,
            animation: 'slideProgress 3s linear infinite',
          }} />
        </div>
      )}

      {/* Swipe hint for mobile */}
      {isMobile && (
        <div style={responsiveStyles.swipeHint}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M14 8l4 4-4 4M10 16l-4-4 4-4" />
          </svg>
          Swipe to explore
        </div>
      )}

      {/* Keyframe animations - FIXED */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -30px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.95); }
        }
        
        /* Fixed: Separate animation for title without translateX */
        @keyframes titleFadeIn {
          from { 
            opacity: 0; 
            transform: translateY(20px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        /* Fixed: Separate animation for swipe hint with translateX */
        @keyframes swipeHintFadeIn {
          from { 
            opacity: 0; 
            transform: translateX(-50%) translateY(10px); 
          }
          to { 
            opacity: 1; 
            transform: translateX(-50%) translateY(0); 
          }
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
        
        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </div>
  );
};

export default RotatingCarousel;
