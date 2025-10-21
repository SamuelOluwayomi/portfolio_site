import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/default.svg';
import { Code2, Sparkles } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);
  
  return (
    <motion.nav 
      ref={navRef}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] md:w-auto"
    >
      {/* Main navbar container */}
      <div 
        className="relative backdrop-blur-xl rounded-full shadow-2xl flex items-center justify-between w-full md:w-[680px] h-[60px] md:h-[65px] px-4 md:px-6 mx-auto border border-white/10 overflow-hidden"
        style={{ 
          background: 'linear-gradient(135deg, rgba(26, 26, 46, 0.95) 0%, rgba(16, 33, 62, 0.95) 100%)',
        }}
      >
        {/* Animated gradient border effect */}
        <div 
          className="absolute inset-0 rounded-full opacity-50"
          style={{
            background: 'linear-gradient(90deg, rgba(139, 125, 216, 0.3), rgba(123, 159, 211, 0.3), rgba(139, 125, 216, 0.3))',
            backgroundSize: '200% 100%',
            animation: 'gradient-shift 3s ease infinite',
            maskImage: 'linear-gradient(transparent, black, black, transparent)',
          }}
        />

        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden rounded-full pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-purple-400/50 rounded-full"
              style={{
                top: '50%',
                left: `${20 + i * 30}%`,
                animation: `particle-float ${2 + i}s ease-in-out infinite ${i * 0.5}s`,
              }}
            />
          ))}
        </div>
        
        {/* Logo Section with icon */}
        <div className="flex items-center gap-3 pl-2 relative z-10">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
            className="w-8 h-8 rounded-full bg-linear-to-br from-purple-500 to-blue-500 flex items-center justify-center shadow-lg"
          >
            <Code2 className="w-4 h-4 text-white" />
          </motion.div>
          
          <div className="flex items-center gap-2">
            <img 
              src={logo} 
              alt="TechWithSam" 
              className="h-6"
              style={{ filter: 'brightness(0) saturate(100%) invert(93%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(95%) contrast(88%)' }}
            />
            <Sparkles className="w-3 h-3 text-purple-400" />
          </div>
          
          {/* Vertical separator line */}
          <div className="h-8 w-px bg-linear-to-b from-transparent via-white/30 to-transparent ml-2"></div>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center flex-1 justify-between px-8 relative z-10">
          <div className="flex items-center gap-10">
            <motion.a
              href="#about"
              onClick={(e) => { e.preventDefault(); handleScroll('about'); }}
              className="relative group text-white/80 hover:text-white transition-all duration-300 text-sm font-medium"
              whileHover={{ y: -2 }}
            >
              About me
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-purple-400 to-blue-400 group-hover:w-full transition-all duration-300"></span>
            </motion.a>
            
            <motion.a
              href="#why me"
              onClick={(e) => { e.preventDefault(); handleScroll('why me'); }}
              className="relative group text-white/80 hover:text-white transition-all duration-300 text-sm font-medium"
              whileHover={{ y: -2 }}
            >
              Why me
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-purple-400 to-blue-400 group-hover:w-full transition-all duration-300"></span>
            </motion.a>
            
            <motion.a
              href="#projects"
              onClick={(e) => { e.preventDefault(); handleScroll('projects'); }}
              className="relative group text-white/80 hover:text-white transition-all duration-300 text-sm font-medium"
              whileHover={{ y: -2 }}
            >
              Projects
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-purple-400 to-blue-400 group-hover:w-full transition-all duration-300"></span>
            </motion.a>
          </div>
          
          {/* Contact Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative group bg-linear-to-r from-purple-600 to-blue-600 text-white px-6 py-2.5 rounded-full left-8 font-medium text-sm shadow-lg overflow-hidden"
            style={{ willChange: 'transform' }}
          >
            <span className="relative z-10">Contact me</span>
            {/* Hover effect */}
            <div className="absolute inset-0 bg-linear-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white p-2 pr-2 relative w-10 h-10 flex items-center justify-center z-10"
        >
          <div className="w-5 h-5 flex flex-col items-center justify-center">
            <motion.span
              animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
              className="w-5 h-0.5 bg-white block mb-1 rounded-full"
            />
            <motion.span
              animate={isOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
              className="w-5 h-0.5 bg-white block mb-1 rounded-full"
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
              className="w-5 h-0.5 bg-white block rounded-full"
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -30, scale: 0.9 }}
            animate={{ opacity: 1, y: [10,5,10], scale: 1 }}
            exit={{ opacity: 0, y: -30, scale: 0.9 }}
            transition={{ opacity: {duration: 0.3}, scale: {duration: 0.3}, y: { duration: 2,repeat: Infinity, repeatType: "reverse",ease: "easeInOut"}}}
            className="md:hidden absolute top-full left-0 right-0 backdrop-blur-xl rounded-3xl px-6 py-6 shadow-2xl border border-white/10 mt-2"
            style={{ 
              background: 'linear-gradient(135deg, rgba(26, 26, 46, 0.98) 0%, rgba(16, 33, 62, 0.98) 100%)',
            }}
          >
            <motion.div 
              className="flex flex-col gap-1"
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
              {[
                { label: 'About me', id: 'about' },
                { label: 'Why me', id: 'why me' },
                { label: 'Projects', id: 'projects' }
              ].map((item, i) => (
                <motion.a 
                  key={i}
                  href={`#${item.id}`}
                  onClick={(e) => { e.preventDefault(); handleScroll(item.id); }}
                  className="text-white/80 hover:text-white hover:bg-white/5 transition-all duration-200 py-3 px-4 rounded-xl text-sm font-medium"
                  variants={{
                    open: { opacity: 1, x: 0 },
                    closed: { opacity: 0, x: -20 }
                  }}
                  whileHover={{ x: 5 }}
                >
                  {item.label}
                </motion.a>
              ))}
              
              <motion.button 
                className="bg-linear-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-xl font-medium text-sm shadow-lg w-full mt-2"
                variants={{
                  open: { opacity: 1, x: 0 },
                  closed: { opacity: 0, x: -20 }
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Contact me
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;