import { useState, useEffect } from 'react';

const descriptions = [
  "Full Stack Developer & UI/UX Enthusiast",
  "React & Node.js Developer",
  "Problem Solver & Tech Enthusiast",
  "JavaScript & TypeScript Expert",
  "Web Development Passionate"
];

export const TypingEffect = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const pauseDuration = 2000;

    const type = () => {
      const currentText = descriptions[currentIndex];
      
      if (!isDeleting) {
        setDisplayText(currentText.substring(0, displayText.length + 1));
        
        if (displayText.length === currentText.length) {
          setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      } else {
        setDisplayText(currentText.substring(0, displayText.length - 1));
        
        if (displayText.length === 0) {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % descriptions.length);
        }
      }
    };

    const timer = setTimeout(
      type,
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentIndex]);

  return (
    <span className="inline-block overflow-hidden whitespace-nowrap border-r-2 border-blue-600 animate-blink">
      {displayText}
    </span>
  );
};
