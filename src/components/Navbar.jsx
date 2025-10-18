import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/default.svg';

const Navbar = () => {
  // State to track if mobile menu is open or closed
  const [isOpen, setIsOpen] = useState(false);

  // Smooth-scroll to an element with id and close mobile menu
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setIsOpen(false);
  };
  
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] md:w-auto"
    >
      {/* Main navbar container */}
      <div 
        className="backdrop-blur-md rounded-full shadow-lg flex items-center justify-between w-[230px] md:w-[600px] h-[50px] md:h-[39.28px] px-2 mx-auto"
        style={{ backgroundColor: '#584E4E' }}
      >
        
        {/* Logo Section */}
        <div className="flex items-center gap-3 pl-4">
          <img 
            src={logo} 
            alt="TechWithSam" 
            className="h-5"
            style={{ filter: 'brightness(0) saturate(100%) invert(93%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(95%) contrast(88%)' }}
          />
          
          {/* Vertical separator line */}
          <div className="h-6 w-[2px] bg-white/30"></div>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center flex-1 justify-between px-6">
          <div className="flex items-center gap-12">
             <a
              href="#about"
              onClick={(e) => { e.preventDefault(); handleScroll('about'); }}
              className="text-white/90 hover:text-white transition-colors duration-200 hover:scale-105 text-sm"
            >
              About us
            </a>
            <a
              href="#blog"
              onClick={(e) => { e.preventDefault(); handleScroll('blog'); }}
              className="text-white/90 hover:text-white transition-colors duration-200 hover:scale-105 text-sm"
            >
              Why us
            </a>
            <a
              href="#projects"
              onClick={(e) => { e.preventDefault(); handleScroll('projects'); }}
              className="text-white/90 hover:text-white transition-colors duration-200 hover:scale-105 text-sm"
            >
              Projects
            </a>
          </div>
          
          {/* Contact Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-brand-purple text-white px-4 py-1.5 rounded-full hover:bg-brand-purple/90 transition-colors duration-200 text-sm"
          >
            Contact us
          </motion.button>
        </div>

        {/* Mobile Menu Button with animated icon */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white p-2 pr-4 relative w-10 h-10 flex items-center justify-center"
        >
          <div className="w-5 h-5 flex flex-col items-center justify-center">
            {/* Top line */}
            <motion.span
              animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
              className="w-5 h-0.5 bg-white block mb-1"
            />
            {/* Middle line */}
            <motion.span
              animate={isOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
              className="w-5 h-0.5 bg-white block mb-1"
            />
            {/* Bottom line */}
            <motion.span
              animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
              className="w-5 h-0.5 bg-white block"
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu Dropdown with floating animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -30, scale: 0.9 }}
            animate={{ 
              opacity: 1, 
              y: [10, 5, 10],
              scale: 1,
            }}
            exit={{ opacity: 0, y: -30, scale: 0.9 }}
            transition={{ 
              opacity: { duration: 0.3 },
              scale: { duration: 0.3 },
              y: { 
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }
            }}
            style={{ backgroundColor: '#584E4E' }}
            className="md:hidden absolute top-full left-0 right-0 backdrop-blur-md rounded-3xl px-6 py-4 shadow-2xl"
          >
            <motion.div 
              className="flex flex-col gap-4"
              initial="closed"
              animate="open"
              variants={{
                open: {
                  transition: { staggerChildren: 0.1 }
                },
                closed: {
                  transition: { staggerChildren: 0.05, staggerDirection: -1 }
                }
              }}
            >
              <motion.a 
                href="#blog"
                onClick={(e) => { e.preventDefault(); handleScroll('blog'); }}
                className="text-white/90 hover:text-white transition-colors duration-200 py-2 text-sm"
                variants={{
                  open: { opacity: 1, x: 0 },
                  closed: { opacity: 0, x: -20 }
                }}
              >
                Why us
              </motion.a>
              <motion.a 
                href="#about"
                onClick={(e) => { e.preventDefault(); handleScroll('about'); }}
                className="text-white/90 hover:text-white transition-colors duration-200 py-2 text-sm"
                variants={{
                  open: { opacity: 1, x: 0 },
                  closed: { opacity: 0, x: -20 }
                }}
              >
                About us
              </motion.a>
              <motion.a 
                href="#projects"
                onClick={(e) => { e.preventDefault(); handleScroll('projects'); }}
                className="text-white/90 hover:text-white transition-colors duration-200 py-2 text-sm"
                variants={{
                  open: { opacity: 1, x: 0 },
                  closed: { opacity: 0, x: -20 }
                }}
              >
                Projects
              </motion.a>
              <motion.button 
                className="bg-brand-purple text-white px-4 py-1.5 rounded-full hover:bg-brand-purple/90 transition-colors duration-200 w-full text-sm"
                variants={{
                  open: { opacity: 1, x: 0 },
                  closed: { opacity: 0, x: -20 }
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Contact us
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;