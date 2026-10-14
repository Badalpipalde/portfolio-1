import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle2, Cpu, Wrench } from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import { Button } from './Button';

export function ProjectModal({ project, isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const caseStudy = project.caseStudy || {};

  return (
    <AnimatePresence>
      <div
        className="modal-backdrop"
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0, 0, 0, 0.78)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '24px 16px',
          overflowY: 'auto',
        }}
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
          style={{
            background: 'var(--bg-surface-elevated)',
            border: '1px solid var(--border-accent)',
            borderRadius: '24px',
            maxWidth: '720px',
            width: '100%',
            maxHeight: '90vh',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: 'var(--shadow-card-hover)',
            position: 'relative',
            overflow: 'hidden',
          }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="case-study-title"
        >
          {/* Header */}
          <div
            style={{
              padding: '28px 32px 20px',
              borderBottom: '1px solid var(--border-subtle)',
              position: 'relative',
              background: 'var(--surface-card)',
            }}
          >
            <button
              onClick={onClose}
              aria-label="Close case study"
              style={{
                position: 'absolute',
                top: '24px',
                right: '24px',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-subtle)',
                color: 'var(--text-secondary)',
                cursor: 'pointer',
              }}
            >
              <X size={18} />
            </button>

            <span
              style={{
                fontSize: '0.75rem',
                fontFamily: 'monospace',
                color: 'var(--accent-primary)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                display: 'block',
                marginBottom: '6px',
              }}
            >
              Case Study &bull; {project.category}
            </span>
            <h2
              id="case-study-title"
              style={{
                fontSize: '1.625rem',
                fontWeight: 800,
                color: 'var(--text-primary)',
                lineHeight: 1.3,
                marginBottom: '6px',
              }}
            >
              {project.title}
            </h2>
            {caseStudy.tagline && (
              <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)' }}>
                {caseStudy.tagline}
              </p>
            )}
          </div>

          {/* Scrollable Content */}
          <div
            style={{
              padding: '28px 32px',
              overflowY: 'auto',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
            }}
          >
            {/* Overview */}
            {caseStudy.overview && (
              <div>
                <h4
                  style={{
                    fontSize: '0.875rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    color: 'var(--text-primary)',
                    fontWeight: 700,
                    marginBottom: '10px',
                  }}
                >
                  Overview & Objective
                </h4>
                <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                  {caseStudy.overview}
                </p>
              </div>
            )}

            {/* Architecture Highlights */}
            {caseStudy.architecture && caseStudy.architecture.length > 0 && (
              <div>
                <h4
                  style={{
                    fontSize: '0.875rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    color: 'var(--text-primary)',
                    fontWeight: 700,
                    marginBottom: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  <Cpu size={16} style={{ color: 'var(--accent-primary)' }} />
                  Architecture & Stack
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {caseStudy.architecture.map((item, idx) => (
                    <div
                      key={idx}
                      style={{
                        padding: '10px 14px',
                        background: 'var(--surface-card)',
                        borderRadius: '10px',
                        border: '1px solid var(--border-subtle)',
                        fontSize: '0.875rem',
                        color: 'var(--text-secondary)',
                      }}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Technical Challenges */}
            {caseStudy.challenges && caseStudy.challenges.length > 0 && (
              <div>
                <h4
                  style={{
                    fontSize: '0.875rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    color: 'var(--text-primary)',
                    fontWeight: 700,
                    marginBottom: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  <Wrench size={16} style={{ color: 'var(--accent-secondary)' }} />
                  Technical Challenges Solved
                </h4>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', listStyle: 'none' }}>
                  {caseStudy.challenges.map((c, i) => (
                    <li
                      key={i}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '10px',
                        fontSize: '0.875rem',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.6,
                      }}
                    >
                      <CheckCircle2
                        size={16}
                        style={{ color: '#10b981', flexShrink: 0, marginTop: '3px' }}
                      />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tech Tags */}
            <div>
              <h4
                style={{
                  fontSize: '0.875rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  color: 'var(--text-primary)',
                  fontWeight: 700,
                  marginBottom: '10px',
                }}
              >
                Technologies Used
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontFamily: 'monospace',
                      fontSize: '0.8125rem',
                      padding: '4px 10px',
                      borderRadius: '6px',
                      background: 'var(--badge-bg)',
                      border: '1px solid var(--badge-border)',
                      color: 'var(--badge-text)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Takeaways */}
            {caseStudy.keyTakeaways && (
              <div
                style={{
                  padding: '16px',
                  borderRadius: '12px',
                  background: 'var(--surface-card)',
                  border: '1px solid var(--border-subtle)',
                }}
              >
                <div
                  style={{
                    fontSize: '0.8125rem',
                    fontWeight: 700,
                    color: 'var(--accent-primary)',
                    marginBottom: '4px',
                  }}
                >
                  KEY LEARNINGS
                </div>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {caseStudy.keyTakeaways}
                </p>
              </div>
            )}
          </div>

          {/* Footer Actions */}
          <div
            style={{
              padding: '20px 32px',
              borderTop: '1px solid var(--border-subtle)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              background: 'var(--surface-card)',
            }}
          >
            <div style={{ display: 'flex', gap: '10px' }}>
              {project.liveUrl && (
                <Button
                  as="a"
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  size="sm"
                  iconRight={<ExternalLink size={14} />}
                >
                  Launch Demo
                </Button>
              )}
              {project.githubUrl && (
                <Button
                  as="a"
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                  size="sm"
                  iconLeft={<GithubIcon size={14} />}
                >
                  Source Code
                </Button>
              )}
            </div>

            <Button variant="ghost" size="sm" onClick={onClose}>
              Close
            </Button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
