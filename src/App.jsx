import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [portfolioVersion, setPortfolioVersion] = useState(() => {
    const saved = localStorage.getItem('portfolio_version');
    if (saved === 'v1' || saved === 'v2') return saved;
    return 'v2';
  });

  useEffect(() => {
    localStorage.setItem('portfolio_version', portfolioVersion);
  }, [portfolioVersion]);

  const scrollTo = (elementId) => {
    if (elementId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(elementId);
    if (element) {
      const isMobile = window.innerWidth < 768;
      // On mobile, the navigation bar is at the bottom, so top offset is minimal (8px)
      // allowing the chosen section to align directly at the top so only that section is visible.
      // On desktop, the floating navbar is at the top (~65px).
      const offset = isMobile ? 8 : 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: 'smooth'
      });
    }
  };

  return (
    <main className="bg-white dark:bg-black selection:bg-blue-500/20 selection:text-blue-500 pb-20 md:pb-0">
      <Navbar 
        portfolioVersion={portfolioVersion} 
        setPortfolioVersion={setPortfolioVersion} 
      />
      
      {/* Home / Hero Section */}
      <Hero 
        scrollTo={scrollTo} 
        portfolioVersion={portfolioVersion} 
      />

      {/* About Section */}
      <section 
        id="about" 
        className={`scroll-mt-3 md:scroll-mt-20 min-h-[calc(100vh-4.5rem)] md:min-h-screen flex flex-col justify-center py-6 sm:py-8 md:py-10 transition-colors duration-500 relative ${
          portfolioVersion === 'v1' 
            ? 'bg-gray-50 dark:bg-black' 
            : 'bg-transparent'
        }`}
      >
        {portfolioVersion === 'v2' && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-64 sm:h-80 bg-gradient-to-r from-blue-500/5 via-cyan-500/5 to-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
        )}
        <div className="container max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 sm:mb-6">
              <span className={
                portfolioVersion === 'v1'
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400"
                  : "text-transparent bg-clip-text bg-gradient-to-r from-[#0071e3] via-[#0284c7] to-[#0055b3] dark:from-sky-400 dark:via-blue-300 dark:to-indigo-300 font-display tracking-tight"
              }>
                About Me
              </span>
            </h2>
            <div className="overflow-visible">
              <About 
                portfolioVersion={portfolioVersion} 
                scrollTo={scrollTo} 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section 
        id="skills" 
        className="scroll-mt-3 md:scroll-mt-20 min-h-[calc(100vh-4.5rem)] md:min-h-screen flex flex-col justify-center py-6 sm:py-8 md:py-10 bg-white dark:bg-black"
      >
        <div className="container mx-auto px-4 md:px-6 mb-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
              My Skills
            </span>
          </h2>
          <Skills />
        </div>
      </section>

      {/* Projects Section */}
      <section 
        id="projects" 
        className="scroll-mt-3 md:scroll-mt-20 min-h-[calc(100vh-4.5rem)] md:min-h-screen flex flex-col justify-center py-6 sm:py-8 md:py-10 bg-gray-50 dark:bg-black"
      >
        <div className="container max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
                Featured Projects
              </span>
            </h2>
            <div className="h-[75vh] md:h-[80vh]">
              <Projects />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section 
        id="contact" 
        className="scroll-mt-3 md:scroll-mt-20 min-h-[calc(100vh-4.5rem)] md:min-h-screen flex flex-col justify-center py-6 sm:py-8 md:py-10 bg-white dark:bg-black"
      >
        <div className="container max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8">
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
