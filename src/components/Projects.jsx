import { useState } from 'react';
import { FolderGit2, X, BookOpen } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { resumeData } from '../data/resumeData';
import { useInView } from '../hooks/useInView';
import { handleTiltMove, handleTiltLeave } from '../utils/tilt';

export default function Projects() {
  const { projects } = resumeData;
  const [selectedProject, setSelectedProject] = useState(null);
  const [gridRef, gridInView] = useInView();

  // Background decoration configurations representing each project type
  const projectVisuals = {
    'EVA Homes – Broker-Mediated Real Estate Marketplace': (
      <div className="project-visual eva-visual">
        <svg viewBox="0 0 100 100" className="visual-svg" aria-hidden="true">
          <path d="M 50,20 L 80,42 L 80,80 L 20,80 L 20,42 Z" stroke="rgba(0, 242, 254, 0.2)" strokeWidth="1.5" fill="none" />
          <path d="M 50,20 L 80,42 L 20,42 Z" stroke="rgba(155, 81, 224, 0.25)" strokeWidth="1.5" fill="none" />
          <rect x="43" y="60" width="14" height="20" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1" fill="none" />
          <circle cx="50" cy="10" r="4" fill="var(--color-gold)" />
          <path d="M 50,14 L 50,20" stroke="var(--color-gold)" strokeWidth="1" />
          <circle cx="20" cy="42" r="3" fill="var(--color-primary)" />
          <circle cx="80" cy="42" r="3" fill="var(--color-secondary)" />
          <line x1="20" y1="42" x2="50" y2="10" stroke="rgba(0, 242, 254, 0.2)" strokeWidth="0.5" strokeDasharray="2 2" />
          <line x1="80" y1="42" x2="50" y2="10" stroke="rgba(155, 81, 224, 0.2)" strokeWidth="0.5" strokeDasharray="2 2" />
        </svg>
      </div>
    ),
    'IRIS AI – Secure AI Document Intelligence Platform': (
      <div className="project-visual iris-visual">
        <svg viewBox="0 0 100 100" className="visual-svg" aria-hidden="true">
          <path d="M 32,20 L 60,20 L 72,32 L 72,80 L 32,80 Z" stroke="rgba(0, 242, 254, 0.18)" strokeWidth="1.5" fill="none" />
          <path d="M 60,20 L 60,32 L 72,32" stroke="rgba(0, 242, 254, 0.25)" strokeWidth="1.5" fill="none" />
          <line x1="40" y1="42" x2="64" y2="42" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1" />
          <line x1="40" y1="50" x2="58" y2="50" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1" />
          <circle cx="52" cy="64" r="14" stroke="var(--color-secondary)" strokeWidth="1" fill="none" opacity="0.4" />
          <circle cx="52" cy="64" r="5" fill="var(--color-accent)" className="animate-pulse" />
          <circle cx="42" cy="58" r="2" fill="var(--color-primary)" />
          <circle cx="62" cy="58" r="2" fill="var(--color-primary)" />
          <circle cx="52" cy="76" r="2" fill="var(--color-primary)" />
          <line x1="52" y1="64" x2="42" y2="58" stroke="rgba(0, 242, 254, 0.3)" strokeWidth="0.5" />
          <line x1="52" y1="64" x2="62" y2="58" stroke="rgba(0, 242, 254, 0.3)" strokeWidth="0.5" />
          <line x1="52" y1="64" x2="52" y2="76" stroke="rgba(0, 242, 254, 0.3)" strokeWidth="0.5" />
        </svg>
      </div>
    ),
    'Higher Studies Portal': (
      <div className="project-visual hs-portal-visual">
        <svg viewBox="0 0 100 100" className="visual-svg" aria-hidden="true">
          <circle cx="50" cy="50" r="35" stroke="rgba(0, 242, 254, 0.15)" strokeWidth="1" fill="none" />
          <circle cx="50" cy="50" r="20" stroke="rgba(0, 242, 254, 0.25)" strokeWidth="1.5" fill="none" strokeDasharray="5 3" />
          <path d="M 25,50 L 50,25 L 75,50 L 50,75 Z" stroke="rgba(155, 81, 224, 0.2)" strokeWidth="1" fill="none" />
          <circle cx="50" cy="25" r="3" fill="var(--color-secondary)" />
          <circle cx="25" cy="50" r="3" fill="var(--color-primary)" />
          <circle cx="75" cy="50" r="3" fill="var(--color-primary)" />
          <circle cx="50" cy="75" r="3" fill="var(--color-accent)" />
          <line x1="50" y1="25" x2="25" y2="50" stroke="rgba(0, 242, 254, 0.2)" strokeWidth="0.5" />
          <line x1="50" y1="25" x2="75" y2="50" stroke="rgba(0, 242, 254, 0.2)" strokeWidth="0.5" />
          <line x1="25" y1="50" x2="50" y2="75" stroke="rgba(0, 242, 254, 0.2)" strokeWidth="0.5" />
          <line x1="75" y1="50" x2="50" y2="75" stroke="rgba(0, 242, 254, 0.2)" strokeWidth="0.5" />
        </svg>
      </div>
    ),
    'AI Powered Retinal Disease Detection': (
      <div className="project-visual retinal-visual">
        <svg viewBox="0 0 100 100" className="visual-svg" aria-hidden="true">
          <circle cx="50" cy="50" r="30" stroke="rgba(0, 242, 254, 0.15)" strokeWidth="1" fill="none" />
          <circle cx="50" cy="50" r="10" stroke="rgba(0, 242, 254, 0.3)" strokeWidth="1" fill="none" />
          {/* Target reticle scan lines */}
          <path d="M 50,10 L 50,30 M 50,70 L 50,90 M 10,50 L 30,50 M 70,50 L 90,50" stroke="var(--color-primary)" strokeWidth="1" strokeDasharray="2 1" />
          <path d="M 35,35 L 42,42 M 65,35 L 58,42 M 35,65 L 42,58 M 65,65 L 58,58" stroke="var(--color-secondary)" strokeWidth="1" />
          {/* Pulsing focal point */}
          <circle cx="50" cy="50" r="3" fill="var(--color-accent)" className="animate-pulse" />
        </svg>
      </div>
    )
  };

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">PRACTICAL CREATIONS</span>
          <h2 className="section-title">Academic & AI Projects</h2>
          <div className="section-divider"></div>
        </div>

        <div ref={gridRef} className={`projects-grid ${gridInView ? 'in-view' : ''}`}>
          {projects.map((proj, idx) => (
            <div key={proj.title} className="project-card-reveal" style={{ '--i': idx }}>
              <div
                className="project-card glass-panel"
                onMouseMove={(e) => handleTiltMove(e, { max: 8, scale: 1.02 })}
                onMouseLeave={handleTiltLeave}
              >
                {/* Graphical Header Card */}
                <div className="project-card-header">
                  {projectVisuals[proj.title]}
                  <div className="project-icon-overlay">
                    <FolderGit2 size={24} className="folder-icon" />
                  </div>
                </div>

                {/* Card Body */}
                <div className="project-card-body">
                  <h3 className="project-card-title">{proj.title}</h3>
                  <p className="project-card-description">{proj.description}</p>

                  {/* Tech tags */}
                  <div className="project-card-tech">
                    {proj.tech.slice(0, 4).map(t => (
                      <span key={t} className="tech-badge-mini">{t}</span>
                    ))}
                    {proj.tech.length > 4 && (
                      <span className="tech-badge-mini-more">+{proj.tech.length - 4} more</span>
                    )}
                  </div>

                  {/* Call actions */}
                  <div className="project-card-actions">
                    <button
                      onClick={() => setSelectedProject(proj)}
                      className="view-details-btn"
                    >
                      <BookOpen size={14} />
                      View Details
                    </button>

                    {proj.links?.github && (
                      <div className="project-links">
                        <a href={proj.links.github} target="_blank" rel="noopener noreferrer" className="icon-btn-link" title="GitHub Source" aria-label={`View ${proj.title} source on GitHub`}>
                          <GithubIcon size={16} />
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dynamic Overlay Detail Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content glass-panel" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close-btn"
              onClick={() => setSelectedProject(null)}
              aria-label="Close project details"
            >
              <X size={20} />
            </button>

            <div className="modal-grid">
              {/* Left Column: Visual decoration */}
              <div className="modal-visual-column">
                {projectVisuals[selectedProject.title]}
                <div className="modal-tech-list">
                  <h4>Built With:</h4>
                  <div className="modal-tech-wrap">
                    {selectedProject.tech.map(t => (
                      <span key={t} className="tech-badge">{t}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Case study content */}
              <div className="modal-content-column">
                <span className="modal-subtitle">PROJECT CASE STUDY</span>
                <h3 className="modal-title">{selectedProject.title}</h3>
                
                <p className="modal-desc">{selectedProject.description}</p>
                
                <div className="modal-details-section">
                  <h4 className="detail-section-title">Key Implementation Details</h4>
                  <ul className="modal-details-list">
                    {selectedProject.details.map((pt, i) => (
                      <li key={i}>{pt}</li>
                    ))}
                  </ul>
                </div>

                {selectedProject.links?.github && (
                  <div className="modal-actions">
                    <a href={selectedProject.links.github} target="_blank" rel="noopener noreferrer" className="glow-btn modal-cta">
                      <GithubIcon size={16} />
                      Code Repository
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .projects-section {
          position: relative;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2rem;
          max-width: 1100px;
          margin: 0 auto;
        }

        .project-card-reveal {
          height: 100%;
          perspective: 1200px;
          opacity: 0;
        }

        .projects-grid.in-view .project-card-reveal {
          animation: card-rise 0.75s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          animation-delay: calc(var(--i) * 0.1s);
        }

        @keyframes card-rise {
          from { opacity: 0; transform: translateY(48px) scale(0.96); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        .project-card {
          display: flex;
          flex-direction: column;
          overflow: hidden;
          height: 100%;
          position: relative;
          transform-style: preserve-3d;
          transform: rotateX(var(--tilt-x, 0deg)) rotateY(var(--tilt-y, 0deg)) scale(var(--tilt-scale, 1));
          transition: transform 0.15s ease-out, box-shadow 0.35s ease;
        }

        .project-card:hover {
          box-shadow: 0 30px 60px -20px rgba(0, 0, 0, 0.55), 0 0 30px rgba(0, 242, 254, 0.18);
        }

        .project-card::after {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at var(--glare-x, 50%) var(--glare-y, 50%), rgba(255, 255, 255, 0.14), transparent 55%);
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
          z-index: 6;
        }

        .project-card:hover::after {
          opacity: 1;
        }

        .project-card-header {
          height: 140px;
          background: rgba(5, 8, 20, 0.6);
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .project-visual {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0.6;
          transition: all 0.5s ease;
        }

        .project-card:hover .project-visual {
          opacity: 0.95;
          transform: scale(1.05) translateZ(20px);
        }

        .visual-svg {
          width: 100px;
          height: 100px;
        }

        .project-icon-overlay {
          position: absolute;
          bottom: -18px;
          left: 1.5rem;
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 10px rgba(0, 242, 254, 0.3);
          z-index: 5;
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .project-card:hover .project-icon-overlay {
          transform: translateZ(34px) scale(1.08);
        }

        .folder-icon {
          color: #040814;
        }

        .project-card-body {
          padding: 2.2rem 1.5rem 1.5rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          text-align: left;
        }

        .project-card-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.75rem;
          transition: transform 0.35s ease;
        }

        .project-card:hover .project-card-title {
          transform: translateZ(18px);
        }

        .project-card-description {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.5;
          margin-bottom: 1.25rem;
          flex-grow: 1;
        }

        .project-card-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          margin-bottom: 1.5rem;
        }

        .tech-badge-mini {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
          color: var(--text-secondary);
          font-size: 0.7rem;
          font-family: var(--font-mono);
          padding: 0.15rem 0.45rem;
          border-radius: 4px;
        }

        .tech-badge-mini-more {
          color: var(--color-primary);
          font-size: 0.7rem;
          font-family: var(--font-mono);
          font-weight: 500;
          align-self: center;
        }

        .project-card-actions {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1px solid rgba(255, 255, 255, 0.04);
          padding-top: 1rem;
        }

        .view-details-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          background: transparent;
          border: none;
          color: var(--color-primary);
          font-family: var(--font-sans);
          font-weight: 600;
          font-size: 0.85rem;
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 0;
        }

        .view-details-btn:hover {
          color: var(--text-primary);
          text-shadow: 0 0 8px rgba(0, 242, 254, 0.4);
        }

        .project-links {
          display: flex;
          gap: 0.75rem;
        }

        .icon-btn-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
          color: var(--text-secondary);
          transition: all 0.3s ease;
        }

        .icon-btn-link:hover {
          color: var(--text-primary);
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 255, 255, 0.2);
        }

        /* Modal Overlay & Card Details styles */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(4, 7, 19, 0.85);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          z-index: 1100;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
          animation: fade-in 0.3s ease;
        }

        .modal-content {
          width: 100%;
          max-width: 850px;
          background: #090e21;
          border: 1px solid rgba(0, 242, 254, 0.15);
          border-radius: 20px;
          position: relative;
          padding: 2.5rem;
          overflow-y: auto;
          max-height: 90vh;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5), var(--shadow-neon);
          animation: scale-up 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .modal-close-btn {
          position: absolute;
          top: 1.25rem;
          right: 1.25rem;
          background: transparent;
          border: none;
          color: var(--text-secondary);
          cursor: pointer;
          transition: color 0.3s ease;
        }

        .modal-close-btn:hover {
          color: var(--color-primary);
        }

        .modal-grid {
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          gap: 2.5rem;
        }

        .modal-visual-column {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          border-right: 1px solid rgba(255, 255, 255, 0.05);
          padding-right: 1.5rem;
        }

        .modal-visual-column .project-visual {
          background: rgba(5, 8, 20, 0.4);
          border-radius: 12px;
          padding: 1rem;
          height: 180px;
          opacity: 0.9;
        }

        .modal-tech-list h4 {
          font-family: var(--font-heading);
          font-size: 0.95rem;
          color: var(--text-primary);
          margin-bottom: 0.75rem;
          text-align: left;
        }

        .modal-tech-wrap {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .modal-content-column {
          text-align: left;
        }

        .modal-subtitle {
          font-family: var(--font-mono);
          color: var(--color-primary);
          font-size: 0.75rem;
          letter-spacing: 2px;
          display: block;
          margin-bottom: 0.25rem;
        }

        .modal-title {
          font-family: var(--font-heading);
          font-size: 1.75rem;
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: 1rem;
        }

        .modal-desc {
          color: var(--text-secondary);
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .modal-details-section {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.04);
          border-radius: 10px;
          padding: 1.25rem;
          margin-bottom: 1.75rem;
        }

        .detail-section-title {
          font-family: var(--font-sans);
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--color-primary);
          margin-bottom: 0.75rem;
        }

        .modal-details-list {
          list-style: none;
        }

        .modal-details-list li {
          position: relative;
          padding-left: 1.25rem;
          margin-bottom: 0.5rem;
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .modal-details-list li::before {
          content: '•';
          position: absolute;
          left: 0.25rem;
          color: var(--color-primary);
          font-weight: bold;
        }

        .modal-actions {
          display: flex;
          gap: 1rem;
        }

        .modal-cta {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          font-size: 0.9rem;
          text-decoration: none;
        }

        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes scale-up {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }

        @media (max-width: 768px) {
          .modal-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          .modal-visual-column {
            border-right: none;
            padding-right: 0;
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
            padding-bottom: 1.5rem;
          }
          .modal-content {
            padding: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
}
