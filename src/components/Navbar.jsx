import { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer to highlight active section in Navbar
  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -50% 0px', // Trigger when section occupies the middle of the viewport
      threshold: 0
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navLinks.forEach(link => {
      const el = document.getElementById(link.id);
      if (el) {
        observer.observe(el);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      setMobileMenuOpen(false);
      const navHeight = scrolled ? 70 : 90;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight + 10;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`navbar-header ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Brand Logo */}
        <a href="#home" onClick={(e) => handleLinkClick(e, 'home')} className="navbar-logo">
          <Terminal className="logo-icon animate-pulse" size={20} />
          <span className="logo-text">Praveen<span className="logo-dot">.dev</span></span>
        </a>

        {/* Desktop Nav Links */}
        <ul className="navbar-links">
          {navLinks.map(link => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={(e) => handleLinkClick(e, link.id)}
                className={`nav-item-link ${activeSection === link.id ? 'active' : ''}`}
              >
                {link.label}
                {activeSection === link.id && <span className="active-indicator"></span>}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <div className="navbar-actions">
          <button 
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div className={`mobile-menu-panel ${mobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-links">
          {navLinks.map(link => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={(e) => handleLinkClick(e, link.id)}
                className={`mobile-nav-link ${activeSection === link.id ? 'active' : ''}`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <style>{`
        .navbar-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 1.5rem 0;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          background: transparent;
          border-bottom: 1px solid transparent;
        }

        .navbar-scrolled {
          padding: 0.85rem 0;
          background: rgba(5, 8, 20, 0.75);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.5);
        }

        .navbar-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        .navbar-logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          text-decoration: none;
          color: var(--text-primary);
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.35rem;
          letter-spacing: -0.5px;
          transition: all 0.3s ease;
        }

        .logo-icon {
          color: var(--color-primary);
        }

        .logo-dot {
          color: var(--color-primary);
        }

        .navbar-links {
          display: flex;
          list-style: none;
          gap: 2.2rem;
        }

        .nav-item-link {
          position: relative;
          text-decoration: none;
          color: var(--text-secondary);
          font-family: var(--font-sans);
          font-weight: 500;
          font-size: 0.95rem;
          transition: all 0.3s ease;
          padding: 0.5rem 0;
        }

        .nav-item-link:hover {
          color: var(--color-primary);
        }

        .nav-item-link.active {
          color: var(--color-primary);
          font-weight: 600;
          text-shadow: 0 0 10px rgba(0, 242, 254, 0.2);
        }

        .active-indicator {
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, var(--color-primary), var(--color-secondary));
          border-radius: 2px;
          box-shadow: 0 0 8px var(--color-primary);
        }

        .navbar-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .mobile-menu-btn {
          display: none;
          background: transparent;
          border: none;
          color: var(--text-primary);
          cursor: pointer;
          outline: none;
        }

        /* Mobile menu container */
        .mobile-menu-panel {
          position: fixed;
          top: 0;
          right: -100%;
          width: 75%;
          max-width: 320px;
          height: 100vh;
          background: rgba(5, 8, 20, 0.98);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-left: 1px solid rgba(255, 255, 255, 0.08);
          z-index: 999;
          padding: 6rem 2rem 2rem;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .mobile-menu-panel.open {
          right: 0;
          box-shadow: -15px 0 30px rgba(0, 0, 0, 0.6);
        }

        .mobile-links {
          display: flex;
          flex-direction: column;
          list-style: none;
          gap: 2rem;
        }

        .mobile-nav-link {
          text-decoration: none;
          color: var(--text-secondary);
          font-size: 1.2rem;
          font-weight: 600;
          font-family: var(--font-heading);
          display: block;
          padding: 0.5rem 0;
          transition: all 0.3s ease;
        }

        .mobile-nav-link:hover,
        .mobile-nav-link.active {
          color: var(--color-primary);
          padding-left: 8px;
        }

        @media (max-width: 768px) {
          .navbar-links {
            display: none;
          }
          .mobile-menu-btn {
            display: block;
          }
        }
      `}</style>
    </nav>
  );
}
