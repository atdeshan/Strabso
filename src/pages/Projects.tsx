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
    title: "Aurora Gala",
    category: "Corporate Event",
    location: "Monaco",
    year: "2024",
    guests: "850",
    coverImage: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80",
    photos: [
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
      "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80",
      "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800&q=80",
      "https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=800&q=80",
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80",
      "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=800&q=80",
    ],
    color: "#1a1a2e"
  },
  {
    id: 2,
    title: "Velvet Garden",
    category: "Wedding",
    location: "Tuscany",
    year: "2024",
    guests: "320",
    coverImage: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1200&q=80",
    photos: [
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&q=80",
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=80",
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80",
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
      "https://images.unsplash.com/photo-1507504031003-b417219a0fde?w=800&q=80",
    ],
    color: "#2d3436"
  },
  {
    id: 3,
    title: "Neon Nights",
    category: "Product Launch",
    location: "Tokyo",
    year: "2024",
    guests: "1,200",
    coverImage: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80",
    photos: [
      
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80",
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80",
      "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=800&q=80",
      "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&q=80",
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=80",
      "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&q=80",
    ],
    color: "#0c0c1d"
  },
  {
    id: 4,
    title: "Golden Hour",
    category: "Private Celebration",
    location: "Santorini",
    year: "2023",
    guests: "150",
    coverImage: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1200&q=80",
    photos: [
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80",
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
      "https://images.unsplash.com/photo-1528495612343-9ca9f4a4de28?w=800&q=80",
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
    ],
    color: "#1e272e"
  },
  {
    id: 5,
    title: "Starlight Soirée",
    category: "Charity Gala",
    location: "New York",
    year: "2023",
    guests: "600",
    coverImage: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=1200&q=80",
    photos: [
      "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800&q=80",
      "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=800&q=80",
      "https://images.unsplash.com/photo-1496843916299-590492c751f4?w=800&q=80",
      "https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=800&q=80",
      "https://images.unsplash.com/photo-1472653816316-3ad6f10a6592?w=800&q=80",
    ],
    color: "#192a56"
  },
  {
    id: 6,
    title: "Celestial Dreams",
    category: "Fashion Show",
    location: "Paris",
    year: "2024",
    guests: "400",
    coverImage: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&q=80",
    photos: [
      "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80",
      "https://images.unsplash.com/photo-1496843916299-590492c751f4?w=800&q=80",
      "https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=800&q=80",
      "https://images.unsplash.com/photo-1472653816316-3ad6f10a6592?w=800&q=80",
    ],
    color: "#192a56"
  }
];

// Stats cards data
const statsCards = [
  {
    id: 1,
    number: "250+",
    label: "Events Curated",
    description: "Unforgettable experiences crafted with precision",
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
    number: "50K+",
    label: "Happy Guests",
    description: "Memories that last a lifetime",
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
    number: "15",
    label: "Countries",
    description: "Global reach, local expertise",
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

// Lightbox Component
interface LightboxProps {
  photos: string[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  onSelectPhoto: (index: number) => void;
  projectTitle: string;
}

const Lightbox: React.FC<LightboxProps> = ({ 
  photos, 
  currentIndex, 
  onClose, 
  onNext, 
  onPrev, 
  onSelectPhoto,
  projectTitle 
}) => {
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

  return (
    <div style={lightboxStyles.overlay} onClick={onClose}>
      <div style={lightboxStyles.content} onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button style={lightboxStyles.closeBtn} onClick={onClose}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>

        {/* Header */}
        <div style={lightboxStyles.header}>
          <span style={lightboxStyles.projectName}>{projectTitle}</span>
          <span style={lightboxStyles.counter}>{currentIndex + 1} / {photos.length}</span>
        </div>

        {/* Main Image */}
        <div style={lightboxStyles.imageContainer}>
          <button style={{ ...lightboxStyles.navBtn, left: '20px' }} onClick={onPrev}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          
          <img 
            key={currentIndex}
            src={photos[currentIndex]} 
            alt={`${projectTitle} - Photo ${currentIndex + 1}`}
            style={lightboxStyles.mainImage}
          />
          
          <button style={{ ...lightboxStyles.navBtn, right: '20px' }} onClick={onNext}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Thumbnails */}
        <div style={lightboxStyles.thumbnailStrip}>
          {photos.map((photo, idx) => (
            <div
              key={idx}
              style={{
                ...lightboxStyles.thumbnail,
                opacity: idx === currentIndex ? 1 : 0.4,
                transform: idx === currentIndex ? 'scale(1.1)' : 'scale(1)',
                border: idx === currentIndex ? '2px solid white' : '2px solid transparent',
              }}
              onClick={() => onSelectPhoto(idx)}
            >
              <img src={photo} alt="" style={lightboxStyles.thumbnailImg} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const lightboxStyles: { [key: string]: React.CSSProperties } = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.95)',
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
    padding: '20px',
  },
  closeBtn: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    background: 'rgba(255, 255, 255, 0.1)',
    border: 'none',
    borderRadius: '50%',
    width: '50px',
    height: '50px',
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
    padding: '0 60px',
    marginBottom: '20px',
  },
  projectName: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '24px',
    color: 'white',
  },
  counter: {
    fontFamily: "'Outfit', sans-serif",
    fontSize: '14px',
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
    maxWidth: '85%',
    maxHeight: '70vh',
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
    width: '60px',
    height: '60px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    color: 'white',
    transition: 'all 0.3s ease',
    backdropFilter: 'blur(10px)',
  },
  thumbnailStrip: {
    display: 'flex',
    justifyContent: 'center',
    gap: '12px',
    padding: '20px 0',
    overflowX: 'auto',
  },
  thumbnail: {
    width: '80px',
    height: '60px',
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
};

// Stats Card Component
const StatsCard: React.FC<{ card: typeof statsCards[0]; index: number }> = ({ card, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div
      className="stats-card"
      style={{
        ...cardStyles.card,
        background: card.gradient,
        animationDelay: `${index * 0.15}s`,
        transform: isHovered ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
        boxShadow: isHovered 
          ? `0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px ${card.accentColor}30`
          : '0 10px 40px -15px rgba(0, 0, 0, 0.3)',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Decorative corner */}
      <div style={{
        ...cardStyles.cornerDecoration,
        borderColor: card.accentColor,
        opacity: isHovered ? 1 : 0.3,
      }} />
      
      {/* Icon */}
      <div style={{
        ...cardStyles.iconWrapper,
        color: card.accentColor,
        background: `${card.accentColor}15`,
        transform: isHovered ? 'scale(1.1) rotate(5deg)' : 'scale(1) rotate(0deg)',
      }}>
        {card.icon}
      </div>
      
      {/* Number */}
      <div style={{
        ...cardStyles.number,
        color: card.accentColor,
      }}>
        {card.number}
      </div>
      
      {/* Label */}
      <div style={cardStyles.label}>
        {card.label}
      </div>
      
      {/* Description */}
      <div style={{
        ...cardStyles.description,
        opacity: isHovered ? 1 : 0.6,
      }}>
        {card.description}
      </div>
      
      {/* Bottom accent line */}
      <div style={{
        ...cardStyles.accentLine,
        background: card.accentColor,
        width: isHovered ? '100%' : '40%',
      }} />
    </div>
  );
};

const cardStyles: { [key: string]: React.CSSProperties } = {
  card: {
    position: 'relative',
    padding: '32px',
    borderRadius: '20px',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    backdropFilter: 'blur(20px)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '12px',
    transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
    cursor: 'default',
    overflow: 'hidden',
    animation: 'cardSlideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
    opacity: 0,
  },
  cornerDecoration: {
    position: 'absolute',
    top: '16px',
    right: '16px',
    width: '24px',
    height: '24px',
    borderTop: '2px solid',
    borderRight: '2px solid',
    borderRadius: '0 8px 0 0',
    transition: 'all 0.4s ease',
  },
  iconWrapper: {
    padding: '14px',
    borderRadius: '14px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
    marginBottom: '8px',
  },
  number: {
    fontSize: '48px',
    fontFamily: "'Playfair Display', serif",
    fontWeight: 600,
    lineHeight: 1,
    letterSpacing: '-2px',
  },
  label: {
    fontSize: '16px',
    fontWeight: 500,
    letterSpacing: '1px',
    textTransform: 'uppercase',
    color: 'rgba(255, 255, 255, 0.9)',
  },
  description: {
    fontSize: '14px',
    color: 'rgba(255, 255, 255, 0.5)',
    lineHeight: 1.5,
    transition: 'opacity 0.4s ease',
  },
  accentLine: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    height: '3px',
    borderRadius: '3px 3px 0 0',
    transition: 'width 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
  },
};

const ProjectShowcase: React.FC = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [lightbox, setLightbox] = useState<{ projectId: number; photoIndex: number } | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

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

  return (
    <div ref={containerRef} style={styles.container}>
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

        .photo-thumb {
          animation: photoReveal 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }

        .photo-thumb:hover {
          transform: scale(1.08) !important;
          z-index: 2;
        }

        .photo-thumb:hover .photo-overlay {
          opacity: 1;
        }

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

        .photo-count-badge {
          transition: all 0.3s ease;
        }

        .photo-count-badge:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: scale(1.05);
        }

        .cta-button:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.6);
        }

        .cta-button:hover .cta-arrow {
          transform: translateX(5px);
        }

        .nav-btn:hover {
          background: rgba(255, 255, 255, 0.2);
        }

        .close-btn:hover {
          background: rgba(255, 255, 255, 0.2);
        }

        .stats-card:hover .corner-decoration {
          opacity: 1;
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
        />
      )}

      {/* Custom Cursor */}
      <div 
        className={`custom-cursor ${isHovering ? 'active' : ''}`}
        style={{ left: cursorPos.x, top: cursorPos.y }}
      >
        View
      </div>

      {/* Background Elements */}
      <div style={styles.backgroundGradient} />
      <div style={styles.noiseOverlay} />
      
      {/* Header Section */}
      <header style={styles.header} className="section-header">
        <h1 style={styles.mainTitle}>
          <span style={styles.titleLine}>Crafting</span>
          <span style={styles.titleLineAccent}>Unforgettable</span>
          <span style={styles.titleLine}>Moments</span>
        </h1>
        <div style={styles.headerLine} className="header-line" />
      </header>

      {/* Stats Cards Section - Three parallel cards */}
      <div style={styles.statsSection}>
        <div style={styles.statsGrid}>
          {statsCards.map((card, index) => (
            <StatsCard key={card.id} card={card} index={index} />
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div style={styles.projectsContainer}>
        {projects.map((project, index) => (
          <article
            key={project.id}
            className="project-item"
            style={{
              ...styles.projectItem,
              animationDelay: `${index * 0.15}s`
            }}
            onMouseEnter={() => {
              setIsHovering(true);
            }}
            onMouseLeave={() => {
              setIsHovering(false);
            }}
          >
            {/* Project Number */}
            <span style={styles.projectNumber} className="project-number">
              {(index + 1).toString().padStart(2, '0')}
            </span>

            {/* Cover Image Container */}
            <div 
              style={styles.imageWrapper}
              onClick={() => openLightbox(project.id, 0)}
            >
              <div 
                className="project-image"
                style={{
                  ...styles.projectImage,
                  backgroundImage: `url(${project.coverImage})`
                }}
              />
              <div style={styles.imageGradient} className="project-overlay" />
              
              {/* Photo Count Badge */}
              <div style={styles.photoCountBadge} className="photo-count-badge">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ marginRight: '6px' }}>
                  <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor"/>
                  <path d="M21 15L16 10L5 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {project.photos.length} Photos
              </div>
              
              {/* View Project Button */}
              <div style={styles.viewProject} className="view-project">
                <span style={styles.viewProjectText}>View Gallery</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={styles.arrowIcon}>
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            {/* Photo Thumbnails Grid */}
            <div style={styles.photoGrid} className="photo-grid">
              {project.photos.slice(0, 4).map((photo, photoIndex) => (
                <div
                  key={photoIndex}
                  className="photo-thumb"
                  style={{
                    ...styles.photoThumb,
                    animationDelay: `${photoIndex * 0.1}s`,
                  }}
                  onClick={() => openLightbox(project.id, photoIndex)}
                >
                  <img src={photo} alt="" style={styles.photoThumbImg} />
                  <div style={styles.photoOverlay} className="photo-overlay">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M15 3H21V9M21 3L13 11M10 6H6C4.89543 6 4 6.89543 4 8V18C4 19.1046 4.89543 20 6 20H16C17.1046 20 18 19.1046 18 18V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  {/* Show +X more indicator on last visible thumbnail */}
                  {photoIndex === 3 && project.photos.length > 4 && (
                    <div style={styles.morePhotos}>
                      +{project.photos.length - 4}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Project Info */}
            <div style={styles.projectInfo}>
              <div style={styles.projectMeta}>
                <span style={styles.projectCategory}>{project.category}</span>
                <div style={styles.projectMetaLine} className="project-meta-line" />
                <span style={styles.projectLocation}>{project.location}</span>
              </div>
              
              <h2 style={styles.projectTitle}>
                <span style={styles.projectTitleText} className="project-title-text">
                  {project.title}
                </span>
              </h2>
              
              <div style={styles.projectStats}>
                <div style={styles.statItem}>
                  <span style={styles.statLabel}>Year</span>
                  <span style={styles.statValue}>{project.year}</span>
                </div>
                <div style={styles.statItem}>
                  <span style={styles.statLabel}>Guests</span>
                  <span style={styles.statValue}>{project.guests}</span>
                </div>
                <div style={styles.statItem}>
                  <span style={styles.statLabel}>Photos</span>
                  <span style={styles.statValue}>{project.photos.length}</span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    minHeight: '100vh',
    backgroundColor: 'transparent',
    color: '#ffffff',
    fontFamily: "'Outfit', sans-serif",
    position: 'relative',
    overflow: 'hidden',
    padding: '60px 40px',
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
    margin: '0 auto 60px',
    position: 'relative',
  },
  mainTitle: {
    fontSize: 'clamp(48px, 10vw, 120px)',
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
  // Stats Section Styles
  statsSection: {
    maxWidth: '1400px',
    margin: '0 auto 80px',
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '24px',
  },
  projectsContainer: {
    maxWidth: '1400px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '80px',
  },
  projectItem: {
    position: 'relative',
    cursor: 'pointer',
  },
  projectNumber: {
    position: 'absolute',
    top: '-20px',
    left: '-10px',
    fontSize: '120px',
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
    aspectRatio: '4/5',
    borderRadius: '8px',
    overflow: 'hidden',
    marginBottom: '16px',
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
    opacity: 0,
    transition: 'opacity 0.5s ease',
  },
  photoCountBadge: {
    position: 'absolute',
    top: '16px',
    right: '16px',
    background: 'rgba(0, 0, 0, 0.6)',
    backdropFilter: 'blur(10px)',
    padding: '8px 14px',
    borderRadius: '20px',
    fontSize: '12px',
    fontWeight: 500,
    letterSpacing: '1px',
    display: 'flex',
    alignItems: 'center',
    color: 'white',
  },
  viewProject: {
    position: 'absolute',
    bottom: '24px',
    left: '24px',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    opacity: 0,
    transform: 'translateY(20px)',
    transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
  },
  viewProjectText: {
    fontSize: '13px',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    fontWeight: 500,
  },
  arrowIcon: {
    width: '20px',
    height: '20px',
  },
  photoGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '8px',
    marginBottom: '20px',
    opacity: 0.7,
    transform: 'translateY(10px)',
    transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
  },
  photoThumb: {
    aspectRatio: '1',
    borderRadius: '6px',
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
    fontSize: '18px',
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
    gap: '16px',
    marginBottom: '12px',
  },
  projectCategory: {
    fontSize: '11px',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    color: 'rgba(255, 255, 255, 0.5)',
  },
  projectMetaLine: {
    height: '1px',
    width: '40px',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    transition: 'width 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
  },
  projectLocation: {
    fontSize: '11px',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    color: 'rgba(255, 255, 255, 0.5)',
  },
  projectTitle: {
    margin: '0 0 16px',
  },
  projectTitleText: {
    fontSize: 'clamp(28px, 4vw, 40px)',
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
    gap: '24px',
  },
  statItem: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  },
  statLabel: {
    fontSize: '10px',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    color: 'rgba(255, 255, 255, 0.4)',
  },
  statValue: {
    fontSize: '16px',
    fontFamily: "'Playfair Display', serif",
    color: 'rgba(255, 255, 255, 0.9)',
  },
};

export default ProjectShowcase;