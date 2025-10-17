import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import meImage from "../assets/me.svg";
import coding from "../assets/coding.svg";

const About = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax effects
  const imageY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const imageRotate = useTransform(scrollYProgress, [0, 0.5, 1], [-5, 0, 5]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <section ref={containerRef} id="about" className="relative bg-black text-white py-20 px-6 md:px-16 -mt-[150px] pt-[180px] overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(139, 125, 216, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 125, 216, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Floating Accent Elements */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-brand-purple/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-40 h-40 bg-brand-blue/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
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
          
          {/* Left Side - Team Illustration Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main Image Container */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative aspect-square bg-gradient-to-br from-brand-purple/20 to-brand-blue/20 rounded-3xl overflow-hidden border border-brand-purple/30 shadow-2xl"
            >
              <img 
                src={coding} 
                alt="Team collaboration" 
                className="w-full h-full object-cover"
              />

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-brand-purple/20 rounded-full blur-xl" />
              <div className="absolute bottom-4 left-4 w-24 h-24 bg-brand-blue/20 rounded-full blur-xl" />
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
            viewport={{ once: true }}
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
            >
              Learn More About Us
            </motion.button>
          </motion.div>
        </div>

        {/* 3D Floating Photo Card with Parallax */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-32 flex justify-center"
        >
          <motion.div
            style={{
              y: imageY,
              rotateX: imageRotate,
              scale: imageScale,
            }}
            className="relative perspective-1000"
          >
            {/* Glowing Border Animation */}
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 30px rgba(139, 125, 216, 0.4)",
                  "0 0 50px rgba(139, 125, 216, 0.6)",
                  "0 0 30px rgba(139, 125, 216, 0.4)",
                ]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -inset-1 bg-gradient-to-r from-brand-purple via-brand-blue to-brand-purple rounded-3xl blur-lg opacity-75"
            />

            {/* Photo Card */}
            <motion.div
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                rotateX: 5,
                transition: { duration: 0.3 }
              }}
              className="relative bg-gradient-to-br from-gray-900 to-black p-4 md:p-6 rounded-3xl shadow-2xl"
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              {/* Photo Container */}
              <div className="relative overflow-hidden rounded-2xl">
                <motion.img
                  src={meImage}
                  alt="Sam - Web Developer"
                  className="w-full h-auto max-w-md mx-auto rounded-2xl"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                />
                
                {/* Gradient Overlay on Hover */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-t from-brand-purple/50 to-transparent rounded-2xl"
                />
              </div>

              {/* Caption */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="mt-4 text-center"
              >
                <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-brand-purple to-brand-blue bg-clip-text text-transparent">
                  Samuel Oluwayomi
                </h3>
                <p className="text-gray-400 text-sm md:text-base">Full-Stack Developer & Designer</p>
              </motion.div>

              {/* Decorative Corner Elements */}
              <div className="absolute top-2 left-2 w-8 h-8 border-l-2 border-t-2 border-brand-purple rounded-tl-xl" />
              <div className="absolute top-2 right-2 w-8 h-8 border-r-2 border-t-2 border-brand-blue rounded-tr-xl" />
              <div className="absolute bottom-2 left-2 w-8 h-8 border-l-2 border-b-2 border-brand-blue rounded-bl-xl" />
              <div className="absolute bottom-2 right-2 w-8 h-8 border-r-2 border-b-2 border-brand-purple rounded-br-xl" />
            </motion.div>

            {/* Floating Particles around Photo */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-brand-purple rounded-full"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.3, 1, 0.3],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;