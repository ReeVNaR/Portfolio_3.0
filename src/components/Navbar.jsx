import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const MenuButton = ({ isOpen, onClick }) => (
  <button 
    onClick={onClick}
    className="md:hidden relative w-8 h-8 flex items-center justify-center"
    aria-label="Toggle menu"
  >
    <div className="flex flex-col justify-between w-6 h-5 transform transition-all duration-300">
      <span className={`bg-gray-600 dark:bg-gray-300 h-0.5 w-full transform transition-all duration-300 ${
        isOpen ? 'rotate-45 translate-y-2.5' : ''
      }`} />
      <span className={`bg-gray-600 dark:bg-gray-300 h-0.5 w-full transition-all duration-300 ${
        isOpen ? 'opacity-0' : 'opacity-100'
      }`} />
      <span className={`bg-gray-600 dark:bg-gray-300 h-0.5 w-full transform transition-all duration-300 ${
        isOpen ? '-rotate-45 -translate-y-2.5' : ''
      }`} />
    </div>
  </button>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (elementId) => {
    document.getElementById(elementId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <span className="text-2xl font-bold text-gray-900 dark:text-white">
            RG
          </span>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 capitalize"
              >
                {item}
              </button>
            ))}
            <div className="border-l border-gray-200 dark:border-gray-700 h-6 mx-2" />
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <MenuButton isOpen={isMobileMenuOpen} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <motion.div
        initial={false}
        animate={{
          height: isMobileMenuOpen ? 'auto' : 0,
          opacity: isMobileMenuOpen ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-700"
      >
        <div className="container max-w-7xl mx-auto px-4 py-4 space-y-3">
          {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
            <button
              key={item}
              onClick={() => {
                document.getElementById(item)?.scrollIntoView({ behavior: 'smooth' });
                setIsMobileMenuOpen(false);
              }}
              className="block w-full text-left py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 capitalize"
            >
              {item}
            </button>
          ))}
          <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
            <ThemeToggle />
          </div>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
