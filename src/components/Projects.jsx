import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight, Code2, Palette, Zap } from "lucide-react";
import { useState } from "react";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = ["all", "web apps", "design", "full-stack"];

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with Django backend and React frontend, featuring real-time inventory management and secure payment integration.",
      image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&q=80",
      tags: ["React", "Django", "PostgreSQL", "Stripe"],
      category: "full-stack",
      liveUrl: "#",
      githubUrl: "#",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      id: 2,
      title: "Portfolio Dashboard",
      description: "Modern analytics dashboard with interactive charts and real-time data visualization built with React and Tailwind CSS.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      tags: ["React", "Tailwind", "Chart.js", "REST API"],
      category: "web apps",
      liveUrl: "#",
      githubUrl: "#",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      id: 3,
      title: "Design System",
      description: "Comprehensive UI component library with Figma designs and React implementation, featuring 50+ reusable components.",
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80", 
      tags: ["Figma", "React", "Storybook", "CSS"],
      category: "design",
      liveUrl: "#",
      githubUrl: "#",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      id: 4,
      title: "Social Media App",
      description: "Real-time social platform with user authentication, posts, comments, and live notifications using Django REST Framework.",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80", 
      tags: ["Django", "React", "WebSocket", "Redis"],
      category: "full-stack",
      liveUrl: "#",
      githubUrl: "#",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      id: 5,
      title: "Landing Page Design",
      description: "Eye-catching landing page with smooth animations and modern design principles, optimized for conversions.",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80", 
      tags: ["Figma", "Framer Motion", "React", "Tailwind"],
      category: "design",
      liveUrl: "#",
      githubUrl: "#",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      id: 6,
      title: "Task Management System",
      description: "Productivity tool with drag-and-drop interface, team collaboration features, and deadline tracking.",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80", 
      tags: ["React", "Node.js", "MongoDB", "Socket.io"],
      category: "web apps",
      liveUrl: "#",
      githubUrl: "#",
      gradient: "from-violet-500 to-purple-500"
    },
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="relative">
      {/* Smooth transition glow from Why Me section */}
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
        id="projects"
        className="relative bg-linear-to-b from-[#0A0A14] via-[#16213E] to-[#0A0A14] text-white py-32 px-6 md:px-16 -mt-[150px] pt-[180px] overflow-hidden"
      >
        {/* Animated Background Grid */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'linear-gradient(rgba(139, 125, 216, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 125, 216, 0.2) 1px, transparent 1px)',
              backgroundSize: '50px 50px',
            }}
          />
        </div>

        {/* Floating Accent Orbs */}
        <div
          className="absolute top-20 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full"
          style={{
            filter: 'blur(80px)',
            animation: 'pulse-glow 8s ease-in-out infinite',
            willChange: 'transform, opacity',
          }}
        />
        <div
          className="absolute bottom-20 left-1/4 w-80 h-80 bg-blue-500/10 rounded-full"
          style={{
            filter: 'blur(80px)',
            animation: 'pulse-glow 10s ease-in-out infinite 2s',
            willChange: 'transform, opacity',
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, type: "spring" }}
              className="inline-block mb-4"
            >
              <span className="text-sm md:text-base font-semibold px-4 py-2 bg-linear-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-full">
                💼 My Work
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
              Featured{" "}
              <span className="bg-linear-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent">
                Projects
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto"
            >
              A showcase of my recent work — from full-stack applications to stunning UI designs
            </motion.p>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="w-32 h-1 bg-linear-to-r from-purple-500 via-pink-500 to-blue-500 mx-auto mt-8 rounded-full"
            />
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-3 mb-16"
          >
            {filters.map((filter, index) => (
              <motion.button
                key={filter}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-linear-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10'
                }`}
                style={{ willChange: 'transform' }}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div 
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="group relative"
              >
                {/* Card Glow Effect */}
                <div
                  className={`absolute -inset-0.5 bg-linear-to-r ${project.gradient} rounded-2xl opacity-0 group-hover:opacity-75 transition-opacity duration-500`}
                  style={{ filter: 'blur(12px)' }}
                />

                {/* Project Card */}
                <motion.div
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="relative h-full bg-gray-900/90 backdrop-blur-sm rounded-2xl border border-gray-800 group-hover:border-purple-500/50 overflow-hidden transition-all duration-300"
                  style={{ willChange: 'transform' }}
                >
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                      loading="lazy"
                    />
                    
                    {/* Overlay on hover */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-linear-to-t from-gray-900 via-gray-900/50 to-transparent flex items-center justify-center gap-4"
                    >
                      <motion.a
                        href={project.liveUrl}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="bg-white/10 backdrop-blur-md p-3 rounded-full border border-white/20 hover:bg-white/20 transition-all"
                      >
                        <ExternalLink className="w-5 h-5 text-white" />
                      </motion.a>
                      <motion.a
                        href={project.githubUrl}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="bg-white/10 backdrop-blur-md p-3 rounded-full border border-white/20 hover:bg-white/20 transition-all"
                      >
                        <Github className="w-5 h-5 text-white" />
                      </motion.a>
                    </motion.div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3 text-white group-hover:bg-linear-to-r group-hover:from-purple-400 group-hover:to-blue-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {project.title}
                    </h3>

                    <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-xs px-3 py-1 bg-white/5 border border-white/10 rounded-full text-gray-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* View More Link */}
                    <motion.div
                      className="flex items-center gap-2 text-sm font-medium text-purple-400 group-hover:text-purple-300"
                      whileHover={{ x: 5 }}
                    >
                      <span>View Project</span>
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </div>

                  {/* Corner Accents */}
                  <div className="absolute top-3 left-3 w-8 h-8 border-l-2 border-t-2 border-purple-500/0 group-hover:border-purple-500 transition-all duration-300 rounded-tl-lg" />
                  <div className="absolute bottom-3 right-3 w-8 h-8 border-r-2 border-b-2 border-blue-500/0 group-hover:border-blue-500 transition-all duration-300 rounded-br-lg" />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>


          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              { icon: Code2, label: "Lines of Code", value: "50K+", color: "from-purple-500 to-pink-500" },
              { icon: Palette, label: "Design Hours", value: "1000+", color: "from-blue-500 to-cyan-500" },
              { icon: Zap, label: "Performance Score", value: "95+", color: "from-indigo-500 to-purple-500" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: "spring" }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:border-purple-500/50 transition-all"
                style={{ willChange: 'transform' }}
              >
                <motion.div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-linear-to-r ${stat.color} mb-4`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <stat.icon className="w-8 h-8 text-white" />
                </motion.div>
                <div className="text-4xl font-bold bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects;