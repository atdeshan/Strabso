import React, { useState, useEffect, useRef } from 'react';

// Project data type
interface Project {
  id: number;
  title: string;
  category: string;
  location: string;
  year: string;
  guests: string;
  coverImage: string;
  photos: string[];
  color: string;
}

// Sample project data with photo collections
const projects: Project[] = [
  {
    id: 1,
    title: "Elephant House Ice Cream",
    category: "National Activation",
    location: "Island-wide",
    year: "2024",
    guests: "50K+",
    coverImage: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=1200&q=80",
    photos: [
      "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=800&q=80",
      "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=800&q=80",
      "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=800&q=80",
      "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=800&q=80",
      "https://images.unsplash.com/photo-1488900128323-21503983a07e?w=800&q=80",
    ],
    color: "#1a1a2e"
  },
  {
    id: 2,
    title: "Watawala Tea Sampling",
    category: "National Sampling",
    location: "All 9 Provinces",
    year: "2024",
    guests: "100K+",
    coverImage: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=1200&q=80",
    photos: [
      "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800&q=80",
      "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800&q=80",
      "https://images.unsplash.com/photo-1558160074-4d7d8bdf4256?w=800&q=80",
      "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=800&q=80",
    ],
    color: "#2d3436"
  },
  {
    id: 3,
    title: "LAUGFS Gas Activation",
    category: "Brand Activation",
    location: "Western Province",
    year: "2024",
    guests: "25K+",
    coverImage: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&q=80",
    photos: [
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80",
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80",
      "https://images.unsplash.com/photo-1559223607-a43c990c692c?w=800&q=80",
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80",
    ],
    color: "#0c0c1d"
  },
  {
    id: 4,
    title: "Central Finance EPC Fair",
    category: "Government Event",
    location: "Uva Province",
    year: "2023",
    guests: "5K+",
    coverImage: "https://images.unsplash.com/photo-1559223607-a43c990c692c?w=1200&q=80",
    photos: [
      "https://images.unsplash.com/photo-1559223607-a43c990c692c?w=800&q=80",
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80",
      "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&q=80",
      "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80",
    ],
    color: "#1e272e"
  },
  {
    id: 5,
    title: "Maliban Ice Cream Launch",
    category: "Product Launch",
    location: "Colombo",
    year: "2023",
    guests: "10K+",
    coverImage: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&q=80",
    photos: [
      "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80",
      "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800&q=80",
      "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=800&q=80",
      "https://images.unsplash.com/photo-1496843916299-590492c751f4?w=800&q=80",
    ],
    color: "#192a56"
  },
  {
    id: 6,
    title: "Solo National Roadshow",
    category: "Roadshow",
    location: "Island-wide",
    year: "2024",
    guests: "75K+",
    coverImage: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=1200&q=80",
    photos: [
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=80",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80",
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
      "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&q=80",
      "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&q=80",
    ],
    color: "#192a56"
  }
];

// Stats cards data
const statsCards = [
  {
    id: 1,
    number: "100+",
    label: "Activations",
    description: "Successful brand activations delivered nationwide",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    gradient: "linear-gradient(135deg, rgba(255, 107, 107, 0.15) 0%, rgba(255, 107, 107, 0.05) 100%)",
    accentColor: "#ff6b6b"
  },
  {
    id: 2,
    number: "25+",
    label: "Brand Partners",
    description: "Trusted by leading brands in Sri Lanka",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    gradient: "linear-gradient(135deg, rgba(78, 205, 196, 0.15) 0%, rgba(78, 205, 196, 0.05) 100%)",
    accentColor: "#4ecdc4"
  },
  {
    id: 3,
    number: "9",
    label: "Provinces",
    description: "Island-wide reach across Sri Lanka",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M2 12H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    gradient: "linear-gradient(135deg, rgba(255, 209, 102, 0.15) 0%, rgba(255, 209, 102, 0.05) 100%)",
    accentColor: "#ffd166"
  }
];

// Lightbox Component with responsive styles
interface LightboxProps {
  photos: string[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  onSelectPhoto: (index: number) => void;
  projectTitle: string;
  isMobile: boolean;
}

const Lightbox: React.FC<LightboxProps> = ({ 
  photos, 
  currentIndex, 
  onClose, 
  onNext, 
  onPrev, 
  onSelectPhoto,
  projectTitle,
  isMobile
}) => {
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Swipe detection for mobile
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) onNext();
    if (isRightSwipe) onPrev();
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose, onNext, onPrev]);

  const responsiveLightboxStyles: { [key: string]: React.CSSProperties } = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.98)',
      zIndex: 10000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      animation: 'fadeIn 0.3s ease',
    },
    content: {
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      padding: isMobile ? '10px' : '20px',
    },
    closeBtn: {
      position: 'absolute',
      top: isMobile ? '10px' : '20px',
      right: isMobile ? '10px' : '20px',
      background: 'rgba(255, 255, 255, 0.1)',
      border: 'none',
      borderRadius: '50%',
      width: isMobile ? '44px' : '50px',
      height: isMobile ? '44px' : '50px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      color: 'white',
      transition: 'all 0.3s ease',
      zIndex: 10,
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: isMobile ? '0 10px' : '0 60px',
      marginBottom: isMobile ? '10px' : '20px',
      marginTop: isMobile ? '50px' : '0',
    },
    projectName: {
      fontFamily: "'Playfair Display', serif",
      fontSize: isMobile ? '18px' : '24px',
      color: 'white',
    },
    counter: {
      fontFamily: "'Outfit', sans-serif",
      fontSize: isMobile ? '12px' : '14px',
      letterSpacing: '2px',
      color: 'rgba(255, 255, 255, 0.6)',
    },
    imageContainer: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
    },
    mainImage: {
      maxWidth: isMobile ? '95%' : '85%',
      maxHeight: isMobile ? '60vh' : '70vh',
      objectFit: 'contain',
      borderRadius: '8px',
      animation: 'scaleIn 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
    },
    navBtn: {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      background: 'rgba(255, 255, 255, 0.1)',
      border: 'none',
      borderRadius: '50%',
      width: isMobile ? '44px' : '60px',
      height: isMobile ? '44px' : '60px',
      display: isMobile ? 'none' : 'flex', // Hide nav buttons on mobile (use swipe)
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      color: 'white',
      transition: 'all 0.3s ease',
      backdropFilter: 'blur(10px)',
    },
    thumbnailStrip: {
      display: 'flex',
      justifyContent: isMobile ? 'flex-start' : 'center',
      gap: isMobile ? '8px' : '12px',
      padding: isMobile ? '15px 0' : '20px 0',
      overflowX: 'auto',
      WebkitOverflowScrolling: 'touch',
    },
    thumbnail: {
      width: isMobile ? '60px' : '80px',
      height: isMobile ? '45px' : '60px',
      borderRadius: '6px',
      overflow: 'hidden',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      flexShrink: 0,
    },
    thumbnailImg: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
    swipeHint: {
      display: isMobile ? 'flex' : 'none',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      color: 'rgba(255, 255, 255, 0.4)',
      fontSize: '12px',
      marginTop: '10px',
    },
  };

  return (
    <div style={responsiveLightboxStyles.overlay} onClick={onClose}>
      <div 
        style={responsiveLightboxStyles.content} 
        onClick={(e) => e.stopPropagation()}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* Close Button */}
        <button style={responsiveLightboxStyles.closeBtn} onClick={onClose}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>

        {/* Header */}
        <div style={responsiveLightboxStyles.header}>
          <span style={responsiveLightboxStyles.projectName}>{projectTitle}</span>
          <span style={responsiveLightboxStyles.counter}>{currentIndex + 1} / {photos.length}</span>
        </div>

        {/* Main Image */}
        <div style={responsiveLightboxStyles.imageContainer}>
          <button style={{ ...responsiveLightboxStyles.navBtn, left: '20px' }} onClick={onPrev}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          
          <img 
            key={currentIndex}
            src={photos[currentIndex]} 
            alt={`${projectTitle} - Photo ${currentIndex + 1}`}
            style={responsiveLightboxStyles.mainImage}
          />
          
          <button style={{ ...responsiveLightboxStyles.navBtn, right: '20px' }} onClick={onNext}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Swipe hint for mobile */}
        <div style={responsiveLightboxStyles.swipeHint}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M14 8l4 4-4 4M10 16l-4-4 4-4" />
          </svg>
          Swipe to navigate
        </div>

        {/* Thumbnails */}
        <div style={responsiveLightboxStyles.thumbnailStrip}>
          {photos.map((photo, idx) => (
            <div
              key={idx}
              style={{
                ...responsiveLightboxStyles.thumbnail,
                opacity: idx === currentIndex ? 1 : 0.4,
                transform: idx === currentIndex ? 'scale(1.1)' : 'scale(1)',
                border: idx === currentIndex ? '2px solid white' : '2px solid transparent',
              }}
              onClick={() => onSelectPhoto(idx)}
            >
              <img src={photo} alt="" style={responsiveLightboxStyles.thumbnailImg} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Stats Card Component with responsive styles
const StatsCard: React.FC<{ card: typeof statsCards[0]; index: number; isMobile: boolean; isTablet: boolean }> = ({ 
  card, 
  index, 
  isMobile,
  isTablet 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const responsiveCardStyles: { [key: string]: React.CSSProperties } = {
    card: {
      position: 'relative',
      padding: isMobile ? '24px' : isTablet ? '28px' : '32px',
      borderRadius: isMobile ? '16px' : '20px',
      border: '1px solid rgba(255, 255, 255, 0.08)',
      backdropFilter: 'blur(20px)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: isMobile ? '8px' : '12px',
      transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
      cursor: 'default',
      overflow: 'hidden',
      animation: 'cardSlideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      opacity: 0,
      background: card.gradient,
      animationDelay: `${index * 0.15}s`,
      transform: isHovered && !isMobile ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
      boxShadow: isHovered && !isMobile
        ? `0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px ${card.accentColor}30`
        : '0 10px 40px -15px rgba(0, 0, 0, 0.3)',
    },
    cornerDecoration: {
      position: 'absolute',
      top: isMobile ? '12px' : '16px',
      right: isMobile ? '12px' : '16px',
      width: isMobile ? '20px' : '24px',
      height: isMobile ? '20px' : '24px',
      borderTop: '2px solid',
      borderRight: '2px solid',
      borderRadius: '0 8px 0 0',
      transition: 'all 0.4s ease',
      borderColor: card.accentColor,
      opacity: isHovered ? 1 : 0.3,
    },
    iconWrapper: {
      padding: isMobile ? '10px' : '14px',
      borderRadius: isMobile ? '10px' : '14px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
      marginBottom: isMobile ? '4px' : '8px',
      color: card.accentColor,
      background: `${card.accentColor}15`,
      transform: isHovered && !isMobile ? 'scale(1.1) rotate(5deg)' : 'scale(1) rotate(0deg)',
    },
    number: {
      fontSize: isMobile ? '36px' : isTablet ? '42px' : '48px',
      fontFamily: "'Playfair Display', serif",
      fontWeight: 600,
      lineHeight: 1,
      letterSpacing: '-2px',
      color: card.accentColor,
    },
    label: {
      fontSize: isMobile ? '14px' : '16px',
      fontWeight: 500,
      letterSpacing: '1px',
      textTransform: 'uppercase',
      color: 'rgba(255, 255, 255, 0.9)',
    },
    description: {
      fontSize: isMobile ? '12px' : '14px',
      color: 'rgba(255, 255, 255, 0.5)',
      lineHeight: 1.5,
      transition: 'opacity 0.4s ease',
      opacity: isHovered ? 1 : 0.6,
    },
    accentLine: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      height: '3px',
      borderRadius: '3px 3px 0 0',
      transition: 'width 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
      background: card.accentColor,
      width: isHovered ? '100%' : '40%',
    },
    icon: {
      width: isMobile ? '24px' : '32px',
      height: isMobile ? '24px' : '32px',
    },
  };
  
  return (
    <div
      className="stats-card"
      style={responsiveCardStyles.card}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Decorative corner */}
      <div style={responsiveCardStyles.cornerDecoration} />
      
      {/* Icon */}
      <div style={responsiveCardStyles.iconWrapper}>
        <div style={responsiveCardStyles.icon}>
          {card.icon}
        </div>
      </div>
      
      {/* Number */}
      <div style={responsiveCardStyles.number}>
        {card.number}
      </div>
      
      {/* Label */}
      <div style={responsiveCardStyles.label}>
        {card.label}
      </div>
      
      {/* Description */}
      <div style={responsiveCardStyles.description}>
        {card.description}
      </div>
      
      {/* Bottom accent line */}
      <div style={responsiveCardStyles.accentLine} />
    </div>
  );
};

const ProjectShowcase: React.FC = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [lightbox, setLightbox] = useState<{ projectId: number; photoIndex: number } | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    // Only track cursor on non-touch devices
    if (isMobile || isTablet) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isMobile, isTablet]);

  const openLightbox = (projectId: number, photoIndex: number) => {
    setLightbox({ projectId, photoIndex });
  };

  const closeLightbox = () => {
    setLightbox(null);
  };

  const currentProject = lightbox ? projects.find(p => p.id === lightbox.projectId) : null;

  const nextPhoto = () => {
    if (lightbox && currentProject) {
      setLightbox({
        ...lightbox,
        photoIndex: (lightbox.photoIndex + 1) % currentProject.photos.length
      });
    }
  };

  const prevPhoto = () => {
    if (lightbox && currentProject) {
      setLightbox({
        ...lightbox,
        photoIndex: (lightbox.photoIndex - 1 + currentProject.photos.length) % currentProject.photos.length
      });
    }
  };

  const selectPhoto = (index: number) => {
    if (lightbox) {
      setLightbox({ ...lightbox, photoIndex: index });
    }
  };

  // Responsive styles
  const getResponsiveStyles = (): { [key: string]: React.CSSProperties } => ({
    container: {
      minHeight: '100vh',
      backgroundColor: 'transparent',
      color: '#ffffff',
      fontFamily: "'Outfit', sans-serif",
      position: 'relative',
      overflow: 'hidden',
      padding: isMobile ? '30px 16px' : isTablet ? '40px 24px' : '60px 40px',
    },
    backgroundGradient: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'radial-gradient(ellipse at 20% 20%, rgba(120, 80, 160, 0.15) 0%, transparent 50%), radial-gradient(ellipse at 80% 80%, rgba(80, 120, 160, 0.1) 0%, transparent 50%)',
      pointerEvents: 'none',
    },
    noiseOverlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      opacity: 0.03,
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
      pointerEvents: 'none',
    },
    header: {
      maxWidth: '1400px',
      margin: isMobile ? '0 auto 40px' : '0 auto 60px',
      position: 'relative',
    },
    mainTitle: {
      fontSize: isMobile ? 'clamp(36px, 12vw, 48px)' : isTablet ? 'clamp(48px, 8vw, 80px)' : 'clamp(48px, 10vw, 120px)',
      fontFamily: "'Playfair Display', serif",
      fontWeight: 400,
      lineHeight: 1,
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
    },
    titleLine: {
      display: 'block',
      color: 'rgba(255, 255, 255, 0.9)',
    },
    titleLineAccent: {
      display: 'block',
      fontStyle: 'italic',
      background: 'linear-gradient(135deg, #f0261b 0%, #0095ff 50%, #09ff00 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    },
    headerLine: {
      width: isMobile ? '60px' : '80px',
      height: '2px',
      background: 'rgba(255, 255, 255, 0.3)',
      marginTop: isMobile ? '20px' : '30px',
    },
    statsSection: {
      maxWidth: '1400px',
      margin: isMobile ? '0 auto 50px' : '0 auto 80px',
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
      gap: isMobile ? '16px' : '24px',
    },
    projectsContainer: {
      maxWidth: '1400px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: isMobile ? '50px' : isTablet ? '40px' : '80px',
    },
    projectItem: {
      position: 'relative',
      cursor: 'pointer',
    },
    projectNumber: {
      position: 'absolute',
      top: isMobile ? '-15px' : '-20px',
      left: isMobile ? '-5px' : '-10px',
      fontSize: isMobile ? '80px' : isTablet ? '100px' : '120px',
      fontFamily: "'Playfair Display', serif",
      fontWeight: 400,
      color: 'rgba(255, 255, 255, 0.08)',
      lineHeight: 1,
      transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
      zIndex: 0,
      pointerEvents: 'none',
    },
    imageWrapper: {
      position: 'relative',
      aspectRatio: isMobile ? '3/4' : '4/5',
      borderRadius: isMobile ? '12px' : '8px',
      overflow: 'hidden',
      marginBottom: isMobile ? '12px' : '16px',
    },
    projectImage: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
    },
    imageGradient: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.8) 100%)',
      opacity: isMobile ? 0.6 : 0, // Always visible on mobile
      transition: 'opacity 0.5s ease',
    },
    photoCountBadge: {
      position: 'absolute',
      top: isMobile ? '12px' : '16px',
      right: isMobile ? '12px' : '16px',
      background: 'rgba(0, 0, 0, 0.6)',
      backdropFilter: 'blur(10px)',
      padding: isMobile ? '6px 10px' : '8px 14px',
      borderRadius: '20px',
      fontSize: isMobile ? '11px' : '12px',
      fontWeight: 500,
      letterSpacing: '1px',
      display: 'flex',
      alignItems: 'center',
      color: 'white',
    },
    viewProject: {
      position: 'absolute',
      bottom: isMobile ? '16px' : '24px',
      left: isMobile ? '16px' : '24px',
      display: 'flex',
      alignItems: 'center',
      gap: isMobile ? '8px' : '12px',
      opacity: isMobile ? 1 : 0, // Always visible on mobile
      transform: isMobile ? 'translateY(0)' : 'translateY(20px)',
      transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
    },
    viewProjectText: {
      fontSize: isMobile ? '11px' : '13px',
      letterSpacing: '2px',
      textTransform: 'uppercase',
      fontWeight: 500,
    },
    arrowIcon: {
      width: isMobile ? '16px' : '20px',
      height: isMobile ? '16px' : '20px',
    },
    photoGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: isMobile ? '6px' : '8px',
      marginBottom: isMobile ? '16px' : '20px',
      opacity: isMobile ? 1 : 0.7, // Always visible on mobile
      transform: 'translateY(0)',
      transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
    },
    photoThumb: {
      aspectRatio: '1',
      borderRadius: isMobile ? '4px' : '6px',
      overflow: 'hidden',
      position: 'relative',
      cursor: 'pointer',
      transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
    },
    photoThumbImg: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
    photoOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      opacity: 0,
      transition: 'opacity 0.3s ease',
      color: 'white',
    },
    morePhotos: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0, 0, 0, 0.7)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: isMobile ? '14px' : '18px',
      fontWeight: 600,
      fontFamily: "'Playfair Display', serif",
      color: 'white',
    },
    projectInfo: {
      position: 'relative',
      zIndex: 1,
    },
    projectMeta: {
      display: 'flex',
      alignItems: 'center',
      gap: isMobile ? '10px' : '16px',
      marginBottom: isMobile ? '8px' : '12px',
      flexWrap: 'wrap',
    },
    projectCategory: {
      fontSize: isMobile ? '10px' : '11px',
      letterSpacing: '2px',
      textTransform: 'uppercase',
      color: 'rgba(255, 255, 255, 0.5)',
    },
    projectMetaLine: {
      height: '1px',
      width: isMobile ? '30px' : '40px',
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      transition: 'width 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
    },
    projectLocation: {
      fontSize: isMobile ? '10px' : '11px',
      letterSpacing: '2px',
      textTransform: 'uppercase',
      color: 'rgba(255, 255, 255, 0.5)',
    },
    projectTitle: {
      margin: isMobile ? '0 0 12px' : '0 0 16px',
    },
    projectTitleText: {
      fontSize: isMobile ? 'clamp(24px, 6vw, 32px)' : isTablet ? 'clamp(28px, 4vw, 36px)' : 'clamp(28px, 4vw, 40px)',
      fontFamily: "'Playfair Display', serif",
      fontWeight: 400,
      backgroundImage: 'linear-gradient(90deg, rgba(255,255,255,0.3), rgba(255,255,255,0.3))',
      backgroundSize: '0% 2px',
      backgroundPosition: '0 100%',
      backgroundRepeat: 'no-repeat',
      transition: 'background-size 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
      paddingBottom: '4px',
    },
    projectStats: {
      display: 'flex',
      alignItems: 'center',
      gap: isMobile ? '16px' : '24px',
      flexWrap: 'wrap',
    },
    statItem: {
      display: 'flex',
      flexDirection: 'column',
      gap: '4px',
    },
    statLabel: {
      fontSize: isMobile ? '9px' : '10px',
      letterSpacing: '2px',
      textTransform: 'uppercase',
      color: 'rgba(255, 255, 255, 0.4)',
    },
    statValue: {
      fontSize: isMobile ? '14px' : '16px',
      fontFamily: "'Playfair Display', serif",
      color: 'rgba(255, 255, 255, 0.9)',
    },
  });

  const responsiveStyles = getResponsiveStyles();

  return (
    <div ref={containerRef} style={responsiveStyles.container}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600&family=Outfit:wght@300;400;500&display=swap');
        
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(60px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes scaleIn {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes borderDraw {
          from { clip-path: inset(0 100% 0 0); }
          to { clip-path: inset(0 0 0 0); }
        }

        @keyframes photoReveal {
          from { opacity: 0; transform: scale(0.9) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }

        @keyframes cardSlideUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 20px rgba(255, 255, 255, 0.1); }
          50% { box-shadow: 0 0 40px rgba(255, 255, 255, 0.2); }
        }
        
        .project-item {
          animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
        
        /* Desktop-only hover effects */
        @media (hover: hover) and (pointer: fine) {
          .project-item:hover .project-image {
            transform: scale(1.08);
          }
          
          .project-item:hover .project-overlay {
            opacity: 1;
          }
          
          .project-item:hover .project-number {
            transform: translateX(-10px);
            opacity: 0.3;
          }
          
          .project-item:hover .view-project {
            opacity: 1;
            transform: translateY(0);
          }
          
          .project-item:hover .project-meta-line {
            width: 100%;
          }
          
          .project-item:hover .project-title-text {
            background-size: 100% 2px;
          }

          .project-item:hover .photo-grid {
            opacity: 1;
            transform: translateY(0);
          }

          .photo-thumb:hover {
            transform: scale(1.08) !important;
            z-index: 2;
          }

          .photo-thumb:hover .photo-overlay {
            opacity: 1;
          }
          
          .nav-btn:hover {
            background: rgba(255, 255, 255, 0.2);
          }

          .close-btn:hover {
            background: rgba(255, 255, 255, 0.2);
          }
          
          .photo-count-badge:hover {
            background: rgba(255, 255, 255, 0.2);
            transform: scale(1.05);
          }
        }

        .photo-thumb {
          animation: photoReveal 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }

        /* Custom cursor - only on non-touch devices */
        .custom-cursor {
          pointer-events: none;
          position: fixed;
          width: 120px;
          height: 120px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Outfit', sans-serif;
          font-size: 12px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: white;
          z-index: 9999;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease;
          transform: translate(-50%, -50%) scale(0);
        }

        .custom-cursor.active {
          transform: translate(-50%, -50%) scale(1);
        }

        .section-header {
          animation: fadeIn 1s ease forwards;
        }

        .header-line {
          animation: borderDraw 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          animation-delay: 0.3s;
        }

        /* Touch device active states */
        @media (hover: none) and (pointer: coarse) {
          .project-item:active .project-image {
            transform: scale(1.02);
          }
          
          .photo-thumb:active {
            transform: scale(0.95);
          }
          
          .stats-card:active {
            transform: scale(0.98);
          }
        }
        
        /* Reduced motion */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
        
        /* Tablet-specific styles */
        @media screen and (min-width: 768px) and (max-width: 1024px) {
          .stats-card:nth-child(3) {
            grid-column: span 2;
            max-width: 50%;
            margin: 0 auto;
          }
        }
      `}</style>

      {/* Lightbox */}
      {lightbox && currentProject && (
        <Lightbox
          photos={currentProject.photos}
          currentIndex={lightbox.photoIndex}
          onClose={closeLightbox}
          onNext={nextPhoto}
          onPrev={prevPhoto}
          onSelectPhoto={selectPhoto}
          projectTitle={currentProject.title}
          isMobile={isMobile}
        />
      )}

      {/* Custom Cursor - Only on desktop */}
      {!isMobile && !isTablet && (
        <div 
          className={`custom-cursor ${isHovering ? 'active' : ''}`}
          style={{ left: cursorPos.x, top: cursorPos.y }}
        >
          View
        </div>
      )}

      {/* Background Elements */}
      <div style={responsiveStyles.backgroundGradient} />
      <div style={responsiveStyles.noiseOverlay} />
      
      {/* Header Section */}
      <header style={responsiveStyles.header} className="section-header">
        <h1 style={responsiveStyles.mainTitle}>
          <span style={responsiveStyles.titleLine}>Our</span>
          <span style={responsiveStyles.titleLineAccent}>Successful</span>
          <span style={responsiveStyles.titleLine}>Projects</span>
        </h1>
        <div style={responsiveStyles.headerLine} className="header-line" />
      </header>

      {/* Stats Cards Section */}
      <div style={responsiveStyles.statsSection}>
        <div style={responsiveStyles.statsGrid}>
          {statsCards.map((card, index) => (
            <StatsCard 
              key={card.id} 
              card={card} 
              index={index} 
              isMobile={isMobile}
              isTablet={isTablet}
            />
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div style={responsiveStyles.projectsContainer}>
        {projects.map((project, index) => (
          <article
            key={project.id}
            className="project-item"
            style={{
              ...responsiveStyles.projectItem,
              animationDelay: `${index * 0.15}s`
            }}
            onMouseEnter={() => {
              if (!isMobile && !isTablet) setIsHovering(true);
            }}
            onMouseLeave={() => {
              if (!isMobile && !isTablet) setIsHovering(false);
            }}
          >
            {/* Project Number */}
            <span style={responsiveStyles.projectNumber} className="project-number">
              {(index + 1).toString().padStart(2, '0')}
            </span>

            {/* Cover Image Container */}
            <div 
              style={responsiveStyles.imageWrapper}
              onClick={() => openLightbox(project.id, 0)}
            >
              <div 
                className="project-image"
                style={{
                  ...responsiveStyles.projectImage,
                  backgroundImage: `url(${project.coverImage})`
                }}
              />
              <div style={responsiveStyles.imageGradient} className="project-overlay" />
              
              {/* Photo Count Badge */}
              <div style={responsiveStyles.photoCountBadge} className="photo-count-badge">
                <svg width={isMobile ? "14" : "16"} height={isMobile ? "14" : "16"} viewBox="0 0 24 24" fill="none" style={{ marginRight: '6px' }}>
                  <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor"/>
                  <path d="M21 15L16 10L5 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {project.photos.length} Photos
              </div>
              
              {/* View Project Button */}
              <div style={responsiveStyles.viewProject} className="view-project">
                <span style={responsiveStyles.viewProjectText}>View Gallery</span>
                <svg width={isMobile ? "18" : "24"} height={isMobile ? "18" : "24"} viewBox="0 0 24 24" fill="none" style={responsiveStyles.arrowIcon}>
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            {/* Photo Thumbnails Grid */}
            <div style={responsiveStyles.photoGrid} className="photo-grid">
              {project.photos.slice(0, 4).map((photo, photoIndex) => (
                <div
                  key={photoIndex}
                  className="photo-thumb"
                  style={{
                    ...responsiveStyles.photoThumb,
                    animationDelay: `${photoIndex * 0.1}s`,
                  }}
                  onClick={() => openLightbox(project.id, photoIndex)}
                >
                  <img src={photo} alt="" style={responsiveStyles.photoThumbImg} />
                  <div style={responsiveStyles.photoOverlay} className="photo-overlay">
                    <svg width={isMobile ? "16" : "20"} height={isMobile ? "16" : "20"} viewBox="0 0 24 24" fill="none">
                      <path d="M15 3H21V9M21 3L13 11M10 6H6C4.89543 6 4 6.89543 4 8V18C4 19.1046 4.89543 20 6 20H16C17.1046 20 18 19.1046 18 18V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  {/* Show +X more indicator on last visible thumbnail */}
                  {photoIndex === 3 && project.photos.length > 4 && (
                    <div style={responsiveStyles.morePhotos}>
                      +{project.photos.length - 4}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Project Info */}
            <div style={responsiveStyles.projectInfo}>
              <div style={responsiveStyles.projectMeta}>
                <span style={responsiveStyles.projectCategory}>{project.category}</span>
                <div style={responsiveStyles.projectMetaLine} className="project-meta-line" />
                <span style={responsiveStyles.projectLocation}>{project.location}</span>
              </div>
              
              <h2 style={responsiveStyles.projectTitle}>
                <span style={responsiveStyles.projectTitleText} className="project-title-text">
                  {project.title}
                </span>
              </h2>
              
              <div style={responsiveStyles.projectStats}>
                <div style={responsiveStyles.statItem}>
                  <span style={responsiveStyles.statLabel}>Year</span>
                  <span style={responsiveStyles.statValue}>{project.year}</span>
                </div>
                <div style={responsiveStyles.statItem}>
                  <span style={responsiveStyles.statLabel}>Guests</span>
                  <span style={responsiveStyles.statValue}>{project.guests}</span>
                </div>
                <div style={responsiveStyles.statItem}>
                  <span style={responsiveStyles.statLabel}>Photos</span>
                  <span style={responsiveStyles.statValue}>{project.photos.length}</span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default ProjectShowcase;