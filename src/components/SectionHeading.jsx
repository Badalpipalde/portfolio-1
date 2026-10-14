import React from 'react';
import { motion } from 'framer-motion';

export function SectionHeading({
  badge,
  title,
  subtitle,
  align = 'left', // 'left' | 'center'
  className = '',
}) {
  const isCenter = align === 'center';

  return (
    <div
      className={`section-heading ${isCenter ? 'section-heading--center' : ''} ${className}`}
      style={{
        marginBottom: '48px',
        textAlign: isCenter ? 'center' : 'left',
      }}
    >
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '14px', display: 'flex', justifyContent: isCenter ? 'center' : 'flex-start' }}
        >
          <span className="pill-badge">
            <span className="pulse-dot" />
            {badge}
          </span>
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, delay: 0.1 }}
        style={{
          fontSize: 'clamp(2rem, 4vw, 2.75rem)',
          fontWeight: 800,
          lineHeight: 1.2,
          letterSpacing: '-0.03em',
          marginBottom: subtitle ? '14px' : '0',
          color: 'var(--text-primary)',
        }}
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            fontSize: 'clamp(1rem, 1.8vw, 1.125rem)',
            color: 'var(--text-secondary)',
            maxWidth: isCenter ? '620px' : '580px',
            margin: isCenter ? '0 auto' : '0',
            lineHeight: 1.6,
          }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
