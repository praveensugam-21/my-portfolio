import { Suspense } from 'react';
import { Mail, FileText, ArrowDown } from 'lucide-react';
import { LinkedinIcon } from './SocialIcons';
import { resumeData } from '../data/resumeData';
import praveenImg from '../assets/praveen.jpg';
import Scene3D from './Scene3D';
import ProfileCard from './ProfileCard';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

export default function Hero() {
  const { personalInfo } = resumeData;
  const prefersReducedMotion = usePrefersReducedMotion();

  const handleScrollToContact = (e) => {
    e.preventDefault();
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToExperience = (e) => {
    e.preventDefault();
    const el = document.getElementById('experience');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-grid container">
        {/* Left Column: Text Content */}
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
          </h1>
          
          <h2 className="hero-subtitle">{personalInfo.title}</h2>
          <p className="hero-subtext">{personalInfo.subTitle}</p>
          
          <div className="hero-description-wrap">
            <p className="hero-summary">
              {personalInfo.summary}
            </p>
          </div>

          <div className="hero-ctas">
            <a 
              href="#contact" 
              onClick={handleScrollToContact}
              className="cta-btn glow-btn"
            >
              <Mail size={18} />
              Get in Touch
            </a>
            <a 
              href="#experience" 
              onClick={handleScrollToExperience}
              className="cta-secondary-btn"
            >
              <FileText size={18} />
              Explore Experience
            </a>
          </div>

          <div className="hero-socials">
            <a href={`mailto:${personalInfo.email}`} className="social-link" title="Email Me" aria-label="Email Praveen">
              <Mail size={20} />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="social-link" title="LinkedIn Profile" aria-label="Praveen's LinkedIn profile">
              <LinkedinIcon size={20} />
            </a>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="social-link" title="GitHub Profile" aria-label="Praveen's GitHub profile">
              <span style={{ fontWeight: 'bold', fontSize: '1.1rem' }} aria-hidden="true">git</span>
            </a>
          </div>
        </div>

        {/* Right Column: Profile Image & Stats */}
        <div className="hero-right-panel">
          {!prefersReducedMotion && (
            <div className="scene3d-layer">
              <Suspense fallback={null}>
                <Scene3D />
              </Suspense>
            </div>
          )}

          <div className="profile-card-slot">
            <ProfileCard
              avatarUrl={praveenImg}
              name={personalInfo.name}
              title={personalInfo.title}
              handle={personalInfo.github.split('/').pop()}
              status="Open to opportunities"
              contactText="Contact Me"
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              behindGlowEnabled={true}
              innerGradient="linear-gradient(145deg, #00f2fe33 0%, #9b51e044 100%)"
              onContactClick={handleScrollToContact}
            />
          </div>

          <div className="stats-grid">
            {personalInfo.stats.map((stat, index) => (
              <div 
                key={stat.label} 
                className={`stat-card glass-panel ${index % 2 === 0 ? 'glass-panel-cyan' : 'glass-panel-violet'}`}
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <div className="stat-value gradient-text">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
                <div className="stat-sub">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="scroll-indicator" onClick={handleScrollToExperience}>
        <span>Scroll to Explore</span>
        <ArrowDown size={14} className="arrow-icon" />
      </div>

      <style>{`
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          padding-top: 120px;
          padding-bottom: 60px;
          overflow: hidden;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 4rem;
          align-items: center;
        }

        .hero-content {
          text-align: left;
        }

        .hero-title {
          font-size: 3.5rem;
          font-weight: 800;
          line-height: 1.15;
          letter-spacing: -1.5px;
          margin-bottom: 1rem;
        }

        .hero-subtitle {
          font-size: 1.8rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }

        .hero-subtext {
          font-family: var(--font-mono);
          color: var(--color-primary);
          font-size: 0.95rem;
          letter-spacing: 0.5px;
          margin-bottom: 1.5rem;
        }

        .hero-description-wrap {
          margin-bottom: 2.2rem;
        }

        .hero-summary {
          font-size: 1.1rem;
          color: var(--text-secondary);
          max-width: 600px;
          line-height: 1.7;
          transition: all 0.3s ease;
        }

        .hero-ctas {
          display: flex;
          gap: 1.2rem;
          margin-bottom: 2rem;
          align-items: center;
        }

        .cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.85rem 1.8rem;
          font-size: 0.95rem;
          border-radius: 8px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .cta-secondary-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.85rem 1.8rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: var(--text-primary);
          font-size: 0.95rem;
          border-radius: 8px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .cta-secondary-btn:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 255, 255, 0.2);
          transform: translateY(-2px);
        }

        .hero-socials {
          display: flex;
          gap: 1.2rem;
          align-items: center;
        }

        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
          color: var(--text-secondary);
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .social-link:hover {
          color: var(--color-primary);
          background: rgba(0, 242, 254, 0.05);
          border-color: rgba(0, 242, 254, 0.3);
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(0, 242, 254, 0.15);
        }

        /* Hero Right Panel: Image & Stats */
        .hero-right-panel {
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
        }

        .scene3d-layer {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 560px;
          height: 560px;
          transform: translate(-50%, -55%);
          z-index: 0;
          pointer-events: none;
          opacity: 0.85;
        }

        .profile-card-slot {
          position: relative;
          z-index: 1;
          margin-bottom: 2.5rem;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
          width: 100%;
          max-width: 450px;
          position: relative;
          z-index: 1;
        }

        .stat-card {
          padding: 1.25rem 1rem;
          text-align: center;
          position: relative;
          animation: card-appear 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }

        @keyframes card-appear {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .stat-value {
          font-family: var(--font-heading);
          font-size: 1.8rem;
          font-weight: 800;
          margin-bottom: 0.2rem;
        }

        .stat-label {
          font-family: var(--font-sans);
          font-weight: 600;
          color: var(--text-primary);
          font-size: 0.85rem;
          margin-bottom: 0.2rem;
        }

        .stat-sub {
          font-size: 0.7rem;
          color: var(--text-muted);
        }

        /* Scroll down indicator */
        .scroll-indicator {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.4rem;
          cursor: pointer;
          color: var(--text-muted);
          font-family: var(--font-mono);
          font-size: 0.75rem;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          transition: all 0.3s ease;
          z-index: 10;
        }

        .scroll-indicator:hover {
          color: var(--color-primary);
        }

        .arrow-icon {
          animation: arrow-bounce 2s infinite;
        }

        @keyframes arrow-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(6px); }
        }

        @media (max-width: 1024px) {
          .hero-grid {
            gap: 2.5rem;
          }
          .hero-title {
            font-size: 2.8rem;
          }
        }

        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 3rem;
          }
          .hero-content {
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .hero-summary {
            margin: 0 auto;
          }
          .hero-ctas {
            justify-content: center;
          }
          .hero-right-panel {
            flex-direction: column;
          }
          .scene3d-layer {
            width: 360px;
            height: 360px;
          }
        }
      `}</style>
    </section>
  );
}
