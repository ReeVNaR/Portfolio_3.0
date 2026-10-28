import { useEffect, useRef, useState, useMemo } from 'react';
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
  HiOutlineArrowPath 
} from 'react-icons/hi2';

/* =========================================================================
   V1 CLASSIC SKILLS DATA & COMPONENT (Preserved for backwards compatibility)
   ========================================================================= */
const skillsV1 = [
  { name: 'React', icon: <SiReact className="text-[#61DAFB]" />, level: 40, color: 'text-cyan-400' },
  { name: 'JavaScript', icon: <SiJavascript className="text-[#F7DF1E]" />, level: 60, color: 'text-yellow-400' },
  { name: 'HTML/CSS', icon: <SiHtml5 className="text-[#E34F26]" />, level: 70, color: 'text-red-500' },
  { name: 'Node.js', icon: <SiNodedotjs className="text-[#339933]" />, level: 30, color: 'text-green-700' },
  { name: 'Git', icon: <SiGit className="text-[#F05032]" />, level: 50, color: 'text-orange-500' },
  { name: 'Python', icon: <SiPython className="text-[#3776AB]" />, level: 40, color: 'text-blue-400' },
  { name: 'MongoDB', icon: <SiMongodb className="text-[#47A248]" />, level: 40, color: 'text-lime-500' },
  { name: 'C++', icon: <SiCplusplus className="text-[#00599C]" />, level: 30, color: 'text-blue-800' },
];

const SkillBarV1 = ({ name, level, icon, color }) => {
  const barRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5, rootMargin: '-50px' }
    );

    if (barRef.current) {
      observer.observe(barRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={barRef} className="group relative aspect-square p-4 backdrop-blur-sm bg-white dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-300 shadow-lg hover:shadow-xl">
      <div className="h-full flex flex-col items-center justify-center space-y-4">
        <div className="relative w-16 h-16 sm:w-20 sm:h-20">
          <svg className="w-full h-full transform -rotate-90 absolute" viewBox="0 0 96 96">
            <circle
              className="text-gray-200 dark:text-gray-700/50"
              strokeWidth="6"
              stroke="currentColor"
              fill="transparent"
              r="42"
              cx="48"
              cy="48"
            />
            <circle
              className={`${color}`}
              strokeWidth="6"
              strokeDasharray={`${isVisible ? level * 2.64 : 0} 264`}
              strokeLinecap="round"
              stroke="currentColor"
              fill="transparent"
              r="42"
              cx="48"
              cy="48"
              style={{ transition: 'stroke-dasharray 1.5s ease-out' }}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xl md:text-3xl transform group-hover:scale-110 transition-transform duration-300">{icon}</span>
          </div>
        </div>
        <div className="text-center space-y-2">
          <span className="text-sm sm:text-base font-semibold text-gray-700 dark:text-gray-200">{name}</span>
        </div>
      </div>
    </div>
  );
};

/* =========================================================================
   V2 ADVANCED BENTO SKILLS DATA & MODERN COMPONENTS
   ========================================================================= */
const skillsV2 = [
  // Frontend Engineering
  {
    id: 'react',
    name: 'React.js',
    category: 'frontend',
    level: 88,
    status: 'Core Stack',
    icon: SiReact,
    brandColor: '#61DAFB',
    accentGradient: 'from-cyan-400 to-blue-500',
    tags: ['Hooks & Context', 'Component Architecture', 'SPA State']
  },
  {
    id: 'javascript',
    name: 'JavaScript (ES6+)',
    category: 'frontend',
    level: 90,
    status: 'Advanced',
    icon: SiJavascript,
    brandColor: '#F7DF1E',
    accentGradient: 'from-yellow-400 to-amber-500',
    tags: ['Async / Await', 'DOM Manipulation', 'Event Loop', 'Closures']
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    category: 'frontend',
    level: 92,
    status: 'Advanced',
    icon: SiTailwindcss,
    brandColor: '#38BDF8',
    accentGradient: 'from-sky-400 to-cyan-500',
    tags: ['Fluid Responsive', 'Bento Layouts', 'Glassmorphism']
  },
  {
    id: 'nextjs',
    name: 'Next.js 15',
    category: 'frontend',
    level: 80,
    status: 'Active R&D',
    icon: SiNextdotjs,
    brandColor: '#38bdf8',
    accentGradient: 'from-sky-500 to-indigo-600',
    tags: ['App Router', 'Server Actions', 'SSR & SSG', 'SEO']
  },
  {
    id: 'html-css',
    name: 'HTML5 & CSS3',
    category: 'frontend',
    level: 94,
    status: 'Advanced',
    icon: SiHtml5,
    brandColor: '#E34F26',
    accentGradient: 'from-orange-500 to-red-500',
    tags: ['Semantic Web', 'Flexbox & CSS Grid', 'Custom Keyframes']
  },

  // Backend & APIs
  {
    id: 'nodejs',
    name: 'Node.js',
    category: 'backend',
    level: 84,
    status: 'Core Stack',
    icon: SiNodedotjs,
    brandColor: '#339933',
    accentGradient: 'from-green-500 to-emerald-600',
    tags: ['Asynchronous Runtime', 'npm Ecosystem', 'File Streams']
  },
  {
    id: 'express',
    name: 'Express.js',
    category: 'backend',
    level: 86,
    status: 'Core Stack',
    icon: SiExpress,
    brandColor: '#60A5FA',
    accentGradient: 'from-blue-500 to-indigo-600',
    tags: ['RESTful Routing', 'Middleware Pipelines', 'JWT Authentication']
  },
  {
    id: 'python',
    name: 'Python',
    category: 'backend',
    level: 82,
    status: 'Proficient',
    icon: SiPython,
    brandColor: '#3776AB',
    accentGradient: 'from-blue-500 to-amber-500',
    tags: ['Automation Scripts', 'Backend Logic', 'AI/ML Systems']
  },
  {
    id: 'rest-apis',
    name: 'REST Architecture',
    category: 'backend',
    level: 88,
    status: 'Advanced',
    icon: HiOutlineCommandLine,
    brandColor: '#8B5CF6',
    accentGradient: 'from-purple-500 to-indigo-500',
    tags: ['Endpoint Contracts', 'Status Codes', 'JSON Payloads', 'CORS']
  },

  // Databases & Cloud
  {
    id: 'mongodb',
    name: 'MongoDB',
    category: 'databases',
    level: 85,
    status: 'Core Stack',
    icon: SiMongodb,
    brandColor: '#47A248',
    accentGradient: 'from-emerald-500 to-green-600',
    tags: ['Mongoose Schemas', 'Atlas Cloud', 'Aggregations', 'Indexes']
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL & SQL',
    category: 'databases',
    level: 74,
    status: 'Proficient',
    icon: SiPostgresql,
    brandColor: '#4169E1',
    accentGradient: 'from-blue-600 to-cyan-600',
    tags: ['Relational Data', 'Complex Queries', 'Foreign Keys', 'ACID']
  },
  {
    id: 'cloudinary',
    name: 'Cloudinary CDN',
    category: 'databases',
    level: 85,
    status: 'Production',
    icon: SiCloudinary,
    brandColor: '#3448C5',
    accentGradient: 'from-indigo-500 to-blue-500',
    tags: ['Asset Storage', 'Dynamic Transforms', 'Image Delivery']
  },
  {
    id: 'vercel-render',
    name: 'Vercel & Render',
    category: 'databases',
    level: 88,
    status: 'Production',
    icon: SiVercel,
    brandColor: '#38bdf8',
    accentGradient: 'from-cyan-500 to-blue-600',
    tags: ['Continuous Deployment', 'Edge CDN', 'Environment Config']
  },

  // Tools & Systems
  {
    id: 'git-github',
    name: 'Git & GitHub',
    category: 'tools',
    level: 88,
    status: 'Core Stack',
    icon: SiGithub,
    brandColor: '#8B5CF6',
    accentGradient: 'from-purple-500 to-pink-500',
    tags: ['Version Control', 'Pull Requests', 'Branch Strategies']
  },
  {
    id: 'postman',
    name: 'Postman',
    category: 'tools',
    level: 85,
    status: 'Proficient',
    icon: SiPostman,
    brandColor: '#FF6C37',
    accentGradient: 'from-orange-500 to-amber-600',
    tags: ['API Debugging', 'Automated Testing', 'Collection Runners']
  },
  {
    id: 'cpp',
    name: 'C++',
    category: 'tools',
    level: 76,
    status: 'Academic & CS',
    icon: SiCplusplus,
    brandColor: '#00599C',
    accentGradient: 'from-blue-600 to-sky-600',
    tags: ['Data Structures', 'Algorithms', 'OOP Foundations']
  },
  {
    id: 'vite',
    name: 'Vite & Tooling',
    category: 'tools',
    level: 90,
    status: 'Advanced',
    icon: SiVite,
    brandColor: '#646CFF',
    accentGradient: 'from-purple-500 to-indigo-500',
    tags: ['Lightning HMR', 'Rollup Bundles', 'Module Resolution']
  }
];

const categories = [
  { id: 'all', label: 'All Stack', icon: HiOutlineSparkles },
  { id: 'frontend', label: 'Frontend', icon: HiOutlinePaintBrush },
  { id: 'backend', label: 'Backend', icon: HiOutlineCommandLine },
  { id: 'databases', label: 'Databases & Cloud', icon: HiOutlineCircleStack },
  { id: 'tools', label: 'Tools & Core', icon: HiOutlineWrenchScrewdriver },
];

/* Dynamic Animated Count-Up Component */
const AnimatedCountUp = ({ target = 17, suffix = "+", duration = 1.4 }) => {
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

/* Fluid Animated Skill Meter Bar */
const AnimatedSkillMeter = ({ level, gradient = 'from-blue-500 to-cyan-500' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-20px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) {
      setDisplayValue(0);
      return;
    }

    const controls = animate(0, level, {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => setDisplayValue(Math.floor(latest))
    });

    return () => controls.stop();
  }, [isInView, level]);

  return (
    <div ref={ref} className="w-full space-y-1.5">
      <div className="flex items-center justify-between text-[11px] font-semibold text-slate-500 dark:text-slate-400">
        <span>Proficiency</span>
        <span className="font-mono text-slate-800 dark:text-slate-200">{displayValue}%</span>
      </div>
      <div className="h-1.5 sm:h-2 w-full bg-slate-200/80 dark:bg-white/[0.08] rounded-full overflow-hidden p-[1px]">
        <motion.div
          className={`h-full rounded-full bg-gradient-to-r ${gradient}`}
          initial={{ width: '0%' }}
          animate={{ width: isInView ? `${level}%` : '0%' }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
    </div>
  );
};

/* =========================================================================
   MAIN SKILLS COMPONENT WITH DUAL V1/V2 RENDERING
   ========================================================================= */
const Skills = ({ portfolioVersion = 'v2' }) => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills = useMemo(() => {
    if (activeCategory === 'all') return skillsV2;
    return skillsV2.filter(skill => skill.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="w-full relative">
      <AnimatePresence mode="wait">
        {portfolioVersion === 'v1' ? (
          /* V1 Classic Skills Layout */
          <motion.div
            key="skills-v1"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="max-w-6xl mx-auto"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 px-4">
              {skillsV1.map((skill) => (
                <SkillBarV1 key={skill.name} {...skill} />
              ))}
            </div>
          </motion.div>
        ) : (
          /* V2 Modern Liquid Glass Bento Skills Layout */
          <motion.div
            key="skills-v2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-7xl mx-auto"
          >
            {/* Top Stat Counters Row with Interactive Replays */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
              <motion.div 
                whileHover={{ y: -3, scale: 1.015 }}
                className="panel-liquid-glass rounded-2xl p-4 sm:p-5 flex items-center justify-between group hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              >
                <div className="relative z-10 flex flex-col">
                  <AnimatedCountUp target={17} suffix="+" />
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
                  <AnimatedCountUp target={4} suffix=" Pillars" />
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
                  <AnimatedCountUp target={100} suffix="%" duration={1.6} />
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">Continuous Improvement & Rigor</span>
                </div>
                <div className="relative z-10 p-3 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform">
                  <HiOutlineArrowPath className="w-6 h-6" />
                </div>
                <div className="circle-overlay pointer-events-none"></div>
              </motion.div>
            </div>

            {/* Category Filter Pills with Tactile Physics */}
            <div className="flex items-center justify-center mb-6 sm:mb-8 overflow-x-auto hide-scrollbar py-1">
              <div className="flex items-center gap-1.5 sm:gap-2 p-1.5 rounded-2xl panel-liquid-glass border border-slate-200/80 dark:border-white/10 shadow-sm backdrop-blur-md">
                {categories.map((cat) => {
                  const Icon = cat.icon;
                  const isActive = activeCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setActiveCategory(cat.id)}
                      className={`relative px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors duration-200 flex items-center gap-1.5 whitespace-nowrap select-none ${
                        isActive 
                          ? 'text-white dark:text-slate-900' 
                          : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="skills-active-tab"
                          className="absolute inset-0 rounded-xl bg-slate-900 dark:bg-white shadow-md"
                          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                        />
                      )}
                      <span className="relative z-10 flex items-center gap-1.5">
                        <Icon className="w-4 h-4" />
                        <span>{cat.label}</span>
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Skills Bento Grid with Animated Stagger Cards */}
            <motion.div 
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5 sm:gap-4"
            >
              <AnimatePresence mode="popLayout">
                {filteredSkills.map((skill) => {
                  const SkillIcon = skill.icon;
                  return (
                    <motion.div
                      key={skill.id}
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.92 }}
                      whileHover={{ y: -4, scale: 1.015 }}
                      transition={{ duration: 0.25 }}
                      className="panel-liquid-glass rounded-2xl p-4 sm:p-5 flex flex-col justify-between group hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
                    >
                      <div className="relative z-10">
                        {/* Header: Icon + Status Pill */}
                        <div className="flex items-center justify-between mb-3.5">
                          <div 
                            className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/[0.06] border border-slate-200/80 dark:border-white/10 group-hover:scale-110 transition-transform duration-300 shadow-sm"
                            style={{ color: skill.brandColor }}
                          >
                            <SkillIcon className="w-6 h-6" />
                          </div>
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wide uppercase bg-blue-500/10 dark:bg-sky-400/10 text-blue-700 dark:text-sky-300 border border-blue-500/20 backdrop-blur-sm">
                            {skill.status}
                          </span>
                        </div>

                        {/* Title */}
                        <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white tracking-tight mb-2.5">
                          {skill.name}
                        </h4>

                        {/* Concept Tags */}
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {skill.tags.map((tag) => (
                            <span 
                              key={tag}
                              className="text-[10px] sm:text-[11px] px-2 py-0.5 rounded-md bg-white/70 dark:bg-white/[0.04] text-slate-600 dark:text-slate-300 border border-slate-200/60 dark:border-white/[0.06] font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Animated Proficiency Meter */}
                      <div className="relative z-10 pt-3 border-t border-slate-200/70 dark:border-white/10">
                        <AnimatedSkillMeter level={skill.level} gradient={skill.accentGradient} />
                      </div>

                      <div className="circle-overlay pointer-events-none"></div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </motion.div>

            {/* Active R&D / Continuous Exploration Spotlight Banner */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="panel-liquid-glass rounded-2xl p-4 sm:p-5 mt-6 sm:mt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border border-blue-500/20 bg-gradient-to-r from-blue-500/[0.05] via-transparent to-cyan-500/[0.05]"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-600 dark:text-sky-400">
                  <HiOutlineCpuChip className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h5 className="text-sm font-bold text-slate-900 dark:text-white">Active Exploration & Architecture Focus</h5>
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                    Expanding expertise across Next.js 15 Server Actions, AI agent architectures, and distributed full-stack systems.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 flex-wrap">
                {['Next.js 15', 'AI Models', 'Full-Stack MERN', 'Tailwind Bento'].map((pill) => (
                  <span 
                    key={pill} 
                    className="px-2.5 py-1 rounded-full text-xs font-semibold bg-white/80 dark:bg-white/[0.06] text-blue-700 dark:text-sky-300 border border-blue-500/20 shadow-sm"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Skills;