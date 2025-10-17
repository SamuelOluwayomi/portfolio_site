import { motion } from "framer-motion";
import { Wrench, Globe, Code2, Layout } from "lucide-react";
import person from "../assets/person.svg";
import person1 from "../assets/person1.svg";
import laptop from "../assets/laptop.svg";
import growth from "../assets/growth.svg";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const capsules = [
    { text: "Backend", color: "from-[#A0826D] to-[#C4A68A]"},
    { text: "Frontend Design", color: "from-[#7B9FD3] to-[#A8C5E8]" },
    { text: "Hosting", color: "from-[#8B7DD8] to-[#B8A8E8]" },
    { text: "Web Design", color: "from-[#E8954A] to-[#F4B87C]" },
  ];

  return (
    <div className="relative">
      <section className="min-h-screen bg-gradient-to-b from-[#E8D5E1] to-brand-mauve pt-30 pb-32 px-6 relative rounded-b-[100px] md:rounded-b-[150px] z-10 shadow-[0_40px_80px_-20px_rgba(139,125,216,0.5)] overflow-hidden hero-root">
        {/* Subtle gradient glow background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-brand-purple)]/10 to-[var(--color-brand-blue)]/5 blur-3xl -z-10" />
        
        {/* Floating sparkles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full shadow-lg animate-float"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 3}s`,
                boxShadow:
                  "0 0 8px rgba(255, 255, 255, 0.8), 0 0 12px rgba(255, 255, 255, 0.5)",
              }}
            ></div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto relative">
          {/* Person Illustration - Top Left */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{
              opacity: 1,
              x: 0,
              y: [0, -15, 0],
            }}
            transition={{
              opacity: { duration: 0.8 },
              x: { duration: 0.8 },
              y: {
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              },
            }}
            className="absolute w-16 sm:w-20 md:w-28 lg:w-36 
              left-2 sm:left-4 md:left-8 lg:left-12 
              top-20 sm:top-24 md:top-28 lg:top-32"
            style={{ filter: "hue-rotate(270deg) saturate(1.5)" }}
          >
            <motion.img
              src={person}
              alt="Floating person illustration"
              className="w-full"
              animate={{ rotate: [-5, 5, -5] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          {/* Text Content */}
          <div className="text-center relative z-10">
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-8 px-4"
              style={{
                fontFamily: "'Righteous', cursive",
                textShadow: "0 2px 4px rgba(0,0,0,0.1)",
              }}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {["We", "drive", "growth", "to", "your"].map((word, i) => (
                <motion.span
                  key={i}
                  variants={wordVariants}
                  className="inline-block mr-2 sm:mr-3"
                >
                  {word}
                </motion.span>
              ))}
              <br className="hidden md:block" />
              <motion.span variants={wordVariants} className="inline-block">
                business
              </motion.span>
            </motion.h1>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  scale: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
                className="bg-brand-purple text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full 
                  text-sm sm:text-base md:text-lg font-medium 
                  shadow-lg hover:shadow-2xl transition-shadow duration-300 
                  inline-flex items-center gap-2 
                  ring-2 ring-white/30"
                aria-label="Book a consultation call"
              >
                Book a call
                <motion.img
                  src={growth}
                  alt="Arrow icon"
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  style={{
                    filter: "brightness(0) saturate(100%) invert(100%)",
                  }}
                  animate={{
                    x: [0, 5, 0],
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.button>
            </motion.div>
          </div>

          {/* Laptop Illustration - Top Right */}
          <motion.div
            initial={{ opacity: 0, x: 100, scale: 0.8 }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
              rotate: [0, -2, 0],
              y: [0, 10, 0],
            }}
            transition={{
              opacity: { duration: 0.8, delay: 0.5 },
              x: { duration: 0.8, delay: 0.5 },
              scale: { duration: 0.8, delay: 0.5 },
              rotate: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.3,
              },
              y: {
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              },
            }}
            whileHover={{
              rotate: -5,
              scale: 1.08,
              transition: { duration: 0.3 },
            }}
            className="absolute 
              top-20 sm:top-24 md:top-28 lg:top-32
              right-2 sm:right-4 md:right-8 lg:right-12 
              w-24 sm:w-32 md:w-44 lg:w-56 
              cursor-pointer"
            style={{ filter: "drop-shadow(0 10px 15px rgba(0, 0, 0, 0.15))" }}
          >
            <img src={laptop} alt="Laptop with growth chart" className="w-full" />
          </motion.div>
        </div>

        {/* Services Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-6xl mx-auto mt-32 md:mt-40"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12 bg-brand-light-blue/60 backdrop-blur-md rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl border border-white/30">
            
            {/* Left - Floating Service */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col items-start gap-4 md:w-1/3 w-full"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-black mb-2" style={{ fontFamily: "'Righteous', cursive" }}>
                Services
              </h2>
              <div className="flex flex-wrap gap-3">
                {capsules.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      delay: 0.5 + i * 0.1, 
                      duration: 0.4,
                      y: {
                        delay: i * 0.2,
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }
                    }}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: [-2, 2, -2, 0],
                      transition: { duration: 0.3 }
                    }}
                    animate={{
                      y: [0, -8, 0],
                    }}
                    className={`px-5 py-2.5 rounded-full bg-gradient-to-r ${item.color} text-white font-semibold text-sm shadow-lg hover:shadow-xl cursor-pointer`}
                  >
                    {item.text}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Center */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: 0.4,
                y: {
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
               }}
              animate={{
                y: [0, -12, 0],
              }}
              className="w-40 sm:w-48 md:w-56 flex justify-center"
            >
              <motion.img 
                src={person1} 
                alt="Service character" 
                className="w-full drop-shadow-2xl" 
                whileHover={{
                  scale: 1.05,
                  rotate: [0, -3, 3, 0],
                  transition: { duration: 0.5 }
                }}
              />
            </motion.div>

            {/* Right - Service Details Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 0 30px rgba(139, 125, 216, 0.5)",
                transition: { duration: 0.3 }
              }}
              className="md:w-1/3 w-full bg-white/90 backdrop-blur-sm border-2 border-brand-purple/30 shadow-xl rounded-2xl p-6 hover:border-brand-purple/60 transition-all"
            >
              <h3 className="text-xl font-bold mb-4 text-brand-purple" style={{ fontFamily: "'Righteous', cursive" }}>
                What We Offer
              </h3>
              <ul className="space-y-3">
                {[
                  { icon: Wrench, text: "Full-stack Development" },
                  { icon: Layout, text: "Modern UI/UX Design" },
                  { icon: Code2, text: "API Integration" },
                  { icon: Globe, text: "Hosting & SEO" }
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 + i * 0.1 }}
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                    className="flex items-center gap-3 text-gray-800"
                  >
                    <item.icon className="text-brand-purple w-5 h-5 flex-shrink-0" />
                    <span className="font-medium">{item.text}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
        <div
          aria-hidden="true"
          className="absolute left-1/2 -translate-x-1/2 bottom-[-36px] w-[88%] h-[120px] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(139,125,216,0.22) 0%, rgba(139,125,216,0.10) 35%, rgba(0,0,0,0) 100%)",
            filter: "blur(30px)",
            zIndex: 15,
          }}
        />
      </section>
    </div>
  );
};

export default Hero;