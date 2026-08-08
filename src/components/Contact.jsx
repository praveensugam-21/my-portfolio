<<<<<<< HEAD
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare, AlertCircle } from 'lucide-react';
import { resumeData } from '../data/resumeData';
import { useInView } from '../hooks/useInView';
import { handleTiltMove, handleTiltLeave } from '../utils/tilt';

export default function Contact() {
  const { personalInfo } = resumeData;
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [focusedField, setFocusedField] = useState(null);
  const [formStatus, setFormStatus] = useState('idle'); // idle, success, error
  const [gridRef, gridInView] = useInView();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
=======
import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
>>>>>>> c79e624130fa8545b868558bc55dbcea9ee44fb1
  };

  const handleSubmit = (e) => {
    e.preventDefault();
<<<<<<< HEAD
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 3000);
      return;
    }

    // No backend here — this is a static portfolio, so the "send" action
    // just opens the visitor's own email client with everything pre-filled.
    const subject = encodeURIComponent(`Portfolio inquiry from ${formData.name}`);
    const body = encodeURIComponent(`${formData.message}\n\n— ${formData.name} (${formData.email})`);
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;

    setFormStatus('success');
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setFormStatus('idle'), 6000);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">GET IN TOUCH</span>
          <h2 className="section-title">Contact Me</h2>
          <div className="section-divider"></div>
        </div>

        <div ref={gridRef} className={`contact-grid ${gridInView ? 'in-view' : ''}`}>
          {/* Left Side: Contact Info */}
          <div className="contact-info-panel">
            <h3 className="panel-title">Let's Connect</h3>
            <p className="panel-desc">
              I am actively seeking internship opportunities to apply my AI, deep learning, and full-stack software development skills in real-world environments. Reach out to discuss open positions or collaboration ideas!
            </p>

            <div className="info-details-list">
              <a
                href={`mailto:${personalInfo.email}`}
                className="info-detail-item glass-panel"
                style={{ '--i': 0 }}
                onMouseMove={(e) => handleTiltMove(e, { max: 6, scale: 1.02 })}
                onMouseLeave={handleTiltLeave}
              >
                <div className="info-icon-wrapper">
                  <Mail size={18} />
                </div>
                <div className="info-text-wrapper">
                  <span className="info-label">Email</span>
                  <span className="info-value">{personalInfo.email}</span>
                </div>
              </a>

              <a
                href={`tel:${personalInfo.phone}`}
                className="info-detail-item glass-panel"
                style={{ '--i': 1 }}
                onMouseMove={(e) => handleTiltMove(e, { max: 6, scale: 1.02 })}
                onMouseLeave={handleTiltLeave}
              >
                <div className="info-icon-wrapper">
                  <Phone size={18} />
                </div>
                <div className="info-text-wrapper">
                  <span className="info-label">Phone</span>
                  <span className="info-value">+91 {personalInfo.phone}</span>
                </div>
              </a>

              <div
                className="info-detail-item glass-panel"
                style={{ '--i': 2 }}
                onMouseMove={(e) => handleTiltMove(e, { max: 6, scale: 1.02 })}
                onMouseLeave={handleTiltLeave}
              >
                <div className="info-icon-wrapper">
                  <MapPin size={18} />
                </div>
                <div className="info-text-wrapper">
                  <span className="info-label">Location</span>
                  <span className="info-value">{personalInfo.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="contact-form-panel glass-panel">
            {formStatus === 'success' ? (
              <div className="form-success-state fade-in">
                <CheckCircle2 size={48} className="success-icon" />
                <h3>Your Email App Should Be Opening</h3>
                <p>
                  I've pre-filled a message with your details — just hit send in your mail app to reach me directly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <h3 className="form-title">
                  <MessageSquare size={18} style={{ color: 'var(--color-primary)' }} />
                  Send a Message
                </h3>

                {/* Name Input */}
                <div className={`form-group ${focusedField === 'name' || formData.name ? 'active' : ''}`}>
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="form-input"
                  />
                </div>

                {/* Email Input */}
                <div className={`form-group ${focusedField === 'email' || formData.email ? 'active' : ''}`}>
                  <label className="form-label">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="form-input"
                  />
                </div>

                {/* Message Input */}
                <div className={`form-group textarea-group ${focusedField === 'message' || formData.message ? 'active' : ''}`}>
                  <label className="form-label">Your Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    required
                    rows={4}
                    className="form-input form-textarea"
                  />
                </div>

                {formStatus === 'error' && (
                  <div className="form-error-msg">
                    <AlertCircle size={14} />
                    <span>Please fill in all fields correctly.</span>
                  </div>
                )}

                <button type="submit" className="glow-btn submit-btn">
                  <span>Send Message</span>
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .contact-section {
          position: relative;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 0.95fr 1.05fr;
          gap: 3.5rem;
          max-width: 1050px;
          margin: 0 auto;
        }

        .contact-info-panel,
        .contact-form-panel {
          opacity: 0;
          transform: translateY(30px);
        }

        .contact-grid.in-view .contact-info-panel {
          animation: panel-rise 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .contact-grid.in-view .contact-form-panel {
          animation: panel-rise 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          animation-delay: 0.15s;
        }

        @keyframes panel-rise {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .contact-info-panel {
          text-align: left;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .panel-title {
          font-family: var(--font-heading);
          font-size: 1.8rem;
          font-weight: 800;
          color: var(--text-primary);
        }

        .panel-desc {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
          max-width: 480px;
        }

        .info-details-list {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          margin-top: 1rem;
          perspective: 1000px;
        }

        .info-detail-item {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          padding: 1.2rem;
          text-decoration: none;
          opacity: 0;
          transform-style: preserve-3d;
          transform: rotateX(var(--tilt-x, 0deg)) rotateY(var(--tilt-y, 0deg)) scale(var(--tilt-scale, 1));
          transition: background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease, transform 0.15s ease-out;
        }

        .in-view .info-detail-item {
          animation: contact-fade-in 0.6s ease forwards;
          animation-delay: calc(var(--i) * 0.1s);
        }

        @keyframes contact-fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .info-icon-wrapper {
          width: 42px;
          height: 42px;
          border-radius: 12px;
          background: rgba(0, 242, 254, 0.08);
          border: 1px solid rgba(0, 242, 254, 0.15);
          color: var(--color-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: all 0.3s ease;
        }

        .info-detail-item:hover .info-icon-wrapper {
          background: var(--color-primary);
          color: #040814;
          box-shadow: 0 0 15px var(--color-primary);
        }

        .info-text-wrapper {
          display: flex;
          flex-direction: column;
          gap: 0.15rem;
        }

        .info-label {
          font-size: 0.75rem;
          color: var(--text-muted);
          text-transform: uppercase;
          font-family: var(--font-mono);
          letter-spacing: 1px;
        }

        .info-value {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        /* Form styling */
        .contact-form-panel {
          padding: 2.5rem;
          text-align: left;
          position: relative;
        }

        .form-title {
          font-family: var(--font-heading);
          font-size: 1.35rem;
          font-weight: 700;
          color: var(--text-primary);
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 2rem;
        }

        .form-group {
          position: relative;
          margin-bottom: 1.75rem;
          border-bottom: 2px solid rgba(255, 255, 255, 0.06);
          transition: border-color 0.3s ease;
        }

        .form-group.active {
          border-color: var(--color-primary);
        }

        .form-label {
          position: absolute;
          left: 0;
          top: 0.75rem;
          color: var(--text-muted);
          font-size: 0.95rem;
          pointer-events: none;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .form-group.active .form-label {
          top: -0.85rem;
          font-size: 0.75rem;
          color: var(--color-primary);
          font-family: var(--font-mono);
        }

        .form-input {
          width: 100%;
          padding: 0.75rem 0;
          background: transparent;
          border: none;
          color: var(--text-primary);
          font-family: var(--font-sans);
          font-size: 0.95rem;
          outline: none;
        }

        .form-textarea {
          resize: none;
          min-height: 100px;
        }

        .textarea-group {
          margin-bottom: 2rem;
        }

        .submit-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.85rem;
          font-size: 0.95rem;
        }

        .form-error-msg {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          color: #ff4a4a;
          font-size: 0.8rem;
          margin-bottom: 1.25rem;
          font-weight: 500;
        }

        /* Success screen */
        .form-success-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 3rem 0;
          text-align: center;
        }

        .success-icon {
          color: var(--color-accent);
          margin-bottom: 1.25rem;
          animation: scale-up 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .form-success-state h3 {
          font-family: var(--font-heading);
          font-size: 1.4rem;
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }

        .form-success-state p {
          color: var(--text-secondary);
          font-size: 0.92rem;
          line-height: 1.6;
          max-width: 320px;
        }

        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
        }
      `}</style>
    </section>
  );
}
=======
    if (form.name && form.email && form.message) {
      // Normally you send form data to API or email service.
      setSent(true);
      setForm({ name: "", email: "", message: "" });
    } else {
      alert("Please fill all fields");
    }
  };

  return (
    <>
      <h2 className="section-title">Contact Me</h2>
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        style={{
          maxWidth: 500,
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          gap: 15,
          background: "#1e293b",
          padding: "20px",
          borderRadius: 12,
          boxShadow: "0 8px 24px rgb(3 105 161 / 0.4)",
        }}
      >
        {sent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{
              color: "#22c55e",
              fontWeight: "700",
              marginBottom: 10,
              textAlign: "center",
            }}
          >
            Message sent! I'll get back to you soon.
          </motion.div>
        )}
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          style={{
            padding: 12,
            borderRadius: 6,
            border: "none",
            fontSize: "1rem",
          }}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          style={{
            padding: 12,
            borderRadius: 6,
            border: "none",
            fontSize: "1rem",
          }}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          required
          style={{
            padding: 12,
            borderRadius: 6,
            border: "none",
            fontSize: "1rem",
          }}
        ></textarea>
        <motion.button
          type="submit"
          className="primary-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Send
        </motion.button>
      </motion.form>
    </>
  );
};

export default Contact;
>>>>>>> c79e624130fa8545b868558bc55dbcea9ee44fb1
