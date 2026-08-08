import React, { Suspense } from 'react';
import { Mail, FileText, ArrowDown } from 'lucide-react';
import { LinkedinIcon } from './SocialIcons';
import { resumeData } from '../data/resumeData';
import praveenImg from '../assets/praveen.jpg';
import { handleTiltMove, handleTiltLeave } from '../utils/tilt';
import Scene3D from './Scene3D';

const BULB_COLORS = ['#fbbf24', '#fff3d6', '#fbbf24', '#fff3d6', '#ffe9a8'];
const BULB_COUNT = 16;
const LIGHT_BULBS = Array.from({ length: BULB_COUNT }, (_, i) => ({
  angle: (360 / BULB_COUNT) * i,
  color: BULB_COLORS[i % BULB_COLORS.length],
  size: i % 4 === 0 ? 6.5 : 4.5,
  delay: (i * 0.31) % 4.4
}));

export default function Hero() {
  const { personalInfo } = resumeData;

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
            <a href={`mailto:${personalInfo.email}`} className="social-link" title="Email Me">
              <Mail size={20} />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="social-link" title="LinkedIn Profile">
              <LinkedinIcon size={20} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link" title="GitHub Profile">
              <span style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>git</span>
            </a>
          </div>
        </div>

        {/* Right Column: Profile Image & Stats */}
        <div className="hero-right-panel">
          <div className="scene3d-layer">
            <Suspense fallback={null}>
              <Scene3D />
            </Suspense>
          </div>

          <div
            className="profile-image-wrapper"
            onMouseMove={(e) => handleTiltMove(e, { max: 12, scale: 1.04 })}
            onMouseLeave={handleTiltLeave}
          >
            <div className="ambient-halo"></div>
            <div className="fairy-lights-ring">
              {LIGHT_BULBS.map((bulb, i) => (
                <span
                  key={i}
                  className="light-bulb"
                  style={{
                    '--angle': `${bulb.angle}deg`,
                    '--bulb-color': bulb.color,
                    '--bulb-size': `${bulb.size}px`,
                    animationDelay: `${bulb.delay}s`
                  }}
                ></span>
              ))}
            </div>
            <div className="profile-image-container glass-panel">
              <img src={praveenImg} alt={personalInfo.name} className="profile-image" />
              <div className="profile-image-glare"></div>
            </div>
            <div className="profile-glow"></div>
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

        .profile-image-wrapper {
          position: relative;
          z-index: 1;
          margin-bottom: 2.5rem;
          perspective: 1000px;
        }

        .profile-image-container {
          width: 250px;
          height: 250px;
          border-radius: 50%;
          overflow: hidden;
          border: 2px solid rgba(0, 242, 254, 0.2);
          box-shadow: var(--shadow-neon);
          position: relative;
          z-index: 2;
          transform-style: preserve-3d;
          transform: rotateX(var(--tilt-x, 0deg)) rotateY(var(--tilt-y, 0deg)) scale(var(--tilt-scale, 1));
          transition: border-color 0.4s ease, box-shadow 0.4s ease, transform 0.12s ease-out;
        }

        .profile-image-container:hover {
          border-color: var(--color-primary);
          box-shadow: var(--shadow-neon-hover);
        }

        .profile-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: 50% 15%; /* Custom focal position for singing photo */
        }

        .profile-image-glare {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at var(--glare-x, 50%) var(--glare-y, 50%), rgba(255, 255, 255, 0.22), transparent 55%);
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }

        .profile-image-wrapper:hover .profile-image-glare {
          opacity: 1;
        }

        .profile-glow {
          position: absolute;
          top: 10px;
          left: 10px;
          width: 230px;
          height: 230px;
          border-radius: 50%;
          background: radial-gradient(circle, var(--color-primary) 0%, var(--color-secondary) 100%);
          filter: blur(25px);
          opacity: 0.15;
          z-index: 1;
          pointer-events: none;
        }

        /* Premium fairy-light halo around the profile photo */
        .ambient-halo {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 320px;
          height: 320px;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          background: radial-gradient(circle, rgba(251, 191, 36, 0.16) 0%, rgba(251, 191, 36, 0) 68%);
          filter: blur(18px);
          z-index: 1;
          pointer-events: none;
          animation: halo-breathe 5s ease-in-out infinite;
        }

        @keyframes halo-breathe {
          0%, 100% { opacity: 0.65; transform: translate(-50%, -50%) scale(0.97); }
          50% { opacity: 1; transform: translate(-50%, -50%) scale(1.03); }
        }

        .fairy-lights-ring {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          z-index: 4;
          pointer-events: none;
          animation: ring-rotate 60s linear infinite;
        }

        @keyframes ring-rotate {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }

        .light-bulb {
          position: absolute;
          top: 0;
          left: 0;
          width: var(--bulb-size);
          height: var(--bulb-size);
          margin: calc(var(--bulb-size) * -0.5) 0 0 calc(var(--bulb-size) * -0.5);
          border-radius: 50%;
          background: radial-gradient(circle at 35% 30%, #fffdf5 0%, var(--bulb-color) 60%, transparent 100%);
          box-shadow:
            0 0 3px 1px var(--bulb-color),
            0 0 9px 3px rgba(251, 191, 36, 0.35);
          transform: rotate(var(--angle)) translateY(-138px);
          animation: bulb-twinkle 4.2s ease-in-out infinite;
        }

        @keyframes bulb-twinkle {
          0%, 100% {
            opacity: 0.55;
            filter: brightness(0.85);
          }
          50% {
            opacity: 1;
            filter: brightness(1.2);
          }
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
