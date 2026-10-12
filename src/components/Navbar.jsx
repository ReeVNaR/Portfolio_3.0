import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  HiOutlineHome, HiHome, 
  HiOutlineUser, HiUser, 
  HiOutlineCodeBracket, HiCodeBracket, 
  HiOutlineBriefcase, HiBriefcase, 
  HiOutlineEnvelope, HiEnvelope 
} from 'react-icons/hi2';
import ThemeToggle from './ThemeToggle';
import profileImg from '../assets/Profile.jpg';

const Navbar = ({ portfolioVersion = 'v2', setPortfolioVersion }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const constraintsRef = useRef(null);

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
    { id: 'home', label: 'Home', icon: HiOutlineHome, activeIcon: HiHome },
    { id: 'about', label: 'About', icon: HiOutlineUser, activeIcon: HiUser },
    { id: 'skills', label: 'Skills', icon: HiOutlineCodeBracket, activeIcon: HiCodeBracket },
    { id: 'projects', label: 'Projects', icon: HiOutlineBriefcase, activeIcon: HiBriefcase },
    { id: 'contact', label: 'Contact', icon: HiOutlineEnvelope, activeIcon: HiEnvelope }
  ];

  return (
    <>
      {/* Top Header Navbar - DESKTOP ONLY (Hidden on Mobile) */}
      <header className="hidden md:flex fixed top-3 sm:top-5 left-0 right-0 z-[100] px-4 pointer-events-none justify-center">
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
            <div className="flex items-center space-x-1 sm:space-x-1.5">
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

              {/* Let's Talk Button */}
              <button
                onClick={() => handleNavClick('contact')}
                className="inline-flex text-xs font-semibold px-4 py-1.5 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:opacity-90 transition-opacity shadow-sm"
              >
                Let's Talk
              </button>

              <div className="w-[1px] h-5 bg-slate-300 dark:bg-white/20 block" />
              <ThemeToggle />
            </div>
          </div>
          <div className="circle-overlay pointer-events-none"></div>
        </nav>
      </header>

      {/* Screen Boundary Constraint Layer for Mobile Draggable Dock */}
      <div 
        ref={constraintsRef} 
        className="fixed inset-0 pointer-events-none z-[100] md:hidden p-3"
        aria-hidden="true"
      />

      {/* Mobile Floating Slidable / Draggable Liquid Glass Navbar */}
      <div 
        className="fixed bottom-4 left-0 right-0 z-[100] px-3 pointer-events-none flex justify-center md:hidden"
      >
        <motion.nav 
          drag
          dragConstraints={constraintsRef}
          dragElastic={0.15}
          dragMomentum={false}
          whileDrag={{ scale: 1.04, filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.35))' }}
          className="pointer-events-auto touch-none cursor-grab active:cursor-grabbing w-full max-w-[360px] xs:max-w-[380px] rounded-3xl p-1.5 pt-1 nav-liquid-glass shadow-[0_14px_40px_rgba(15,23,42,0.25)] dark:shadow-[0_18px_45px_rgba(0,0,0,0.85)] backdrop-blur-2xl select-none"
          aria-label="Mobile Draggable Navigation Bar"
        >
          {/* Subtle Drag Handle Indicator */}
          <div className="w-9 h-1 rounded-full bg-slate-400/40 dark:bg-white/30 mx-auto my-0.5" />

          <div className="relative z-10 grid grid-cols-5 items-center">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              const Icon = isActive ? item.activeIcon : item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative flex flex-col items-center justify-center py-1 px-1 rounded-2xl transition-all duration-200 select-none ${
                    isActive 
                      ? 'text-blue-600 dark:text-blue-400 font-semibold' 
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                  aria-label={item.label}
                >
                  {isActive && (
                    <motion.span
                      layoutId="mobile-nav-pill"
                      className="absolute inset-0 rounded-2xl bg-blue-500/15 dark:bg-blue-400/20 border border-blue-500/30 shadow-[inset_0_1px_1px_rgba(255,255,255,0.8),0_2px_8px_rgba(0,113,227,0.15)] backdrop-blur-sm"
                      transition={{ type: 'spring', bounce: 0.25, duration: 0.5 }}
                    />
                  )}
                  <span className="relative z-10 flex flex-col items-center gap-0.5">
                    <Icon className={`w-5 h-5 transition-transform duration-200 ${isActive ? 'scale-110' : ''}`} />
                    <span className="text-[10px] tracking-tight font-medium leading-none">{item.label}</span>
                  </span>
                </button>
              );
            })}
          </div>
          <div className="circle-overlay pointer-events-none"></div>
        </motion.nav>
      </div>
    </>
  );
};

export default Navbar;
