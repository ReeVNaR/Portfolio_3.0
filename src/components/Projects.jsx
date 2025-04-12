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
    <div className="h-[30vh] md:h-[70vh] overflow-y-auto space-y-3 bg-white/30 dark:bg-gray-800/30 p-4 rounded-xl backdrop-blur-sm border border-gray-200 dark:border-gray-700/50 hide-scrollbar">
      {projects.map((project) => (
        <motion.div
          key={project.id}
          onClick={() => onSelect(project.id)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`p-4 rounded-lg cursor-pointer transition-all duration-300 border ${
            selectedId === project.id
              ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg border-blue-400'
              : 'hover:bg-blue-50/50 dark:hover:bg-blue-900/20 border-transparent hover:border-blue-200 dark:hover:border-blue-800'
          }`}
        >
          <h3 className={`text-lg font-semibold ${
            selectedId === project.id
              ? 'text-white'
              : 'text-gray-900 dark:text-white'
          }`}>
            {project.title}
          </h3>
        </motion.div>
      ))}
    </div>
  );
};

const ProjectDetail = ({ project }) => {
  if (!project) return (
    <div className="h-[40vh] md:h-full flex flex-col items-center justify-center text-gray-500 dark:text-gray-400 space-y-4">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <FiExternalLink className="w-16 h-16 opacity-20" />
      </motion.div>
      <p className="text-lg font-medium">Select a project to view details</p>
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
      <div className="absolute inset-0 opacity-30">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover blur-sm"
        />
      </div>

      {/* Main Content */}
      <div className="relative h-full flex flex-col p-3 sm:p-6 z-10">
        {/* Project Image */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="relative w-full h-[250px] sm:h-[350px] rounded-lg overflow-hidden border border-white/20 shadow-2xl group bg-black/40"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-contain p-2 transition-transform duration-500 group-hover:scale-102"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.div>

        {/* Project Info */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-4 sm:mt-6 space-y-3"
        >
          <h2 className="text-xl sm:text-2xl font-bold text-white bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">
            {project.title}
          </h2>
          
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {project.tags.map((tag) => (
              <motion.span
                key={tag}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.05 }}
                className="px-3 py-1 text-xs sm:text-sm bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20 backdrop-blur-sm"
              >
                {tag}
              </motion.span>
            ))}
          </div>

          {/* Buttons Section */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex gap-4 pt-6 justify-end"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-all duration-300 border border-gray-600 hover:border-blue-500 shadow-lg hover:shadow-blue-500/20"
            >
              <FiGithub className="w-5 h-5" />
              <span>View Code</span>
            </motion.a>
            {project.liveLink && (
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white rounded-lg transition-all duration-300 shadow-lg hover:shadow-blue-500/20"
              >
                <FiExternalLink className="w-5 h-5" />
                <span>Live Demo</span>
              </motion.a>
            )}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
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
