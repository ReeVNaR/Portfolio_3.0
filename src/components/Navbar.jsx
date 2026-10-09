import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const MenuButton = ({ isOpen, onClick }) => (
  <button 
    onClick={onClick}
    className="md:hidden relative w-9 h-9 rounded-full flex items-center justify-center hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
    aria-label="Toggle menu"
  >
    <div className="flex flex-col justify-between w-5 h-4 transform transition-all duration-300">
      <span className={`bg-slate-700 dark:bg-slate-200 h-0.5 w-full rounded-full transform transition-all duration-300 ${
        isOpen ? 'rotate-45 translate-y-1.5' : ''
      }`} />
      <span className={`bg-slate-700 dark:bg-slate-200 h-0.5 w-full rounded-full transition-all duration-300 ${
        isOpen ? 'opacity-0' : 'opacity-100'
      }`} />
      <span className={`bg-slate-700 dark:bg-slate-200 h-0.5 w-full rounded-full transform transition-all duration-300 ${
        isOpen ? '-rotate-45 -translate-y-2' : ''
      }`} />
    </div>
  </button>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (elementId) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(elementId);
    if (element) {
      const offset = 85;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <>
      <header className="fixed top-3 sm:top-5 left-0 right-0 z-[100] px-4 pointer-events-none flex justify-center">
        <nav 
          className={`pointer-events-auto w-full max-w-5xl rounded-full px-4 sm:px-6 py-2.5 sm:py-3 transition-all duration-300 glass-surface border border-white/50 dark:border-white/10 ${
            isScrolled 
              ? 'shadow-[0_12px_32px_rgba(0,0,0,0.12)] dark:shadow-[0_16px_40px_rgba(0,0,0,0.5)] scale-[0.99]' 
              : 'shadow-[0_8px_24px_rgba(0,0,0,0.06)] dark:shadow-[0_12px_32px_rgba(0,0,0,0.35)]'
          }`}
        >
          <div className="flex items-center justify-between">
            {/* Monogram Logo */}
            <button
              onClick={() => handleNavClick('home')}
              className="group flex items-center gap-2 focus:outline-none"
              aria-label="Ranveer Ghorpade Home"
            >
              <span className="w-8 h-8 rounded-full glass-pill flex items-center justify-center font-bold text-sm tracking-wider bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-sm group-hover:scale-105 transition-transform">
                RG
              </span>
              <span className="font-semibold text-sm sm:text-base tracking-tight text-slate-800 dark:text-white hidden xs:inline-block">
                Ranveer
              </span>
            </button>
            
            {/* Desktop Navigation Capsule */}
            <div className="hidden md:flex items-center space-x-1 sm:space-x-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`relative px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 capitalize ${
                      isActive 
                        ? 'text-blue-600 dark:text-blue-400 font-semibold' 
                        : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-900/5 dark:hover:bg-white/10'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full bg-blue-500/10 dark:bg-blue-400/15 border border-blue-500/20"
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <span className="relative z-10">{item.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Right actions: Theme toggle and CTA */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              <button
                onClick={() => handleNavClick('contact')}
                className="hidden sm:inline-flex text-xs font-semibold px-4 py-1.5 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:opacity-90 transition-opacity shadow-sm"
              >
                Let's Talk
              </button>
              <div className="w-[1px] h-5 bg-slate-300 dark:bg-white/20 hidden sm:block" />
              <ThemeToggle />
              <MenuButton 
                isOpen={isMobileMenuOpen} 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
              />
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Dropdown Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-md z-[90] md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed top-20 left-4 right-4 z-[95] md:hidden rounded-3xl glass-surface p-5 border border-white/60 dark:border-white/15 shadow-2xl"
            >
              <div className="flex flex-col space-y-1">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className="w-full text-left px-4 py-3 rounded-2xl text-sm font-medium text-slate-800 dark:text-slate-200 hover:bg-blue-500/10 dark:hover:bg-white/10 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center justify-between"
                  >
                    <span>{item.label}</span>
                    <span className="text-slate-400 text-xs">→</span>
                  </button>
                ))}
                <div className="pt-2">
                  <button
                    onClick={() => handleNavClick('contact')}
                    className="w-full text-center py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium text-sm shadow-md"
                  >
                    Let's Talk
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
