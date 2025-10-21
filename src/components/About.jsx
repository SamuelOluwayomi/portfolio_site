import { motion } from "framer-motion";
import { useMemo } from "react";
import meImage from "../assets/me.svg";
import coding from "../assets/coding.svg";

const About = () => {
  // Memoize particles to prevent recalculation
  const particles = useMemo(() => 
    [...Array(4)].map((_, i) => ({
      top: `${20 + i * 20}%`,
      left: `${20 + i * 15}%`,
      delay: i * 0.4,
      duration: 3 + i,
    })), []
  );

  return (
    <section id="about" className="relative bg-black text-white py-20 px-6 md:px-16 -mt-[150px] pt-[180px] overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(139, 125, 216, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 125, 216, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Floating Accent Elements - OPTIMIZED with CSS animations */}
      <div
        className="absolute top-20 left-10 w-32 h-32 bg-brand-purple/10 rounded-full"
        style={{
          filter: 'blur(60px)',
          animation: 'pulse-slow 4s ease-in-out infinite',
          willChange: 'transform, opacity',
        }}
      />
      <div
        className="absolute bottom-20 right-10 w-40 h-40 bg-brand-blue/10 rounded-full"
        style={{
          filter: 'blur(60px)',
          animation: 'pulse-slow 5s ease-in-out infinite 1s',
          willChange: 'transform, opacity',
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            style={{ fontFamily: "'Righteous', cursive" }}
          >
            Turning Ideas Into Reality
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-purple to-brand-blue mx-auto rounded-full" />
        </motion.div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Team Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main Image Container */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative aspect-square bg-gradient-to-br from-brand-purple/20 to-brand-blue/20 rounded-3xl overflow-hidden border border-brand-purple/30 shadow-2xl"
              style={{ willChange: 'transform' }}
            >
              <img 
                src={coding} 
                alt="Team collaboration" 
                className="w-full h-full object-cover"
                loading="lazy"
              />

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-brand-purple/20 rounded-full" style={{ filter: 'blur(40px)' }} />
              <div className="absolute bottom-4 left-4 w-24 h-24 bg-brand-blue/20 rounded-full" style={{ filter: 'blur(40px)' }} />
            </motion.div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
              className="absolute -bottom-6 -right-6 bg-gradient-to-r from-brand-purple to-brand-blue p-6 rounded-2xl shadow-2xl"
            >
              <div className="text-center">
                <p className="text-3xl font-bold">3+</p>
                <p className="text-xs">Years Experience</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-brand-purple to-brand-blue bg-clip-text text-transparent">
                Crafting Digital Experiences
              </h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                We may be a compact team but our creativity knows no bounds. By dedication and hard work, we convert our client's ideas into real masterpieces.
              </p>
            </div>

            {/* Feature Cards */}
            <div className="grid gap-4 mt-8">
              {[
                {
                  icon: "💡",
                  title: "Innovative Solutions",
                  desc: "Cutting-edge designs that stand out"
                },
                {
                  icon: "🚀",
                  title: "Fast Delivery",
                  desc: "Quality work delivered on time"
                },
                {
                  icon: "🎯",
                  title: "Client-Focused",
                  desc: "Your vision, our mission"
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  whileHover={{ 
                    x: 10,
                    transition: { duration: 0.2 }
                  }}
                  className="flex items-start gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-brand-purple/50 transition-all"
                  style={{ willChange: 'transform' }}
                >
                  <span className="text-3xl">{item.icon}</span>
                  <div>
                    <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 px-8 py-3 bg-gradient-to-r from-brand-purple to-brand-blue text-white font-semibold rounded-full shadow-lg hover:shadow-2xl transition-shadow"
              style={{ willChange: 'transform' }}
            >
              Learn More About Us
            </motion.button>
          </motion.div>
        </div>

        {/* 3D Floating Photo Card - OPTIMIZED */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-32 flex justify-center"
        >
          <motion.div className="relative perspective-1000">
            {/* Subtle Glow Border - OPTIMIZED with CSS animation */}
            <div
              className="absolute -inset-[2px] bg-gradient-to-r from-brand-purple via-brand-blue to-brand-purple rounded-3xl opacity-70"
              style={{
                filter: 'blur(8px)',
                animation: 'glow-pulse 4s ease-in-out infinite',
                willChange: 'opacity',
              }}
            />

            {/* Photo Card */}
            <motion.div
              whileHover={{
                scale: 1.03,
                rotateY: 4,
                rotateX: 4,
              }}
              transition={{ duration: 0.3 }}
              className="relative bg-gradient-to-br from-gray-900 to-black p-4 md:p-6 rounded-3xl shadow-xl"
              style={{
                transformStyle: "preserve-3d",
                willChange: 'transform',
              }}
            >
              {/* Image */}
              <div className="relative overflow-hidden rounded-2xl">
                <motion.img
                  src={meImage}
                  alt="Sam - Web Developer"
                  className="w-full h-auto max-w-md mx-auto rounded-2xl"
                  loading="lazy"
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.4 }}
                  style={{ willChange: 'transform' }}
                />
                {/* Gradient Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-t from-brand-purple/40 to-transparent rounded-2xl transition-opacity"
                />
              </div>

              {/* Caption */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="mt-4 text-center"
              >
                <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-brand-purple to-brand-blue bg-clip-text text-transparent">
                  Samuel Oluwayomi
                </h3>
                <p className="text-gray-400 text-sm md:text-base">
                  Full-Stack Developer & Designer
                </p>
              </motion.div>

              {/* Decorative Corners */}
              <div className="absolute top-2 left-2 w-8 h-8 border-l-2 border-t-2 border-brand-purple rounded-tl-xl" />
              <div className="absolute top-2 right-2 w-8 h-8 border-r-2 border-t-2 border-brand-blue rounded-tr-xl" />
              <div className="absolute bottom-2 left-2 w-8 h-8 border-l-2 border-b-2 border-brand-blue rounded-bl-xl" />
              <div className="absolute bottom-2 right-2 w-8 h-8 border-r-2 border-b-2 border-brand-purple rounded-br-xl" />
            </motion.div>

            {/* Floating Particles - OPTIMIZED with CSS */}
            {particles.map((particle, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-brand-purple rounded-full"
                style={{
                  top: particle.top,
                  left: particle.left,
                  animation: `float-particle ${particle.duration}s ease-in-out infinite ${particle.delay}s`,
                  willChange: 'transform, opacity',
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes pulse-slow {
          0%, 100% {
            transform: scale(1);
            opacity: 0.3;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.5;
          }
        }

        @keyframes glow-pulse {
          0%, 100% {
            opacity: 0.4;
          }
          50% {
            opacity: 0.7;
          }
        }

        @keyframes float-particle {
          0%, 100% {
            transform: translateY(0) scale(1);
            opacity: 0.4;
          }
          50% {
            transform: translateY(-15px) scale(1.3);
            opacity: 0.9;
          }
        }
      `}</style>
    </section>
  );
};

export default About;