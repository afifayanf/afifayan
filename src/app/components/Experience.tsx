import { motion } from "motion/react";
import { Briefcase, Calendar, TrendingUp } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Solutions Inc.",
      period: "2024 - Present",
      description: "Leading development of modern web applications using React, Node.js, and cloud technologies.",
      skills: ["React", "Node.js", "AWS", "TypeScript"],
      gradient: "from-red-500 to-pink-500",
    },
    {
      title: "Web Developer",
      company: "Creative Agency",
      period: "2022 - 2024",
      description: "Developed responsive websites and web applications for various clients across different industries.",
      skills: ["JavaScript", "TailwindCSS", "WordPress", "UI/UX"],
      gradient: "from-orange-500 to-red-500",
    },
    {
      title: "Junior Developer",
      company: "StartUp Hub",
      period: "2021 - 2022",
      description: "Contributed to multiple projects, learned modern development practices and collaborated with senior developers.",
      skills: ["HTML5", "CSS3", "JavaScript", "Git"],
      gradient: "from-red-600 to-rose-500",
    }
  ];

  return (
    <section
      id="Experience"
      className="py-16 md:py-24 px-4 sm:px-6 md:px-12 lg:px-20 relative overflow-hidden"
    >
      {/* Animated background effects */}
      <motion.div 
        className="absolute top-1/4 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-red-500/10 rounded-full blur-[100px]"
        animate={{
          scale: [1, 1.3, 1],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-red-500/10 rounded-full blur-[100px]"
        animate={{
          scale: [1.3, 1, 1.3],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
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
            💼 My <span className="text-[#ff6b6b]">Experience</span>
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

        <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ 
                scale: 1.02, 
                y: -10,
                rotateY: 2,
              }}
              className="group relative bg-gradient-to-br from-black/40 to-black/60 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 hover:border-[#ff6b6b]/50 transition-all duration-500 cursor-none overflow-hidden"
              style={{
                transformStyle: 'preserve-3d',
                perspective: '1000px'
              }}
            >
              {/* Gradient overlay on hover */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${exp.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              />

              {/* Glowing border effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${exp.gradient} blur-xl opacity-50`} />
              </div>

              <div className="relative flex flex-col md:flex-row md:items-start gap-6">
                {/* Icon */}
                <motion.div 
                  className={`flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br ${exp.gradient} flex items-center justify-center text-white shadow-lg`}
                  whileHover={{ 
                    rotate: [0, -10, 10, -10, 0],
                    scale: 1.1,
                  }}
                  transition={{ duration: 0.5 }}
                  style={{ transform: 'translateZ(20px)' }}
                >
                  <Briefcase className="w-6 h-6 md:w-7 md:h-7" />
                  
                  {/* Icon glow */}
                  <motion.div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${exp.gradient} blur-md opacity-50`}
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
                
                {/* Content */}
                <div className="flex-1 space-y-3 md:space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                    <div>
                      <motion.h3 
                        className="text-xl md:text-2xl font-bold text-white group-hover:text-[#ff6b6b] transition-colors duration-300"
                        style={{ transform: 'translateZ(15px)' }}
                      >
                        {exp.title}
                      </motion.h3>
                      <p className="text-[#ff6b6b] font-medium text-sm md:text-base flex items-center gap-2 mt-1">
                        <TrendingUp className="w-4 h-4" />
                        {exp.company}
                      </p>
                    </div>
                    
                    <motion.div 
                      className="flex items-center gap-2 text-gray-400 text-xs md:text-sm bg-white/5 px-3 md:px-4 py-2 rounded-full w-fit border border-white/10 group-hover:border-[#ff6b6b]/30 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      style={{ transform: 'translateZ(10px)' }}
                    >
                      <Calendar className="w-4 h-4 text-[#ff6b6b]" />
                      {exp.period}
                    </motion.div>
                  </div>

                  <motion.p 
                    className="text-gray-400 text-sm md:text-base leading-relaxed group-hover:text-gray-300 transition-colors duration-300"
                    style={{ transform: 'translateZ(10px)' }}
                  >
                    {exp.description}
                  </motion.p>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        whileHover={{ 
                          scale: 1.1, 
                          y: -3,
                          backgroundColor: "rgba(255, 107, 107, 0.2)",
                        }}
                        className="px-3 py-1 text-xs md:text-sm rounded-full bg-[#ff6b6b]/10 text-[#ff6b6b] border border-[#ff6b6b]/20 hover:border-[#ff6b6b]/50 transition-all cursor-none"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Animated particles */}
              {Array.from({ length: 3 }).map((_, i) => (
                <motion.div
                  key={i}
                  className={`absolute w-1 h-1 rounded-full bg-gradient-to-r ${exp.gradient} opacity-0 group-hover:opacity-100`}
                  style={{
                    top: `${30 + i * 20}%`,
                    right: `${10 + i * 10}%`,
                  }}
                  animate={{
                    y: [-10, 10, -10],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    delay: i * 0.2,
                    repeat: Infinity,
                  }}
                />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
