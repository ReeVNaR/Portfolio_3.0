import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { useState } from 'react';

const projects = [
    {
        id: 1,
        title: "Portfolio 1.0",
        description: "My first portfolio project built with core web technologies. A clean and simple design showcasing my initial journey into web development.",
        image: "/src/assets/portfolio_1.0.png",
        tags: ["HTML", "CSS", "JavaScript"],
        githubLink: "https://github.com/ReeVNaR/Portfolio_1.0",
        liveLink: "https://ranveerportfoliogg.netlify.app/"
    },
    {
        id: 2,
        title: "Portfolio 2.0",
        description: "An enhanced version of my portfolio with improved design and functionality, showcasing my growing skills in web development.",
        image: "/src/assets/portfolio_2.0.png",
        tags: ["HTML", "CSS", "JavaScript"],
        githubLink: "https://github.com/ReeVNaR/Portfolio_2.0",
        liveLink: "https://reevnar.netlify.app/"
    },
    {
        id: 3,
        title: "Rift Chat",
        description: "A real-time chat application built during my MERN stack learning journey. Features include user authentication, real-time messaging, and basic chat functionalities.",
        image: "/src/assets/rift.png",
        tags: ["MongoDB", "Express", "React", "Node.js"],
        githubLink: "https://github.com/ReeVNaR/Rift_Chat_App",
    },
    {
        id: 4,
        title: "Insta by Ranveer",
        description: "A full-stack Instagram clone built with MERN (MongoDB, Express, React, Node.js) featuring authentication, image uploads, posts, likes & comments. 🚀 For educational purposes only. Not affiliated with Instagram or Meta.",
        image: "/src/assets/insta.png",
        tags: ["React", "Node.js", "MongoDB", "Express", "Vercel", "Render", "Cloudinary"],
        githubLink: "https://github.com/ReeVNaR/Instagram-by-Ranveer",
        liveLink: "https://instagram-by-ranveer.vercel.app/login"
    }
];

const ProjectList = ({ selectedId, onSelect }) => {
  return (
    <div className="h-[40vh] md:h-[70vh] overflow-y-auto space-y-3 bg-white/30 dark:bg-gray-800/30 p-3 sm:p-4 rounded-xl backdrop-blur-sm border border-gray-200 dark:border-gray-700/50 hide-scrollbar">
      {projects.map((project) => (
        <motion.div
          key={project.id}
          onClick={() => onSelect(project.id)}
          className={`p-4 rounded-lg cursor-pointer transition-all duration-300 border ${
            selectedId === project.id
              ? 'bg-gradient-to-r from-blue-50 to-blue-50/50 dark:from-blue-900/30 dark:to-blue-900/10 border-blue-500/50 dark:border-blue-500/50'
              : 'hover:bg-blue-50/50 dark:hover:bg-blue-900/20 border-transparent'
          }`}
        >
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            {project.title}
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs bg-blue-50 dark:bg-blue-900/30 
                         text-blue-600 dark:text-blue-400 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

const ProjectDetail = ({ project }) => {
  if (!project) return (
    <div className="h-full flex items-center justify-center text-gray-500 dark:text-gray-400">
      Select a project to view details
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative h-full rounded-xl overflow-hidden bg-gradient-to-br from-gray-900/90 to-gray-800/90"
    >
      {/* Background Image with Blur */}
      <div className="absolute inset-0">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover opacity-20 blur-sm scale-105"
        />
      </div>

      {/* Main Content */}
      <div className="relative h-full flex flex-col p-4 sm:p-6 z-10">
        {/* Project Image */}
        <div className="relative h-[200px] sm:h-[300px] rounded-lg overflow-hidden border border-white/10 backdrop-blur">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-contain bg-gray-900/50"
          />
          <div className="absolute top-4 right-4 flex gap-3">
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full hover:scale-110 transition-all duration-300 border border-white/10"
            >
              <FiGithub className="w-5 h-5 text-white" />
            </a>
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full hover:scale-110 transition-all duration-300 border border-white/10"
              >
                <FiExternalLink className="w-5 h-5 text-white" />
              </a>
            )}
          </div>
        </div>

        {/* Project Info */}
        <div className="mt-4 sm:mt-6 space-y-3 sm:space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            {project.title}
          </h2>
          
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed line-clamp-3 sm:line-clamp-none">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 sm:px-3 py-1 text-xs sm:text-sm bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [selectedId, setSelectedId] = useState(null);
  const selectedProject = projects.find(p => p.id === selectedId);

  return (
    <div className="grid grid-cols-1 md:grid-cols-[300px,1fr] gap-4 sm:gap-6 h-[80vh] sm:h-[600px]">
      <ProjectList selectedId={selectedId} onSelect={setSelectedId} />
      <div className="bg-white/5 dark:bg-gray-800/5 rounded-xl backdrop-blur-sm border border-white/10 dark:border-gray-700/50 shadow-2xl">
        <ProjectDetail project={selectedProject} />
      </div>
    </div>
  );
};

export default Projects;
