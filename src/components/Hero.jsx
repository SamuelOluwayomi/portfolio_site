import { motion } from "framer-motion";
import { Wrench, Globe, Code2, Layout, Sparkles } from "lucide-react";
import person from "../assets/person.svg";
import person1 from "../assets/person1.svg";
import laptop from "../assets/laptop.svg";
import { useMemo } from "react";

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

  const sparkles = useMemo(() => 
    Array.from({ length: 20 }).map((_, i) => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${3 + Math.random() * 3}s`,
    })), []
  );

  return (
    <div className="relative">
      <section className="min-h-screen bg-gradient-to-b from-[#0F0F23] via-[#1A1A35] to-[#0A0A14] pt-30 pb-32 px-6 relative rounded-b-[100px] md:rounded-b-[150px] z-10 shadow-[0_40px_80px_-20px_rgba(139,125,216,0.6)] overflow-hidden hero-root">
        {/* Animated gradient mesh background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(139, 125, 216, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(123, 159, 211, 0.15) 0%, transparent 50%)',
          }} />
        </div>

        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(139, 125, 216, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 125, 216, 0.2) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }} />
        </div>

        {/* Floating sparkles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {sparkles.map((sparkle, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-purple-400 rounded-full"
              style={{
                top: sparkle.top,
                left: sparkle.left,
                animationDelay: sparkle.delay,
                animationDuration: sparkle.duration,
                animation: 'float 6s ease-in-out infinite',
                willChange: 'transform',
                boxShadow: '0 0 10px rgba(139, 125, 216, 0.8)',
              }}
            />
          ))}
        </div>

        {/* Gradient orbs */}
        <div
          className="absolute top-20 left-10 w-96 h-96 bg-purple-500/20 rounded-full"
          style={{
            filter: 'blur(80px)',
            animation: 'pulse-slow 6s ease-in-out infinite',
            willChange: 'transform, opacity',
          }}
        />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full"
          style={{
            filter: 'blur(80px)',
            animation: 'pulse-slow 8s ease-in-out infinite 2s',
            willChange: 'transform, opacity',
          }}
        />

        <div className="max-w-7xl mx-auto relative">
          {/* Person Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute w-16 sm:w-20 md:w-28 lg:w-36 left-0 sm:left-4 md:left-8 lg:left-12 top-28 sm:top-24 md:top-28 lg:top-32"
            style={{ 
              filter: "hue-rotate(270deg) saturate(1.5) drop-shadow(0 0 20px rgba(139, 125, 216, 0.5))",
              willChange: 'transform',
            }}
          >
            <motion.img
              src={person}
              alt="Floating person illustration"
              className="w-full"
              loading="lazy"
              animate={{ 
                y: [0, -15, 0],
                rotate: [-5, 5, -5] 
              }}
              transition={{
                y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
              style={{ willChange: 'transform' }}
            />
          </motion.div>

          {/* Text Content */}
          <div className="text-center relative z-10">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-full backdrop-blur-sm"
            >
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-purple-300 font-medium">Building Digital Excellence</span>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 px-4"
              style={{
                fontFamily: "'Righteous', cursive",
                textShadow: "0 0 40px rgba(139, 125, 216, 0.3)",
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
              <motion.span 
                variants={wordVariants} 
                className="inline-block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent"
              >
                business
              </motion.span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto"
            >
              Transform your ideas into powerful digital solutions with cutting-edge technology and stunning design
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative px-8 py-4 rounded-full text-base md:text-lg font-semibold overflow-hidden group"
                style={{ willChange: 'transform' }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500" />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 flex items-center gap-2 text-white">
                  Book a call
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </span>
              </motion.button>
            </motion.div>
          </div>

          {/* Laptop Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            className="absolute top-28 sm:top-28 md:top-30 lg:top-32 right-2 sm:right-4 md:right-8 lg:right-12 
              w-24 sm:w-32 md:w-44 lg:w-56 cursor-pointer"
            style={{ 
              filter: "drop-shadow(0 10px 30px rgba(139, 125, 216, 0.4))",
              willChange: 'transform',
            }}
          >
            <motion.img 
              src={laptop} 
              alt="Laptop with growth chart" 
              className="w-full"
              loading="lazy"
              animate={{
                rotate: [0, -2, 0],
                y: [0, 10, 0],
              }}
              transition={{
                rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
              }}
              style={{ willChange: 'transform' }}
            />
          </motion.div>
        </div>

        {/* Services Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2, margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-6xl mx-auto mt-32 md:mt-40"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12 bg-white/5 backdrop-blur-xl rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl border border-white/10">
            
            {/* Services */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col items-start gap-4 md:w-1/3 w-full"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2" style={{ fontFamily: "'Righteous', cursive" }}>
                Services
              </h2>
              <div className="flex flex-wrap gap-3">
                {capsules.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.1, duration: 0.4 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className={`px-5 py-2.5 rounded-full bg-gradient-to-r ${item.color} text-white font-semibold text-sm shadow-lg cursor-pointer`}
                    style={{ willChange: 'transform' }}
                  >
                    {item.text}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* pwerson */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="w-40 sm:w-48 md:w-56 flex justify-center"
            >
              <motion.img 
                src={person1} 
                alt="Service character" 
                className="w-full drop-shadow-2xl" 
                loading="lazy"
                whileHover={{ scale: 1.05 }}
                animate={{ y: [0, -12, 0] }}
                transition={{
                  y: { duration: 3.5, repeat: Infinity, ease: "easeInOut" }
                }}
                style={{ 
                  willChange: 'transform',
                  filter: "drop-shadow(0 0 20px rgba(139, 125, 216, 0.3))"
                }}
              />
            </motion.div>

            {/* Service Details */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ scale: 1.02 }}
              className="md:w-1/3 w-full bg-gradient-to-br from-purple-500/10 to-blue-500/10 backdrop-blur-sm border-2 border-purple-500/30 shadow-xl rounded-2xl p-6 transition-all"
              style={{ willChange: 'transform' }}
            >
              <h3 className="text-xl font-bold mb-4 text-purple-300" style={{ fontFamily: "'Righteous', cursive" }}>
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
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 text-gray-200"
                    style={{ willChange: 'transform' }}
                  >
                    <item.icon className="text-purple-400 w-5 h-5 flex-shrink-0" />
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
            background: "radial-gradient(ellipse at center, rgba(139,125,216,0.22) 0%, rgba(139,125,216,0.10) 35%, rgba(0,0,0,0) 100%)",
            filter: "blur(30px)",
            zIndex: 15,
          }}
        />
      </section>
    </div>
  );
};

export default Hero;