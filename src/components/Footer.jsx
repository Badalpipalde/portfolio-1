import { Mail, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { LogoIcon } from './LogoIcon';
import { profileData } from '../data/profile';
import { socialLinks } from '../data/socialLinks';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const getSocialIcon = (iconName) => {
    switch (iconName) {
      case 'Github':
        return <GithubIcon size={18} />;
      case 'Linkedin':
        return <LinkedinIcon size={18} />;
      case 'Mail':
        return <Mail size={18} />;
      default:
        return <Mail size={18} />;
    }
  };

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer__content">
          {/* Brand info */}
          <div className="footer__brand">
            <div className="footer__brand-header">
              <div className="footer__monogram">
                {profileData.avatar?.avatarUrl ? (
                  <img
                    src={profileData.avatar.avatarUrl}
                    alt={profileData.name}
                    style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }}
                  />
                ) : (
                  <LogoIcon size={18} />
                )}
              </div>
              <div>
                <div className="footer__name">{profileData.name}</div>
                <div style={{ fontSize: '0.8125rem', color: 'var(--accent-primary)' }}>
                  {profileData.role}
                </div>
              </div>
            </div>
            <p className="footer__tagline">
              Turning ideas into functional digital experiences through clean code, modern architecture, and thoughtful design.
            </p>
          </div>

          {/* Quick navigation */}
          <div>
            <h4 className="footer__heading">Navigation</h4>
            <ul className="footer__nav-list">
              <li><a href="#hero" className="footer__nav-link">Home</a></li>
              <li><a href="#about" className="footer__nav-link">About</a></li>
              <li><a href="#projects" className="footer__nav-link">Selected Work</a></li>
              <li><a href="#skills" className="footer__nav-link">Skills & Stack</a></li>
              <li><a href="#contact" className="footer__nav-link">Get in Touch</a></li>
            </ul>
          </div>

          {/* Social Profiles */}
          <div>
            <h4 className="footer__heading">Connect</h4>
            <div className="footer__socials">
              {socialLinks.map((s) => (
                <a
                  key={s.id}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.ariaLabel}
                  className="footer__social-btn"
                  title={s.name}
                >
                  {getSocialIcon(s.iconName)}
                </a>
              ))}
            </div>
            <div style={{ marginTop: '16px', fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
              {profileData.location}
            </div>
          </div>
        </div>

        {/* Bottom copyright bar */}
        <div className="footer__bottom">
          <div>
            &copy; {currentYear} {profileData.name}. All rights reserved.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span>Built with React, Three.js & SCSS</span>
            <button
              onClick={scrollToTop}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                color: 'var(--text-secondary)',
                cursor: 'pointer',
                background: 'none',
              }}
              title="Back to top"
            >
              <span>Top</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
