import { motion } from "motion/react";
import { Code, Server, Wrench, ShieldCheck } from "lucide-react";

const skillsData = [
  {
    category: "Frontend",
    icon: <Code className="w-6 h-6" />,
    skills: ["HTML5", "CSS3", "JavaScript", "TailwindCSS", "React"],
    gradient: "from-red-500 to-orange-500",
  },
  {
    category: "Backend",
    icon: <Server className="w-6 h-6" />,
    skills: ["Node.js", "Express.js", "API Development"],
    gradient: "from-pink-500 to-red-500",
  },
  {
    category: "Tools & Platforms",
    icon: <Wrench className="w-6 h-6" />,
    skills: ["Git & GitHub", "VPS Hosting", "Cloudflare", "Linux Server Management"],
    gradient: "from-red-600 to-rose-500",
  },
  {
    category: "Other Skills",
    icon: <ShieldCheck className="w-6 h-6" />,
    skills: ["Discord Bot Development", "Web Performance Optimization", "Responsive Design"],
    gradient: "from-orange-500 to-red-600",
  }
];

export function Skills() {
  return (
    <section id="Skills" className="py-16 md:py-24 px-4 sm:px-6 md:px-12 lg:px-20 relative overflow-hidden">
      {/* Animated background */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[800px] bg-red-500/5 rounded-full blur-[120px]"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
            animate={{
              textShadow: [
                "0 0 20px rgba(255,107,107,0.5)",
                "0 0 40px rgba(255,107,107,0.8)",
                "0 0 20px rgba(255,107,107,0.5)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            🧠 My <span className="text-[#ff6b6b]">Skills</span>
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-transparent via-[#ff6b6b] to-transparent mx-auto rounded-full mt-6"
            animate={{
              scaleX: [1, 1.5, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          {skillsData.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.03, 
                y: -10,
                rotateY: 2,
              }}
              className="group relative p-6 md:p-8 rounded-2xl bg-gradient-to-br from-black/40 to-black/60 border border-white/10 backdrop-blur-md hover:border-[#ff6b6b]/50 transition-all duration-500 cursor-none overflow-hidden"
              style={{
                transformStyle: 'preserve-3d',
                perspective: '1000px',
              }}
            >
              {/* Gradient overlay on hover */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              />

              {/* Glowing border effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${category.gradient} blur-xl opacity-50`} />
              </div>

              <div className="relative flex items-center gap-4 mb-6"
                style={{ transform: 'translateZ(20px)' }}
              >
                <motion.div 
                  className={`p-3 md:p-4 bg-gradient-to-br ${category.gradient} rounded-xl text-white shadow-lg`}
                  whileHover={{ 
                    rotate: [0, -10, 10, -10, 0],
                    scale: 1.1,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {category.icon}
                  
                  {/* Icon glow */}
                  <motion.div
                    className={`absolute inset-0 rounded-xl bg-gradient-to-br ${category.gradient} blur-md opacity-50`}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>

                <h3 className="text-xl md:text-2xl font-bold text-white tracking-wide group-hover:text-[#ff6b6b] transition-colors duration-300">
                  {category.category}
                </h3>
              </div>

              <div className="relative flex flex-wrap gap-2 md:gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: skillIndex * 0.05 }}
                    whileHover={{ 
                      scale: 1.1, 
                      y: -5,
                      backgroundColor: "rgba(255, 107, 107, 0.2)",
                      borderColor: "rgba(255, 107, 107, 0.5)",
                    }}
                    className="px-3 py-2 md:px-4 md:py-2 rounded-full bg-white/5 text-gray-300 text-xs md:text-sm border border-white/10 cursor-none transition-all duration-300 shadow-md hover:shadow-[0_0_20px_rgba(255,107,107,0.3)] hover:text-white"
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>

              {/* Animated corner accents */}
              <motion.div
                className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                <div className={`absolute top-0 right-0 w-full h-full bg-gradient-to-br ${category.gradient} opacity-20 blur-2xl`} />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
