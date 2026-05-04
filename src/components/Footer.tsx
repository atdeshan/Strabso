import React from 'react';
import logo from '../assets/logo.png';

const NAV_LINKS = ['Home', 'Projects', 'About'];
const SERVICES = [
  'Brand Activations',
  'Mall Activations',
  'Roadshows & SMMT',
  'Sampling Campaigns',
  'Selling Operations',
  'Corporate Events',
  'Government Activations',
  'Promoter Deployment',
];

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  const scrollTo = (id: string) => {
    document.querySelector(`[data-section="${id}"]`)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <style>{`
        .site-footer {
          background: #06060f;
          padding: 80px 48px 0;
          position: relative;
          overflow: hidden;
          font-family: 'Outfit', sans-serif;
        }

        .site-footer::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(201,169,110,0.3), transparent);
        }

        .footer-ambient {
          position: absolute;
          bottom: 0; left: 50%;
          transform: translateX(-50%);
          width: 700px; height: 300px;
          background: radial-gradient(ellipse at 50% 100%, rgba(232,127,42,0.05) 0%, transparent 70%);
          pointer-events: none;
        }

        .footer-main {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.8fr 1fr 1.4fr 1.4fr;
          gap: 64px;
          padding-bottom: 64px;
          position: relative;
          z-index: 1;
        }

        /* Column 1 — Brand */
        .footer-brand-logo {
          height: 36px;
          width: auto;
          object-fit: contain;
          display: block;
          margin-bottom: 20px;
          filter: brightness(0) invert(1);
          opacity: 0.85;
        }

        .footer-brand-tagline {
          font-size: 13px;
          color: rgba(255,255,255,0.38);
          line-height: 1.7;
          max-width: 240px;
          margin: 0 0 28px;
        }

        .footer-socials {
          display: flex;
          gap: 12px;
        }

        .footer-social-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.12);
          background: transparent;
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255,255,255,0.4);
          cursor: pointer;
          text-decoration: none;
          transition: border-color 0.3s ease, color 0.3s ease, background 0.3s ease;
        }
        .footer-social-btn:hover {
          border-color: rgba(201,169,110,0.45);
          color: rgba(201,169,110,0.9);
          background: rgba(201,169,110,0.05);
        }

        /* Column headers */
        .footer-col-title {
          font-family: 'Outfit', sans-serif;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 3.5px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.28);
          margin: 0 0 24px;
        }

        /* Nav links */
        .footer-nav {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .footer-nav a,
        .footer-nav button {
          font-family: 'Outfit', sans-serif;
          font-size: 14px;
          color: rgba(255,255,255,0.45);
          text-decoration: none;
          background: none;
          border: none;
          padding: 0;
          cursor: pointer;
          transition: color 0.25s ease;
          text-align: left;
        }
        .footer-nav a:hover,
        .footer-nav button:hover { color: rgba(201,169,110,0.9); }

        /* Services list */
        .footer-services {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .footer-services li {
          font-size: 13px;
          color: rgba(255,255,255,0.35);
          line-height: 1.5;
        }

        /* Contact */
        .footer-contact-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .footer-contact-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }

        .footer-contact-icon {
          color: rgba(201,169,110,0.55);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .footer-contact-text {
          font-size: 13px;
          color: rgba(255,255,255,0.45);
          line-height: 1.6;
        }

        .footer-contact-text a {
          color: inherit;
          text-decoration: none;
          transition: color 0.25s ease;
        }
        .footer-contact-text a:hover { color: rgba(201,169,110,0.85); }

        /* Bottom bar */
        .footer-bottom {
          border-top: 1px solid rgba(255,255,255,0.05);
          padding: 20px 0;
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
          z-index: 1;
        }

        .footer-copy {
          font-size: 11.5px;
          color: rgba(255,255,255,0.2);
          letter-spacing: 0.5px;
        }

        .footer-copy span {
          color: rgba(201,169,110,0.45);
        }

        .footer-bottom-links {
          display: flex;
          gap: 24px;
        }

        .footer-bottom-links a {
          font-size: 11px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.18);
          text-decoration: none;
          transition: color 0.25s ease;
        }
        .footer-bottom-links a:hover { color: rgba(255,255,255,0.45); }

        @media (max-width: 1024px) {
          .footer-main { grid-template-columns: 1fr 1fr; gap: 48px; }
          .site-footer { padding: 64px 32px 0; }
        }

        @media (max-width: 600px) {
          .footer-main { grid-template-columns: 1fr; gap: 40px; }
          .site-footer { padding: 48px 20px 0; }
          .footer-bottom { flex-direction: column; gap: 12px; text-align: center; }
          .footer-bottom-links { gap: 16px; }
        }
      `}</style>

      <footer className="site-footer">
        <div className="footer-ambient" aria-hidden="true" />

        <div className="footer-main">
          {/* Brand */}
          <div>
            <img src={logo} alt="Strabso" className="footer-brand-logo" />
            <p className="footer-brand-tagline">
              Sri Lanka's premier on-ground brand activation agency — connecting brands with consumers nationwide since 2020.
            </p>
            <div className="footer-socials">
              {/* Facebook */}
              <a href="#" className="footer-social-btn" aria-label="Facebook">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a href="#" className="footer-social-btn" aria-label="Instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor"/>
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="#" className="footer-social-btn" aria-label="LinkedIn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="footer-col-title">Navigation</p>
            <ul className="footer-nav">
              {NAV_LINKS.map(link => (
                <li key={link}>
                  <button onClick={() => scrollTo(link)}>{link}</button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="footer-col-title">Our Services</p>
            <ul className="footer-services">
              {SERVICES.map(s => <li key={s}>{s}</li>)}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="footer-col-title">Contact</p>
            <ul className="footer-contact-list">
              <li className="footer-contact-item">
                <span className="footer-contact-icon">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 11.74 19.79 19.79 0 01.01 3.1 2 2 0 012 .92h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.09a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                </span>
                <span className="footer-contact-text">
                  <a href="tel:+94777188485">0777 188 485</a>
                </span>
              </li>
              <li className="footer-contact-item">
                <span className="footer-contact-icon">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </span>
                <span className="footer-contact-text">
                  <a href="mailto:info@strabso.lk">info@strabso.lk</a>
                </span>
              </li>
              <li className="footer-contact-item">
                <span className="footer-contact-icon">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </span>
                <span className="footer-contact-text">Colombo, Sri Lanka</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p className="footer-copy">
            © {year} <span>Strabso</span>. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
