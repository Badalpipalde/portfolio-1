import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, FileText, Check, Copy, Mail, ExternalLink } from 'lucide-react';
import { Button } from './Button';
import { profileData } from '../data/profile';

export function ResumeModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);
  const resumeConfig = profileData.resume;

  const handleCopyPath = () => {
    navigator.clipboard.writeText('public/resume.pdf');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div
        className="modal-backdrop"
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0, 0, 0, 0.7)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
        }}
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
          style={{
            background: 'var(--bg-surface-elevated)',
            border: '1px solid var(--border-accent)',
            borderRadius: '20px',
            maxWidth: '520px',
            width: '100%',
            padding: '32px',
            boxShadow: 'var(--shadow-card-hover)',
            position: 'relative',
          }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="resume-modal-title"
        >
          <button
            onClick={onClose}
            aria-label="Close modal"
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              width: '34px',
              height: '34px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'var(--surface-card)',
              border: '1px solid var(--border-subtle)',
              color: 'var(--text-secondary)',
              cursor: 'pointer',
            }}
          >
            <X size={18} />
          </button>

          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
            <div
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                background: 'var(--badge-bg)',
                border: '1px solid var(--badge-border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent-primary)',
              }}
            >
              <FileText size={24} />
            </div>
            <div>
              <h3 id="resume-modal-title" style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                Resume Integration
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                {profileData.name} — {profileData.role}
              </p>
            </div>
          </div>

          <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '20px' }}>
            The official resume PDF hasn't been uploaded yet to prevent broken links during initial review.
          </p>

          <div
            style={{
              background: 'var(--surface-card)',
              border: '1px dashed var(--border-subtle)',
              borderRadius: '12px',
              padding: '16px',
              marginBottom: '24px',
            }}
          >
            <div style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '8px' }}>
              How to add your resume:
            </div>
            <ol style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', paddingLeft: '20px', lineHeight: 1.6 }}>
              <li>Save your resume as <code>resume.pdf</code> into the <code>/public</code> directory.</li>
              <li>Open <code>src/data/profile.js</code> and change <code>resume.isAvailable = true</code>.</li>
            </ol>

            <div style={{ marginTop: '12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'var(--bg-base)', padding: '6px 12px', borderRadius: '6px', border: '1px solid var(--border-subtle)' }}>
              <span style={{ fontFamily: 'monospace', fontSize: '0.75rem', color: 'var(--accent-primary)' }}>
                public/resume.pdf
              </span>
              <button
                onClick={handleCopyPath}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '0.75rem', color: 'var(--text-secondary)', cursor: 'pointer' }}
                title="Copy relative path"
              >
                {copied ? <Check size={14} style={{ color: '#10b981' }} /> : <Copy size={14} />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
            <Button
              variant="outline"
              size="sm"
              onClick={onClose}
            >
              Close
            </Button>
            <Button
              variant="primary"
              size="sm"
              as="a"
              href={`mailto:${profileData.contact.email}?subject=Resume Request - ${encodeURIComponent(profileData.name)}`}
              iconLeft={<Mail size={15} />}
            >
              Request via Email
            </Button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
