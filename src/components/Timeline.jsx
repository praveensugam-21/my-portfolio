import React, { useState } from 'react';
import { Calendar, MapPin, Briefcase, Award, X } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { resumeData } from '../data/resumeData';
import { useInView } from '../hooks/useInView';
import { handleTiltMove, handleTiltLeave } from '../utils/tilt';

export default function Timeline() {
  const { experience } = resumeData;
  const [lightboxJob, setLightboxJob] = useState(null);
  const [containerRef, containerInView] = useInView();

  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">PROFESSIONAL JOURNEY</span>
          <h2 className="section-title">Work Experience</h2>
          <div className="section-divider"></div>
        </div>

        <div ref={containerRef} className={`timeline-container ${containerInView ? 'in-view' : ''}`}>
          {/* Main glowing timeline center line */}
          <div className="timeline-line"></div>

          {experience.map((job, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={job.company}
                className={`timeline-item ${isEven ? 'left-align' : 'right-align'}`}
                style={{ '--i': index }}
              >
                {/* Timeline node icon */}
                <div className="timeline-node glass-panel">
                  <Briefcase size={16} className="node-icon" />
                </div>

                {/* Timeline content card */}
                <div
                  className="timeline-content glass-panel"
                  onMouseMove={(e) => handleTiltMove(e, { max: 5, scale: 1.015 })}
                  onMouseLeave={handleTiltLeave}
                >
                  <span className="job-period">
                    <Calendar size={12} />
                    {job.period}
                  </span>
                  
                  <h3 className="job-role">{job.role}</h3>
                  
                  <div className="job-meta">
                    <span className="job-company">{job.company}</span>
                    <span className="job-location">
                      <MapPin size={12} />
                      {job.location}
                    </span>
                  </div>

                  {/* Bullet details */}
                  <ul className="job-details">
                    {job.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>

                  {/* Tech stack badges */}
                  <div className="job-tech">
                    {job.tech.map(tech => (
                      <span key={tech} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {(job.certificateImage || job.links?.github) && (
                    <div className="job-actions">
                      {job.certificateImage && (
                        <button className="view-cert-btn" onClick={() => setLightboxJob(job)}>
                          <Award size={14} />
                          View Certificate
                        </button>
                      )}
                      {job.links?.github && (
                        <a href={job.links.github} target="_blank" rel="noopener noreferrer" className="view-cert-btn view-code-btn">
                          <GithubIcon size={14} />
                          View Code
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {lightboxJob && (
        <div className="job-cert-overlay" onClick={() => setLightboxJob(null)}>
          <div className="job-cert-content" onClick={(e) => e.stopPropagation()}>
            <button className="job-cert-close" onClick={() => setLightboxJob(null)} aria-label="Close">
              <X size={20} />
            </button>
            <img src={lightboxJob.certificateImage} alt={`${lightboxJob.role} certificate`} className="job-cert-img" />
            <div className="job-cert-caption">
              <h4>{lightboxJob.role}</h4>
              <span>{lightboxJob.company}</span>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .experience-section {
          position: relative;
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-subtitle {
          font-family: var(--font-mono);
          color: var(--color-primary);
          font-size: 0.8rem;
          font-weight: 500;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          display: block;
          margin-bottom: 0.5rem;
        }

        .section-title {
          font-family: var(--font-heading);
          font-size: 2.5rem;
          font-weight: 800;
          color: var(--text-primary);
        }

        .section-divider {
          width: 50px;
          height: 3px;
          background: linear-gradient(90deg, var(--color-primary), var(--color-secondary));
          margin: 1rem auto 0;
          border-radius: 2px;
        }

        /* Timeline container mechanics */
        .timeline-container {
          position: relative;
          max-width: 1000px;
          margin: 0 auto;
          padding: 2rem 0;
        }

        /* Center vertical line */
        .timeline-line {
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(
            to bottom,
            var(--color-primary) 0%,
            var(--color-secondary) 50%,
            var(--color-accent) 100%
          );
          transform: translateX(-50%);
          box-shadow: 0 0 10px rgba(0, 242, 254, 0.2);
        }

        .timeline-item {
          display: flex;
          justify-content: flex-end;
          width: 50%;
          position: relative;
          margin-bottom: 3.5rem;
          padding: 0 2.5rem;
          perspective: 1200px;
          opacity: 0;
        }

        .timeline-container.in-view .timeline-item.left-align {
          animation: slide-in-left 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          animation-delay: calc(var(--i) * 0.15s);
        }

        .timeline-container.in-view .timeline-item.right-align {
          animation: slide-in-right 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          animation-delay: calc(var(--i) * 0.15s);
        }

        @keyframes slide-in-left {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes slide-in-right {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }

        .timeline-item.left-align {
          align-self: flex-start;
          justify-content: flex-start;
          left: 0;
        }

        .timeline-item.right-align {
          align-self: flex-end;
          justify-content: flex-start;
          left: 50%;
        }

        /* Timeline node */
        .timeline-node {
          position: absolute;
          left: 100%;
          top: 1.5rem;
          transform: translateX(-50%);
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
          background: var(--bg-darker);
          border: 2px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .timeline-item.right-align .timeline-node {
          left: 0;
        }

        .timeline-item:hover .timeline-node {
          border-color: var(--color-primary);
          box-shadow: 0 0 15px var(--color-primary);
          transform: translateX(-50%) scale(1.1);
        }

        .node-icon {
          color: var(--text-secondary);
          transition: color 0.3s ease;
        }

        .timeline-item:hover .node-icon {
          color: var(--color-primary);
        }

        /* Timeline Card */
        .timeline-content {
          width: 100%;
          padding: 2rem;
          text-align: left;
          position: relative;
          transform-style: preserve-3d;
          transform: rotateX(var(--tilt-x, 0deg)) rotateY(var(--tilt-y, 0deg)) scale(var(--tilt-scale, 1));
          transition: background 0.3s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1), transform 0.15s ease-out;
        }

        .job-period {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          font-weight: 500;
          color: var(--color-primary);
          margin-bottom: 0.75rem;
        }

        .job-role {
          font-size: 1.35rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }

        .job-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 1.25rem;
          font-size: 0.85rem;
        }

        .job-company {
          font-weight: 600;
          color: var(--color-secondary);
        }

        .job-location {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          color: var(--text-muted);
        }

        .job-details {
          list-style: none;
          margin-bottom: 1.5rem;
        }

        .job-details li {
          position: relative;
          padding-left: 1.25rem;
          margin-bottom: 0.6rem;
          font-size: 0.92rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .job-details li::before {
          content: '•';
          position: absolute;
          left: 0.25rem;
          color: var(--color-primary);
          font-weight: bold;
        }

        .job-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .tech-badge {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
          color: var(--text-secondary);
          padding: 0.25rem 0.6rem;
          border-radius: 4px;
          font-size: 0.75rem;
          font-weight: 500;
          font-family: var(--font-mono);
          transition: all 0.3s ease;
        }

        .tech-badge:hover {
          background: rgba(155, 81, 224, 0.1);
          border-color: rgba(155, 81, 224, 0.3);
          color: var(--text-primary);
        }

        .job-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin-top: 1.1rem;
        }

        .view-cert-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: rgba(0, 242, 254, 0.06);
          border: 1px solid rgba(0, 242, 254, 0.25);
          color: var(--color-primary);
          padding: 0.45rem 0.9rem;
          border-radius: 6px;
          font-size: 0.78rem;
          font-weight: 600;
          font-family: var(--font-sans);
          text-decoration: none;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .view-cert-btn:hover {
          background: var(--color-primary);
          color: #040814;
          box-shadow: 0 0 15px rgba(0, 242, 254, 0.4);
        }

        .view-code-btn {
          background: rgba(155, 81, 224, 0.08);
          border-color: rgba(155, 81, 224, 0.3);
          color: var(--color-secondary);
        }

        .view-code-btn:hover {
          background: var(--color-secondary);
          color: #040814;
          box-shadow: 0 0 15px rgba(155, 81, 224, 0.4);
        }

        /* Certificate lightbox */
        .job-cert-overlay {
          position: fixed;
          inset: 0;
          background: rgba(4, 8, 20, 0.85);
          backdrop-filter: blur(6px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 2rem;
        }

        .job-cert-content {
          position: relative;
          max-width: min(800px, 90vw);
          max-height: 85vh;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .job-cert-img {
          max-width: 100%;
          max-height: 70vh;
          border-radius: 10px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .job-cert-caption {
          text-align: center;
          margin-top: 1rem;
          color: var(--text-primary);
        }

        .job-cert-caption h4 {
          font-size: 1rem;
          font-weight: 700;
          margin-bottom: 0.25rem;
        }

        .job-cert-caption span {
          font-size: 0.8rem;
          color: var(--text-muted);
          font-family: var(--font-mono);
        }

        .job-cert-close {
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

        .job-cert-close:hover {
          background: var(--color-primary);
          border-color: var(--color-primary);
          color: #040814;
        }

        /* Mobile Responsive adjustment */
        @media (max-width: 768px) {
          .timeline-line {
            left: 20px;
          }
          
          .timeline-item {
            width: 100% !important;
            left: 0 !important;
            padding: 0 1rem 0 3.5rem !important;
            margin-bottom: 2.5rem;
          }

          .timeline-node {
            left: 20px !important;
          }

          .timeline-content {
            padding: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
}
