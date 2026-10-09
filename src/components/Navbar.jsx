import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import profileImg from '../assets/Profile.jpg';

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

const Navbar = ({ portfolioVersion = 'v2', setPortfolioVersion }) => {
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
          className={`pointer-events-auto w-full max-w-5xl rounded-full px-4 sm:px-6 py-2 sm:py-2.5 transition-all duration-300 nav-liquid-glass ${
            isScrolled 
              ? 'shadow-[0_16px_36px_rgba(15,23,42,0.18)] dark:shadow-[0_20px_45px_rgba(0,0,0,0.7)] scale-[0.99]' 
              : 'shadow-[0_10px_28px_rgba(15,23,42,0.1)] dark:shadow-[0_14px_35px_rgba(0,0,0,0.4)]'
          }`}
        >
          <div className="relative z-10 flex items-center justify-between">
            {/* Profile Photo Avatar Logo */}
            <button
              onClick={() => handleNavClick('home')}
              className="group flex items-center gap-2.5 focus:outline-none"
              aria-label="Ranveer Ghorpade Home"
            >
              <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden border border-white/80 dark:border-white/20 shadow-sm ring-2 ring-blue-500/20 group-hover:ring-blue-500/50 group-hover:scale-105 transition-all flex-shrink-0 bg-slate-200 dark:bg-slate-700">
                <img 
                  src={profileImg} 
                  alt="Ranveer Ghorpade" 
                  className="w-full h-full object-cover rounded-full"
                  draggable={false}
                />
              </div>
              <span className="font-semibold text-sm sm:text-base tracking-tight text-slate-800 dark:text-white hidden sm:inline-block">
                Ranveer
              </span>
            </button>
            
            {/* Desktop Navigation Capsule */}
            <div className="hidden md:flex items-center space-x-1 sm:space-x-1.5">
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
                        className="absolute inset-0 rounded-full bg-blue-500/15 dark:bg-blue-400/20 border border-blue-500/30 shadow-[inset_0_1px_1px_rgba(255,255,255,0.8),0_2px_8px_rgba(0,113,227,0.15)] backdrop-blur-sm"
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <span className="relative z-10">{item.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Right actions: Theme toggle, Version toggle, and CTA */}
            <div className="flex items-center space-x-1.5 sm:space-x-3">
              {/* Version Toggle Pill */}
              <div 
                className="flex items-center p-0.5 rounded-full bg-slate-900/[0.04] dark:bg-white/[0.08] border border-slate-900/[0.08] dark:border-white/[0.15] text-xs font-bold shadow-inner backdrop-blur-md"
                role="group"
                aria-label="Portfolio version toggle"
              >
                <button
                  type="button"
                  onClick={() => setPortfolioVersion?.('v1')}
                  className={`px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs transition-all duration-200 ${
                    portfolioVersion === 'v1'
                      ? 'bg-blue-600 text-white shadow-sm font-bold'
                      : 'text-slate-700 dark:text-slate-300 hover:text-black dark:hover:text-white'
                  }`}
                  title="Switch to Portfolio V1 (Classic)"
                  aria-label="Portfolio version 1"
                >
                  V1
                </button>
                <button
                  type="button"
                  onClick={() => setPortfolioVersion?.('v2')}
                  className={`px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs transition-all duration-200 ${
                    portfolioVersion === 'v2'
                      ? 'bg-blue-600 text-white shadow-sm font-bold'
                      : 'text-slate-700 dark:text-slate-300 hover:text-black dark:hover:text-white'
                  }`}
                  title="Switch to Portfolio V2 (Modern Glass)"
                  aria-label="Portfolio version 2"
                >
                  V2
                </button>
              </div>

              {/* Let's Talk: Tactile Liquid Glass Button Format */}
              <button
                onClick={() => handleNavClick('contact')}
                className="box start-btn start-btn-blue hidden sm:inline-flex group"
                style={{
                  '--h': '38px',
                  '--w': 'auto',
                  minWidth: '120px',
                  padding: '0 0.45rem 0 0.95rem',
                  gap: '0.45rem'
                }}
              >
                <span className="text" style={{ fontSize: '13px', fontWeight: 600 }}>Let's Talk</span>
                <div className="btn-icon" style={{ width: '28px', height: '28px' }}>
                  <svg
                    className="svg"
                    style={{ width: '10px', height: '10px' }}
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M779.180132 473.232045 322.354755 16.406668c-21.413706-21.413706-56.121182-21.413706-77.534887 0-21.413706 21.413706-21.413706 56.122205 0 77.534887l418.057421 418.057421L244.819868 930.057421c-21.413706 21.413706-21.413706 56.122205 0 77.534887 10.706853 10.706853 24.759917 16.059767 38.767955 16.059767s28.061103-5.353938 38.767955-16.059767L779.180132 550.767955C800.593837 529.35425 800.593837 494.64575 779.180132 473.232045z" />
                  </svg>
                </div>
                <div className="circle-overlay"></div>
              </button>

              <div className="w-[1px] h-5 bg-slate-300 dark:bg-white/20 hidden sm:block" />
              <ThemeToggle />
              <MenuButton 
                isOpen={isMobileMenuOpen} 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
              />
            </div>
          </div>
          <div className="circle-overlay pointer-events-none"></div>
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
              className="fixed top-20 left-4 right-4 z-[95] md:hidden rounded-3xl nav-liquid-glass p-5 border border-white/60 dark:border-white/15 shadow-2xl"
            >
              <div className="flex flex-col space-y-1 relative z-10">
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
                <div className="pt-2 flex flex-col gap-2">
                  <div className="flex items-center justify-between px-3.5 py-2.5 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-300 dark:border-white/10">
                    <span className="text-xs font-bold text-slate-700 dark:text-slate-300">Portfolio Version</span>
                    <div className="flex items-center p-0.5 rounded-full bg-slate-200 dark:bg-black/40 border border-slate-300/70 dark:border-white/10">
                      <button
                        type="button"
                        onClick={() => setPortfolioVersion?.('v1')}
                        className={`px-3.5 py-1 text-xs rounded-full font-bold transition-all ${
                          portfolioVersion === 'v1'
                            ? 'bg-blue-600 text-white shadow-sm'
                            : 'text-slate-700 dark:text-slate-300'
                        }`}
                      >
                        V1
                      </button>
                      <button
                        type="button"
                        onClick={() => setPortfolioVersion?.('v2')}
                        className={`px-3.5 py-1 text-xs rounded-full font-bold transition-all ${
                          portfolioVersion === 'v2'
                            ? 'bg-blue-600 text-white shadow-sm'
                            : 'text-slate-700 dark:text-slate-300'
                        }`}
                      >
                        V2
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => handleNavClick('contact')}
                    className="box start-btn start-btn-blue w-full group justify-between"
                    style={{ '--h': '46px', '--w': '100%', padding: '0 0.6rem 0 1.2rem' }}
                  >
                    <span className="text" style={{ fontSize: '14px' }}>Let's Talk</span>
                    <div className="btn-icon" style={{ width: '32px', height: '32px' }}>
                      <svg className="svg" style={{ width: '12px', height: '12px' }} viewBox="0 0 1024 1024">
                        <path d="M779.180132 473.232045 322.354755 16.406668c-21.413706-21.413706-56.121182-21.413706-77.534887 0-21.413706 21.413706-21.413706 56.122205 0 77.534887l418.057421 418.057421L244.819868 930.057421c-21.413706 21.413706-21.413706 56.122205 0 77.534887 10.706853 10.706853 24.759917 16.059767 38.767955 16.059767s28.061103-5.353938 38.767955-16.059767L779.180132 550.767955C800.593837 529.35425 800.593837 494.64575 779.180132 473.232045z" />
                      </svg>
                    </div>
                    <div className="circle-overlay"></div>
                  </button>
                </div>
              </div>
              <div className="circle-overlay pointer-events-none"></div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
