import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiArrowRight } from 'react-icons/fi';
import { useState } from 'react';

const projects = [
    {
        id: 1,
        title: "Portfolio 1.0",
        description: "My first portfolio project built with core web technologies. A clean and simple design showcasing my initial journey into web development.",
        image: "https://res.cloudinary.com/de3t8l5ul/image/upload/v1742763039/Portfolio_1.0_kwivca.png",
        tags: ["HTML", "CSS", "JavaScript"],
        githubLink: "https://github.com/ReeVNaR/Portfolio_1.0",
        liveLink: "https://ranveerportfoliogg.netlify.app/"
    },
    {
        id: 2,
        title: "Portfolio 2.0",
        description: "An enhanced version of my portfolio with improved design and functionality, showcasing my growing skills in web development.",
        image: "https://res.cloudinary.com/de3t8l5ul/image/upload/v1742763036/Portfolio_2.0_r8mnch.png",
        tags: ["HTML", "CSS", "JavaScript"],
        githubLink: "https://github.com/ReeVNaR/Portfolio_2.0",
        liveLink: "https://reevnar.netlify.app/"
    },
    {
        id: 3,
        title: "Rift Chat",
        description: "A real-time chat application built during my MERN stack learning journey. Features include user authentication, real-time messaging, and basic chat functionalities.",
        image: "https://res.cloudinary.com/de3t8l5ul/image/upload/v1742763035/rift_ozck9u.png",
        tags: ["MongoDB", "Express", "React", "Node.js"],
        githubLink: "https://github.com/ReeVNaR/Rift_Chat_App",
    },
    {
        id: 4,
        title: "Insta by Ranveer",
        description: "A full-stack Instagram clone built with MERN (MongoDB, Express, React, Node.js) featuring authentication, image uploads, posts, likes & comments.",
        image: "https://res.cloudinary.com/de3t8l5ul/image/upload/v1742763035/Insta_m8bwll.png",
        tags: ["React", "Node.js", "MongoDB", "Express", "Vercel", "Render", "Cloudinary"],
        githubLink: "https://github.com/ReeVNaR/Instagram-by-Ranveer",
        liveLink: "https://instagram-by-ranveer.vercel.app/login"
    },
    {
        id: 5,
        title: "Revify",
        description: "A full stack working clone of Spotify which can play songs create playlist and is mobile friendly",
        image: "https://res.cloudinary.com/de3t8l5ul/image/upload/v1744488765/Revify_uvl01e.png",
        tags: ["React", "Node.js", "MongoDB", "Express", "Vercel", "Render", "Cloudinary"],
        githubLink: "https://github.com/ReeVNaR/Revify",
        liveLink: "https://revifym.vercel.app/"
    }
];

const ProjectList = ({ selectedId, onSelect }) => {
  return (
    <div className="h-[30vh] md:h-[75vh] overflow-y-auto space-y-3 bg-white/30 dark:bg-gray-800/30 p-4 rounded-xl backdrop-blur-sm border border-gray-200 dark:border-gray-700/50 hide-scrollbar">
      {projects.map((project) => (
        <motion.div
          key={project.id}
          onClick={() => onSelect(project.id)}
          whileHover={{ 
            scale: 1.02,
            backgroundColor: selectedId === project.id ? 'rgba(59, 130, 246, 0.8)' : 'rgba(59, 130, 246, 0.1)'
          }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.3,
            backgroundColor: { duration: 0.2 }
          }}
          className={`p-4 rounded-lg cursor-pointer border relative group overflow-hidden ${
            selectedId === project.id
              ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg border-blue-400'
              : 'hover:border-blue-300 border-transparent dark:hover:border-blue-500/30'
          }`}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ 
              backgroundSize: '200% 100%',
              animation: 'shimmer 2s linear infinite'
            }}
          />
          <motion.h3 
            className={`text-lg font-semibold relative z-10 ${
              selectedId === project.id
                ? 'text-white'
                : 'text-gray-900 dark:text-white'
            }`}
            layout
          >
            {project.title}
          </motion.h3>
          <motion.div
            className={`h-0.5 bg-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 mt-2 ${
              selectedId === project.id ? 'opacity-100' : 'opacity-50'
            }`}
            layout
          />
        </motion.div>
      ))}
    </div>
  );
};

// Add this CSS anywhere in your global styles or component
const style = document.createElement('style');
style.textContent = `
  @keyframes shimmer {
    0% { background-position: 100% 0; }
    100% { background-position: -100% 0; }
  }
`;
document.head.appendChild(style);

// Add new keyframes for card animation
const cardStyle = document.createElement('style');
cardStyle.textContent = `
  @keyframes cardShimmer {
    0% { background-position: 200% 0; }
    100% { background-position: -200% 0; }
  }
`;
document.head.appendChild(cardStyle);

const ProjectDetail = ({ project }) => {
  const [showFullImage, setShowFullImage] = useState(false);

  if (!project) {
    return (
      <div className="h-[40vh] md:h-full flex flex-col items-center justify-center text-gray-500 dark:text-gray-400 space-y-4">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <FiExternalLink className="w-16 h-16 opacity-20" />
          <p className="text-lg font-medium">Select a project to view details</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="h-full relative">
      <motion.div
        key={project.id}
        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        exit={{ opacity: 0, scale: 0.8, rotate: 5 }}
        transition={{ 
          type: "spring",
          stiffness: 200,
          damping: 15
        }}
        className="h-full rounded-xl bg-gradient-to-br from-gray-900/90 to-gray-800/90"
      >
        <div className="p-6 h-full flex flex-col">
          <div className="flex-1 overflow-y-auto no-scrollbar">
            <div 
              onClick={() => setShowFullImage(true)} 
              className="relative w-full h-[200px] sm:h-[300px] rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-black/40 cursor-pointer mb-6 group"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-contain p-2 transition-all duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="absolute bottom-4 left-0 right-0 text-center text-white/90">
                  Click to view full image
                </div>
              </div>
            </div>
            
            <motion.h2
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", bounce: 0.4 }}
              className="text-2xl font-bold text-white mb-4"
            >
              {project.title}
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-gray-300 mb-4"
            >
              {project.description}
            </motion.p>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, index) => (
                <motion.span
                  key={tag}
                  initial={{ scale: 0, rotate: -10 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 15,
                    delay: index * 0.1
                  }}
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: [-1, 1, -1],
                    transition: {
                      rotate: {
                        repeat: Infinity,
                        duration: 0.5
                      }
                    }
                  }}
                  className="px-3 py-1 text-sm bg-blue-500/10 text-blue-300 rounded-full"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ 
              type: "spring",
              stiffness: 200,
              damping: 20,
              delay: 0.3 
            }}
            className="mt-6 flex justify-end gap-2"
          >
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gray-800/80 hover:bg-gray-700 text-white rounded-lg"
            >
              <FiGithub className="inline-block mr-2" />
              Code
            </a>
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-600/80 hover:bg-blue-500 text-white rounded-lg"
              >
                <FiExternalLink className="inline-block mr-2" />
                Live Link
              </a>
            )}
          </motion.div>
        </div>
      </motion.div>

      <AnimatePresence>
        {showFullImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowFullImage(false)}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          >
            <img
              src={project.image}
              alt={project.title}
              className="max-w-full max-h-full object-contain transition-transform duration-300 hover:scale-110"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Projects = () => {
  const [selectedId, setSelectedId] = useState(null);
  const selectedProject = projects.find(p => p.id === selectedId);

  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr,300px] gap-4 h-[73vh] md:h-[600px] mb-8">
      <div className="bg-white/5 dark:bg-gray-800/5 rounded-xl backdrop-blur-sm border border-white/10 dark:border-gray-700/50 shadow-2xl">
        <ProjectDetail project={selectedProject} />
      </div>
      <div>
        <ProjectList selectedId={selectedId} onSelect={setSelectedId} />
      </div>
    </div>
  );
};

export default Projects;
