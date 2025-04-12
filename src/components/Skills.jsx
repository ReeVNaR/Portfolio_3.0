import { useEffect, useRef, useState } from 'react';
import { SiReact, SiJavascript, SiNodedotjs, SiHtml5, SiGit, SiMongodb, SiPython, SiCplusplus } from 'react-icons/si';

const skills = [
  { name: 'React', icon: <SiReact className="text-[#61DAFB]" />, level: 40, color: 'text-cyan-400' },
  { name: 'JavaScript', icon: <SiJavascript className="text-[#F7DF1E]" />, level: 60, color: 'text-yellow-400' },
  { name: 'HTML/CSS', icon: <SiHtml5 className="text-[#E34F26]" />, level: 70, color: 'text-red-500' },
  { name: 'Node.js', icon: <SiNodedotjs className="text-[#339933]" />, level: 30, color: 'text-green-700' },
  { name: 'Git', icon: <SiGit className="text-[#F05032]" />, level: 50, color: 'text-orange-500' },
  { name: 'Python', icon: <SiPython className="text-[#3776AB]" />, level: 40, color: 'text-blue-400' },
  { name: 'MongoDB', icon: <SiMongodb className="text-[#47A248]" />, level: 40, color: 'text-lime-500' },
  { name: 'C++', icon: <SiCplusplus className="text-[#00599C]" />, level: 30, color: 'text-blue-800' },
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

const Skills = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 px-4">
        {skills.map((skill) => (
          <SkillBar key={skill.name} {...skill} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
