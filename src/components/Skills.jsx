import { useEffect, useRef, useState } from 'react';
import { motion, animate } from 'framer-motion';
import { SiReact, SiJavascript, SiNodedotjs, SiHtml5, SiGit, SiMongodb, SiPython, SiCplusplus } from 'react-icons/si';

const skills = [
  { name: 'React', icon: <SiReact className="text-[#61DAFB]" />, level: 85, color: 'text-cyan-400' },
  { name: 'JavaScript', icon: <SiJavascript className="text-[#F7DF1E]" />, level: 90, color: 'text-yellow-400' },
  { name: 'HTML/CSS', icon: <SiHtml5 className="text-[#E34F26]" />, level: 92, color: 'text-red-500' },
  { name: 'Node.js', icon: <SiNodedotjs className="text-[#339933]" />, level: 84, color: 'text-green-500' },
  { name: 'Git', icon: <SiGit className="text-[#F05032]" />, level: 88, color: 'text-orange-500' },
  { name: 'Python', icon: <SiPython className="text-[#3776AB]" />, level: 82, color: 'text-blue-400' },
  { name: 'MongoDB', icon: <SiMongodb className="text-[#47A248]" />, level: 85, color: 'text-lime-500' },
  { name: 'C++', icon: <SiCplusplus className="text-[#00599C]" />, level: 78, color: 'text-blue-600' },
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
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => setCurrent(Math.floor(latest))
    });
    return () => controls.stop();
  }, [isVisible, value]);

  return <span className="tabular-nums font-mono">{current}%</span>;
};

const SkillBar = ({ name, level, icon, color }) => {
  const barRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2, rootMargin: '0px' }
    );

    if (barRef.current) {
      observer.observe(barRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleReplay = (e) => {
    e?.stopPropagation?.();
    setIsVisible(false);
    setTimeout(() => setIsVisible(true), 50);
  };

  return (
    <motion.div 
      ref={barRef}
      onClick={handleReplay}
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ duration: 0.25 }}
      className="panel-liquid-glass rounded-3xl p-4 sm:p-6 aspect-square flex flex-col items-center justify-center relative overflow-hidden group hover:shadow-2xl transition-all duration-300 cursor-pointer select-none"
      title="Click to replay gauge animation"
    >
      {/* Dynamic Ambient Hover Glow */}
      <div className="absolute inset-0 bg-blue-500/[0.05] dark:bg-sky-400/[0.04] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center justify-center space-y-3 sm:space-y-4 w-full h-full">
        {/* Circular Glass Progress Meter */}
        <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
          <svg className="w-full h-full transform -rotate-90 absolute" viewBox="0 0 96 96">
            <circle
              className="text-slate-300/40 dark:text-white/10"
              strokeWidth="6"
              stroke="currentColor"
              fill="transparent"
              r="42"
              cx="48"
              cy="48"
            />
            <circle
              className={`${color} filter drop-shadow-[0_0_6px_rgba(56,189,248,0.4)]`}
              strokeWidth="6"
              strokeDasharray={`${isVisible ? level * 2.64 : 0} 264`}
              strokeLinecap="round"
              stroke="currentColor"
              fill="transparent"
              r="42"
              cx="48"
              cy="48"
              style={{ transition: 'stroke-dasharray 1.4s cubic-bezier(0.16, 1, 0.3, 1)' }}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl sm:text-3xl transform group-hover:scale-115 transition-transform duration-300 drop-shadow-sm">
              {icon}
            </span>
          </div>
        </div>

        {/* Skill Name & Animated Percentage */}
        <div className="text-center space-y-0.5">
          <span className="text-sm sm:text-base font-bold text-slate-900 dark:text-white block font-display tracking-tight">
            {name}
          </span>
          <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 block font-mono">
            <RollingPercent value={level} isVisible={isVisible} />
          </span>
        </div>
      </div>

      <div className="circle-overlay pointer-events-none"></div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 px-4">
        {skills.map((skill) => (
          <SkillBar key={skill.name} {...skill} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
