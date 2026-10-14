import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function ThemeToggle({ theme, toggleTheme }) {
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className="theme-toggle-btn"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      style={{
        position: 'relative',
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--surface-card)',
        border: '1px solid var(--border-subtle)',
        color: 'var(--text-primary)',
        transition: 'all 200ms ease',
        cursor: 'pointer',
      }}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.div
            key="sun"
            initial={{ rotate: -90, scale: 0, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            exit={{ rotate: 90, scale: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <Sun size={19} className="text-amber" style={{ color: '#f59e0b' }} />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ rotate: 90, scale: 0, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            exit={{ rotate: -90, scale: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <Moon size={19} style={{ color: '#3b82f6' }} />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}
