import { motion } from "framer-motion";

const WhyMe = () => {
 const reasons = [
  {
    number: "01",
    title: "Full-Stack Mastery",
    description:
      "I build powerful web applications with Django REST Framework on the backend and React + Tailwind CSS on the frontend for seamless, dynamic experiences.",
    icon: "🧠",
    color: "from-purple-500 to-indigo-500",
  },
  {
    number: "02",
    title: "UI/UX Focused Design",
    description:
      "I design intuitive, visually striking interfaces with Figma and Framer Motion that blend aesthetics with smooth user interaction.",
    icon: "🎨",
    color: "from-pink-500 to-violet-500",
  },
  {
    number: "03",
    title: "Performance-Driven Builds",
    description:
      "I optimize every line of code for speed, accessibility, and responsiveness — ensuring pixel-perfect results on all devices.",
    icon: "⚡",
    color: "from-blue-500 to-cyan-500",
  },
  {
    number: "04",
    title: "Clean & Scalable Code",
    description:
      "I write maintainable, modular, and reusable code with attention to structure, documentation, and scalability.",
    icon: "💻",
    color: "from-emerald-500 to-teal-500",
  },
  {
    number: "05",
    title: "Creative Problem Solving",
    description:
      "I turn complex ideas into elegant, functional solutions — always finding a smarter way to build and deliver value.",
    icon: "🧩",
    color: "from-indigo-500 to-purple-500",
  },
  {
    number: "06",
    title: "Continuous Growth",
    description:
      "I do my best to stay ahead of the curve by exploring new technologies, frameworks, and design trends to refine my craft daily.",
    icon: "🚀",
    color: "from-violet-500 to-fuchsia-500",
  },
];

  return (
    <div className="relative">
      {/* Glow effect from About section */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 -translate-x-1/2 top-[-36px] w-[88%] h-[120px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(139,125,216,0.22) 0%, rgba(139,125,216,0.10) 35%, rgba(0,0,0,0) 100%)",
          filter: "blur(30px)",
          zIndex: 15,
        }}
      />
      
      <section 
        id="why me" 
        className="relative bg-gradient-to-b from-[#0A0A14] via-[#1A1A2E] to-[#0A0A14] text-white py-32 px-6 md:px-16 overflow-hidden rounded-b-[100px] md:rounded-b-[150px] z-10 shadow-[0_40px_80px_-20px_rgba(139,125,216,0.4)]"
      >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(139, 125, 216, 0.15) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Gradient Orbs - OPTIMIZED with CSS animations */}
      <div
        className="absolute top-40 -left-20 w-72 h-72 bg-purple-500/20 rounded-full"
        style={{
          filter: 'blur(60px)',
          animation: 'orb-float-1 8s ease-in-out infinite',
          willChange: 'transform',
        }}
      />
      <div
        className="absolute bottom-40 -right-20 w-96 h-96 bg-blue-500/20 rounded-full"
        style={{
          filter: 'blur(60px)',
          animation: 'orb-float-2 10s ease-in-out infinite 2s',
          willChange: 'transform',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-block mb-4"
          >
            <span className="text-sm md:text-base font-semibold px-4 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-full">
              ✨ What Sets Me Apart
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
            style={{ fontFamily: "'Righteous', cursive" }}
          >
            Why Choose{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent">
              Me?
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Not just another developer — I bring passion, precision, and performance to every project
          </motion.p>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-32 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 mx-auto mt-8 rounded-full"
          />
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group relative"
              style={{ willChange: 'transform' }}
            >
              {/* Card Glow Effect - OPTIMIZED */}
              <div
                className={`absolute -inset-0.5 bg-gradient-to-r ${reason.color} rounded-2xl opacity-0 group-hover:opacity-75 transition-opacity duration-500`}
                style={{ filter: 'blur(8px)' }}
              />

              {/* Card Content */}
              <div className="relative h-full bg-gray-900/90 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 group-hover:border-purple-500/50 transition-all duration-300">
                {/* Number Badge */}
                <div className="flex items-start justify-between mb-6">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="text-6xl"
                    style={{ willChange: 'transform' }}
                  >
                    {reason.icon}
                  </motion.div>
                  <span className={`text-6xl font-bold bg-gradient-to-br ${reason.color} bg-clip-text text-transparent opacity-20 group-hover:opacity-40 transition-opacity`}>
                    {reason.number}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-4 group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  {reason.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed">
                  {reason.description}
                </p>

                {/* Animated Corner Accents */}
                <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-purple-500/0 group-hover:border-purple-500 transition-all duration-300 rounded-tl-lg" />
                <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-blue-500/0 group-hover:border-blue-500 transition-all duration-300 rounded-br-lg" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-24 text-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
            style={{ willChange: 'transform' }}
          >
            <motion.button
              className="relative px-12 py-5 text-lg font-semibold rounded-full overflow-hidden group"
              whileHover="hover"
            >
              {/* Animated Background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500"
                variants={{
                  hover: {
                    scale: 1.5,
                    rotate: 180,
                  }
                }}
                transition={{ duration: 0.8 }}
              />
              
              {/* Button Text */}
              <span className="relative z-10 flex items-center gap-2">
                Let's Work Together
                <span>→</span>
              </span>
            </motion.button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-6 text-gray-400"
          >
            Ready to bring your vision to life? Let's create something amazing.
          </motion.p>
        </motion.div>

        {/* Floating Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          {[
            { value: "20+", label: "Projects Completed" },
            { value: "100%", label: "Client Satisfaction" },
            { value: "24/7", label: "Support Available" },
            { value: "3+", label: "Years Experience" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                type: "spring"
              }}
              whileHover={{ scale: 1.1 }}
              className="text-center p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-purple-500/50 transition-all"
              style={{ willChange: 'transform' }}
            >
              <motion.div
                className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                {stat.value}
              </motion.div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes orb-float-1 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(50px, 30px) scale(1.1);
          }
          66% {
            transform: translate(-30px, 50px) scale(1.05);
          }
        }

        @keyframes orb-float-2 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(-50px, -30px) scale(1.2);
          }
          66% {
            transform: translate(30px, -50px) scale(1.1);
          }
        }
      `}</style>
    </section>
    </div>
  );
};

export default WhyMe;