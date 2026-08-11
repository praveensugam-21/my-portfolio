import { useState } from 'react';
import { 
  Code2, 
  Database, 
  Terminal, 
  Cpu, 
  ShieldCheck
} from 'lucide-react';
import { resumeData } from '../data/resumeData';

export default function Skills() {
  const { skills } = resumeData;
  const [activeTab, setActiveTab] = useState('languages');

  const tabs = [
    { id: 'languages', label: 'Languages', icon: Code2 },
    { id: 'databases', label: 'Databases', icon: Database },
    { id: 'tools', label: 'Tools & Technologies', icon: Terminal },
    { id: 'concepts', label: 'Concepts', icon: Cpu }
  ];

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">MY TOOLKIT</span>
          <h2 className="section-title">Skills & Expertise</h2>
          <div className="section-divider"></div>
        </div>

        {/* Tab Selectors */}
        <div className="skills-tabs glass-panel">
          {tabs.map(tab => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
              >
                <Icon size={16} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Contents */}
        <div className="skills-display-container">
          {/* 1. Languages Tab */}
          {activeTab === 'languages' && (
            <div className="skills-grid fade-in">
              {skills.programmingLanguages.map((lang, idx) => (
                <div 
                  key={lang.name} 
                  className="skill-card glass-panel"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="skill-info">
                    <span className="skill-name">{lang.name}</span>
                    <span className="skill-percent">{lang.level}%</span>
                  </div>
                  <div className="progress-bar-track">
                    <div 
                      className="progress-bar-fill" 
                      style={{ 
                        width: `${lang.level}%`,
                        background: `linear-gradient(90deg, var(--color-primary), ${lang.color})`,
                        boxShadow: `0 0 10px ${lang.color}`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* 2. Databases Tab */}
          {activeTab === 'databases' && (
            <div className="skills-grid fade-in">
              {skills.databases.map((db, idx) => (
                <div 
                  key={db.name} 
                  className="skill-card glass-panel"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="skill-info">
                    <span className="skill-name">{db.name}</span>
                    <span className="skill-percent">{db.level}%</span>
                  </div>
                  <div className="progress-bar-track">
                    <div 
                      className="progress-bar-fill" 
                      style={{ 
                        width: `${db.level}%`,
                        background: `linear-gradient(90deg, var(--color-secondary), ${db.color})`,
                        boxShadow: `0 0 10px ${db.color}`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* 3. Tools Tab */}
          {activeTab === 'tools' && (
            <div className="tools-grid fade-in">
              {skills.tools.map((tool, idx) => (
                <div 
                  key={tool.name} 
                  className="tool-tag-card glass-panel"
                  style={{ 
                    animationDelay: `${idx * 0.1}s`,
                    borderLeft: `3px solid ${tool.color}`
                  }}
                >
                  <span className="tool-indicator-dot" style={{ backgroundColor: tool.color }}></span>
                  <span className="tool-name-text">{tool.name}</span>
                </div>
              ))}
            </div>
          )}

          {/* 4. Concepts Tab */}
          {activeTab === 'concepts' && (
            <div className="concepts-bubble-container fade-in">
              {skills.concepts.map((concept, idx) => {
                const colors = ['--color-primary', '--color-secondary', '--color-accent', '--color-gold'];
                const selectedColor = colors[idx % colors.length];
                return (
                  <div 
                    key={concept} 
                    className="concept-bubble skill-bubble glass-panel"
                    style={{ 
                      animationDelay: `${idx * 0.25}s`,
                      borderBottom: `2px solid var(${selectedColor})`,
                    }}
                  >
                    <ShieldCheck size={14} style={{ color: `var(${selectedColor})` }} />
                    <span>{concept}</span>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      <style>{`
        .skills-section {
          background: linear-gradient(to bottom, transparent, rgba(10, 15, 36, 0.4), transparent);
        }

        .skills-tabs {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 0.5rem;
          max-width: 650px;
          margin: 0 auto 3rem;
          padding: 0.4rem;
        }

        .tab-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: transparent;
          border: none;
          color: var(--text-secondary);
          font-family: var(--font-sans);
          font-weight: 600;
          font-size: 0.9rem;
          cursor: pointer;
          padding: 0.65rem 1.25rem;
          border-radius: 12px;
          transition: all 0.3s ease;
          flex: 1;
          justify-content: center;
        }

        .tab-btn:hover {
          color: var(--text-primary);
          background: rgba(255, 255, 255, 0.02);
        }

        .tab-btn.active {
          color: var(--color-primary);
          background: rgba(0, 242, 254, 0.08);
        }

        /* Displays */
        .skills-display-container {
          min-height: 250px;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
          max-width: 900px;
          margin: 0 auto;
        }

        .skill-card {
          padding: 1.5rem;
          text-align: left;
        }

        .skill-info {
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.75rem;
        }

        .skill-name {
          font-weight: 600;
          color: var(--text-primary);
        }

        .skill-percent {
          font-family: var(--font-mono);
          color: var(--color-primary);
          font-size: 0.85rem;
        }

        .progress-bar-track {
          width: 100%;
          height: 6px;
          background: rgba(255, 255, 255, 0.04);
          border-radius: 10px;
          overflow: hidden;
        }

        .progress-bar-fill {
          height: 100%;
          border-radius: 10px;
          transition: width 1s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* Tools grid */
        .tools-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
          gap: 1.25rem;
          max-width: 850px;
          margin: 0 auto;
        }

        .tool-tag-card {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem 1.25rem;
          text-align: left;
        }

        .tool-indicator-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }

        .tool-name-text {
          font-weight: 500;
          color: var(--text-secondary);
        }

        .tool-tag-card:hover .tool-name-text {
          color: var(--text-primary);
        }

        /* Concepts bubble list */
        .concepts-bubble-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1.25rem;
          max-width: 800px;
          margin: 0 auto;
          padding: 1rem 0;
        }

        .concept-bubble {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          font-weight: 500;
          color: var(--text-secondary);
          border-radius: 50px;
          font-size: 0.95rem;
          cursor: default;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }

        .concept-bubble:hover {
          color: var(--text-primary);
        }

        /* Fades & animations */
        .fade-in {
          animation: fadeIn 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .skills-tabs {
            flex-direction: grid;
            flex-wrap: wrap;
          }
          .tab-btn {
            font-size: 0.8rem;
            padding: 0.5rem 0.75rem;
            flex: unset;
            width: calc(50% - 0.5rem);
          }
          .skills-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
