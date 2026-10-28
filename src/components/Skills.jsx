import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useInView, animate } from 'framer-motion';
import { 
  SiReact, 
  SiJavascript, 
  SiTailwindcss, 
  SiNextdotjs, 
  SiHtml5, 
  SiCss3, 
  SiNodedotjs, 
  SiExpress, 
  SiPython, 
  SiMongodb, 
  SiPostgresql, 
  SiCloudinary, 
  SiVercel, 
  SiGithub, 
  SiGit, 
  SiPostman, 
  SiCplusplus, 
  SiVite 
} from 'react-icons/si';
import { 
  HiOutlineSparkles, 
  HiOutlineCpuChip, 
  HiOutlineCircleStack, 
  HiOutlineCommandLine, 
  HiOutlinePaintBrush, 
  HiOutlineWrenchScrewdriver, 
  HiOutlineArrowPath,
  HiOutlineCheckCircle,
  HiOutlineArrowsRightLeft,
  HiOutlineBolt
} from 'react-icons/hi2';

/* =========================================================================
   DYNAMIC ANIMATED COUNTER COMPONENT
   ========================================================================= */
const AnimatedStatCounter = ({ target = 17, suffix = "+", duration = 1.4 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-30px" });
  const [count, setCount] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    if (!isInView) {
      setCount(0);
      setIsDone(false);
      return;
    }

    setIsDone(false);
    const controls = animate(0, target, {
      duration,
      ease: [0.12, 0.9, 0.25, 1],
      onUpdate: (latest) => setCount(Math.floor(latest)),
      onComplete: () => setIsDone(true)
    });

    return () => controls.stop();
  }, [isInView, target, duration]);

  const handleReplay = (e) => {
    e?.stopPropagation?.();
    setIsDone(false);
    animate(0, target, {
      duration: 0.9,
      ease: [0.12, 0.9, 0.25, 1],
      onUpdate: (latest) => setCount(Math.floor(latest)),
      onComplete: () => setIsDone(true)
    });
  };

  return (
    <span 
      ref={ref}
      onClick={handleReplay}
      className="inline-flex items-center gap-1 cursor-pointer select-none group/counter"
      title="Click to replay animation"
    >
      <span className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white font-display tabular-nums flex items-baseline">
        <motion.span
          key={count}
          initial={{ y: -5, opacity: 0.7 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.08 }}
          className="inline-block tabular-nums"
        >
          {count}
        </motion.span>
        {suffix && (
          <motion.span
            animate={isDone ? { scale: [1, 1.35, 1], color: ['#2563eb', '#38bdf8', '#2563eb'] } : {}}
            transition={{ duration: 0.4 }}
            className="text-blue-600 dark:text-sky-400 font-extrabold ml-0.5 inline-block"
          >
            {suffix}
          </motion.span>
        )}
      </span>
      {/* Live active glow beacon */}
      <span className="relative flex h-2 w-2 ml-1">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
      </span>
    </span>
  );
};

/* =========================================================================
   ANIMATED MINI METER
   ========================================================================= */
const AnimatedMiniMeter = ({ level = 85, gradient = 'from-blue-500 to-cyan-500' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-20px" });

  return (
    <div ref={ref} className="w-full h-1.5 bg-slate-200/80 dark:bg-white/[0.08] rounded-full overflow-hidden p-[0.5px]">
      <motion.div
        className={`h-full rounded-full bg-gradient-to-r ${gradient}`}
        initial={{ width: '0%' }}
        animate={{ width: isInView ? `${level}%` : '0%' }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      />
    </div>
  );
};

/* =========================================================================
   V1 MODERNIZED CLASSIC GRID (Replaced old circular gauges with sleek cards)
   ========================================================================= */
const skillsV1List = [
  { name: 'React', icon: SiReact, brandColor: '#61DAFB', level: 88, status: 'Advanced', tags: 'Hooks, SPA, State' },
  { name: 'JavaScript', icon: SiJavascript, brandColor: '#F7DF1E', level: 90, status: 'Advanced', tags: 'ES6+, Async, DOM' },
  { name: 'HTML & CSS', icon: SiHtml5, brandColor: '#E34F26', level: 94, status: 'Mastered', tags: 'Flexbox, Grid, Semantics' },
  { name: 'Node.js', icon: SiNodedotjs, brandColor: '#339933', level: 84, status: 'Core Stack', tags: 'Runtime, APIs, Event Loop' },
  { name: 'Git & GitHub', icon: SiGithub, brandColor: '#8B5CF6', level: 88, status: 'Core Stack', tags: 'Branching, PRs, CI/CD' },
  { name: 'Python', icon: SiPython, brandColor: '#3776AB', level: 82, status: 'Proficient', tags: 'AI/ML, Scripts, Logic' },
  { name: 'MongoDB', icon: SiMongodb, brandColor: '#47A248', level: 85, status: 'Core Stack', tags: 'NoSQL, Mongoose, Atlas' },
  { name: 'C++', icon: SiCplusplus, brandColor: '#00599C', level: 76, status: 'CS Core', tags: 'OOP, Data Structures' },
];

const SkillsV1Grid = () => (
  <div className="max-w-6xl mx-auto px-2 sm:px-4">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
      {skillsV1List.map((skill) => {
        const Icon = skill.icon;
        return (
          <motion.div
            key={skill.name}
            whileHover={{ y: -4, scale: 1.02 }}
            transition={{ duration: 0.2 }}
            className="p-5 rounded-2xl panel-liquid-glass flex flex-col justify-between group hover:shadow-xl transition-all duration-300 relative overflow-hidden"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div 
                  className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/[0.06] border border-slate-200/80 dark:border-white/10 group-hover:scale-110 transition-transform duration-300"
                  style={{ color: skill.brandColor }}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-blue-500/10 text-blue-700 dark:text-sky-300 border border-blue-500/20">
                  {skill.status}
                </span>
              </div>
              <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1">
                {skill.name}
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">
                {skill.tags}
              </p>
            </div>
            <div className="pt-2 border-t border-slate-200/60 dark:border-white/10">
              <AnimatedMiniMeter level={skill.level} />
            </div>
          </motion.div>
        );
      })}
    </div>
  </div>
);

/* =========================================================================
   V2 BENTO GRID SKILLS (Mirroring About Me Bento Grid Architecture)
   ========================================================================= */
const frontendPills = [
  { name: 'React.js', detail: 'Hooks, Virtual DOM, Components', icon: SiReact, color: '#61DAFB' },
  { name: 'Next.js 15', detail: 'App Router, Server Actions, SSR', icon: SiNextdotjs, color: '#38bdf8' },
  { name: 'Tailwind CSS', detail: 'Fluid Layouts, Bento Systems', icon: SiTailwindcss, color: '#38BDF8' },
  { name: 'JavaScript (ES6+)', detail: 'Async/Await, Modern Syntax', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'HTML5 & CSS3', detail: 'Semantic Web, Keyframes, Flex/Grid', icon: SiHtml5, color: '#E34F26' },
];

const backendPills = [
  { name: 'Node.js', detail: 'Asynchronous Runtime & Streams', icon: SiNodedotjs, color: '#339933' },
  { name: 'Express.js', detail: 'REST Routing & JWT Auth', icon: SiExpress, color: '#60A5FA' },
  { name: 'Python', detail: 'AI Models, Automation, Scripts', icon: SiPython, color: '#3776AB' },
  { name: 'REST Architecture', detail: 'API Contracts & JSON Payloads', icon: HiOutlineCommandLine, color: '#8B5CF6' },
];

const dbCloudPills = [
  { name: 'MongoDB Atlas', detail: 'Mongoose ODM, Aggregations', icon: SiMongodb, color: '#47A248' },
  { name: 'PostgreSQL / SQL', detail: 'Relational Schemas, ACID Queries', icon: SiPostgresql, color: '#4169E1' },
  { name: 'Cloudinary CDN', detail: 'Media Pipelines & CDN Delivery', icon: SiCloudinary, color: '#3448C5' },
  { name: 'Vercel & Render', detail: 'Continuous Deployment & Edge', icon: SiVercel, color: '#38bdf8' },
];

const csPills = [
  { name: 'C++', detail: 'OOP, Pointers, Memory Control', icon: SiCplusplus, color: '#00599C' },
  { name: 'Data Structures', detail: 'Trees, Graphs, Hash Maps, Heaps', icon: HiOutlineCpuChip, color: '#8B5CF6' },
  { name: 'Algorithmic Optimization', detail: 'Time & Space Complexity', icon: HiOutlineBolt, color: '#EAB308' },
  { name: 'Clean Architecture', detail: 'Modularity, SOLID Design', icon: HiOutlineCheckCircle, color: '#10B981' },
];

const toolPills = [
  { name: 'Git & GitHub', detail: 'Branching, PRs, Version Control', icon: SiGithub, color: '#8B5CF6' },
  { name: 'Postman', detail: 'API Debugging & Test Collections', icon: SiPostman, color: '#FF6C37' },
  { name: 'Vite Tooling', detail: 'Lightning HMR & Rollup Bundles', icon: SiVite, color: '#646CFF' },
  { name: 'CLI & Automation', detail: 'Shell Scripting & Workflows', icon: HiOutlineCommandLine, color: '#06B6D4' },
];

const SkillsV2Bento = () => {
  return (
    <div className="w-full relative">
      {/* Dynamic Ambient Background Glows */}
      <motion.div 
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.35, 0.6, 0.35],
          x: [0, 20, 0],
          y: [0, -15, 0]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 left-1/4 w-72 sm:w-80 h-72 bg-blue-500/[0.06] dark:bg-blue-400/[0.04] rounded-full blur-3xl pointer-events-none" 
      />
      <motion.div 
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.55, 0.3],
          x: [0, -25, 0],
          y: [0, 20, 0]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-0 right-1/4 w-72 sm:w-80 h-72 bg-cyan-400/[0.06] dark:bg-cyan-500/[0.04] rounded-full blur-3xl pointer-events-none" 
      />

      {/* Top Stat Counters Row with Interactive Replays */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8 w-full max-w-6xl mx-auto relative z-10">
        <motion.div 
          whileHover={{ y: -3, scale: 1.015 }}
          className="panel-liquid-glass rounded-2xl p-4 sm:p-5 flex items-center justify-between group hover:shadow-xl transition-all duration-300 relative overflow-hidden"
        >
          <div className="relative z-10 flex flex-col">
            <AnimatedStatCounter target={17} suffix="+" />
            <span className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">Production Tech & Tools</span>
          </div>
          <div className="relative z-10 p-3 rounded-xl bg-blue-500/10 text-blue-600 dark:text-sky-400 group-hover:scale-110 transition-transform">
            <HiOutlineSparkles className="w-6 h-6" />
          </div>
          <div className="circle-overlay pointer-events-none"></div>
        </motion.div>

        <motion.div 
          whileHover={{ y: -3, scale: 1.015 }}
          className="panel-liquid-glass rounded-2xl p-4 sm:p-5 flex items-center justify-between group hover:shadow-xl transition-all duration-300 relative overflow-hidden"
        >
          <div className="relative z-10 flex flex-col">
            <AnimatedStatCounter target={4} suffix=" Pillars" />
            <span className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">Frontend, Backend, DB & Systems</span>
          </div>
          <div className="relative z-10 p-3 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 group-hover:scale-110 transition-transform">
            <HiOutlineCpuChip className="w-6 h-6" />
          </div>
          <div className="circle-overlay pointer-events-none"></div>
        </motion.div>

        <motion.div 
          whileHover={{ y: -3, scale: 1.015 }}
          className="panel-liquid-glass rounded-2xl p-4 sm:p-5 flex items-center justify-between group hover:shadow-xl transition-all duration-300 relative overflow-hidden"
        >
          <div className="relative z-10 flex flex-col">
            <AnimatedStatCounter target={100} suffix="%" duration={1.6} />
            <span className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">Production Focus & Code Rigor</span>
          </div>
          <div className="relative z-10 p-3 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform">
            <HiOutlineArrowPath className="w-6 h-6" />
          </div>
          <div className="circle-overlay pointer-events-none"></div>
        </motion.div>
      </div>

      {/* Bento Grid Canvas */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 w-full max-w-6xl mx-auto relative z-10">
        
        {/* CARD 1: Frontend Engineering & Interactive UI (Span 7) */}
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -6, transition: { duration: 0.25 } }}
          transition={{ duration: 0.45 }}
          className="lg:col-span-7 panel-liquid-glass rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group hover:shadow-2xl transition-shadow duration-300"
        >
          {/* Dynamic Ambient Hover Sheen */}
          <motion.div 
            animate={{ scale: [1, 1.1, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-16 -right-16 w-52 h-52 bg-cyan-500/10 dark:bg-cyan-400/10 rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-700" 
          />

          <div className="relative z-10">
            {/* Pill Badge */}
            <div className="flex items-center justify-between mb-4">
              <motion.div 
                whileHover={{ scale: 1.03 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/[0.04] dark:bg-white/[0.08] border border-slate-900/[0.08] dark:border-white/[0.12] text-xs font-semibold text-blue-600 dark:text-sky-400 backdrop-blur-xl cursor-default"
              >
                <HiOutlinePaintBrush className="w-3.5 h-3.5 text-blue-500 dark:text-sky-300" />
                <span>Frontend Architecture</span>
              </motion.div>
              <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-blue-500/10 dark:bg-sky-400/10 text-blue-700 dark:text-sky-300 border border-blue-500/20">
                Core Specialty
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-950 dark:text-white leading-[1.2] mb-3 font-display">
              Crafting fluid, high-fidelity{' '}
              <span className="bg-gradient-to-r from-[#0071e3] via-[#0284c7] to-[#0055b3] dark:from-sky-400 dark:via-blue-300 dark:to-indigo-300 bg-clip-text text-transparent">
                web interfaces & animations.
              </span>
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal mb-5">
              Transforming complex product workflows into lightning-fast, accessible, and delightful interactive applications with modern React, Next.js 15, and Tailwind systems.
            </p>

            {/* Interactive Tech Pill Stack */}
            <div className="space-y-2 mb-6">
              {frontendPills.map((tech) => {
                const Icon = tech.icon;
                return (
                  <motion.div
                    key={tech.name}
                    whileHover={{ x: 6, scale: 1.015 }}
                    transition={{ duration: 0.2 }}
                    className="group/pill p-2.5 sm:p-3 rounded-2xl bg-white/60 dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/[0.08] hover:border-cyan-500/40 dark:hover:border-cyan-400/40 hover:bg-white/90 dark:hover:bg-white/[0.08] transition-all duration-200 backdrop-blur-md shadow-sm cursor-default"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <span className="p-1.5 rounded-lg bg-slate-100 dark:bg-white/[0.06] text-base" style={{ color: tech.color }}>
                          <Icon />
                        </span>
                        <span className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-slate-100">
                          {tech.name}
                        </span>
                      </div>
                      <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium hidden sm:inline-block">
                        {tech.detail}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Footer Metrics Row */}
          <div className="relative z-10 grid grid-cols-3 gap-2 sm:gap-3 pt-4 border-t border-slate-200/80 dark:border-white/10">
            <motion.div whileHover={{ y: -3, scale: 1.04 }} className="flex flex-col cursor-default">
              <span className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">5+ Frameworks</span>
              <span className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium">UI Ecosystem</span>
            </motion.div>
            <motion.div whileHover={{ y: -3, scale: 1.04 }} className="flex flex-col cursor-default">
              <span className="text-lg sm:text-xl font-bold text-blue-600 dark:text-sky-400">60 FPS</span>
              <span className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium">Fluid Physics</span>
            </motion.div>
            <motion.div whileHover={{ y: -3, scale: 1.04 }} className="flex flex-col cursor-default">
              <span className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">100%</span>
              <span className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium">Responsive</span>
            </motion.div>
          </div>

          <div className="circle-overlay pointer-events-none"></div>
        </motion.div>

        {/* CARD 2: Backend Architecture & Scalable APIs (Span 5) */}
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -6, transition: { duration: 0.25 } }}
          transition={{ duration: 0.45, delay: 0.08 }}
          className="lg:col-span-5 panel-liquid-glass rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group hover:shadow-2xl transition-shadow duration-300"
        >
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-blue-500/10 dark:bg-blue-400/15 border border-blue-500/20 text-blue-600 dark:text-sky-400">
                  <HiOutlineCommandLine className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
                  Backend & Systems
                </h4>
              </div>
              {/* Live Pulse Beacon */}
              <motion.span 
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 backdrop-blur-md cursor-default"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Active Runtime
              </motion.span>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-5 leading-relaxed">
              Designing scalable microservices, authenticated REST routes, and robust asynchronous Python logic for resilient application backends.
            </p>

            {/* Interactive Tech Pill Stack */}
            <div className="space-y-2.5">
              {backendPills.map((tech) => {
                const Icon = tech.icon;
                return (
                  <motion.div
                    key={tech.name}
                    whileHover={{ x: 6, scale: 1.015 }}
                    transition={{ duration: 0.2 }}
                    className="group/pill p-3 rounded-2xl bg-white/60 dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/[0.08] hover:border-blue-500/40 dark:hover:border-sky-400/40 hover:bg-white/90 dark:hover:bg-white/[0.08] transition-all duration-200 backdrop-blur-md shadow-sm cursor-default"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <span className="p-1.5 rounded-lg bg-slate-100 dark:bg-white/[0.06] text-base" style={{ color: tech.color }}>
                          <Icon />
                        </span>
                        <span className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-slate-100">
                          {tech.name}
                        </span>
                      </div>
                      <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium hidden sm:inline-block">
                        {tech.detail}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Subtext info */}
          <div className="relative z-10 mt-5 pt-4 border-t border-slate-200/80 dark:border-white/10 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
            <span>Architecture Standard</span>
            <span className="font-semibold text-blue-600 dark:text-sky-400 flex items-center gap-1">
              <HiOutlineArrowsRightLeft className="w-3.5 h-3.5" /> RESTful & Async I/O
            </span>
          </div>

          <div className="circle-overlay pointer-events-none"></div>
        </motion.div>

        {/* CARD 3: Databases & Cloud Infrastructure (Span 4) */}
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -6, transition: { duration: 0.25 } }}
          transition={{ duration: 0.45, delay: 0.12 }}
          className="lg:col-span-4 panel-liquid-glass rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden group hover:shadow-2xl transition-shadow duration-300"
        >
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2.5 rounded-2xl bg-emerald-500/10 dark:bg-emerald-400/15 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 group-hover:scale-105 transition-transform">
                <HiOutlineCircleStack className="w-6 h-6" />
              </div>
              <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-500/10 dark:bg-emerald-400/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20">
                Persistence
              </span>
            </div>

            <span className="text-xs uppercase font-bold tracking-wider text-slate-500 dark:text-slate-400 block mb-1">
              Data & Cloud
            </span>
            <h4 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight mb-3">
              Databases & Cloud
            </h4>

            <div className="space-y-2">
              {dbCloudPills.map((tech) => {
                const Icon = tech.icon;
                return (
                  <motion.div 
                    key={tech.name}
                    whileHover={{ x: 4, scale: 1.015 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-white/60 dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/[0.08] hover:border-emerald-500/30 transition-colors cursor-default"
                  >
                    <div className="flex items-center gap-2">
                      <span className="p-1 rounded-lg bg-slate-100 dark:bg-white/[0.06] text-sm" style={{ color: tech.color }}>
                        <Icon />
                      </span>
                      <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                        {tech.name}
                      </span>
                    </div>
                    <span className="text-[10px] font-medium text-slate-500 dark:text-slate-400">
                      {tech.detail.split(',')[0]}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div className="relative z-10 mt-5 pt-4 border-t border-slate-200/80 dark:border-white/10 flex items-center gap-2 text-xs text-emerald-700 dark:text-emerald-400 font-medium">
            <HiOutlineCheckCircle className="w-4 h-4 text-emerald-500" />
            <span>High Availability & Edge Delivery</span>
          </div>

          <div className="circle-overlay pointer-events-none"></div>
        </motion.div>

        {/* CARD 4: Computer Science & Algorithmic Rigor (Span 4) */}
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -6, transition: { duration: 0.25 } }}
          transition={{ duration: 0.45, delay: 0.16 }}
          className="lg:col-span-4 panel-liquid-glass rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden group hover:shadow-2xl transition-shadow duration-300"
        >
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2.5 rounded-2xl bg-purple-500/10 dark:bg-purple-400/15 border border-purple-500/20 text-purple-600 dark:text-purple-400 group-hover:scale-105 transition-transform">
                <HiOutlineCpuChip className="w-6 h-6" />
              </div>
              <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-purple-500/10 dark:bg-purple-400/10 text-purple-700 dark:text-purple-300 border border-purple-500/20">
                Foundations
              </span>
            </div>

            <span className="text-xs uppercase font-bold tracking-wider text-slate-500 dark:text-slate-400 block mb-1">
              Computer Science
            </span>
            <h4 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight mb-3">
              Algorithms & Core CS
            </h4>

            <div className="space-y-2">
              {csPills.map((tech) => {
                const Icon = tech.icon;
                return (
                  <motion.div 
                    key={tech.name}
                    whileHover={{ x: 4, scale: 1.015 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-white/60 dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/[0.08] hover:border-purple-500/30 transition-colors cursor-default"
                  >
                    <div className="flex items-center gap-2">
                      <span className="p-1 rounded-lg bg-slate-100 dark:bg-white/[0.06] text-sm" style={{ color: tech.color }}>
                        <Icon />
                      </span>
                      <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                        {tech.name}
                      </span>
                    </div>
                    <span className="text-[10px] font-medium text-slate-500 dark:text-slate-400">
                      {tech.detail.split(',')[0]}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div className="relative z-10 mt-5 pt-4 border-t border-slate-200/80 dark:border-white/10 flex items-center gap-2 text-xs text-purple-700 dark:text-purple-400 font-medium">
            <HiOutlineCheckCircle className="w-4 h-4 text-purple-500" />
            <span>Analytical Problem-Solving Focus</span>
          </div>

          <div className="circle-overlay pointer-events-none"></div>
        </motion.div>

        {/* CARD 5: Modern Tooling & Developer Workflows (Span 4) */}
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -6, transition: { duration: 0.25 } }}
          transition={{ duration: 0.45, delay: 0.2 }}
          className="lg:col-span-4 panel-liquid-glass rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden group bg-gradient-to-br from-blue-600/[0.06] to-cyan-500/[0.06] dark:from-blue-500/[0.1] dark:to-cyan-400/[0.05] hover:shadow-2xl transition-shadow duration-300"
        >
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2.5 rounded-2xl bg-blue-500/15 dark:bg-sky-400/20 border border-blue-500/25 text-blue-600 dark:text-sky-300 group-hover:scale-105 group-hover:rotate-6 transition-transform">
                <HiOutlineWrenchScrewdriver className="w-6 h-6" />
              </div>
              <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-blue-500/10 dark:bg-blue-400/10 text-blue-700 dark:text-sky-300 border border-blue-500/20">
                Toolchain
              </span>
            </div>

            <span className="text-xs uppercase font-bold tracking-wider text-slate-500 dark:text-slate-400 block mb-1">
              Workflow
            </span>
            <h4 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight mb-3">
              Developer Workflow
            </h4>

            <div className="space-y-2">
              {toolPills.map((tech) => {
                const Icon = tech.icon;
                return (
                  <motion.div 
                    key={tech.name}
                    whileHover={{ x: 4, scale: 1.015 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-white/60 dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/[0.08] hover:border-blue-500/30 transition-colors cursor-default"
                  >
                    <div className="flex items-center gap-2">
                      <span className="p-1 rounded-lg bg-slate-100 dark:bg-white/[0.06] text-sm" style={{ color: tech.color }}>
                        <Icon />
                      </span>
                      <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                        {tech.name}
                      </span>
                    </div>
                    <span className="text-[10px] font-medium text-slate-500 dark:text-slate-400">
                      {tech.detail.split(',')[0]}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div className="relative z-10 mt-5 pt-4 border-t border-slate-200/80 dark:border-white/10 flex items-center gap-2 text-xs text-blue-700 dark:text-sky-400 font-medium">
            <HiOutlineCheckCircle className="w-4 h-4 text-blue-500" />
            <span>Fast Feedback & CI/CD Pipelines</span>
          </div>

          <div className="circle-overlay pointer-events-none"></div>
        </motion.div>

      </div>
    </div>
  );
};

/* =========================================================================
   MAIN SKILLS COMPONENT
   ========================================================================= */
const Skills = ({ portfolioVersion = 'v2' }) => {
  return (
    <div className="w-full relative">
      {portfolioVersion === 'v1' ? (
        <SkillsV1Grid />
      ) : (
        <SkillsV2Bento />
      )}
    </div>
  );
};

export default Skills;