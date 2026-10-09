import { motion } from 'framer-motion';
import { TypingEffect } from './TypingEffect';
import profileImg from '../assets/Profile.jpg';
import { FaGithub, FaLinkedinIn, FaInstagram, FaXTwitter, FaReact } from 'react-icons/fa6';
import { HiSparkles, HiArrowRight, HiOutlineCodeBracket, HiOutlineCpuChip } from 'react-icons/hi2';
import { FiCheckCircle, FiLayers } from 'react-icons/fi';

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/ReeVNaR',
    icon: FaGithub,
    color: 'hover:text-emerald-500 hover:border-emerald-500/40 hover:bg-emerald-500/10'
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/ranveer-ghorpade-gg/',
    icon: FaLinkedinIn,
    color: 'hover:text-blue-500 hover:border-blue-500/40 hover:bg-blue-500/10'
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/ranveer._.15/',
    icon: FaInstagram,
    color: 'hover:text-pink-500 hover:border-pink-500/40 hover:bg-pink-500/10'
  },
  {
    name: 'Twitter / X',
    url: 'https://x.com/Ranveer52251721',
    icon: FaXTwitter,
    color: 'hover:text-black dark:hover:text-white hover:border-black/50 dark:hover:border-white/40 hover:bg-black/10 dark:hover:bg-white/10'
  }
];

const highlights = [
  {
    icon: HiOutlineCodeBracket,
    title: 'Modern Architecture',
    desc: 'React 19, Vite & modular clean code'
  },
  {
    icon: FiLayers,
    title: 'Interactive UI/UX',
    desc: 'Frosted depth, modern aesthetics & fluid motion'
  },
  {
    icon: HiOutlineCpuChip,
    title: 'High Performance',
    desc: 'Optimized rendering, responsive & fast'
  }
];

const rainDroplets = [
  // Top left corner cluster
  { id: 1, top: '4%', left: '3%', size: 14, rotate: 10, trail: 28 },
  { id: 2, top: '8%', left: '7%', size: 6, rotate: -5 },
  { id: 3, top: '3%', left: '12%', size: 5 },
  { id: 4, top: '13%', left: '4%', size: 9, rotate: 15 },
  { id: 5, top: '16%', left: '9%', size: 4 },
  
  // Top center edge
  { id: 6, top: '3%', left: '32%', size: 12, rotate: 5, trail: 22 },
  { id: 7, top: '7%', left: '36%', size: 6 },
  { id: 8, top: '3%', left: '50%', size: 8, rotate: -8 },
  { id: 9, top: '5%', left: '58%', size: 5 },

  // Top right & around portrait showcase
  { id: 10, top: '4%', right: '4%', size: 16, rotate: 8, trail: 36 },
  { id: 11, top: '10%', right: '8%', size: 6 },
  { id: 12, top: '15%', right: '3%', size: 10, rotate: -12, trail: 20 },
  { id: 13, top: '24%', right: '6%', size: 5 },
  { id: 14, top: '32%', right: '2%', size: 12, rotate: 6, trail: 26 },
  { id: 15, top: '44%', right: '4%', size: 7 },
  { id: 16, top: '58%', right: '3%', size: 15, rotate: -6, trail: 32 },
  { id: 17, top: '68%', right: '7%', size: 6 },
  { id: 18, top: '78%', right: '4%', size: 10, rotate: 10 },

  // Left perimeter (behind empty margin)
  { id: 19, top: '28%', left: '2%', size: 8, rotate: -10, trail: 18 },
  { id: 20, top: '38%', left: '4%', size: 5 },
  { id: 21, top: '48%', left: '1.5%', size: 11, rotate: 12, trail: 24 },
  { id: 22, top: '58%', left: '3.5%', size: 6 },
  { id: 23, top: '68%', left: '2%', size: 8, rotate: -4 },

  // Middle atmospheric condensation
  { id: 24, top: '18%', left: '46%', size: 6 },
  { id: 25, top: '36%', left: '50%', size: 5 },
  { id: 26, top: '54%', left: '45%', size: 6 },
  { id: 27, top: '74%', left: '48%', size: 8, rotate: 8, trail: 20 },

  // Bottom margins & corners
  { id: 28, bottom: '6%', left: '3%', size: 15, rotate: -8, trail: 30 },
  { id: 29, bottom: '3%', left: '8%', size: 7 },
  { id: 30, bottom: '8%', left: '16%', size: 5 },
  { id: 31, bottom: '4%', left: '28%', size: 10, rotate: 14, trail: 20 },
  { id: 32, bottom: '6%', left: '42%', size: 6 },
  { id: 33, bottom: '3%', right: '30%', size: 9, rotate: -6 },
  { id: 34, bottom: '5%', right: '17%', size: 13, rotate: 10, trail: 25 },
  { id: 35, bottom: '2%', right: '5%', size: 7 }
];

export default function Hero({ scrollTo }) {
  return (
    <section 
      id="home" 
      className="min-h-screen pt-28 pb-16 px-4 sm:px-6 lg:px-8 flex flex-col justify-center relative overflow-hidden bg-white dark:bg-[#07090e] transition-colors duration-500"
    >
      {/* Background ambient luminous glow mesh */}
      <div className="absolute -top-24 -left-20 w-80 sm:w-[500px] h-80 sm:h-[500px] rounded-full bg-blue-100/70 dark:bg-blue-600/15 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 -right-24 w-80 sm:w-[520px] h-80 sm:h-[520px] rounded-full bg-sky-100/60 dark:bg-indigo-600/15 blur-[130px] pointer-events-none" />
      <div className="absolute -bottom-20 left-1/3 w-72 sm:w-[460px] h-72 sm:h-[460px] rounded-full bg-slate-100/80 dark:bg-cyan-500/10 blur-[110px] pointer-events-none" />
      
      {/* Subtle background glass grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="container max-w-7xl mx-auto relative z-10">
        {/* Main Floating Glass Canvas Frontpanel */}
        <div className="relative glass-surface rounded-3xl p-6 sm:p-10 md:p-12 lg:p-14 border border-white/80 dark:border-white/10 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.06),0_10px_25px_-5px_rgba(0,0,0,0.02)] dark:shadow-[0_25px_60px_rgba(0,0,0,0.6)] backdrop-blur-2xl overflow-hidden">
          
          {/* Glass Specular Gloss Sheen */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/75 via-white/20 to-transparent pointer-events-none z-0 rounded-3xl" />
          <div className="absolute -top-[1px] left-10 right-10 h-[2px] bg-gradient-to-r from-transparent via-white to-transparent pointer-events-none z-0" />

          {/* Background Rain Droplets on Glass */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 select-none" aria-hidden="true">
            {rainDroplets.map((drop) => (
              <div
                key={drop.id}
                style={{
                  top: drop.top,
                  left: drop.left,
                  right: drop.right,
                  bottom: drop.bottom,
                  position: 'absolute'
                }}
              >
                {drop.trail && (
                  <div
                    className="rain-trail"
                    style={{
                      height: `${drop.trail}px`,
                      bottom: '50%',
                      left: '50%',
                      transform: 'translateX(-50%)'
                    }}
                  />
                )}
                <div
                  className={drop.size <= 6 ? 'rain-drop-micro' : 'rain-drop'}
                  style={{
                    width: `${drop.size}px`,
                    height: `${Math.round(drop.size * 1.15)}px`,
                    transform: drop.rotate ? `rotate(${drop.rotate}deg)` : undefined
                  }}
                />
              </div>
            ))}
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Introductions & Actions */}
            <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
              {/* Status Badge Capsule */}
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-pill text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 mb-6 hover:scale-[1.02] transition-transform cursor-default"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span>Available for new projects & opportunities</span>
              </motion.div>

              {/* Main Headline */}
              <motion.h1 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.12] mb-5 font-display"
              >
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 dark:from-blue-400 dark:via-sky-300 dark:to-indigo-300 bg-clip-text text-transparent">
                  Ranveer Ghorpade
                </span>
              </motion.h1>

              {/* Typing Subtitle Badge */}
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-2xl bg-white/40 dark:bg-white/[0.04] border border-white/60 dark:border-white/10 shadow-sm backdrop-blur-md mb-6"
              >
                <HiSparkles className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 animate-pulse" />
                <span className="text-sm sm:text-base md:text-lg font-medium text-slate-700 dark:text-slate-200">
                  <TypingEffect />
                </span>
              </motion.div>

              {/* Bio summary */}
              <motion.p 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed mb-8"
              >
                Passionate about crafting intuitive, scalable web applications with refined UI/UX, robust frontend architectures, and seamless digital interactions.
              </motion.p>

              {/* Call to Actions */}
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap gap-4 justify-center lg:justify-start w-full sm:w-auto"
              >
                <button
                  onClick={() => scrollTo('projects')}
                  className="px-7 py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-medium text-sm sm:text-base shadow-[0_10px_25px_-5px_rgba(59,130,246,0.4)] hover:shadow-[0_15px_30px_-5px_rgba(59,130,246,0.6)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center gap-2 group"
                >
                  <span>Explore Work</span>
                  <HiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => scrollTo('contact')}
                  className="px-7 py-3.5 rounded-2xl glass-button text-slate-800 dark:text-white font-medium text-sm sm:text-base hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center gap-2"
                >
                  <span>Get in Touch</span>
                </button>
              </motion.div>

              {/* Social Quick Links Bar */}
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-8 pt-6 border-t border-slate-200/60 dark:border-white/10 w-full flex items-center justify-center lg:justify-start gap-3 sm:gap-4"
              >
                <span className="text-xs uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400 mr-1">
                  Connect
                </span>
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={social.name}
                      aria-label={social.name}
                      className={`p-3 rounded-2xl glass-pill text-slate-700 dark:text-slate-300 hover:-translate-y-1 hover:shadow-lg transition-all duration-200 border border-white/60 dark:border-white/10 ${social.color}`}
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
                className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[360px] lg:h-[360px]"
              >
                {/* Luminous Ambient Halo */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/25 via-cyan-400/20 to-indigo-600/25 rounded-3xl blur-2xl animate-pulse" />

                {/* Main Glass Portrait Frame */}
                <div className="relative w-full h-full rounded-3xl p-3 glass-surface border border-white/80 dark:border-white/20 shadow-2xl overflow-hidden group">
                  <div className="w-full h-full rounded-2xl overflow-hidden relative">
                    <img 
                      src={profileImg} 
                      alt="Ranveer Ghorpade" 
                      className="w-full h-full object-cover rounded-2xl transform transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Inner subtle specular sheen */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/40 via-transparent to-white/10 pointer-events-none" />
                  </div>
                </div>

                {/* Floating Glass Widget 1: Tech Pill */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                  className="absolute -top-4 -left-4 sm:-top-5 sm:-left-6 px-3.5 py-2 rounded-2xl glass-pill shadow-xl flex items-center gap-2 border border-white/70 dark:border-white/20 z-20"
                >
                  <div className="w-7 h-7 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500">
                    <FaReact className="w-4 h-4 animate-spin-slow" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-none">Specialty</p>
                    <p className="text-xs font-semibold text-slate-800 dark:text-white leading-tight">React & Vite</p>
                  </div>
                </motion.div>

                {/* Floating Glass Widget 2: UI/UX & Web */}
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut', delay: 0.5 }}
                  className="absolute -bottom-4 -right-4 sm:-bottom-5 sm:-right-6 px-3.5 py-2 rounded-2xl glass-pill shadow-xl flex items-center gap-2 border border-white/70 dark:border-white/20 z-20"
                >
                  <div className="w-7 h-7 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                    <FiCheckCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-none">Focus</p>
                    <p className="text-xs font-semibold text-slate-800 dark:text-white leading-tight">Clean Architecture</p>
                  </div>
                </motion.div>
              </motion.div>
            </div>

          </div>
        </div>

        {/* Hero Bottom Glass Highlights Strip */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6"
        >
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="relative glass-surface rounded-2xl p-5 border border-white/80 dark:border-white/10 hover:border-blue-500/40 dark:hover:border-blue-400/30 transition-all duration-300 group hover:-translate-y-0.5 overflow-hidden"
              >
                {/* Subtle corner dew drop */}
                <div 
                  className="rain-drop-micro top-2.5 right-3" 
                  style={{ width: '6px', height: '6px' }}
                  aria-hidden="true"
                />
                <div className="relative z-10 flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl glass-pill flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
