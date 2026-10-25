import { motion, AnimatePresence } from 'framer-motion';
import { 
  HiOutlineChip, 
  HiOutlineLightBulb, 
  HiOutlineCode, 
  HiOutlineAcademicCap, 
  HiOutlineGlobe 
} from 'react-icons/hi';
import { 
  HiOutlineSparkles, 
  HiOutlineCpuChip, 
  HiOutlineGlobeAlt, 
  HiOutlineRocketLaunch,
  HiOutlineArrowRight,
  HiOutlineCommandLine,
  HiOutlineCheckCircle
} from 'react-icons/hi2';

const techPillsV2 = [
  { name: 'React & Tailwind CSS', detail: 'Modern Component Architectures' },
  { name: 'AI & Machine Learning (Python)', detail: 'Deep Learning & Computer Vision' },
  { name: 'Next.js & Full-Stack Systems', detail: 'Scalable APIs & SSR/SSG' },
  { name: 'Interactive UI & Motion Design', detail: 'Frosted Glass & Fluid Micro-Interactions' }
];

const languagesV2 = [
  { name: 'English', level: 'Professional / Fluent', code: 'EN', color: 'from-blue-500 to-cyan-500' },
  { name: 'Hindi', level: 'Fluent', code: 'HI', color: 'from-amber-500 to-orange-500' },
  { name: 'Marathi', level: 'Native', code: 'MR', color: 'from-emerald-500 to-teal-500' }
];

const About = ({ portfolioVersion = 'v2', scrollTo }) => {
  return (
    <div className="w-full">
      <AnimatePresence mode="wait">
        {portfolioVersion === 'v1' ? (
          /* ========================================================= */
          /*                 ABOUT V1 (Classic Layout)                 */
          /* ========================================================= */
          <motion.div 
            key="about-v1"
            className="flex items-center justify-center py-6 sm:py-8 md:py-12"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          >
            <motion.div 
              className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 overflow-visible px-2 sm:px-4"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.5 }}
            >
              {/* Left Column */}
              <div className="space-y-4 sm:space-y-6">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="space-y-4 bg-white dark:bg-gray-800/90 p-4 sm:p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700/70 backdrop-blur-sm"
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <HiOutlineCode className="text-4xl text-blue-600 dark:text-blue-400" />
                    <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
                      Ranveer Ghorpade
                    </h3>
                  </div>
                  <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-normal">
                    A passionate full-stack developer and AI enthusiast. I specialize in building scalable web applications, 
                    and AI-driven solutions using modern technologies like MERN stack, and Python.
                  </p>

                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="relative group"
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                    <div className="relative p-6 bg-white dark:bg-gray-800 rounded-lg leading-none flex items-center space-x-6 border border-gray-200 dark:border-gray-700">
                      <HiOutlineLightBulb className="text-9xl text-blue-500 flex-shrink-0" />
                      <p className="text-gray-800 dark:text-gray-200 leading-relaxed font-normal">
                        I love solving complex problems, whether it's designing AI models for image analysis, 
                        optimizing python codes, or creating seamless user experiences.
                      </p>
                    </div>
                  </motion.div>

                  {/* Education Section */}
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-4 sm:pt-6 mt-4 sm:mt-6">
                    <div className="flex items-center gap-3 mb-4">
                      <HiOutlineAcademicCap className="text-3xl text-purple-500" />
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Education</h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="bg-slate-50 dark:bg-gray-700/40 p-4 rounded-lg border border-gray-200 dark:border-gray-700/60 shadow-sm">
                        <h5 className="font-semibold text-gray-900 dark:text-white">B.Tech in Computer Science</h5>
                        <p className="text-gray-600 dark:text-gray-300">Sanjay Ghodawat University, Kolhapur (2022-2026)</p>
                      </li>
                    </ul>
                  </div>
                </motion.div>
              </div>

              {/* Right Column */}
              <div className="space-y-4 sm:space-y-6">
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="relative group p-8 bg-white dark:bg-gray-800/90 rounded-xl shadow-md border border-gray-200 dark:border-gray-700/70"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <HiOutlineChip className="text-3xl text-blue-500" />
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                      Currently Exploring
                    </h4>
                  </div>
                  <ul className="space-y-4">
                    {['React and tailwind', 'AI-driven applications (Python)', 'Advanced front-end frameworks (Next.js)'].map((item, index) => (
                      <motion.li 
                        key={item}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                        className="flex items-center gap-3 text-gray-700 dark:text-gray-300 font-medium group"
                      >
                        <span className="text-blue-500 transform group-hover:translate-x-1 transition-transform">
                          ►
                        </span>
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* Languages Section */}
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative group p-6 bg-white dark:bg-gray-800/90 rounded-xl shadow-md border border-gray-200 dark:border-gray-700/70"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <HiOutlineGlobe className="text-3xl text-green-500" />
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Languages</h4>
                  </div>
                  <div className="flex gap-3 flex-wrap">
                    {['English', 'Hindi', 'Marathi'].map((lang) => (
                      <span key={lang} className="px-3.5 py-1.5 bg-slate-100 dark:bg-gray-700/60 rounded-full text-sm font-semibold text-gray-800 dark:text-white border border-gray-200 dark:border-gray-600 shadow-sm">
                        {lang}
                      </span>
                    ))}
                  </div>
                </motion.div>

                {/* Quote Card */}
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                  <div className="relative p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-normal">
                      When I'm not coding, you'll probably find me experimenting with new tech, 
                      learning new frameworks, or working on personal projects.
                    </p>
                    <p className="mt-4 text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
                      Let's build something amazing together! 🚀
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        ) : (
          /* ========================================================= */
          /*         ABOUT V2 (Modern Liquid Glass Bento Grid)         */
          /* ========================================================= */
          <motion.div 
            key="about-v2"
            className="w-full py-4 sm:py-6"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          >
            {/* Bento Grid Canvas */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 w-full max-w-6xl mx-auto">
              
              {/* CARD 1: Core Bio & Engineering Philosophy (Span 7) */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="lg:col-span-7 panel-liquid-glass rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group"
              >
                {/* Ambient Soft Glow */}
                <div className="absolute -top-16 -right-16 w-52 h-52 bg-blue-500/10 dark:bg-blue-400/10 rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />
                
                <div className="relative z-10">
                  {/* Micro Pill Badge */}
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/[0.04] dark:bg-white/[0.08] border border-slate-900/[0.08] dark:border-white/[0.12] text-xs font-semibold text-blue-600 dark:text-sky-400 mb-4 backdrop-blur-xl">
                    <HiOutlineSparkles className="w-3.5 h-3.5 text-blue-500 dark:text-sky-300" />
                    <span>Full-Stack Engineer & AI Enthusiast</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl md:text-[2.1rem] font-bold tracking-tight text-slate-950 dark:text-white leading-[1.2] mb-4 font-display">
                    Architecting scalable web systems with{' '}
                    <span className="bg-gradient-to-r from-[#0071e3] via-[#0284c7] to-[#0055b3] dark:from-sky-400 dark:via-blue-300 dark:to-indigo-300 bg-clip-text text-transparent">
                      modern clarity & performance.
                    </span>
                  </h3>

                  <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-normal mb-5">
                    Hi, I'm <strong className="text-slate-900 dark:text-white font-semibold">Ranveer Ghorpade</strong>. I bridge robust backend architectures with fluid, high-fidelity interfaces. From MERN full-stack workflows to Python-powered intelligence, my work centers on delivering intuitive, impactful software.
                  </p>

                  {/* Embedded Frosted Sub-Panel */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-white/60 dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/[0.08] backdrop-blur-xl flex items-start gap-3.5 shadow-sm">
                    <div className="p-2.5 rounded-xl bg-blue-500/10 dark:bg-blue-400/15 border border-blue-500/20 text-blue-600 dark:text-sky-400 shrink-0 mt-0.5">
                      <HiOutlineLightBulb className="w-5 h-5" />
                    </div>
                    <div>
                      <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                        Problem Solving Philosophy
                      </h5>
                      <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                        Whether designing neural models for visual recognition, optimizing asynchronous server endpoints, or tuning micro-second frontend transitions, I strive for clean simplicity and technical rigor.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Footer Metrics Row */}
                <div className="relative z-10 grid grid-cols-3 gap-2 sm:gap-3 mt-6 pt-5 border-t border-slate-200/80 dark:border-white/10">
                  <div className="flex flex-col">
                    <span className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">5+</span>
                    <span className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium">Projects Built</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-lg sm:text-xl font-bold text-blue-600 dark:text-sky-400">Full-Stack</span>
                    <span className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium">MERN & Python</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">UI / UX</span>
                    <span className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium">Modern Interfaces</span>
                  </div>
                </div>

                <div className="circle-overlay pointer-events-none"></div>
              </motion.div>

              {/* CARD 2: Currently Exploring & R&D (Span 5) */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="lg:col-span-5 panel-liquid-glass rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group"
              >
                {/* Ambient Soft Glow */}
                <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-cyan-500/10 dark:bg-cyan-400/10 rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-xl bg-blue-500/10 dark:bg-blue-400/15 border border-blue-500/20 text-blue-600 dark:text-sky-400">
                        <HiOutlineCpuChip className="w-5 h-5" />
                      </div>
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
                        Currently Exploring
                      </h4>
                    </div>
                    {/* Live Pulse Beacon */}
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 backdrop-blur-md">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                      </span>
                      Active R&D
                    </span>
                  </div>

                  {/* Interactive Tech Pill Stack */}
                  <div className="space-y-2.5">
                    {techPillsV2.map((tech, idx) => (
                      <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.15 + idx * 0.08 }}
                        className="group/pill p-3 rounded-2xl bg-white/60 dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/[0.08] hover:border-blue-500/40 dark:hover:border-sky-400/30 hover:bg-white/90 dark:hover:bg-white/[0.08] transition-all duration-200 backdrop-blur-md shadow-sm"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-sky-400 group-hover/pill:scale-125 transition-transform" />
                            <span className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-slate-100">
                              {tech.name}
                            </span>
                          </div>
                          <span className="text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400 font-medium hidden sm:inline-block">
                            {tech.detail}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Subtext info */}
                <div className="relative z-10 mt-5 pt-4 border-t border-slate-200/80 dark:border-white/10 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                  <span>Stack Evolution</span>
                  <span className="font-semibold text-blue-600 dark:text-sky-400 flex items-center gap-1">
                    <HiOutlineCommandLine className="w-3.5 h-3.5" /> Next.js 15 & AI Models
                  </span>
                </div>

                <div className="circle-overlay pointer-events-none"></div>
              </motion.div>

              {/* CARD 3: Education & Academic Milestone (Span 4) */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="lg:col-span-4 panel-liquid-glass rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden group"
              >
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-2xl bg-purple-500/10 dark:bg-purple-400/15 border border-purple-500/20 text-purple-600 dark:text-purple-400">
                      <HiOutlineAcademicCap className="w-6 h-6" />
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-purple-500/10 dark:bg-purple-400/10 text-purple-700 dark:text-purple-300 border border-purple-500/20">
                      2022 — 2026
                    </span>
                  </div>

                  <span className="text-xs uppercase font-bold tracking-wider text-slate-500 dark:text-slate-400 block mb-1">
                    Education
                  </span>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                    B.Tech in Computer Science
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1.5 leading-relaxed">
                    Sanjay Ghodawat University, Kolhapur
                  </p>
                </div>

                <div className="relative z-10 mt-5 pt-4 border-t border-slate-200/80 dark:border-white/10 flex items-center gap-2 text-xs text-purple-700 dark:text-purple-300 font-medium">
                  <HiOutlineCheckCircle className="w-4 h-4 text-purple-500" />
                  <span>CS Foundations, DS & AI Systems</span>
                </div>

                <div className="circle-overlay pointer-events-none"></div>
              </motion.div>

              {/* CARD 4: Languages & Global Reach (Span 4) */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="lg:col-span-4 panel-liquid-glass rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden group"
              >
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-2xl bg-emerald-500/10 dark:bg-emerald-400/15 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400">
                      <HiOutlineGlobeAlt className="w-6 h-6" />
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-500/10 dark:bg-emerald-400/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20">
                      Global
                    </span>
                  </div>

                  <span className="text-xs uppercase font-bold tracking-wider text-slate-500 dark:text-slate-400 block mb-1">
                    Communication
                  </span>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight mb-3">
                    Languages
                  </h4>

                  {/* Language Badges */}
                  <div className="space-y-2">
                    {languagesV2.map((lang) => (
                      <div 
                        key={lang.name}
                        className="flex items-center justify-between p-2.5 rounded-xl bg-white/60 dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/[0.08]"
                      >
                        <div className="flex items-center gap-2">
                          <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${lang.color}`} />
                          <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                            {lang.name}
                          </span>
                        </div>
                        <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                          {lang.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="circle-overlay pointer-events-none"></div>
              </motion.div>

              {/* CARD 5: Collaboration & Vision Callout (Span 4) */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="lg:col-span-4 panel-liquid-glass rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden group bg-gradient-to-br from-blue-600/[0.06] to-cyan-500/[0.06] dark:from-blue-500/[0.1] dark:to-cyan-400/[0.05]"
              >
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-2xl bg-blue-500/15 dark:bg-sky-400/20 border border-blue-500/25 text-blue-600 dark:text-sky-300">
                      <HiOutlineRocketLaunch className="w-6 h-6" />
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-blue-500/10 dark:bg-blue-400/10 text-blue-700 dark:text-sky-300 border border-blue-500/20">
                      Connect
                    </span>
                  </div>

                  <span className="text-xs uppercase font-bold tracking-wider text-slate-500 dark:text-slate-400 block mb-1">
                    Collaboration
                  </span>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                    Let's Build Together
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                    Always excited to explore creative collaborations, high-impact software, or novel AI ventures.
                  </p>
                </div>

                {/* Direct Action Link */}
                <div className="relative z-10 mt-5 pt-3">
                  <button
                    type="button"
                    onClick={() => scrollTo?.('contact')}
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold text-xs sm:text-sm hover:opacity-90 transition-opacity shadow-sm group/btn"
                  >
                    <span>Start a Conversation</span>
                    <HiOutlineArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>

                <div className="circle-overlay pointer-events-none"></div>
              </motion.div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default About;
