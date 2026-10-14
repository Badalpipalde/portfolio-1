import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, FileText, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/BrandIcons';
import { LogoIcon } from '../components/LogoIcon';
import { Button } from '../components/Button';
import { Hero3DWorkspace } from './Hero3DWorkspace';
import { profileData } from '../data/profile';
import { socialLinks } from '../data/socialLinks';

export function Hero({ onOpenResumeModal }) {
  const { hero, avatar } = profileData;

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      const topOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const getSocialIcon = (iconName) => {
    switch (iconName) {
      case 'Github':
        return <GithubIcon size={19} />;
      case 'Linkedin':
        return <LinkedinIcon size={19} />;
      case 'Mail':
        return <Mail size={19} />;
      default:
        return <Mail size={19} />;
    }
  };

  return (
    <section id="hero" className="hero" aria-label="Hero Introduction">
      <div className="container">
        <div className="hero__grid">
          {/* Left Column: Content */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="hero__content"
          >
            {/* Dedicated Profile Image / Avatar Placeholder */}
            <div className="hero__avatar-container">
              <div className="hero__avatar-frame">
                {avatar.avatarUrl ? (
                  <img src={avatar.avatarUrl} alt={avatar.alt} />
                ) : (
                  <div
                    className="hero__avatar-placeholder"
                    title="Configurable profile photo placeholder — replace via src/data/profile.js"
                  >
                    <LogoIcon size={24} />
                  </div>
                )}
              </div>
              <div className="hero__avatar-meta">
                <span className="hero__avatar-status">
                  <span className="pulse-dot" />
                  {avatar.badgeText}
                </span>
                <span className="hero__avatar-sub">{profileData.status}</span>
              </div>
            </div>

            {/* Greetings & Headlines */}
            <div>
              <p className="hero__greeting">
                <span>{hero.greeting}</span>
                <span className="text-gradient" style={{ fontWeight: 700 }}>
                  {hero.headline}
                </span>
              </p>
              <h1 className="hero__subheadline">{hero.subheadline}</h1>
            </div>

            {/* Supporting Description */}
            <p className="hero__description">{hero.description}</p>

            {/* Action Buttons */}
            <div className="hero__actions">
              <Button
                variant="primary"
                size="lg"
                onClick={scrollToProjects}
                iconRight={<ArrowDown size={18} className="btn__icon--arrow" />}
                isMagnetic
              >
                {hero.primaryCta}
              </Button>

              <Button
                variant="secondary"
                size="lg"
                onClick={onOpenResumeModal}
                iconLeft={<FileText size={18} />}
                isMagnetic
              >
                {hero.secondaryCta}
              </Button>
            </div>

            {/* Social Links */}
            <div className="hero__socials">
              {socialLinks.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero__social-link"
                  aria-label={item.ariaLabel}
                  title={item.name}
                >
                  {getSocialIcon(item.iconName)}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Interactive 3D Developer Workspace */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="hero__visual"
          >
            <Hero3DWorkspace />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
