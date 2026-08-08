import React from 'react';
import { 
  Code2, 
  Database, 
  Terminal, 
  Cpu, 
  GitBranch, 
  FileCode, 
  Workflow, 
  Eye, 
  Layers
} from 'lucide-react';

const techIconMap = {
  'Python': { icon: Terminal, color: '#306998' },
  'JavaScript': { icon: Code2, color: '#F7DF1E' },
  'HTML & CSS': { icon: FileCode, color: '#E34F26' },
  'React': { icon: Layers, color: '#61DAFB' },
  'Node.js': { icon: Workflow, color: '#339933' },
  'Express.js': { icon: Code2, color: '#ffffff' },
  'MongoDB': { icon: Database, color: '#47A248' },
  'MySQL': { icon: Database, color: '#4479A1' },
  'Django': { icon: Workflow, color: '#092E20' },
  'Supabase': { icon: Database, color: '#3ECF8E' },
  'TensorFlow': { icon: Cpu, color: '#FF6F00' },
  'PyTorch': { icon: Cpu, color: '#EE4C2C' },
  'YOLOv5': { icon: Eye, color: '#FF2C2C' },
  'Git & GitHub': { icon: GitBranch, color: '#F05032' },
  'Computer Vision': { icon: Eye, color: '#00F2FE' }
};

export default function TechTicker() {
  const techs = Object.keys(techIconMap);

  // Duplicate items twice to ensure infinite scrolling covers wide viewports
  const doubleTechs = [...techs, ...techs, ...techs];

  return (
    <section className="ticker-section">
      <div className="ticker-header container">
        <span className="ticker-subtitle">CORE TECH STACK</span>
        <h3 className="ticker-title">Moving at the Speed of Tech</h3>
      </div>
      
      <div className="ticker-wrap">
        <div className="ticker-row">
          {doubleTechs.map((tech, idx) => {
            const config = techIconMap[tech] || { icon: Code2, color: '#00f2fe' };
            const IconComponent = config.icon;
            
            return (
              <div 
                key={`${tech}-${idx}`} 
                className="ticker-item"
                style={{
                  borderLeft: `3px solid ${config.color}`,
                }}
              >
                <IconComponent 
                  size={16} 
                  style={{ color: config.color }} 
                  className="ticker-icon-spin"
                />
                <span>{tech}</span>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .ticker-section {
          padding: 3rem 0;
          background: linear-gradient(to bottom, rgba(4, 7, 19, 0) 0%, rgba(5, 8, 20, 0.7) 50%, rgba(4, 7, 19, 0) 100%);
          border-y: 1px solid rgba(255, 255, 255, 0.02);
          overflow: hidden;
        }

        .ticker-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .ticker-subtitle {
          font-family: var(--font-mono);
          color: var(--color-primary);
          font-size: 0.8rem;
          font-weight: 500;
          letter-spacing: 2px;
          display: block;
          margin-bottom: 0.5rem;
        }

        .ticker-title {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .ticker-icon-spin {
          transition: transform 0.5s ease;
        }

        .ticker-item:hover .ticker-icon-spin {
          transform: rotate(360deg);
        }

        @media (max-width: 768px) {
          .ticker-title {
            font-size: 1.25rem;
          }
        }
      `}</style>
    </section>
  );
}
