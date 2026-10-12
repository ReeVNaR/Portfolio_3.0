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
  const trackRef = useRef(null);
  const [trackWidth, setTrackWidth] = useState(0);

  // Pointer drag state for the blue indicator pill
  const isPointerDownRef = useRef(false);
  const startXRef = useRef(0);
  const hasMovedRef = useRef(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragX, setDragX] = useState(0);
  const [dragHoverIndex, setDragHoverIndex] = useState(null);

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

  // Measure track width dynamically
  useEffect(() => {
    const updateWidth = () => {
      if (trackRef.current) {
        setTrackWidth(trackRef.current.offsetWidth);
      }
    };
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
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

  const activeIndex = Math.max(0, navItems.findIndex(item => item.id === activeSection));
  // Total padding is 12px (6px left, 6px right from p-1.5)
  const slotWidth = trackWidth > 12 ? (trackWidth - 12) / 5 : 0;
  const pillX = isDragging ? dragX : activeIndex * slotWidth;

  // Pointer drag event handlers for slidable/draggable blue pill
  const handlePointerDown = (e) => {
    isPointerDownRef.current = true;
    startXRef.current = e.clientX;
    hasMovedRef.current = false;
    e.currentTarget.setPointerCapture?.(e.pointerId);
  };

  const handlePointerMove = (e) => {
    if (!isPointerDownRef.current) return;
    const deltaX = Math.abs(e.clientX - startXRef.current);
    if (!hasMovedRef.current && deltaX > 6) {
      hasMovedRef.current = true;
      setIsDragging(true);
    }

    if (hasMovedRef.current && trackRef.current && slotWidth > 0) {
      const rect = trackRef.current.getBoundingClientRect();
      // Relative offset inside the inner track (accounting for 6px left padding)
      const relativeX = e.clientX - rect.left - 6 - slotWidth / 2;
      const maxX = slotWidth * 4;
      const clampedX = Math.max(0, Math.min(maxX, relativeX));
      setDragX(clampedX);
      const hoveredIdx = Math.min(4, Math.max(0, Math.round(clampedX / slotWidth)));
      setDragHoverIndex(hoveredIdx);
    }
  };

  const handlePointerUp = (e) => {
    if (!isPointerDownRef.current) return;
    isPointerDownRef.current = false;

    if (hasMovedRef.current && slotWidth > 0) {
      const finalIndex = Math.min(4, Math.max(0, Math.round(dragX / slotWidth)));
      const targetSection = navItems[finalIndex].id;
      setActiveSection(targetSection);
      handleNavClick(targetSection);
    }

    setIsDragging(false);
    setDragHoverIndex(null);
  };

  const handlePointerCancel = () => {
    isPointerDownRef.current = false;
    setIsDragging(false);
    setDragHoverIndex(null);
    hasMovedRef.current = false;
  };

  const handleItemClick = (id) => {
    if (hasMovedRef.current) return;
    setActiveSection(id);
    handleNavClick(id);
  };

  const effectiveIndex = isDragging && dragHoverIndex !== null 
    ? dragHoverIndex 
    : activeIndex;

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

      {/* Mobile Top-Right Anchored Controls: V1/V2 and Light/Dark Theme */}
      <aside 
        className="fixed top-3 right-3 sm:top-4 sm:right-4 z-[100] md:hidden pointer-events-auto"
        aria-label="Mobile quick controls"
      >
        <div className="flex items-center gap-1.5 p-1 rounded-full nav-liquid-glass shadow-[0_8px_24px_rgba(15,23,42,0.18)] dark:shadow-[0_10px_28px_rgba(0,0,0,0.6)] backdrop-blur-2xl">
          {/* V1 / V2 Version Toggle Pill */}
          <div 
            className="flex items-center p-0.5 rounded-full bg-slate-900/[0.04] dark:bg-white/[0.08] border border-slate-900/[0.08] dark:border-white/[0.15] text-xs font-bold backdrop-blur-md"
            role="group"
            aria-label="Portfolio version toggle"
          >
            <button
              type="button"
              onClick={() => setPortfolioVersion?.('v1')}
              className={`px-2.5 py-1 rounded-full text-[11px] transition-all duration-200 ${
                portfolioVersion === 'v1'
                  ? 'bg-blue-600 text-white shadow-sm font-bold'
                  : 'text-slate-700 dark:text-slate-300 hover:text-black dark:hover:text-white'
              }`}
              title="Switch to Portfolio V1"
              aria-label="Portfolio version 1"
            >
              V1
            </button>
            <button
              type="button"
              onClick={() => setPortfolioVersion?.('v2')}
              className={`px-2.5 py-1 rounded-full text-[11px] transition-all duration-200 ${
                portfolioVersion === 'v2'
                  ? 'bg-blue-600 text-white shadow-sm font-bold'
                  : 'text-slate-700 dark:text-slate-300 hover:text-black dark:hover:text-white'
              }`}
              title="Switch to Portfolio V2"
              aria-label="Portfolio version 2"
            >
              V2
            </button>
          </div>

          {/* Divider */}
          <div className="w-[1px] h-4 bg-slate-300 dark:bg-white/20" />

          {/* Light / Dark Theme Toggle */}
          <ThemeToggle />
          
          <div className="circle-overlay pointer-events-none"></div>
        </div>
      </aside>

      {/* Mobile Anchored Bottom Navbar with Draggable Blue Indicator Pill */}
      <nav 
        className="fixed bottom-3 sm:bottom-4 left-0 right-0 z-[100] px-3 sm:px-4 pointer-events-none flex justify-center md:hidden"
        aria-label="Mobile Navigation Bar"
      >
        <div 
          ref={trackRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerCancel}
          className="pointer-events-auto touch-none relative w-full max-w-[360px] xs:max-w-[380px] rounded-full p-1.5 nav-liquid-glass shadow-[0_14px_40px_rgba(15,23,42,0.22)] dark:shadow-[0_18px_45px_rgba(0,0,0,0.8)] backdrop-blur-2xl select-none cursor-grab active:cursor-grabbing"
        >
          {/* Draggable Blue Liquid Glass Indicator Pill */}
          {slotWidth > 0 && (
            <motion.div
              animate={{ x: pillX }}
              transition={isDragging ? { duration: 0 } : { type: 'spring', stiffness: 420, damping: 32 }}
              style={{ left: 6, width: `${slotWidth}px` }}
              className="absolute top-1.5 bottom-1.5 rounded-full bg-blue-500/20 dark:bg-blue-400/25 border border-blue-500/40 dark:border-blue-400/40 shadow-[inset_0_1px_1.5px_rgba(255,255,255,0.85),0_2px_12px_rgba(0,113,227,0.3)] backdrop-blur-md z-0 pointer-events-none"
            >
              {/* Subtle tactile grip pip at the top of the pill */}
              <div className="absolute top-1 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full bg-blue-500/50 dark:bg-white/50" />
            </motion.div>
          )}

          {/* Nav Items Grid */}
          <div className="relative z-10 grid grid-cols-5 items-center">
            {navItems.map((item, index) => {
              const isCurrent = effectiveIndex === index;
              const Icon = isCurrent ? item.activeIcon : item.icon;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleItemClick(item.id)}
                  className={`relative flex flex-col items-center justify-center py-1.5 px-1 rounded-full transition-colors duration-150 select-none ${
                    isCurrent 
                      ? 'text-blue-600 dark:text-blue-400 font-semibold' 
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                  aria-label={item.label}
                >
                  <span className="flex flex-col items-center gap-0.5 pointer-events-none">
                    <Icon className={`w-5 h-5 transition-transform duration-200 ${isCurrent ? 'scale-110' : ''}`} />
                    <span className="text-[10px] tracking-tight font-medium leading-none">{item.label}</span>
                  </span>
                </button>
              );
            })}
          </div>
          <div className="circle-overlay pointer-events-none"></div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
