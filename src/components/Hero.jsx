import { motion, AnimatePresence } from 'framer-motion';
import { TypingEffect } from './TypingEffect';
import profileImg from '../assets/Profile.jpg';
import { FaGithub, FaLinkedinIn, FaInstagram, FaXTwitter, FaReact } from 'react-icons/fa6';
import { FiCheckCircle } from 'react-icons/fi';

const socialLinksV2 = [
  {
    name: 'GitHub',
    url: 'https://github.com/ReeVNaR',
    icon: FaGithub,
    color: 'hover:text-emerald-600 hover:border-emerald-500 hover:bg-emerald-50 dark:hover:bg-emerald-500/10'
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/ranveer-ghorpade-gg/',
    icon: FaLinkedinIn,
    color: 'hover:text-blue-600 hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-500/10'
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/ranveer._.15/',
    icon: FaInstagram,
    color: 'hover:text-pink-600 hover:border-pink-500 hover:bg-pink-50 dark:hover:bg-pink-500/10'
  },
  {
    name: 'Twitter / X',
    url: 'https://x.com/Ranveer52251721',
    icon: FaXTwitter,
    color: 'hover:text-black dark:hover:text-white hover:border-black dark:hover:border-white/40 hover:bg-slate-100 dark:hover:bg-white/10'
  }
];

export default function Hero({ scrollTo, portfolioVersion = 'v2' }) {
  const handleLiquidMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const xPercent = (x / rect.width) * 100;
    const yPercent = (y / rect.height) * 100;
    e.currentTarget.style.setProperty('--mx', `${x}px`);
    e.currentTarget.style.setProperty('--my', `${y}px`);
    e.currentTarget.style.setProperty('--mx-pct', `${xPercent.toFixed(1)}%`);
    e.currentTarget.style.setProperty('--my-pct', `${yPercent.toFixed(1)}%`);
  };

  const handleLiquidMouseEnter = (e) => {
    e.currentTarget.style.setProperty('--liquid-active', '1');
  };

  const handleLiquidMouseLeave = (e) => {
    e.currentTarget.style.setProperty('--liquid-active', '0');
    e.currentTarget.style.setProperty('--mx-pct', '50%');
    e.currentTarget.style.setProperty('--my-pct', '50%');
  };

  return (
    <section 
      id="home" 
      className={`min-h-screen pt-20 sm:pt-24 lg:pt-20 pb-8 sm:pb-10 lg:pb-8 px-4 sm:px-6 lg:px-8 flex items-center justify-center relative overflow-hidden transition-colors duration-500 ${
        portfolioVersion === 'v1'
          ? 'bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50 dark:from-black dark:via-black dark:to-black'
          : 'hero-lamborghini-bg'
      }`}
    >
      <AnimatePresence mode="wait">
        {portfolioVersion === 'v1' ? (
          /* ========================================= */
          /*         PORTFOLIO V1 (Classic Hero)       */
          /* ========================================= */
          <motion.div
            key="hero-v1"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="w-full relative"
          >
            {/* Background grid pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(#3B82F6_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.05] pointer-events-none" />

            <div className="container max-w-7xl mx-auto px-2 sm:px-6 py-6 sm:py-12 relative z-10">
              <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-16">
                
                {/* Left Column */}
                <div className="w-full md:w-1/2 z-10 text-center md:text-left">
                  <span className="px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800/40 text-sm font-semibold inline-block mb-6 shadow-sm">
                    Welcome to my portfolio
                  </span> 
                  <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
                    Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Ranveer Ghorpade</span>
                  </h1>
                  <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-200 leading-relaxed mb-8 font-medium">
                    <TypingEffect />
                  </p>

                  <div className="flex gap-4 justify-center md:justify-start">
                    <button 
                      onClick={() => scrollTo('contact')}
                      className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-200 font-semibold"
                    >
                      Contact Me
                    </button>
                    <button 
                      onClick={() => scrollTo('projects')}
                      className="px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 bg-white/80 dark:bg-transparent rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all duration-200 font-semibold shadow-sm"
                    >
                      View Work
                    </button>
                  </div>

                  <div className="flex gap-8 justify-center md:justify-start pt-6">
                    {/* GitHub */}
                    <a href="https://github.com/ReeVNaR" target="_blank" rel="noopener noreferrer" className="group relative" aria-label="GitHub">
                      <div className="absolute -inset-2 bg-gradient-to-r from-green-600 to-green-400 rounded-lg blur-lg opacity-0 group-hover:opacity-30 transition-all duration-500"></div>
                      <div className="relative flex items-center justify-center w-12 h-12 border border-gray-300 dark:border-gray-700 rounded-lg bg-white/90 dark:bg-white/5 backdrop-blur-xl shadow-md group-hover:border-green-500/50 transition-all duration-500">
                        <svg className="w-7 h-7 text-gray-800 dark:text-gray-200 group-hover:text-green-600 dark:group-hover:text-green-400 transition-all duration-500 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </div>
                    </a>

                    {/* LinkedIn */}
                    <a href="https://www.linkedin.com/in/ranveer-ghorpade-gg/" target="_blank" rel="noopener noreferrer" className="group relative" aria-label="LinkedIn">
                      <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg blur-lg opacity-0 group-hover:opacity-30 transition-all duration-500"></div>
                      <div className="relative flex items-center justify-center w-12 h-12 border border-gray-300 dark:border-gray-700 rounded-lg bg-white/90 dark:bg-white/5 backdrop-blur-xl shadow-md group-hover:border-blue-500/50 transition-all duration-500">
                        <svg className="w-7 h-7 text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-all duration-500 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </div>
                    </a>

                    {/* Instagram */}
                    <a href="https://www.instagram.com/ranveer._.15/" target="_blank" rel="noopener noreferrer" className="group relative" aria-label="Instagram">
                      <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg blur-lg opacity-0 group-hover:opacity-30 transition-all duration-500"></div>
                      <div className="relative flex items-center justify-center w-12 h-12 border border-gray-300 dark:border-gray-700 rounded-lg bg-white/90 dark:bg-white/5 backdrop-blur-xl shadow-md group-hover:border-pink-500/50 transition-all duration-500">
                        <svg className="w-7 h-7 text-gray-800 dark:text-gray-200 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-all duration-500 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      </div>
                    </a>

                    {/* Twitter/X with solid black hover */}
                    <a href="https://x.com/Ranveer52251721" target="_blank" rel="noopener noreferrer" className="group relative" aria-label="X / Twitter">
                      <div className="absolute -inset-2 bg-gradient-to-r from-neutral-950 to-neutral-500 rounded-lg blur-lg opacity-0 group-hover:opacity-30 transition-all duration-500"></div>
                      <div className="relative flex items-center justify-center w-12 h-12 border border-gray-300 dark:border-gray-700 rounded-lg bg-white/90 dark:bg-white/5 backdrop-blur-xl shadow-md group-hover:border-black dark:group-hover:border-neutral-400 transition-all duration-500">
                        <svg className="w-6 h-6 text-gray-800 dark:text-gray-200 group-hover:text-black dark:group-hover:text-white transition-all duration-500 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Right Column: Animated Wave Avatar */}
                <div className="w-[250px] sm:w-[280px] md:w-[380px] h-[250px] sm:h-[280px] md:h-[380px] z-10">
                  <div className="relative w-full h-full mx-auto">
                    {/* Animated rings */}
                    <div className="absolute inset-0 rounded-full animate-[wave_4s_ease-in-out_infinite] opacity-70">
                      <div className="absolute inset-0 rounded-full border-2 border-blue-500/30 [transform-origin:center_center] animate-[ping_3s_ease-in-out_infinite]"></div>
                      <div className="absolute inset-[-10px] rounded-full border-2 border-blue-400/20 [transform-origin:center_center] animate-[ping_3s_ease-in-out_0.75s_infinite]"></div>
                      <div className="absolute inset-[-20px] rounded-full border-2 border-blue-300/10 [transform-origin:center_center] animate-[ping_3s_ease-in-out_1.5s_infinite]"></div>
                    </div>
                    
                    {/* Pulsing gradient background */}
                    <div className="absolute inset-0">
                      <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-blue-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-blue-400 rounded-full blur-3xl opacity-10 animate-[pulse_2s_ease-in-out_0.5s_infinite]"></div>
                    </div>

                    <div className="group relative w-full h-full transform transition-transform duration-500 hover:scale-105">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
                      <img 
                        src={profileImg} 
                        alt="Ranveer Ghorpade" 
                        className="rounded-full shadow-2xl border-2 border-blue-500/30 relative w-full h-full object-cover backdrop-blur-3xl"
                      />
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        ) : (
          /* ========================================= */
          /*      PORTFOLIO V2 (Modern Glass Hero)     */
          /* ========================================= */
          <motion.div
            key="hero-v2"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="w-full relative z-10"
          >
            {/* Ambient Background Glows to enhance frosted liquid glass refraction */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] max-w-4xl h-72 sm:h-96 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="container max-w-5xl lg:max-w-[1100px] xl:max-w-[1160px] mx-auto relative z-10">
              {/* Main Floating Glass Canvas Frontpanel with Navbar-style Liquid Glass Effect */}
              <div className="relative panel-liquid-glass rounded-3xl p-7 sm:p-9 md:p-10 lg:p-11 xl:p-12">
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">
                  
                  {/* Left Column: Introductions & Actions */}
                  <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
                    {/* Status Badge Capsule: Luminous Liquid Glass Micro-Pill */}
                    <motion.div 
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.08] border border-white/[0.18] text-xs font-medium text-slate-100 mb-4 backdrop-blur-xl shadow-sm hover:bg-white/[0.12] transition-all cursor-default"
                    >
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                      </span>
                      <span className="tracking-tight text-slate-200">Available for new projects & opportunities</span>
                    </motion.div>

                    {/* Main Headline: Diamond White & Electric Cyan Gradient */}
                    <motion.h1 
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      className="text-4xl sm:text-5xl md:text-6xl lg:text-[3.6rem] xl:text-[4rem] font-bold tracking-tight text-white leading-[1.08] mb-4 font-display"
                    >
                      Hi, I'm{' '}
                      <span className="block bg-gradient-to-r from-sky-300 via-cyan-400 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_4px_24px_rgba(56,189,248,0.3)]">
                        Ranveer Ghorpade
                      </span>
                    </motion.h1>

                    {/* Typing Subtitle Badge: Electric Sapphire Pill */}
                    <motion.div 
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/[0.14] border border-sky-400/[0.3] backdrop-blur-2xl mb-4 shadow-[0_4px_20px_rgba(0,113,227,0.2)]"
                    >
                      <span className="text-sm sm:text-base md:text-lg font-semibold tracking-tight text-sky-100">
                        <TypingEffect />
                      </span>
                    </motion.div>

                    {/* Bio summary: High-contrast Platinum Editorial Copy */}
                    <motion.p 
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="text-base sm:text-lg text-slate-200/90 max-w-xl leading-relaxed mb-6 font-normal tracking-[-0.01em]"
                    >
                      Passionate about crafting intuitive, scalable web applications with refined UI/UX, robust frontend architectures, and seamless digital interactions.
                    </motion.p>

                    {/* Call to Actions: Liquid Glass Buttons */}
                    <motion.div 
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="flex flex-wrap gap-3.5 sm:gap-4 justify-center lg:justify-start w-full sm:w-auto"
                    >
                      {/* Explore Work (Minimalist Blue Liquid Glass) */}
                      <button
                        onClick={() => scrollTo('projects')}
                        onMouseMove={handleLiquidMouseMove}
                        onMouseEnter={handleLiquidMouseEnter}
                        onMouseLeave={handleLiquidMouseLeave}
                        className="box start-btn start-btn-blue group relative overflow-hidden"
                        style={{ '--w': 'auto', '--h': '48px', '--tr': '15%' }}
                      >
                        <span className="text relative z-10 pointer-events-none">Explore Work</span>
                        
                        {/* Minimalist Liquid Glass in Blue */}
                        <div className="liquid-glass-blue-chamber pointer-events-none" aria-hidden="true">
                          {/* Pure Electric Sapphire Blue Base */}
                          <div className="liquid-glass-blue-base" />

                          {/* Silky Specular Liquid Caustic (Smooth Cursor Illumination) */}
                          <div className="liquid-glass-blue-caustic" />

                          {/* Upper Glass Meniscus Refraction */}
                          <div className="liquid-glass-blue-meniscus" />
                        </div>

                        <div className="circle-overlay pointer-events-none"></div>
                      </button>

                      {/* Get in Touch (Liquid Glass / Frosted Crystal Theme) */}
                      <button
                        onClick={() => scrollTo('contact')}
                        className="box start-btn group"
                        style={{ '--w': 'auto', '--h': '48px', '--tr': '15%' }}
                      >
                        <span className="text">Get in Touch</span>
                        <div className="circle-overlay"></div>
                      </button>
                    </motion.div>

                    {/* Social Quick Links Bar with High Contrast */}
                    <motion.div 
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      className="mt-7 pt-5 border-t border-white/[0.12] w-full flex items-center justify-center lg:justify-start gap-3 sm:gap-4"
                    >
                      <span className="text-xs uppercase tracking-wider font-bold text-sky-200/80 mr-1">
                        Connect
                      </span>
                      {socialLinksV2.map((social) => {
                        const Icon = social.icon;
                        return (
                          <a
                            key={social.name}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={social.name}
                            aria-label={social.name}
                            className={`p-2.5 sm:p-3 rounded-2xl bg-white/[0.08] hover:bg-white/[0.18] text-white hover:-translate-y-1 hover:shadow-lg transition-all duration-200 border border-white/[0.16] shadow-sm backdrop-blur-xl ${social.color}`}
                          >
                            <Icon className="w-5 h-5" />
                          </a>
                        );
                      })}
                    </motion.div>
                  </div>

                  {/* Right Column: Interactive Portrait Showcase */}
                  <div className="lg:col-span-5 flex justify-center relative">
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.7, delay: 0.2 }}
                      className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-[320px] lg:h-[320px] xl:w-[350px] xl:h-[350px]"
                    >
                      {/* Ambient Halo */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/25 via-cyan-400/20 to-indigo-600/25 rounded-3xl blur-2xl" />

                      {/* Main Glass Portrait Frame with High Contrast */}
                      <div className="relative w-full h-full rounded-3xl p-3 bg-slate-900/60 border border-white/20 shadow-2xl overflow-hidden group backdrop-blur-xl">
                        <div className="w-full h-full rounded-2xl overflow-hidden relative">
                          <img 
                            src={profileImg} 
                            alt="Ranveer Ghorpade" 
                            className="w-full h-full object-cover rounded-2xl transform transition-transform duration-700 group-hover:scale-105"
                          />
                          {/* Inner subtle sheen */}
                          <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/40 via-transparent to-white/10 pointer-events-none" />
                        </div>
                      </div>

                      {/* Floating Glass Widget 1: Tech Pill */}
                      <motion.div
                        animate={{ y: [0, -5, 0] }}
                        transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                        className="absolute -top-4 -left-4 sm:-top-5 sm:-left-5 px-3.5 py-2 rounded-2xl bg-slate-950/85 backdrop-blur-2xl shadow-xl flex items-center gap-2.5 border border-white/20 z-20"
                      >
                        <div className="w-7 h-7 rounded-xl bg-blue-500/20 flex items-center justify-center text-sky-400">
                          <FaReact className="w-4 h-4 animate-spin-slow" />
                        </div>
                        <div>
                          <p className="text-[10px] text-sky-300/80 font-semibold leading-none">Specialty</p>
                          <p className="text-xs font-bold text-white leading-tight">React & Vite</p>
                        </div>
                      </motion.div>

                      {/* Floating Glass Widget 2: UI/UX & Web */}
                      <motion.div
                        animate={{ y: [0, 5, 0] }}
                        transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut', delay: 0.5 }}
                        className="absolute -bottom-4 -right-4 sm:-bottom-5 sm:-right-5 px-3.5 py-2 rounded-2xl bg-slate-950/85 backdrop-blur-2xl shadow-xl flex items-center gap-2.5 border border-white/20 z-20"
                      >
                        <div className="w-7 h-7 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                          <FiCheckCircle className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-[10px] text-emerald-300/80 font-semibold leading-none">Focus</p>
                          <p className="text-xs font-bold text-white leading-tight">Clean Architecture</p>
                        </div>
                      </motion.div>
                    </motion.div>
                  </div>

                </div>
                {/* Specular Inner Rim Highlight */}
                <div className="circle-overlay pointer-events-none"></div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
