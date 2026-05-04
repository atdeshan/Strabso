// components/Navigation.tsx
import React from "react";
import "../styles/Navigation.css";
import logo from "../assets/logo.png";

interface NavigationProps {
  activeTab: string;
  onTabClick: (tabName: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeTab, onTabClick }) => {
  const navItems = [
    { name: "Home" },
    { name: "Projects" },
    { name: "About" },
    { name: "Contact" },
  ];

  return (
    <nav className="glass-navbar">
      <div className="navbar-wrapper">
        <div className="navbar-container">
          <a href="/" className="navbar-logo">
            <div className="logo-icon">
              <img src={logo} alt="Company Logo" />
            </div>
          </a>

          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.name} className="nav-item">
                <button
                  onClick={() => onTabClick(item.name)}
                  className={`nav-link ${activeTab === item.name ? "active" : ""}`}
                  aria-current={activeTab === item.name ? "page" : undefined}
                >
                  {item.name}
                  {activeTab === item.name && <div className="nav-link-pulse" />}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
