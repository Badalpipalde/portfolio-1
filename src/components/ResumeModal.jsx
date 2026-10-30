import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  FileText,
  Check,
  Copy,
  Mail,
  ExternalLink,
  Download,
  CheckCircle2,
  Maximize2,
  Minimize2,
} from 'lucide-react';
import { Button } from './Button';
import { profileData } from '../data/profile';

export function ResumeModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);
  const [viewMode, setViewMode] = useState('fit'); // 'fit' (entire page) | 'width' (zoomed width)
  const resumeConfig = profileData.resume;
  const isAvailable = Boolean(resumeConfig?.isAvailable && resumeConfig?.filePath);

  // 1. Prevent background scrolling when modal is open (Scroll Lock)
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;

    // Prevent layout shift from scrollbar disappearing
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleCopyPath = () => {
    const fullUrl = typeof window !== 'undefined'
      ? `${window.location.origin}${resumeConfig.filePath}`
      : 'public/resume.pdf';
    navigator.clipboard.writeText(fullUrl);
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
          background: 'rgba(0, 0, 0, 0.76)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '16px',
          overscrollBehavior: 'contain',
        }}
        onClick={onClose}
        onWheel={(e) => e.stopPropagation()}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
          onWheel={(e) => e.stopPropagation()}
          style={{
            background: 'var(--bg-surface-elevated)',
            border: '1px solid var(--border-accent)',
            borderRadius: '20px',
            maxWidth: isAvailable ? '960px' : '520px',
            width: '100%',
            height: isAvailable ? '92vh' : 'auto',
            maxHeight: '95vh',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            padding: '20px 24px 16px',
            boxShadow: 'var(--shadow-card-hover)',
            position: 'relative',
            overscrollBehavior: 'contain',
          }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="resume-modal-title"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            style={{
              position: 'absolute',
              top: '16px',
              right: '16px',
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
              zIndex: 10,
              transition: 'all 150ms ease',
            }}
          >
            <X size={18} />
          </button>

          {/* Modal Header */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '14px', paddingRight: '40px' }}>
            <div
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '12px',
                background: 'var(--badge-bg)',
                border: '1px solid var(--badge-border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent-primary)',
                flexShrink: 0,
              }}
            >
              <FileText size={24} />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                <h3
                  id="resume-modal-title"
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    margin: 0,
                  }}
                >
                  {isAvailable ? 'Official Resume' : 'Resume Integration'}
                </h3>
                {isAvailable && (
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      padding: '2px 8px',
                      borderRadius: '9999px',
                      background: 'rgba(16, 185, 129, 0.14)',
                      color: '#10b981',
                      border: '1px solid rgba(16, 185, 129, 0.28)',
                    }}
                  >
                    <CheckCircle2 size={12} />
                    Verified & Ready
                  </span>
                )}
              </div>
              <p
                style={{
                  fontSize: '0.85rem',
                  color: 'var(--text-secondary)',
                  margin: '2px 0 0',
                }}
              >
                {profileData.name} — {profileData.role}
              </p>
            </div>
          </div>

          {isAvailable ? (
            <div style={{ display: 'flex', flexDirection: 'column', flex: 1, minHeight: 0 }}>
              {/* Document Toolbar: File Info + Zoom View Modes + Copy Link */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '8px',
                  background: 'var(--surface-card)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '10px',
                  padding: '7px 12px',
                  marginBottom: '12px',
                }}
              >
                {/* File info */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      padding: '2px 6px',
                      borderRadius: '4px',
                      background: 'var(--badge-bg)',
                      color: 'var(--accent-primary)',
                      border: '1px solid var(--badge-border)',
                    }}
                  >
                    PDF
                  </span>
                  <span
                    style={{
                      fontSize: '0.8rem',
                      fontFamily: 'monospace',
                      color: 'var(--text-primary)',
                      fontWeight: 500,
                    }}
                  >
                    {resumeConfig.fileName || 'Badal_Pipalde_Resume.pdf'}
                  </span>
                </div>

                {/* View Mode controls + Copy Link */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                  <div
                    style={{
                      display: 'inline-flex',
                      background: 'var(--bg-base)',
                      padding: '2px',
                      borderRadius: '8px',
                      border: '1px solid var(--border-subtle)',
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => setViewMode('fit')}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                        padding: '4px 10px',
                        fontSize: '0.74rem',
                        fontWeight: 600,
                        borderRadius: '6px',
                        border: 'none',
                        cursor: 'pointer',
                        background: viewMode === 'fit' ? 'var(--accent-primary)' : 'transparent',
                        color: viewMode === 'fit' ? '#ffffff' : 'var(--text-secondary)',
                        transition: 'all 150ms ease',
                      }}
                      title="Fit whole single-page resume into view"
                    >
                      <Minimize2 size={12} />
                      Fit Whole Page
                    </button>
                    <button
                      type="button"
                      onClick={() => setViewMode('width')}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                        padding: '4px 10px',
                        fontSize: '0.74rem',
                        fontWeight: 600,
                        borderRadius: '6px',
                        border: 'none',
                        cursor: 'pointer',
                        background: viewMode === 'width' ? 'var(--accent-primary)' : 'transparent',
                        color: viewMode === 'width' ? '#ffffff' : 'var(--text-secondary)',
                        transition: 'all 150ms ease',
                      }}
                      title="Fit to width with scrolling"
                    >
                      <Maximize2 size={12} />
                      Fit Width
                    </button>
                  </div>

                  <button
                    onClick={handleCopyPath}
                    type="button"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      fontSize: '0.75rem',
                      color: 'var(--text-secondary)',
                      background: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      padding: '4px 8px',
                      borderRadius: '6px',
                    }}
                    title="Copy direct link to resume"
                  >
                    {copied ? <Check size={13} style={{ color: '#10b981' }} /> : <Copy size={13} />}
                    <span>{copied ? 'Link Copied!' : 'Copy Link'}</span>
                  </button>
                </div>
              </div>

              {/* Embedded PDF Viewer Frame - Fully Isolated Scroll */}
              <div
                style={{
                  flex: 1,
                  minHeight: '560px',
                  height: '70vh',
                  maxHeight: '780px',
                  borderRadius: '14px',
                  overflow: 'hidden',
                  border: '1px solid var(--border-subtle)',
                  background: '#525659',
                  marginBottom: '14px',
                  position: 'relative',
                  width: '100%',
                  overscrollBehavior: 'contain',
                  scrollBehavior: 'smooth',
                }}
                onWheel={(e) => e.stopPropagation()}
              >
                <iframe
                  key={viewMode}
                  src={`${resumeConfig.filePath}#page=1&view=${viewMode === 'fit' ? 'Fit' : 'FitH,0,0'}&toolbar=0&navpanes=0`}
                  title={`${profileData.name} Resume`}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    border: 'none',
                    display: 'block',
                    overscrollBehavior: 'contain',
                  }}
                />
              </div>

              {/* Modal Actions Footer */}
              <div
                style={{
                  display: 'flex',
                  gap: '10px',
                  flexWrap: 'wrap',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                }}
              >
                <Button variant="ghost" size="sm" onClick={onClose}>
                  Close
                </Button>

                <Button
                  variant="outline"
                  size="sm"
                  as="a"
                  href={resumeConfig.filePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  iconLeft={<ExternalLink size={15} />}
                >
                  Open Fullscreen
                </Button>

                <Button
                  variant="primary"
                  size="sm"
                  as="a"
                  href={resumeConfig.filePath}
                  download={resumeConfig.fileName || 'Badal_Pipalde_Resume.pdf'}
                  iconLeft={<Download size={15} />}
                >
                  Download PDF
                </Button>
              </div>
            </div>
          ) : (
            /* Fallback Mode: Instructions if resume is missing */
            <div>
              <p
                style={{
                  fontSize: '0.9375rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.6,
                  marginBottom: '20px',
                }}
              >
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
                <div
                  style={{
                    fontSize: '0.8125rem',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    marginBottom: '8px',
                  }}
                >
                  How to add your resume:
                </div>
                <ol
                  style={{
                    fontSize: '0.8125rem',
                    color: 'var(--text-secondary)',
                    paddingLeft: '20px',
                    lineHeight: 1.6,
                  }}
                >
                  <li>
                    Save your resume as <code>resume.pdf</code> into the <code>/public</code> directory.
                  </li>
                  <li>
                    Open <code>src/data/profile.js</code> and change <code>resume.isAvailable = true</code>.
                  </li>
                </ol>

                <div
                  style={{
                    marginTop: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    background: 'var(--bg-base)',
                    padding: '6px 12px',
                    borderRadius: '6px',
                    border: '1px solid var(--border-subtle)',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'monospace',
                      fontSize: '0.75rem',
                      color: 'var(--accent-primary)',
                    }}
                  >
                    public/resume.pdf
                  </span>
                  <button
                    onClick={handleCopyPath}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      fontSize: '0.75rem',
                      color: 'var(--text-secondary)',
                      cursor: 'pointer',
                      background: 'none',
                      border: 'none',
                    }}
                    title="Copy relative path"
                  >
                    {copied ? <Check size={14} style={{ color: '#10b981' }} /> : <Copy size={14} />}
                    <span>{copied ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
              </div>

              <div
                style={{
                  display: 'flex',
                  gap: '12px',
                  flexWrap: 'wrap',
                  justifyContent: 'flex-end',
                }}
              >
                <Button variant="outline" size="sm" onClick={onClose}>
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
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
