import { motion } from 'framer-motion';
import { TypingEffect } from './TypingEffect';
import profileImg from '../assets/Profile.jpg';
import { FaGithub, FaLinkedinIn, FaInstagram, FaXTwitter, FaReact } from 'react-icons/fa6';
import { HiSparkles, HiArrowRight } from 'react-icons/hi2';
import { FiCheckCircle } from 'react-icons/fi';

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

export default function Hero({ scrollTo }) {
  return (
    <section 
      id="home" 
      className="min-h-screen pt-28 pb-16 px-4 sm:px-6 lg:px-8 flex flex-col justify-center relative overflow-hidden bg-white dark:bg-[#07090e] transition-colors duration-500"
    >
      <div className="container max-w-7xl mx-auto relative z-10">
        {/* Main Floating Glass Canvas Frontpanel */}
        <div className="relative glass-surface rounded-3xl p-6 sm:p-10 md:p-12 lg:p-14 border border-slate-200/80 dark:border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.06)] dark:shadow-[0_25px_60px_rgba(0,0,0,0.6)] backdrop-blur-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
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
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-2xl bg-white/80 dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/10 shadow-sm backdrop-blur-md mb-6"
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
                className="mt-8 pt-6 border-t border-slate-200/80 dark:border-white/10 w-full flex items-center justify-center lg:justify-start gap-3 sm:gap-4"
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
                      className={`p-3 rounded-2xl glass-pill text-slate-700 dark:text-slate-300 hover:-translate-y-1 hover:shadow-lg transition-all duration-200 border border-slate-200/80 dark:border-white/10 ${social.color}`}
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
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 via-cyan-400/15 to-indigo-600/20 rounded-3xl blur-2xl" />

                {/* Main Glass Portrait Frame */}
                <div className="relative w-full h-full rounded-3xl p-3 glass-surface border border-slate-200/80 dark:border-white/20 shadow-xl overflow-hidden group">
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
                  className="absolute -top-4 -left-4 sm:-top-5 sm:-left-6 px-3.5 py-2 rounded-2xl glass-pill shadow-lg flex items-center gap-2 border border-slate-200/80 dark:border-white/20 z-20"
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
                  className="absolute -bottom-4 -right-4 sm:-bottom-5 sm:-right-6 px-3.5 py-2 rounded-2xl glass-pill shadow-lg flex items-center gap-2 border border-slate-200/80 dark:border-white/20 z-20"
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
      </div>
    </section>
  );
}
