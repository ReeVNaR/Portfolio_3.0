import Navbar from './components/Navbar';
import { TypingEffect } from './components/TypingEffect';
import Skills from './components/Skills';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const scrollTo = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      const offset = 80; // Height of navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <main className="bg-white dark:bg-black">
      <Navbar />
      
      {/* Home Section */}
      <section id="home" className="min-h-screen px-4 pt-20 md:pt-24 flex items-center justify-center bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50 dark:from-black dark:via-black dark:to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#3B82F6_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.03]"></div>
        <div className="container max-w-7xl mx-auto px-2 sm:px-6 py-6 sm:py-12 relative">
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-16">
            <div className="w-full md:w-1/2 z-10 text-center md:text-left">
              <span className="px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium inline-block mb-6">
                Welcome to my portfolio
              </span> 
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Ranveer Ghorpade</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                <TypingEffect />
              </p>
              <div className="flex gap-4 justify-center md:justify-start">
                <button 
                  onClick={() => scrollTo('contact')}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-200 font-medium"
                >
                  Contact Me
                </button>
                <button 
                  onClick={() => scrollTo('projects')}
                  className="px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all duration-200 font-medium"
                >
                  View Work
                </button>
              </div>
              <div className="flex gap-8 justify-center md:justify-start pt-6">
                {/* GitHub */}
                <a href="https://github.com/ReeVNaR" target="_blank" rel="noopener noreferrer" className="group relative">
                  <div className="absolute -inset-2 bg-gradient-to-r from-green-600 to-green-400 rounded-lg blur-lg opacity-0 group-hover:opacity-30 transition-all duration-500"></div>
                  <div className="relative flex items-center justify-center w-12 h-12 border border-gray-600/20 dark:border-gray-400/20 rounded-lg bg-white/5 backdrop-blur-xl shadow-xl group-hover:border-green-500/50 transition-all duration-500">
                    <svg className="w-7 h-7 text-gray-700 dark:text-gray-300 group-hover:text-green-600 dark:group-hover:text-green-400 transition-all duration-500 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </div>
                </a>

                {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/ranveer-ghorpade-gg/" target="_blank" rel="noopener noreferrer" className="group relative">
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg blur-lg opacity-0 group-hover:opacity-30 transition-all duration-500"></div>
                  <div className="relative flex items-center justify-center w-12 h-12 border border-gray-600/20 dark:border-gray-400/20 rounded-lg bg-white/5 backdrop-blur-xl shadow-xl group-hover:border-blue-500/50 transition-all duration-500">
                    <svg className="w-7 h-7 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-all duration-500 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </div>
                </a>

                {/* Instagram */}
                <a href="https://www.instagram.com/ranveer._.15/" target="_blank" rel="noopener noreferrer" className="group relative">
                  <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg blur-lg opacity-0 group-hover:opacity-30 transition-all duration-500"></div>
                  <div className="relative flex items-center justify-center w-12 h-12 border border-gray-600/20 dark:border-gray-400/20 rounded-lg bg-white/5 backdrop-blur-xl shadow-xl group-hover:border-pink-500/50 transition-all duration-500">
                    <svg className="w-7 h-7 text-gray-700 dark:text-gray-300 group-hover:text-pink-500 dark:group-hover:text-pink-400 transition-all duration-500 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                </a>

                {/* Twitter/X */}
                <a href="https://x.com/Ranveer52251721" target="_blank" rel="noopener noreferrer" className="group relative">
                  <div className="absolute -inset-2 bg-gradient-to-r from-neutral-950 to-neutral-500 rounded-lg blur-lg opacity-0 group-hover:opacity-30 transition-all duration-500"></div>
                  <div className="relative flex items-center justify-center w-12 h-12 border border-gray-600/20 dark:border-gray-400/20 rounded-lg bg-white/5 backdrop-blur-xl shadow-xl group-hover:border-neutral-500/50 transition-all duration-500">
                    <svg className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-neutral-950 dark:group-hover:text-neutral-200 transition-all duration-500 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </div>
                </a>
              </div>
            </div>

            <div className="w-[250px] sm:w-[280px] md:w-[380px] h-[250px] sm:h-[280px] md:h-[380px] z-10">
              <div className="relative w-full h-full mx-auto animate-floating">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-blue-400 rounded-full blur-3xl opacity-10 animate-pulse"></div>
                <div className="group relative w-full h-full transform transition-transform duration-500 hover:scale-105">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
                  <img 
                    src="https://res.cloudinary.com/de3t8l5ul/image/upload/v1742763037/Profile_pfbbvs.jpg"
                    alt="Profile" 
                    className="rounded-full shadow-2xl border-2 border-blue-500/30 relative w-full h-full object-cover backdrop-blur-3xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="h-[90vh] flex items-center justify-center bg-gray-50 dark:bg-black">
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-0">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
              About Me
            </span>
          </h2>
          <About />
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="h-[90vh] flex items-center justify-center bg-white dark:bg-black">
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-0">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
              My Skills
            </span>
          </h2>
          <Skills />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="h-[90vh] flex items-center justify-center bg-gray-50 dark:bg-black">
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
              Featured Projects
            </span>
          </h2>
          <Projects />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="h-[90vh] flex items-center justify-center bg-white dark:bg-black">
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
              Contact Me
            </span>
          </h2>
          <Contact />
        </div>
      </section>

      <Footer />
    </main>
  );
}