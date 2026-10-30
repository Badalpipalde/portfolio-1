import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import {
  Mail,
  Send,
  MapPin,
  CheckCircle2,
  AlertCircle,
  Loader2,
  ExternalLink,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/BrandIcons';
import { SectionHeading } from '../components/SectionHeading';
import { Button } from '../components/Button';
import { profileData } from '../data/profile';
import { socialLinks } from '../data/socialLinks';

export function Contact() {
  const { contact } = profileData;

  // Endpoint can be configured in src/data/profile.js (contact.formEndpoint) or via env variable
  const backendEndpoint = contact.formEndpoint?.trim() || (import.meta.env?.VITE_CONTACT_API_URL || '').trim();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null); // 'success' | 'simulated' | 'error' | null
  const [errorMessage, setErrorMessage] = useState('');

  const validate = () => {
    const errs = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = 'Please provide your name (at least 2 characters).';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!emailRegex.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }

    if (!formData.subject.trim() || formData.subject.trim().length < 3) {
      errs.subject = 'Please enter a subject (at least 3 characters).';
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Please enter a message (at least 10 characters).';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmissionStatus(null);
    setErrorMessage('');

    try {
      if (backendEndpoint) {
        let res;

        // Web3Forms: Send native FormData to bypass CORS preflight & JSON parsing issues
        if (!backendEndpoint.startsWith('http') || backendEndpoint.includes('web3forms.com')) {
          const accessKey = backendEndpoint.startsWith('http')
            ? backendEndpoint.split('/').pop()
            : backendEndpoint;

          const formPayload = new FormData();
          formPayload.append('access_key', accessKey);
          formPayload.append('name', formData.name.trim());
          formPayload.append('email', formData.email.trim());
          formPayload.append('subject', formData.subject.trim());
          formPayload.append('message', formData.message.trim());
          formPayload.append('from_name', `${formData.name.trim()} via Portfolio`);

          res = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formPayload,
          });
        } else {
          // Formspree or custom REST API
          res = await fetch(backendEndpoint, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
            },
            body: JSON.stringify(formData),
          });
        }

        const data = await res.json().catch(() => ({}));

        if (res.ok && data.success !== false) {
          setSubmissionStatus('success');
          triggerConfetti();
          setFormData({ name: '', email: '', subject: '', message: '' });
        } else {
          setSubmissionStatus('error');
          setErrorMessage(data.message || 'Service returned an error.');
        }
      } else {
        // Authentic simulated workflow when backend isn't plugged in yet
        await new Promise((resolve) => setTimeout(resolve, 800));
        setSubmissionStatus('simulated');
        triggerConfetti();
      }
    } catch (err) {
      setSubmissionStatus('error');
      setErrorMessage(err.message || 'Network error occurred.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const triggerConfetti = () => {
    try {
      const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
      confetti({
        particleCount: 60,
        spread: 60,
        origin: { y: 0.8 },
        colors: isDark
          ? ['#000000', '#171717', '#2D2011', '#403427', '#51463B', '#61574D', '#c49d7b']
          : ['#0D1321', '#1D2D44', '#3E5C76', '#748CAB', '#F0EBD8'],
      });
    } catch {
      // Ignore confetti errors
    }
  };

  const mailtoUrl = `mailto:${contact.email}?subject=${encodeURIComponent(
    formData.subject || 'Portfolio Inquiry'
  )}&body=${encodeURIComponent(
    `From: ${formData.name} (${formData.email})\n\n${formData.message}`
  )}`;

  return (
    <section id="contact" className="section contact" aria-label="Contact Badal Pipalde">
      <div className="container">
        {/* Section Heading */}
        <SectionHeading
          badge="Get In Touch"
          title={contact.heading}
          subtitle={contact.subheading}
        />

        <div className="contact__grid">
          {/* Left Info Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="contact__info"
          >
            <div className="contact__card">
              <h3 className="contact__card-title">Direct Communication</h3>
              <p className="contact__card-desc">
                Feel free to reach out directly through email or professional networks. I am always open to discussing new engineering roles, projects, or technical ideas.
              </p>

              <div className="contact__channels">
                {/* Email Channel */}
                <a
                  href={`mailto:${contact.email}`}
                  className="contact__channel-item"
                  title="Send email"
                >
                  <div className="contact__channel-icon">
                    <Mail size={18} />
                  </div>
                  <div>
                    <div className="contact__channel-label">Email Address</div>
                    <div className="contact__channel-val">{contact.email}</div>
                  </div>
                </a>

                {/* Location Channel */}
                <div className="contact__channel-item">
                  <div className="contact__channel-icon">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div className="contact__channel-label">Current Location</div>
                    <div className="contact__channel-val">{profileData.location}</div>
                  </div>
                </div>

                {/* Social Channels */}
                {socialLinks
                  .filter((item) => item.id !== 'email')
                  .map((item) => (
                    <a
                      key={item.id}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact__channel-item"
                      title={item.name}
                    >
                      <div className="contact__channel-icon">
                        {item.id === 'github' ? (
                          <GithubIcon size={18} />
                        ) : (
                          <LinkedinIcon size={18} />
                        )}
                      </div>
                      <div>
                        <div className="contact__channel-label">{item.name}</div>
                        <div className="contact__channel-val">{item.handle}</div>
                      </div>
                    </a>
                  ))}
              </div>
            </div>
          </motion.div>

          {/* Right Form Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="contact__form-wrapper"
          >
            <form onSubmit={handleSubmit} className="contact__form" noValidate>
              <div className="contact__row">
                {/* Name */}
                <div className="contact__field">
                  <label htmlFor="contact-name" className="contact__label">
                    <span>Your Name</span>
                    <span className="required">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Jane Doe"
                    className={`contact__input ${errors.name ? 'contact__input--error' : ''}`}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? 'error-name' : undefined}
                    disabled={isSubmitting}
                  />
                  {errors.name && (
                    <span id="error-name" className="contact__error-msg" role="alert">
                      <AlertCircle size={12} /> {errors.name}
                    </span>
                  )}
                </div>

                {/* Email */}
                <div className="contact__field">
                  <label htmlFor="contact-email" className="contact__label">
                    <span>Email Address</span>
                    <span className="required">*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="jane@example.com"
                    className={`contact__input ${errors.email ? 'contact__input--error' : ''}`}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? 'error-email' : undefined}
                    disabled={isSubmitting}
                  />
                  {errors.email && (
                    <span id="error-email" className="contact__error-msg" role="alert">
                      <AlertCircle size={12} /> {errors.email}
                    </span>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div className="contact__field">
                <label htmlFor="contact-subject" className="contact__label">
                  <span>Subject</span>
                  <span className="required">*</span>
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Opportunity / Collaboration / Project"
                  className={`contact__input ${errors.subject ? 'contact__input--error' : ''}`}
                  aria-invalid={Boolean(errors.subject)}
                  aria-describedby={errors.subject ? 'error-subject' : undefined}
                  disabled={isSubmitting}
                />
                {errors.subject && (
                  <span id="error-subject" className="contact__error-msg" role="alert">
                    <AlertCircle size={12} /> {errors.subject}
                  </span>
                )}
              </div>

              {/* Message */}
              <div className="contact__field">
                <label htmlFor="contact-message" className="contact__label">
                  <span>Message</span>
                  <span className="required">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project, team, or opportunity..."
                  className={`contact__textarea ${errors.message ? 'contact__textarea--error' : ''}`}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? 'error-message' : undefined}
                  disabled={isSubmitting}
                />
                {errors.message && (
                  <span id="error-message" className="contact__error-msg" role="alert">
                    <AlertCircle size={12} /> {errors.message}
                  </span>
                )}
              </div>

              {/* Status Notice when Submitted */}
              {submissionStatus === 'simulated' && (
                <div className="contact__status-banner contact__status-banner--notice" role="status">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 600 }}>
                    <CheckCircle2 size={16} style={{ color: '#10b981' }} />
                    Form Validated Successfully!
                  </div>
                  <p>
                    Frontend validation is active. To deliver messages directly to your inbox, connect your email service in <code>src/sections/Contact.jsx</code>.
                  </p>
                  <div>
                    <Button
                      as="a"
                      href={mailtoUrl}
                      variant="outline"
                      size="sm"
                      iconRight={<ExternalLink size={14} />}
                    >
                      Send via Email Client (mailto)
                    </Button>
                  </div>
                </div>
              )}

              {submissionStatus === 'success' && (
                <div className="contact__status-banner contact__status-banner--success" role="status">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 600 }}>
                    <CheckCircle2 size={16} />
                    Message sent successfully! Thank you for reaching out.
                  </div>
                  <p style={{ margin: '6px 0 0', fontSize: '0.825rem', color: 'var(--text-secondary)' }}>
                    Your message was delivered to <strong>{contact.email}</strong>. (If you don't see it immediately in Gmail, check your <em>Spam</em> or <em>Promotions</em> folder).
                  </p>
                </div>
              )}

              {submissionStatus === 'error' && (
                <div className="contact__status-banner" style={{ background: 'rgba(239,68,68,0.1)', color: '#ef4444' }} role="alert">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 600 }}>
                    <AlertCircle size={16} />
                    {errorMessage ? `Error: ${errorMessage}` : 'An error occurred. Please try again or email directly.'}
                  </div>
                  <p style={{ margin: '4px 0 0 24px', fontSize: '0.8rem', color: 'inherit' }}>
                    You can always email me directly at <a href={`mailto:${contact.email}`} style={{ textDecoration: 'underline', color: 'inherit' }}>{contact.email}</a>.
                  </p>
                </div>
              )}

              {/* Submit Button */}
              <div>
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={isSubmitting}
                  iconRight={
                    isSubmitting ? (
                      <Loader2 size={18} className="animate-spin" />
                    ) : (
                      <Send size={18} className="btn__icon--arrow" />
                    )
                  }
                  isMagnetic
                >
                  {isSubmitting ? 'Validating...' : 'Send Message'}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
