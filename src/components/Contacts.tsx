import React from 'react';
import type { CSSProperties } from 'react';

interface ContactItem {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}

const ContactUs: React.FC = () => {
  const contactItems: ContactItem[] = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
          <line x1="12" y1="18" x2="12.01" y2="18"/>
        </svg>
      ),
      label: 'PHONE',
      value: '0777 188 485',
      href: 'tel:+94777188485'
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
      ),
      label: 'EMAIL',
      value: 'info@strabso.lk',
      href: 'mailto:info@strabso.lk'
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
      ),
      label: 'LOCATION',
      value: 'Colombo, Sri Lanka',
      href: 'https://maps.google.com/?q=Colombo,Sri+Lanka'
    }
  ];

  const styles: Record<string, CSSProperties> = {
    wrapper: {
      background: 'transparent',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '80px 20px',
      position: 'relative',
      overflow: 'hidden',
      fontFamily: "'Outfit', sans-serif",
    },
    container: {
      maxWidth: '1000px',
      width: '100%',
      textAlign: 'center',
      position: 'relative',
      zIndex: 1,
    },
    headerSection: {
      marginBottom: '60px',
    },
    eyebrow: {
      fontFamily: "'Outfit', sans-serif",
      fontSize: '12px',
      fontWeight: 400,
      letterSpacing: '4px',
      textTransform: 'uppercase',
      color: '#d4af37',
      marginBottom: '16px',
      opacity: 0,
    },
    title: {
      fontFamily: "'Cormorant Garamond', serif",
      fontSize: 'clamp(36px, 6vw, 56px)',
      fontWeight: 500,
      color: '#ffffff',
      margin: '0 0 8px 0',
      letterSpacing: '-1px',
      opacity: 0,
    },
    titleAccent: {
      fontFamily: "'Cormorant Garamond', serif",
      fontSize: 'clamp(36px, 6vw, 56px)',
      fontWeight: 500,
      fontStyle: 'italic',
      color: '#e87f2a',
      margin: '0 0 24px 0',
      letterSpacing: '-1px',
      opacity: 0,
    },
    subtitle: {
      fontFamily: "'Outfit', sans-serif",
      fontSize: '16px',
      fontWeight: 300,
      color: 'rgba(255, 255, 255, 0.6)',
      maxWidth: '500px',
      margin: '0 auto',
      lineHeight: 1.7,
      opacity: 0,
    },
    contactGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '30px',
      padding: '0 20px',
    },
    contactCard: {
      textDecoration: 'none',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '40px 30px',
      background: 'transparent',
      borderRadius: '2px',
      cursor: 'pointer',
      opacity: 0,
    },
    iconContainer: {
      width: '80px',
      height: '80px',
      borderRadius: '50%',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      background: 'transparent',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '24px',
      color: 'rgba(255, 255, 255, 0.7)',
    },
    contactLabel: {
      fontFamily: "'Outfit', sans-serif",
      fontSize: '11px',
      fontWeight: 400,
      letterSpacing: '3px',
      color: 'rgba(255, 255, 255, 0.5)',
      marginBottom: '12px',
      margin: '0 0 12px 0',
    },
    contactValue: {
      fontFamily: "'Cormorant Garamond', serif",
      fontSize: '18px',
      fontWeight: 400,
      color: 'rgba(255, 255, 255, 0.85)',
      margin: 0,
    },
  };

  return (
    <div style={styles.wrapper} className="contact-wrapper">
      <style>{`
        .contact-item {
          transition: transform 0.4s cubic-bezier(0.23, 1, 0.32, 1);
        }
        
        .contact-item:hover {
          transform: translateY(-8px);
        }
        
        .contact-item:hover .icon-container {
          border-color: rgba(232, 127, 42, 0.5);
        }
        
        .contact-item:hover .icon-container svg {
          color: #e87f2a;
        }
        
        .contact-item:hover .contact-value {
          color: #e87f2a;
        }
        
        .icon-container {
          transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
        }
        
        .icon-container svg {
          transition: color 0.4s ease;
        }
        
        .contact-value {
          transition: color 0.3s ease;
        }
        
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .animate-in {
          animation: fadeInUp 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards;
        }

        .delay-1 { animation-delay: 0.1s; }
        .delay-2 { animation-delay: 0.2s; }
        .delay-3 { animation-delay: 0.3s; }
        .delay-4 { animation-delay: 0.4s; }
        .delay-5 { animation-delay: 0.5s; }
        .delay-6 { animation-delay: 0.6s; }

        /* ── Tablet ── */
        @media (max-width: 1024px) {
          .contact-wrapper { padding: 60px 24px !important; }
          .contact-grid { gap: 20px !important; padding: 0 !important; }
        }

        /* ── Mobile ── */
        @media (max-width: 767px) {
          .contact-wrapper { padding: 48px 16px !important; }
          .contact-header  { margin-bottom: 36px !important; }
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
            padding: 0 !important;
          }
          .contact-card { padding: 28px 20px !important; }
          .contact-item:hover { transform: none; }
        }

        /* ── Touch devices ── */
        @media (hover: none) and (pointer: coarse) {
          .contact-item:hover { transform: none; }
        }

        /* ── Reduced motion ── */
        @media (prefers-reduced-motion: reduce) {
          .animate-in { animation: none; opacity: 1; }
        }
      `}</style>
      
      <div style={styles.container}>
        <div style={styles.headerSection} className="contact-header">
          <h1 className="animate-in delay-1" style={styles.title}>Let's Connect</h1>
          <p className="animate-in delay-2" style={styles.subtitle}>
            Ready to activate your brand across Sri Lanka? Get in touch with us to discuss your next activation, campaign, or event. We're here to bring your vision to life.
          </p>
        </div>
        
        <div style={styles.contactGrid} className="contact-grid">
          {contactItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className={`contact-item contact-card animate-in delay-${index + 3}`}
              style={styles.contactCard}
            >
              <div className="icon-container" style={styles.iconContainer}>
                {item.icon}
              </div>
              <h3 style={styles.contactLabel}>{item.label}</h3>
              <p className="contact-value" style={styles.contactValue}>{item.value}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;