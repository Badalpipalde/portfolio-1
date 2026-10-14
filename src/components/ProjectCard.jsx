import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowUpRight, Layers, Layout, Server, Sparkles } from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import { Button } from './Button';
import { useReducedMotion } from '../hooks/useReducedMotion';

export function ProjectCard({ project, onOpenCaseStudy }) {
  const prefersReducedMotion = useReducedMotion();
  const cardRef = useRef(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e) => {
    if (prefersReducedMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -((y - centerY) / centerY) * 7;
    const rotateY = ((x - centerX) / centerX) * 7;

    setRotate({ x: rotateX, y: rotateY });
    setGlare({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.15,
    });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
    setGlare((prev) => ({ ...prev, opacity: 0 }));
  };

  const renderSchematicIcon = () => {
    switch (project.placeholderVariant) {
      case 'mern':
        return <Layers size={28} />;
      case 'dashboard':
        return <Layout size={28} />;
      case 'api':
        return <Server size={28} />;
      default:
        return <Sparkles size={28} />;
    }
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 25, mass: 0.1 }}
      className="project-card"
    >
      {/* Glare overlay */}
      {!prefersReducedMotion && (
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            zIndex: 10,
            background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,${glare.opacity}) 0%, transparent 60%)`,
            transition: 'opacity 0.2s ease',
          }}
        />
      )}

      {/* Preview media / Neutral Architectural schematic */}
      <div className="project-card__preview">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="project-card__preview-image"
            loading="lazy"
          />
        ) : (
          <div className="project-card__schematic">
            <div className="project-card__schematic-grid" />
            <div className="project-card__schematic-badge">
              <span>CONFIGURABLE PLACEHOLDER</span>
            </div>
            <div className="project-card__schematic-glyph">
              {renderSchematicIcon()}
            </div>
          </div>
        )}
      </div>

      {/* Body content */}
      <div className="project-card__body">
        <div className="project-card__meta">
          <span className="project-card__category">{project.category}</span>
          {project.caseStudy && (
            <button
              onClick={() => onOpenCaseStudy(project)}
              className="code-tag interactive"
              style={{ cursor: 'pointer', fontSize: '0.75rem' }}
              title="Click to view full architecture & design notes"
            >
              Case Study &rarr;
            </button>
          )}
        </div>

        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__desc">{project.shortDescription}</p>

        {/* Tags */}
        <div className="project-card__tags">
          {project.tags.map((tag) => (
            <span key={tag} className="project-card__tag">
              {tag}
            </span>
          ))}
        </div>

        {/* Action buttons (only show if links exist) */}
        <div className="project-card__actions">
          {project.caseStudy && (
            <Button
              variant="secondary"
              size="sm"
              onClick={() => onOpenCaseStudy(project)}
              iconRight={<ArrowUpRight size={14} className="btn__icon--arrow" />}
            >
              Case Study
            </Button>
          )}

          {project.liveUrl && (
            <Button
              as="a"
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              size="sm"
              iconRight={<ExternalLink size={14} />}
            >
              Demo
            </Button>
          )}

          {project.githubUrl && (
            <Button
              as="a"
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="ghost"
              size="sm"
              iconLeft={<GithubIcon size={14} />}
              aria-label={`GitHub source code for ${project.title}`}
            >
              Code
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
}
