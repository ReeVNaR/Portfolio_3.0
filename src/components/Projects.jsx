import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
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
        description: "A full-stack Instagram clone built with MERN (MongoDB, Express, React, Node.js) featuring authentication, image uploads, posts, likes & comments. 🚀 For educational purposes only. Not affiliated with Instagram or Meta.",
        image: "https://res.cloudinary.com/de3t8l5ul/image/upload/v1742763035/Insta_m8bwll.png",
        tags: ["React", "Node.js", "MongoDB", "Express", "Vercel", "Render", "Cloudinary"],
        githubLink: "https://github.com/ReeVNaR/Instagram-by-Ranveer",
        liveLink: "https://instagram-by-ranveer.vercel.app/login"
    }
];

const ProjectList = ({ selectedId, onSelect }) => {
  return (
    <div className="h-[30vh] md:h-[70vh] overflow-y-auto space-y-2 bg-white/30 dark:bg-gray-800/30 p-3 rounded-xl backdrop-blur-sm border border-gray-200 dark:border-gray-700/50 hide-scrollbar">
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
    <div className="h-[40vh] md:h-full flex items-center justify-center text-gray-500 dark:text-gray-400">
      Select a project to view details
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="h-[40vh] md:h-full rounded-xl overflow-y-auto overflow-x-hidden bg-gradient-to-br from-gray-900/90 to-gray-800/90"
    >
      {/* Background Image with Blur */}
      <div className="absolute inset-0">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover opacity-10 blur-md scale-105"
        />
      </div>

      {/* Main Content */}
      <div className="relative h-full flex flex-col p-3 sm:p-6 z-10">
        {/* Project Image */}
        <div className="relative w-full aspect-video h-[250px] sm:h-[350px] rounded-lg overflow-hidden border border-white/10 shadow-xl">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-contain bg-gray-900/80 p-1"
          />
        </div>

        {/* Project Info */}
        <div className="mt-2 sm:mt-4 space-y-2">
          <h2 className="text-lg sm:text-xl font-bold text-white">
            {project.title}
          </h2>
          
          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed line-clamp-2 sm:line-clamp-3">
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

          {/* New Buttons Section */}
          <div className="flex gap-4 pt-4 justify-end">
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gray-900 hover:bg-gray-800 text-white rounded-lg transition-all duration-300 border border-gray-700 hover:border-blue-500"
            >
              <FiGithub className="w-5 h-5" />
              <span>View Code</span>
            </a>
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-all duration-300"
              >
                <FiExternalLink className="w-5 h-5" />
                <span>Live Demo</span>
              </a>
            )}
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
    <div className="grid grid-cols-1 md:grid-cols-[1fr,300px] gap-4 h-[73vh] md:h-[600px]">
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
