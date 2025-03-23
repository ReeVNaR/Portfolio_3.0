const Footer = () => {
  return (
    <footer className="py-8 border-t border-gray-200 dark:border-gray-800">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <h3 className="font-bold text-xl text-gray-900 dark:text-white">Ranveer Ghorpade</h3>
            <p className="text-gray-600 dark:text-gray-400 mt-1">Full Stack Developer</p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-600 dark:text-gray-400">© {new Date().getFullYear()} All rights reserved</p>
            <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">Made with ❤️ using React & Tailwind</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
