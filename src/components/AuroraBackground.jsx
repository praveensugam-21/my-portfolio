// Soft, slow-drifting color blobs behind everything else. Glassmorphism only
// reads as "glass" when there's something colorful and blurred for it to
// refract — a flat dark background makes even good blur/saturate settings
// look like plain gray panels.
export default function AuroraBackground() {
  return (
    <div className="aurora-bg" aria-hidden="true">
      <span className="aurora-blob aurora-blob-cyan"></span>
      <span className="aurora-blob aurora-blob-violet"></span>
      <span className="aurora-blob aurora-blob-gold"></span>
      <span className="aurora-blob aurora-blob-emerald"></span>

      <style>{`
        .aurora-bg {
          position: fixed;
          inset: 0;
          z-index: -2;
          overflow: hidden;
          pointer-events: none;
        }

        .aurora-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(90px);
          opacity: 0.32;
          will-change: transform;
        }

        .aurora-blob-cyan {
          width: 640px;
          height: 640px;
          top: -14%;
          left: -12%;
          background: radial-gradient(circle, var(--color-primary) 0%, transparent 70%);
          animation: aurora-drift-a 34s ease-in-out infinite;
        }

        .aurora-blob-violet {
          width: 580px;
          height: 580px;
          top: 18%;
          right: -16%;
          background: radial-gradient(circle, var(--color-secondary) 0%, transparent 70%);
          animation: aurora-drift-b 40s ease-in-out infinite;
        }

        .aurora-blob-gold {
          width: 520px;
          height: 520px;
          bottom: -12%;
          left: 15%;
          background: radial-gradient(circle, var(--color-gold) 0%, transparent 70%);
          opacity: 0.22;
          animation: aurora-drift-c 46s ease-in-out infinite;
        }

        .aurora-blob-emerald {
          width: 460px;
          height: 460px;
          bottom: 8%;
          right: 8%;
          background: radial-gradient(circle, var(--color-accent) 0%, transparent 70%);
          opacity: 0.18;
          animation: aurora-drift-a 38s ease-in-out infinite reverse;
        }

        @keyframes aurora-drift-a {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(70px, 50px) scale(1.12); }
        }

        @keyframes aurora-drift-b {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-60px, 70px) scale(0.94); }
        }

        @keyframes aurora-drift-c {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(50px, -60px) scale(1.06); }
        }
      `}</style>
    </div>
  );
}
