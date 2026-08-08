import React, { useState } from 'react';
import { Award, GraduationCap, Globe2, X, Maximize2 } from 'lucide-react';
import { resumeData } from '../data/resumeData';
import { useInView } from '../hooks/useInView';
import { handleTiltMove, handleTiltLeave } from '../utils/tilt';

export default function Certifications() {
  const { education, certifications, languages } = resumeData;
  const [lightboxCert, setLightboxCert] = useState(null);
  const [sectionRef, sectionInView] = useInView();

  return (
    <section id="credentials" className={`section credentials-section ${sectionInView ? 'in-view' : ''}`} ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">QUALIFICATIONS</span>
          <h2 className="section-title">Education & Certifications</h2>
          <div className="section-divider"></div>
        </div>

        {/* Education row */}
        <h3 className="column-title education-title">
          <GraduationCap size={20} className="title-icon" />
          Education
        </h3>
        <div className="education-row">
          {education.map((edu, idx) => (
            <div
              key={edu.institution}
              className="edu-card glass-panel"
              style={{ '--i': idx }}
              onMouseMove={(e) => handleTiltMove(e, { max: 5, scale: 1.015 })}
              onMouseLeave={handleTiltLeave}
            >
              <span className="edu-period">{edu.period}</span>
              <h4 className="edu-degree">{edu.degree}</h4>
              <div className="edu-institution">{edu.institution}</div>

              <div className="edu-grade-wrap">
                <span className="grade-label">Result:</span>
                <span className="grade-value gradient-text-emerald">
                  {edu.grade}
                </span>
              </div>

              <ul className="edu-highlights">
                {edu.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Certifications gallery — single continuously-moving row */}
        <h3 className="column-title certs-title">
          <Award size={20} className="title-icon" />
          Industry Certifications
        </h3>

        <div className="certs-ticker-wrap">
          <div className="certs-ticker-row">
            {[...certifications, ...certifications].map((cert, idx) => (
              <div key={`${cert.name}-${idx}`} className="cert-card-float" style={{ '--i': idx % certifications.length }}>
                <div
                  className="cert-card-flip"
                  onMouseMove={(e) => handleTiltMove(e, { max: 6, scale: 1.02 })}
                  onMouseLeave={handleTiltLeave}
                >
                  <div className="cert-card-inner">
                    {/* Front: always-visible, fully legible image + core facts */}
                    <div className="cert-card-front">
                      <div className="cert-card-image-wrap">
                        {cert.image ? (
                          <img src={cert.image} alt={cert.name} className="cert-card-image" />
                        ) : (
                          <div className="cert-card-placeholder">
                            <Award size={36} />
                          </div>
                        )}
                        {cert.image && (
                          <button
                            className="cert-zoom-btn"
                            onClick={(e) => { e.stopPropagation(); setLightboxCert(cert); }}
                            title="View full certificate"
                          >
                            <Maximize2 size={14} />
                          </button>
                        )}
                      </div>
                      <div className="cert-card-front-content">
                        <h4 className="cert-card-name">{cert.name}</h4>
                        <div className="cert-card-meta">
                          <span className="cert-issuer">{cert.issuer}</span>
                          {cert.issued && <span className="cert-issued">{cert.issued}</span>}
                        </div>
                      </div>
                    </div>

                    {/* Back: extra detail, revealed on hover */}
                    <div className="cert-card-back">
                      <h4 className="cert-card-name">{cert.name}</h4>
                      {cert.description && <p className="cert-description">{cert.description}</p>}
                      {cert.credentialId && <span className="cert-credential-id">ID: {cert.credentialId}</span>}
                      {cert.skills && cert.skills.length > 0 && (
                        <div className="cert-skills">
                          {cert.skills.map(skill => (
                            <span key={skill} className="cert-skill-tag">{skill}</span>
                          ))}
                          {cert.skillsMore > 0 && (
                            <span className="cert-skill-tag cert-skill-more">+{cert.skillsMore} skills</span>
                          )}
                        </div>
                      )}
                      {!cert.description && !cert.credentialId && (!cert.skills || cert.skills.length === 0) && (
                        <p className="cert-description cert-description-muted">{cert.issuer} · {cert.issued || 'Verified credential'}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Languages row */}
        <div className="languages-wrapper">
          <h3 className="column-title">
            <Globe2 size={20} className="title-icon" />
            Languages Spoken
          </h3>

          <div className="languages-list glass-panel">
            {languages.map(lang => (
              <div key={lang} className="lang-tag">
                <Globe2 size={12} className="lang-icon" />
                <span>{lang}</span>
                <span className="lang-proficiency">
                  {lang === 'English' ? 'Professional' : 'Native'}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {lightboxCert && (
        <div className="cert-lightbox-overlay" onClick={() => setLightboxCert(null)}>
          <div className="cert-lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="cert-lightbox-close" onClick={() => setLightboxCert(null)} aria-label="Close">
              <X size={20} />
            </button>
            <img src={lightboxCert.image} alt={lightboxCert.name} className="cert-lightbox-img" />
            <div className="cert-lightbox-caption">
              <h4>{lightboxCert.name}</h4>
              <span>{lightboxCert.issuer}{lightboxCert.issued ? ` • Issued ${lightboxCert.issued}` : ''}</span>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .credentials-section {
          background: linear-gradient(to bottom, transparent, rgba(155, 81, 224, 0.03), transparent);
        }

        .column-title {
          font-family: var(--font-heading);
          font-size: 1.4rem;
          font-weight: 700;
          color: var(--text-primary);
          display: flex;
          align-items: center;
          gap: 0.6rem;
          margin-bottom: 0.5rem;
          text-align: left;
        }

        .title-icon {
          color: var(--color-primary);
        }

        /* Education row */
        .education-title {
          max-width: 1100px;
          margin: 0 auto 1.25rem;
        }

        .education-row {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 1.75rem;
          max-width: 1100px;
          margin: 0 auto 4rem;
          perspective: 1000px;
        }

        .edu-card {
          padding: 1.75rem;
          position: relative;
          text-align: left;
          opacity: 0;
          transform-style: preserve-3d;
          transform: rotateX(var(--tilt-x, 0deg)) rotateY(var(--tilt-y, 0deg)) scale(var(--tilt-scale, 1));
          transition: background 0.3s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1), transform 0.15s ease-out;
        }

        .in-view .edu-card {
          animation: item-fade-in 0.6s ease forwards;
          animation-delay: calc(var(--i) * 0.12s);
        }

        @keyframes item-fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .edu-period {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--color-primary);
          display: block;
          margin-bottom: 0.5rem;
        }

        .edu-degree {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.25rem;
        }

        .edu-institution {
          font-weight: 600;
          color: var(--text-secondary);
          margin-bottom: 1rem;
        }

        .edu-grade-wrap {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          padding: 0.35rem 0.75rem;
          border-radius: 6px;
          margin-bottom: 1.25rem;
          font-size: 0.85rem;
        }

        .grade-label {
          color: var(--text-secondary);
          font-weight: 500;
        }

        .grade-value {
          font-weight: 700;
          font-family: var(--font-mono);
        }

        .edu-highlights {
          list-style: none;
        }

        .edu-highlights li {
          position: relative;
          padding-left: 1.25rem;
          margin-bottom: 0.4rem;
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .edu-highlights li::before {
          content: '→';
          position: absolute;
          left: 0.1rem;
          color: var(--color-primary);
          font-weight: bold;
        }

        /* Certifications gallery */
        .certs-title {
          max-width: 1100px;
          margin: 0 auto 1.5rem;
        }

        .certs-ticker-wrap {
          position: relative;
          overflow: hidden;
          max-width: 1100px;
          margin: 0 auto 4rem;
          -webkit-mask-image: linear-gradient(to right, transparent 0, #000 6%, #000 94%, transparent 100%);
          mask-image: linear-gradient(to right, transparent 0, #000 6%, #000 94%, transparent 100%);
        }

        .certs-ticker-row {
          display: flex;
          gap: 1.75rem;
          width: max-content;
          animation: certs-scroll 48s linear infinite;
        }

        .certs-ticker-row:hover {
          animation-play-state: paused;
        }

        @keyframes certs-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(calc(-50% - 0.875rem)); }
        }

        .cert-card-float {
          width: 260px;
          flex-shrink: 0;
          height: 320px;
          animation: cert-bob 4.5s ease-in-out infinite;
          animation-delay: calc(var(--i) * 0.28s);
        }

        @keyframes cert-bob {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-7px); }
        }

        .cert-card-flip {
          height: 100%;
          perspective: 1400px;
          transform: rotateX(var(--tilt-x, 0deg)) rotateY(var(--tilt-y, 0deg)) scale(var(--tilt-scale, 1));
          transition: transform 0.15s ease-out;
        }

        .cert-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          text-align: left;
          transform-style: preserve-3d;
          transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
          border-radius: 16px;
        }

        .cert-card-flip:hover .cert-card-inner {
          transform: rotateY(180deg);
        }

        .cert-card-front,
        .cert-card-back {
          position: absolute;
          inset: 0;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid var(--border-light);
          display: flex;
          flex-direction: column;
        }

        .cert-card-front {
          background: var(--bg-card);
        }

        .cert-card-image-wrap {
          position: relative;
          height: 165px;
          flex-shrink: 0;
          background: #f4f1ea;
          border-bottom: 1px solid var(--border-light);
          overflow: hidden;
        }

        .cert-card-image-wrap::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(115deg, transparent 35%, rgba(255, 255, 255, 0.55) 48%, rgba(255, 255, 255, 0.55) 52%, transparent 65%);
          transform: translateX(-140%);
          animation: cert-shine 5s ease-in-out infinite;
          animation-delay: calc(var(--i) * 0.4s + 1s);
          pointer-events: none;
        }

        @keyframes cert-shine {
          0%, 20% { transform: translateX(-140%); }
          45%, 100% { transform: translateX(140%); }
        }

        .cert-card-image {
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: center;
          padding: 0.4rem;
        }

        .cert-card-placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, rgba(0, 242, 254, 0.14), rgba(155, 81, 224, 0.14));
          color: var(--color-primary);
        }

        .cert-card-front-content {
          padding: 1.1rem 1.1rem 1.25rem;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          background: var(--bg-card);
        }

        .cert-card-name {
          font-size: 0.92rem;
          font-weight: 700;
          color: var(--text-primary);
          line-height: 1.35;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .cert-card-meta {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 0.5rem;
          margin-top: auto;
        }

        .cert-issuer {
          font-size: 0.72rem;
          color: var(--text-secondary);
          font-family: var(--font-mono);
        }

        .cert-issued {
          font-size: 0.68rem;
          color: var(--color-primary);
          font-family: var(--font-mono);
        }

        .cert-zoom-btn {
          position: absolute;
          top: 0.6rem;
          right: 0.6rem;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: rgba(4, 8, 20, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .cert-zoom-btn:hover {
          background: var(--color-primary);
          border-color: var(--color-primary);
          color: #040814;
          box-shadow: 0 0 15px rgba(0, 242, 254, 0.4);
        }

        .cert-card-back {
          background: linear-gradient(160deg, #0d1428, #0a0f24);
          transform: rotateY(180deg);
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .cert-description {
          font-size: 0.8rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .cert-description-muted {
          color: var(--text-muted);
        }

        .cert-credential-id {
          font-size: 0.68rem;
          color: var(--text-muted);
          font-family: var(--font-mono);
          word-break: break-all;
        }

        .cert-skills {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          margin-top: auto;
        }

        .cert-skill-tag {
          font-size: 0.66rem;
          font-weight: 600;
          color: var(--color-secondary);
          background: rgba(155, 81, 224, 0.1);
          border: 1px solid rgba(155, 81, 224, 0.22);
          padding: 0.15rem 0.55rem;
          border-radius: 50px;
        }

        .cert-skill-more {
          color: var(--text-muted);
          background: rgba(255, 255, 255, 0.03);
          border-color: rgba(255, 255, 255, 0.08);
        }

        /* Languages row */
        .languages-wrapper {
          max-width: 1100px;
          margin: 0 auto;
          text-align: left;
        }

        .languages-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          padding: 1.25rem;
        }

        .lang-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          padding: 0.4rem 0.9rem;
          border-radius: 50px;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-secondary);
        }

        .lang-icon {
          color: var(--color-primary);
        }

        .lang-proficiency {
          font-size: 0.7rem;
          font-weight: 400;
          color: var(--text-muted);
          background: rgba(255, 255, 255, 0.04);
          padding: 0.05rem 0.35rem;
          border-radius: 4px;
          margin-left: 0.25rem;
        }

        @media (max-width: 640px) {
          .cert-card-flip {
            height: 300px;
          }
          .cert-card-image-wrap {
            height: 140px;
          }
        }

        /* Certificate Lightbox */
        .cert-lightbox-overlay {
          position: fixed;
          inset: 0;
          background: rgba(4, 8, 20, 0.85);
          backdrop-filter: blur(6px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 2rem;
          animation: lightbox-fade-in 0.2s ease;
        }

        @keyframes lightbox-fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .cert-lightbox-content {
          position: relative;
          max-width: min(800px, 90vw);
          max-height: 85vh;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .cert-lightbox-img {
          max-width: 100%;
          max-height: 70vh;
          border-radius: 10px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .cert-lightbox-caption {
          text-align: center;
          margin-top: 1rem;
          color: var(--text-primary);
        }

        .cert-lightbox-caption h4 {
          font-size: 1rem;
          font-weight: 700;
          margin-bottom: 0.25rem;
        }

        .cert-lightbox-caption span {
          font-size: 0.8rem;
          color: var(--text-muted);
          font-family: var(--font-mono);
        }

        .cert-lightbox-close {
          position: absolute;
          top: -3rem;
          right: 0;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: var(--text-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .cert-lightbox-close:hover {
          background: var(--color-secondary);
          border-color: var(--color-secondary);
          color: #040814;
        }
      `}</style>
    </section>
  );
}
