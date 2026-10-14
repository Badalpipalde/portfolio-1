import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowUpRight, FileText, Sparkles } from 'lucide-react';
import { LogoIcon } from './LogoIcon';
import { ThemeToggle } from './ThemeToggle';
import { profileData } from '../data/profile';

const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

export function Navbar({ activeSection, theme, toggleTheme, onOpenResumeModal }) {
  const [mobileExpanded, setMobileExpanded] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
      if (window.scrollY > 100 && mobileExpanded) {
        setMobileExpanded(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mobileExpanded]);

  const scrollTo = (id) => {
    setMobileExpanded(false);
    const element = document.getElementById(id);
    if (element) {
      const topOffset = 85;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const activeLabel = navItems.find((n) => n.id === activeSection)?.label || 'Home';

  return (
    <div className="dynamic-island-wrapper" role="region" aria-label="Dynamic Island Navigation">
      <motion.nav
        layout
        transition={{ type: 'spring', stiffness: 400, damping: 32 }}
        className="dynamic-island"
        style={{
          borderRadius: mobileExpanded ? '28px' : '9999px',
        }}
      >
        {/* ================================================================= */}
        {/* DESKTOP DYNAMIC ISLAND                                            */}
        {/* ================================================================= */}
        <div className="dynamic-island__desktop">
          {/* Brand & Status Pill */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('hero');
            }}
            className="dynamic-island__brand"
            aria-label={`${profileData.name} - Home`}
          >
            <div className="dynamic-island__monogram" style={{ overflow: 'hidden' }}>
              {profileData.avatar?.avatarUrl ? (
                <img
                  src={profileData.avatar.avatarUrl}
                  alt={profileData.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              ) : (
                <LogoIcon size={16} />
              )}
            </div>
            <div className="dynamic-island__brand-text">
              <span className="dynamic-island__name">{profileData.name}</span>
              <span className="dynamic-island__status-indicator">
                <span className="pulse-dot" style={{ width: '5px', height: '5px' }} />
                MERN Stack
              </span>
            </div>
          </a>

          {/* Navigation Links with Floating Pill Indicator */}
          <div className="dynamic-island__nav">
            <ul className="dynamic-island__links">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollTo(item.id);
                      }}
                      className={`dynamic-island__link ${
                        isActive ? 'dynamic-island__link--active' : ''
                      }`}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {item.label}
                      {isActive && (
                        <motion.div
                          layoutId="activeIslandPill"
                          className="dynamic-island__active-indicator"
                          transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                        />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Right Micro-Actions (Theme & Resume) */}
          <div className="dynamic-island__actions">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

            <button
              onClick={onOpenResumeModal}
              className="dynamic-island__resume-btn"
              type="button"
              title="Download or configure resume"
            >
              <FileText size={13} style={{ color: 'var(--accent-primary)' }} />
              <span>Resume</span>
            </button>
          </div>
        </div>

        {/* ================================================================= */}
        {/* MOBILE DYNAMIC ISLAND (Apple iPhone Expanding Pill)               */}
        {/* ================================================================= */}
        <div className="dynamic-island__mobile">
          {/* Compact Pill Bar */}
          <div
            className="dynamic-island__mobile-bar"
            onClick={() => setMobileExpanded((prev) => !prev)}
            aria-expanded={mobileExpanded}
            aria-label="Toggle Dynamic Island Menu"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setMobileExpanded((prev) => !prev);
              }
            }}
          >
            <div className="dynamic-island__mobile-left">
              <div className="dynamic-island__monogram" style={{ width: '28px', height: '28px', fontSize: '0.75rem', overflow: 'hidden' }}>
                {profileData.avatar?.avatarUrl ? (
                  <img
                    src={profileData.avatar.avatarUrl}
                    alt={profileData.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                ) : (
                  <LogoIcon size={14} />
                )}
              </div>
              <div className="dynamic-island__mobile-center">
                <span className="pulse-dot" style={{ width: '6px', height: '6px' }} />
                <span>{activeLabel}</span>
              </div>
            </div>

            <motion.div
              animate={{ rotate: mobileExpanded ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="dynamic-island__mobile-toggle"
            >
              <ChevronDown size={16} />
            </motion.div>
          </div>

          {/* Expanded Fluid Island Menu */}
          <AnimatePresence>
            {mobileExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="dynamic-island__mobile-expanded"
              >
                <ul className="dynamic-island__mobile-links">
                  {navItems.map((item) => {
                    const isActive = activeSection === item.id;
                    return (
                      <li key={item.id}>
                        <a
                          href={`#${item.id}`}
                          onClick={(e) => {
                            e.preventDefault();
                            scrollTo(item.id);
                          }}
                          className={`dynamic-island__mobile-item ${
                            isActive ? 'dynamic-island__mobile-item--active' : ''
                          }`}
                        >
                          <span>{item.label}</span>
                          <ArrowUpRight size={15} opacity={0.6} />
                        </a>
                      </li>
                    );
                  })}
                </ul>

                <div className="dynamic-island__mobile-footer">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
                    <span style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>
                      {theme === 'dark' ? 'Dark Mode' : 'Light Mode'}
                    </span>
                  </div>

                  <button
                    onClick={() => {
                      setMobileExpanded(false);
                      onOpenResumeModal();
                    }}
                    className="dynamic-island__resume-btn"
                    style={{ padding: '8px 16px', fontSize: '0.8125rem' }}
                  >
                    <FileText size={14} style={{ color: 'var(--accent-primary)' }} />
                    <span>Resume</span>
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
    </div>
  );
}
