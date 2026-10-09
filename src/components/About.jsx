import { motion } from 'framer-motion';
import { HiOutlineChip, HiOutlineLightBulb, HiOutlineCode, HiOutlineAcademicCap, HiOutlineGlobe } from 'react-icons/hi';

const About = () => {
  return (
    <motion.div 
      className="flex items-center justify-center py-6 sm:py-8 md:py-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 0.6 }}
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

            {/* Add Education Section */}
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
  );
};

export default About;
