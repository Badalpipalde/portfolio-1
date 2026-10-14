import React from 'react';

export function LogoIcon({ size = 20, className = '', ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

export function DevMark({ size = 32, className = '' }) {
  return (
    <div
      className={className}
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        background: 'linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-secondary) 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#ffffff',
        boxShadow: '0 2px 10px var(--accent-glow)',
      }}
    >
      <LogoIcon size={Math.round(size * 0.55)} />
    </div>
  );
}
