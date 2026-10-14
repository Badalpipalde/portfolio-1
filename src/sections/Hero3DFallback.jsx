import React from 'react';
import { motion } from 'framer-motion';
import { Atom, Server, Database, Code2, Sparkles, Terminal } from 'lucide-react';

export function Hero3DFallback() {
  return (
    <div
      className="hero-fallback-workspace"
      style={{
        position: 'relative',
        width: '100%',
        height: '420px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Ambient Radial Glow */}
      <div
        style={{
          position: 'absolute',
          width: '320px',
          height: '320px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(37,99,235,0.25) 0%, rgba(139,92,246,0.12) 50%, transparent 75%)',
          filter: 'blur(40px)',
          pointerEvents: 'none',
        }}
      />

      {/* Main Stylized Workspace Window */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          width: '100%',
          maxWidth: '460px',
          background: 'var(--bg-surface-elevated)',
          border: '1px solid var(--border-accent)',
          borderRadius: '18px',
          boxShadow: 'var(--shadow-card-hover)',
          overflow: 'hidden',
          zIndex: 2,
        }}
      >
        {/* Window Title Bar */}
        <div
          style={{
            padding: '12px 16px',
            background: 'var(--surface-card)',
            borderBottom: '1px solid var(--border-subtle)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', gap: '6px' }}>
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444' }} />
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#f59e0b' }} />
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10b981' }} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.75rem', fontFamily: 'monospace', color: 'var(--accent-primary)' }}>
            <Terminal size={14} />
            <span>badal-developer-workspace.js</span>
          </div>
          <div style={{ width: '30px' }} />
        </div>

        {/* Code Content */}
        <div style={{ padding: '20px', fontFamily: 'monospace', fontSize: '0.8125rem', lineHeight: 1.7, color: 'var(--text-secondary)' }}>
          <div>
            <span style={{ color: '#8b5cf6' }}>const</span>{' '}
            <span style={{ color: '#3b82f6' }}>engineer</span> = &#123;
          </div>
          <div style={{ paddingLeft: '20px' }}>
            <span style={{ color: '#93c5fd' }}>name:</span>{' '}
            <span style={{ color: '#10b981' }}>&quot;Badal Pipalde&quot;</span>,
          </div>
          <div style={{ paddingLeft: '20px' }}>
            <span style={{ color: '#93c5fd' }}>stack:</span> [
            <span style={{ color: '#60a5fa' }}>&quot;MongoDB&quot;</span>,{' '}
            <span style={{ color: '#60a5fa' }}>&quot;Express&quot;</span>,{' '}
            <span style={{ color: '#60a5fa' }}>&quot;React&quot;</span>,{' '}
            <span style={{ color: '#60a5fa' }}>&quot;Node.js&quot;</span>],
          </div>
          <div style={{ paddingLeft: '20px' }}>
            <span style={{ color: '#93c5fd' }}>focus:</span>{' '}
            <span style={{ color: '#f59e0b' }}>&quot;Scalable Architecture &amp; Fluid UI&quot;</span>,
          </div>
          <div style={{ paddingLeft: '20px' }}>
            <span style={{ color: '#93c5fd' }}>passion:</span>{' '}
            <span style={{ color: '#10b981' }}>&quot;Turning ideas into real products&quot;</span>
          </div>
          <div>&#125;;</div>
        </div>

        {/* Status Bar */}
        <div
          style={{
            padding: '8px 16px',
            background: 'var(--surface-card)',
            borderTop: '1px solid var(--border-subtle)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: '0.75rem',
            color: 'var(--text-muted)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981' }} />
            <span>MERN Environment Ready</span>
          </div>
          <span>UTF-8</span>
        </div>
      </motion.div>

      {/* Floating Orbiting Tech Badges */}
      <motion.div
        animate={{ y: [-6, 6, -6], rotate: [0, 4, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          top: '20px',
          right: '10px',
          padding: '8px 14px',
          borderRadius: '12px',
          background: 'var(--surface-glass)',
          border: '1px solid var(--border-accent)',
          boxShadow: 'var(--shadow-card)',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          zIndex: 3,
        }}
      >
        <Atom size={20} style={{ color: '#38bdf8' }} />
        <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text-primary)' }}>React.js</span>
      </motion.div>

      <motion.div
        animate={{ y: [6, -6, 6], rotate: [0, -3, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          bottom: '30px',
          left: '5px',
          padding: '8px 14px',
          borderRadius: '12px',
          background: 'var(--surface-glass)',
          border: '1px solid var(--border-accent)',
          boxShadow: 'var(--shadow-card)',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          zIndex: 3,
        }}
      >
        <Server size={18} style={{ color: '#22c55e' }} />
        <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text-primary)' }}>Node.js</span>
      </motion.div>

      <motion.div
        animate={{ y: [-4, 5, -4] }}
        transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        style={{
          position: 'absolute',
          bottom: '40px',
          right: '25px',
          padding: '8px 14px',
          borderRadius: '12px',
          background: 'var(--surface-glass)',
          border: '1px solid var(--border-accent)',
          boxShadow: 'var(--shadow-card)',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          zIndex: 3,
        }}
      >
        <Database size={18} style={{ color: '#10b981' }} />
        <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text-primary)' }}>MongoDB</span>
      </motion.div>
    </div>
  );
}
