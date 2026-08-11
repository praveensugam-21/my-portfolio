import { useCallback, useEffect, useRef } from 'react';

const DEFAULT_INNER_GRADIENT = 'linear-gradient(145deg, #00f2fe33 0%, #9b51e044 100%)';

export default function ProfileCard({
  avatarUrl,
  name = 'Your Name',
  title = 'Your Title',
  handle = 'handle',
  status = 'Online',
  contactText = 'Contact Me',
  showUserInfo = true,
  enableTilt = true,
  enableMobileTilt = false,
  behindGlowEnabled = true,
  innerGradient = DEFAULT_INNER_GRADIENT,
  onContactClick,
  className = ''
}) {
  const wrapRef = useRef(null);
  const cardRef = useRef(null);
  const rafRef = useRef(null);

  const applyTransform = useCallback((clientX, clientY) => {
    const card = cardRef.current;
    const wrap = wrapRef.current;
    if (!card || !wrap) return;

    const rect = card.getBoundingClientRect();
    const px = (clientX - rect.left) / rect.width;
    const py = (clientY - rect.top) / rect.height;
    const centerX = px - 0.5;
    const centerY = py - 0.5;
    const distFromCenter = Math.min(1, Math.hypot(centerX, centerY) * 1.6);

    wrap.style.setProperty('--pointer-x', `${(px * 100).toFixed(2)}%`);
    wrap.style.setProperty('--pointer-y', `${(py * 100).toFixed(2)}%`);
    wrap.style.setProperty('--pointer-from-center', distFromCenter.toFixed(3));
    wrap.style.setProperty('--rotate-x', `${(-centerY * 16).toFixed(2)}deg`);
    wrap.style.setProperty('--rotate-y', `${(centerX * 16).toFixed(2)}deg`);
    wrap.style.setProperty('--bg-x', `${(50 + centerX * 24).toFixed(1)}%`);
    wrap.style.setProperty('--bg-y', `${(50 + centerY * 24).toFixed(1)}%`);
    wrap.style.setProperty('--card-opacity', '1');
  }, []);

  const resetTransform = useCallback(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    wrap.style.setProperty('--rotate-x', '0deg');
    wrap.style.setProperty('--rotate-y', '0deg');
    wrap.style.setProperty('--pointer-from-center', '0');
    wrap.style.setProperty('--card-opacity', '0');
  }, []);

  const handleMouseMove = useCallback((e) => {
    if (!enableTilt) return;
    const x = e.clientX;
    const y = e.clientY;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => applyTransform(x, y));
  }, [enableTilt, applyTransform]);

  const handleMouseLeave = useCallback(() => {
    if (!enableTilt) return;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    resetTransform();
  }, [enableTilt, resetTransform]);

  useEffect(() => {
    if (!enableMobileTilt) return undefined;

    const handleOrientation = (e) => {
      const wrap = wrapRef.current;
      if (!wrap || e.beta == null || e.gamma == null) return;
      const rotateX = Math.max(-16, Math.min(16, -(e.beta - 45) * 0.35));
      const rotateY = Math.max(-16, Math.min(16, e.gamma * 0.35));
      wrap.style.setProperty('--rotate-x', `${rotateX.toFixed(2)}deg`);
      wrap.style.setProperty('--rotate-y', `${rotateY.toFixed(2)}deg`);
      wrap.style.setProperty('--card-opacity', '1');
    };

    window.addEventListener('deviceorientation', handleOrientation);
    return () => window.removeEventListener('deviceorientation', handleOrientation);
  }, [enableMobileTilt]);

  return (
    <div ref={wrapRef} className={`pc-wrapper ${className}`} style={{ '--inner-gradient': innerGradient }}>
      {behindGlowEnabled && <div className="pc-glow" aria-hidden="true"></div>}

      <div
        ref={cardRef}
        className="pc-card"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="pc-icon-pattern" aria-hidden="true"></div>

        <div className="pc-avatar-wrap">
          <img src={avatarUrl} alt={name} className="pc-avatar" />
          <div className="pc-avatar-scrim" aria-hidden="true"></div>
        </div>

        <div className="pc-shine" aria-hidden="true"></div>
        <div className="pc-glare" aria-hidden="true"></div>

        <div className="pc-name-block">
          <h3 className="pc-name">{name}</h3>
          <p className="pc-title">{title}</p>
        </div>

        {showUserInfo && (
          <div className="pc-info">
            <div className="pc-info-left">
              <img src={avatarUrl} alt="" className="pc-mini-avatar" />
              <div className="pc-info-text">
                <span className="pc-handle">@{handle}</span>
                <span className="pc-status">
                  <span className="pc-status-dot"></span>
                  {status}
                </span>
              </div>
            </div>
            {contactText && (
              <button type="button" className="pc-contact-btn" onClick={onContactClick}>
                {contactText}
              </button>
            )}
          </div>
        )}
      </div>

      <style>{`
        .pc-wrapper {
          --pointer-x: 50%;
          --pointer-y: 50%;
          --pointer-from-center: 0;
          --rotate-x: 0deg;
          --rotate-y: 0deg;
          --bg-x: 50%;
          --bg-y: 50%;
          --card-opacity: 0;
          position: relative;
          width: 280px;
          perspective: 900px;
        }

        .pc-glow {
          position: absolute;
          inset: -14%;
          border-radius: 28px;
          background: var(--inner-gradient);
          filter: blur(28px);
          opacity: calc(0.55 + var(--pointer-from-center) * 0.45);
          transition: opacity 0.4s ease;
          z-index: 0;
          pointer-events: none;
        }

        .pc-card {
          position: relative;
          width: 100%;
          aspect-ratio: 3 / 4;
          border-radius: 22px;
          overflow: hidden;
          z-index: 1;
          cursor: pointer;
          transform-style: preserve-3d;
          transform: perspective(900px) rotateX(var(--rotate-x)) rotateY(var(--rotate-y));
          transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          border: 1px solid rgba(255, 255, 255, 0.12);
          box-shadow: 0 25px 60px -20px rgba(0, 0, 0, 0.65);
          background: #0a0f24;
        }

        .pc-icon-pattern {
          position: absolute;
          inset: -20%;
          background-image: radial-gradient(rgba(255, 255, 255, 0.14) 1px, transparent 1px);
          background-size: 18px 18px;
          background-position: var(--bg-x) var(--bg-y);
          opacity: 0.5;
          z-index: 1;
          pointer-events: none;
          transition: background-position 0.1s linear;
        }

        .pc-avatar-wrap {
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        .pc-avatar {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: 50% 20%;
          transform: translateZ(0);
        }

        .pc-avatar-scrim {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(4, 8, 20, 0.95) 0%, rgba(4, 8, 20, 0.55) 32%, rgba(4, 8, 20, 0.05) 58%, transparent 75%);
        }

        /* Holographic rainbow sheen, tracks the pointer */
        .pc-shine {
          position: absolute;
          inset: 0;
          z-index: 3;
          mix-blend-mode: color-dodge;
          opacity: calc(var(--pointer-from-center) * var(--card-opacity) * 0.55);
          background: conic-gradient(
            from 180deg at var(--pointer-x) var(--pointer-y),
            #ff5da2 0deg,
            #ffd15c 60deg,
            #7cffb2 120deg,
            #5ce1ff 180deg,
            #9b7bff 240deg,
            #ff5da2 300deg,
            #ff5da2 360deg
          );
          pointer-events: none;
          transition: opacity 0.3s ease;
        }

        /* Soft glare highlight following the cursor */
        .pc-glare {
          position: absolute;
          inset: 0;
          z-index: 4;
          background: radial-gradient(circle at var(--pointer-x) var(--pointer-y), rgba(255, 255, 255, 0.5), transparent 45%);
          opacity: calc(var(--card-opacity) * 0.65);
          mix-blend-mode: overlay;
          pointer-events: none;
          transition: opacity 0.3s ease;
        }

        .pc-name-block {
          position: absolute;
          left: 1.25rem;
          right: 1.25rem;
          bottom: 4.75rem;
          z-index: 5;
          text-align: left;
          pointer-events: none;
        }

        .pc-name {
          font-family: var(--font-heading);
          font-size: 1.3rem;
          font-weight: 800;
          color: #fff;
          text-shadow: 0 2px 12px rgba(0, 0, 0, 0.6);
          margin-bottom: 0.2rem;
        }

        .pc-title {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.85);
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.6);
        }

        .pc-info {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 5;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.75rem;
          padding: 0.9rem 1.1rem;
          background: rgba(4, 8, 20, 0.75);
          backdrop-filter: blur(10px);
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .pc-info-left {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          min-width: 0;
        }

        .pc-mini-avatar {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          object-fit: cover;
          border: 1px solid rgba(255, 255, 255, 0.25);
          flex-shrink: 0;
        }

        .pc-info-text {
          display: flex;
          flex-direction: column;
          gap: 0.15rem;
          min-width: 0;
        }

        .pc-handle {
          font-size: 0.72rem;
          font-weight: 600;
          color: #fff;
          font-family: var(--font-mono);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .pc-status {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          font-size: 0.65rem;
          color: var(--text-muted);
        }

        .pc-status-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--color-accent);
          box-shadow: 0 0 6px var(--color-accent);
          flex-shrink: 0;
        }

        .pc-contact-btn {
          flex-shrink: 0;
          background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
          color: #040814;
          border: none;
          font-weight: 700;
          font-size: 0.72rem;
          padding: 0.45rem 0.85rem;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .pc-contact-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 6px 16px rgba(0, 242, 254, 0.35);
        }

        @media (max-width: 768px) {
          .pc-wrapper {
            width: 240px;
          }
        }
      `}</style>
    </div>
  );
}
