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
    return localStorage.getItem('portfolio_version') || 'v3';
  });

  useEffect(() => {
    localStorage.setItem('portfolio_version', portfolioVersion);
  }, [portfolioVersion]);

  const scrollTo = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      const offset = 80; // Height of navbar
      window.scrollTo({
        top: element.offsetTop - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <main className="bg-white dark:bg-black selection:bg-blue-500/20 selection:text-blue-500">
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
      <section id="about" className="scroll-mt-20 min-h-[90vh] md:min-h-[85vh] pt-20 md:pt-0 flex items-center justify-center bg-gray-50 dark:bg-black">
        <div className="container max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-0">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
                About Me
              </span>
            </h2>
            <div className="overflow-y-auto md:overflow-visible scrollbar-hide">
              <About />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="scroll-mt-20 min-h-[90vh] md:min-h-[85vh] mb-8 pt-20 md:pt-0 flex items-center justify-center bg-white dark:bg-black">
        <div className="container mx-auto px-4 md:px-6 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
              My Skills
            </span>
          </h2>
            <Skills />
          </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="scroll-mt-20 min-h-[100vh] md:min-h-[90vh] mb-4 flex items-center justify-center bg-gray-50 dark:bg-black">
        <div className="container max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
                Featured Projects
              </span>
            </h2>
            <div className="h-[75vh] md:h-[100vh]">
              <Projects />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="scroll-mt-20 min-h-[90vh] md:min-h-[85vh] pt-20 md:pt-0 mb-12 flex items-center justify-center bg-white dark:bg-black">
        <div className="container max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
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