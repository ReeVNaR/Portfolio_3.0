import { useEffect, useRef, useState, useMemo } from 'react';
import { motion, animate, AnimatePresence } from 'framer-motion';
import {
  SiReact,
  SiJavascript,
  SiNodedotjs,
  SiHtml5,
  SiGit,
  SiMongodb,
  SiPython,
  SiCplusplus
} from 'react-icons/si';

const skillsData = [
  {
    name: 'React',
    category: 'Frontend',
    icon: <SiReact />,
    level: 88,
    tier: 'Advanced',
    focus: 'UI Architecture & Custom Hooks',
    gradient: 'from-cyan-400 via-sky-500 to-blue-600',
    glowColor: 'rgba(6, 182, 212, 0.28)',
    iconBg: 'bg-cyan-50 dark:bg-cyan-950/40',
    iconBorder: 'border-cyan-200/80 dark:border-cyan-800/60',
    iconColor: 'text-[#00D8FF] dark:text-[#38BDF8]',
    dotColor: '#06b6d4',
  },
  {
    name: 'JavaScript',
    category: 'Language',
    icon: <SiJavascript />,
    level: 90,
    tier: 'Expert',
    focus: 'ES6+, Async Architecture & DOM APIs',
    gradient: 'from-amber-400 via-yellow-500 to-orange-500',
    glowColor: 'rgba(245, 158, 11, 0.28)',
    iconBg: 'bg-amber-50 dark:bg-amber-950/40',
    iconBorder: 'border-amber-200/80 dark:border-amber-800/60',
    iconColor: 'text-amber-500 dark:text-yellow-400',
    dotColor: '#f59e0b',
  },
  {
    name: 'HTML/CSS',
    category: 'Frontend',
    icon: <SiHtml5 />,
    level: 92,
    tier: 'Expert',
    focus: 'Semantic Structure & Modern Responsive Layouts',
    gradient: 'from-orange-500 via-rose-500 to-red-500',
    glowColor: 'rgba(244, 63, 94, 0.28)',
    iconBg: 'bg-orange-50 dark:bg-orange-950/40',
    iconBorder: 'border-orange-200/80 dark:border-orange-800/60',
    iconColor: 'text-[#E34F26] dark:text-rose-400',
    dotColor: '#f43f5e',
  },
  {
    name: 'Node.js',
    category: 'Backend',
    icon: <SiNodedotjs />,
    level: 84,
    tier: 'Advanced',
    focus: 'RESTful APIs & Event-Driven Services',
    gradient: 'from-emerald-400 via-green-500 to-teal-600',
    glowColor: 'rgba(34, 197, 94, 0.28)',
    iconBg: 'bg-emerald-50 dark:bg-emerald-950/40',
    iconBorder: 'border-emerald-200/80 dark:border-emerald-800/60',
    iconColor: 'text-[#22C55E] dark:text-emerald-400',
    dotColor: '#22c55e',
  },
  {
    name: 'Git',
    category: 'DevOps',
    icon: <SiGit />,
    level: 88,
    tier: 'Advanced',
    focus: 'Branching Strategies, CI/CD & GitHub',
    gradient: 'from-orange-500 via-red-500 to-rose-600',
    glowColor: 'rgba(239, 68, 68, 0.28)',
    iconBg: 'bg-red-50 dark:bg-red-950/40',
    iconBorder: 'border-red-200/80 dark:border-red-800/60',
    iconColor: 'text-[#F05032] dark:text-red-400',
    dotColor: '#ef4444',
  },
  {
    name: 'Python',
    category: 'Language',
    icon: <SiPython />,
    level: 82,
    tier: 'Proficient',
    focus: 'Automation, ML Models & Scripting',
    gradient: 'from-sky-400 via-blue-500 to-indigo-600',
    glowColor: 'rgba(56, 189, 248, 0.28)',
    iconBg: 'bg-sky-50 dark:bg-sky-950/40',
    iconBorder: 'border-sky-200/80 dark:border-sky-800/60',
    iconColor: 'text-[#0284C7] dark:text-[#38BDF8]',
    dotColor: '#0284c7',
  },
  {
    name: 'MongoDB',
    category: 'Database',
    icon: <SiMongodb />,
    level: 85,
    tier: 'Advanced',
    focus: 'Document Modeling, Indexes & Pipelines',
    gradient: 'from-green-400 via-emerald-500 to-teal-600',
    glowColor: 'rgba(16, 185, 129, 0.28)',
    iconBg: 'bg-emerald-50 dark:bg-emerald-950/40',
    iconBorder: 'border-emerald-200/80 dark:border-emerald-800/60',
    iconColor: 'text-[#10B981] dark:text-emerald-400',
    dotColor: '#10b981',
  },
  {
    name: 'C++',
    category: 'Core',
    icon: <SiCplusplus />,
    level: 78,
    tier: 'Proficient',
    focus: 'Data Structures, OOP & Performance Computing',
    gradient: 'from-blue-500 via-indigo-500 to-violet-600',
    glowColor: 'rgba(59, 130, 246, 0.28)',
    iconBg: 'bg-blue-50 dark:bg-blue-950/40',
    iconBorder: 'border-blue-200/80 dark:border-blue-800/60',
    iconColor: 'text-[#00599C] dark:text-blue-400',
    dotColor: '#3b82f6',
  },
];

const categories = [
  { id: 'all', label: 'All Technologies' },
  { id: 'Frontend', label: 'Frontend' },
  { id: 'Backend', label: 'Backend & DB' },
  { id: 'Language', label: 'Languages & Core' },
];

/* Dynamic Rolling Percentage Counter */
const RollingPercent = ({ value, isVisible }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!isVisible) {
      setCurrent(0);
      return;
    }
    const controls = animate(0, value, {
      duration: 1.3,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => setCurrent(Math.floor(latest))
    });
    return () => controls.stop();
  }, [isVisible, value]);

  return <span className="tabular-nums font-mono">{current}%</span>;
};

const SkillCard = ({
  name,
  category,
  icon,
  level,
  tier,
  focus,
  gradient,
  glowColor,
  iconBg,
  iconBorder,
  iconColor,
  dotColor,
}) => {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.15, rootMargin: '0px' }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleReplay = (e) => {
    e?.stopPropagation?.();
    setIsVisible(false);
    setTimeout(() => setIsVisible(true), 40);
  };

  return (
    <motion.div
      ref={cardRef}
      onClick={handleReplay}
      whileHover={{ y: -5, scale: 1.015 }}
      transition={{ duration: 0.22 }}
      className="group relative rounded-3xl p-5 sm:p-6 bg-white/85 dark:bg-slate-900/85 backdrop-blur-2xl border border-white/80 dark:border-white/12 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.06),inset_0_1px_1px_rgba(255,255,255,1)] dark:shadow-[0_14px_38px_-5px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.08)] transition-all duration-300 cursor-pointer select-none overflow-hidden flex flex-col justify-between"
      title="Click to replay animation"
    >
      {/* Ambient Radial Hover Glow */}
      <div
        className="absolute -inset-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none blur-2xl"
        style={{
          background: `radial-gradient(circle at 50% 25%, ${glowColor} 0%, transparent 70%)`,
        }}
      />

      {/* Top Specular Rim Light */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/90 dark:via-white/30 to-transparent pointer-events-none" />

      {/* Card Content */}
      <div className="relative z-10 space-y-4">
        {/* Top Header Row: High-Contrast Icon Pod + Live Percentage Badge */}
        <div className="flex items-center justify-between">
          <div
            className={`w-12 h-12 sm:w-13 sm:h-13 rounded-2xl flex items-center justify-center ${iconBg} ${iconBorder} border shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-0.5`}
          >
            <span className={`text-2xl sm:text-3xl ${iconColor} drop-shadow-xs`}>
              {icon}
            </span>
          </div>

          {/* Precision Percentage Pill Badge */}
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100/90 dark:bg-slate-800/90 border border-slate-200/80 dark:border-white/10 shadow-xs">
            <span
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ backgroundColor: dotColor }}
            />
            <span className="text-xs sm:text-sm font-mono font-bold text-slate-800 dark:text-slate-100">
              <RollingPercent value={level} isVisible={isVisible} />
            </span>
          </div>
        </div>

        {/* Title & Domain Subtitle */}
        <div>
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white font-display tracking-tight group-hover:text-blue-600 dark:group-hover:text-sky-400 transition-colors duration-200">
              {name}
            </h3>
            <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-200/70 dark:bg-white/10 text-slate-700 dark:text-slate-300 border border-black/5 dark:border-white/5">
              {category}
            </span>
          </div>
          <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-1 line-clamp-1">
            {focus}
          </p>
        </div>

        {/* Precision Progress Bar System */}
        <div className="space-y-1.5 pt-1">
          <div className="flex justify-between items-center text-[11px] font-semibold tracking-wider uppercase text-slate-500 dark:text-slate-400">
            <span>Proficiency</span>
            <span className="text-slate-800 dark:text-slate-200 font-medium normal-case">
              {tier}
            </span>
          </div>

          {/* Track */}
          <div className="h-2 sm:h-2.5 w-full bg-slate-200/80 dark:bg-slate-800/90 rounded-full overflow-hidden p-0.5 border border-slate-300/40 dark:border-white/10 backdrop-blur-sm relative">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: isVisible ? `${level}%` : 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className={`h-full rounded-full bg-gradient-to-r ${gradient} relative shadow-sm`}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredSkills = useMemo(() => {
    if (activeFilter === 'all') return skillsData;
    if (activeFilter === 'Frontend') {
      return skillsData.filter((s) => s.category === 'Frontend');
    }
    if (activeFilter === 'Backend') {
      return skillsData.filter((s) => s.category === 'Backend' || s.category === 'Database');
    }
    if (activeFilter === 'Language') {
      return skillsData.filter((s) => s.category === 'Language' || s.category === 'Core' || s.category === 'DevOps');
    }
    return skillsData;
  }, [activeFilter]);

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Category Filter Navigation Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 px-4">
        {categories.map((tab) => {
          const isActive = activeFilter === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-3.5 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                isActive
                  ? 'bg-blue-600 text-white shadow-[0_4px_12px_rgba(37,99,235,0.35)] scale-102'
                  : 'bg-white/70 dark:bg-slate-800/70 text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800 border border-white/60 dark:border-white/10 shadow-xs'
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 px-4">
        {filteredSkills.map((skill) => (
          <SkillCard key={skill.name} {...skill} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
