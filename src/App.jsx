import AuroraBackground from './components/AuroraBackground';
import BackgroundCanvas from './components/BackgroundCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechTicker from './components/TechTicker';
import Timeline from './components/Timeline';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

function App() {
  return (
    <>
      {/* Ambient color-blob layer — sits behind everything so glass panels
          have something to actually refract */}
      <AuroraBackground />

      {/* Interactive Floating Neural Network Background */}
      <BackgroundCanvas />

      {/* Floating Glassmorphic Navigation Bar */}
      <Navbar />

      {/* Main Single Page Sections */}
      <main className="portfolio-main">
        <Hero />
        
        <TechTicker />

        <Timeline />

        <Skills />

        <Projects />

        <Certifications />

        <Contact />
      </main>

      {/* Modern Sleek Footer */}
      <footer className="portfolio-footer">
        <div className="container footer-content">
          <p>© {new Date().getFullYear()} Praveen Rathinam P. All rights reserved.</p>
          <p className="footer-built">Built with React, Vite & HSL Custom CSS</p>
        </div>
      </footer>

      <style>{`
        .portfolio-main {
          flex: 1;
        }

        .portfolio-footer {
          padding: 2rem 0;
          background: rgba(4, 7, 19, 0.85);
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: var(--text-muted);
          position: relative;
          z-index: 10;
        }

        .footer-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .footer-built {
          color: var(--color-primary);
        }

        @media (max-width: 600px) {
          .footer-content {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </>
  );
}

export default App;
