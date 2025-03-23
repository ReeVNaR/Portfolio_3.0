import { useEffect, useRef, useState } from 'react';
import { SiReact, SiJavascript, SiNodedotjs, SiHtml5, SiGit, SiMongodb } from 'react-icons/si';

const skills = [
  { name: 'React', icon: <SiReact className="text-[#61DAFB]" />, level: 40, color: 'from-cyan-500 to-blue-500' },
  { name: 'JavaScript', icon: <SiJavascript className="text-[#F7DF1E]" />, level: 60, color: 'from-yellow-400 to-orange-500' },
  { name: 'Node.js', icon: <SiNodedotjs className="text-[#339933]" />, level: 30, color: 'from-green-500 to-emerald-500' },
  { name: 'HTML/CSS', icon: <SiHtml5 className="text-[#E34F26]" />, level: 70, color: 'from-pink-500 to-rose-500' },
  { name: 'Git', icon: <SiGit className="text-[#F05032]" />, level: 50, color: 'from-orange-500 to-red-500' },
  { name: 'MongoDB', icon: <SiMongodb className="text-[#47A248]" />, level: 40, color: 'from-green-400 to-green-600' },
];

const SkillBar = ({ name, level, icon, color }) => {
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
    <div ref={barRef} className="group relative p-3 sm:p-4 backdrop-blur-sm bg-white/5 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-300">
      <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl" 
         style={{ backgroundImage: `linear-gradient(to right, var(--tw-gradient-from), var(--tw-gradient-to))` }}>
      </div>
      <div className="flex items-center justify-between mb-3 sm:mb-4">
        <div className="flex items-center gap-2 sm:gap-3">
          <span className="text-2xl sm:text-3xl">{icon}</span>
          <span className="text-base sm:text-lg text-gray-700 dark:text-gray-300 font-medium">{name}</span>
        </div>
        <span className="text-sm sm:text-base text-blue-600 dark:text-blue-400 font-semibold">{level}%</span>
      </div>
      <div className="h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
        <div 
          className={`h-full bg-gradient-to-r ${color} rounded-full transform origin-left transition-all duration-[2000ms] ease-in-out`}
          style={{ width: isVisible ? `${level}%` : '0%' }}
        >
          <div className="w-full h-full opacity-50 bg-[linear-gradient(45deg,_transparent_25%,_rgba(255,255,255,0.2)_50%,_transparent_75%,_transparent_100%)] bg-[length:250%_250%] animate-shimmer"></div>
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <div className="py-6 sm:py-8 md:py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
        {skills.map((skill) => (
          <SkillBar key={skill.name} {...skill} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
