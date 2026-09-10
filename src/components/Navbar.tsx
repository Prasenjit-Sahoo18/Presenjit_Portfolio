import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';
import { navLinks, personalInfo } from '../data/portfolio';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      // Detect active section
      const sections = navLinks.map((l) => l.href.replace('#', ''));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'glass border-b border-primary/10 shadow-glass'
            : 'bg-transparent'
        }`}
      >
        <nav
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <motion.button
            onClick={() => handleNav('#home')}
            className="flex items-center gap-2 group focus-visible:outline-primary"
            aria-label="Go to home"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-glow-sm">
              <span className="text-deep font-bold text-sm font-mono">PS</span>
            </div>
            <span className="hidden sm:block font-semibold text-white/90 group-hover:text-primary transition-colors duration-200">
              Prasenjit Sahoo
            </span>
          </motion.button>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-1" role="list">
            {navLinks.map((link) => {
              const id = link.href.replace('#', '');
              const isActive = activeSection === id;
              return (
                <li key={link.href}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className={`nav-link px-3 py-1.5 text-sm font-medium rounded-lg transition-all duration-200 ${
                      isActive
                        ? 'text-primary active'
                        : 'text-slate-400 hover:text-white'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {link.label}
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={personalInfo.resume}
              download
              className="btn-primary text-sm px-4 py-2"
              aria-label="Download resume"
            >
              <Download size={14} />
              Resume
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-slate-400 hover:text-white transition-colors"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-16 left-0 right-0 z-40 glass border-b border-primary/10 md:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link, i) => {
                const id = link.href.replace('#', '');
                const isActive = activeSection === id;
                return (
                  <motion.button
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => handleNav(link.href)}
                    className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? 'text-primary bg-primary/10'
                        : 'text-slate-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span className="font-mono text-primary/50 mr-2 text-xs">
                      {String(navLinks.indexOf(link) + 1).padStart(2, '0')}.
                    </span>
                    {link.label}
                  </motion.button>
                );
              })}
              <div className="pt-2 border-t border-white/5 mt-1">
                <a
                  href={personalInfo.resume}
                  download
                  className="btn-primary w-full justify-center text-sm py-2.5"
                >
                  <Download size={14} />
                  Download Resume
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
