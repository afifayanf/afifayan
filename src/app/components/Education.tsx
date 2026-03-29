import { motion } from "motion/react";
import { GraduationCap, Calendar, Award } from "lucide-react";

const educationData = [
  {
    institution: "Shahjalal Jameya Islamia Kamil (M.A) Madrasah",
    degree: "Student of Hadith / Master of Arts (Kamil)",
    duration: "2024 - Present",
    description: "Focusing on Islamic studies and linguistics while balancing technical pursuits in software development.",
    gradient: "from-red-500 to-pink-500",
  },
  {
    institution: "Self-Taught Developer",
    degree: "Full Stack Web Development & Systems Administration",
    duration: "2020 - Present",
    description: "Extensive learning through documentation, open-source projects, and real-world application building.",
    gradient: "from-orange-500 to-red-500",
  }
];

export function Education() {
  return (
    <section id="Education" className="py-16 md:py-24 px-4 sm:px-6 md:px-12 lg:px-20 relative overflow-hidden">
      {/* Animated background */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[600px] h-[600px] bg-red-500/5 rounded-full blur-[120px]"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 15,
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
            🎓 My <span className="text-[#ff6b6b]">Education</span>
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

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8 md:space-y-12">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative pl-6 md:pl-8 border-l-2 border-[#ff6b6b]/30"
              >
                {/* Timeline dot with animation */}
                <motion.div 
                  className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-black border-2 border-[#ff6b6b] flex items-center justify-center"
                  animate={{
                    boxShadow: [
                      "0 0 15px rgba(255,107,107,0.5)",
                      "0 0 25px rgba(255,107,107,0.8)",
                      "0 0 15px rgba(255,107,107,0.5)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <motion.div 
                    className="w-2 h-2 rounded-full bg-[#ff6b6b]"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [1, 0.5, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>
                
                <motion.div 
                  whileHover={{ 
                    scale: 1.02, 
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
                    className={`absolute inset-0 bg-gradient-to-br ${edu.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />

                  {/* Glowing border effect */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${edu.gradient} blur-xl opacity-50`} />
                  </div>

                  <div className="relative flex flex-col gap-4">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div className="flex-1">
                        <motion.h3 
                          className="text-lg md:text-xl lg:text-2xl font-bold text-white flex items-start md:items-center gap-3 mb-2 flex-wrap"
                          style={{ transform: 'translateZ(15px)' }}
                        >
                          <motion.div
                            className={`p-2 md:p-3 bg-gradient-to-br ${edu.gradient} rounded-xl text-white shadow-lg`}
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                          >
                            <GraduationCap className="w-5 h-5 md:w-6 md:h-6" />
                          </motion.div>
                          <span className="group-hover:text-[#ff6b6b] transition-colors duration-300">
                            {edu.institution}
                          </span>
                        </motion.h3>
                        <p className="text-[#ff6b6b] font-semibold text-sm md:text-base flex items-center gap-2 ml-0 md:ml-14">
                          <Award className="w-4 h-4" />
                          {edu.degree}
                        </p>
                      </div>
                      
                      <motion.div 
                        className="flex items-center gap-2 text-gray-400 text-xs md:text-sm bg-white/5 px-3 md:px-4 py-2 rounded-full w-fit border border-white/10 group-hover:border-[#ff6b6b]/30 transition-colors"
                        whileHover={{ scale: 1.05 }}
                      >
                        <Calendar className="w-4 h-4 text-[#ff6b6b]" /> 
                        {edu.duration}
                      </motion.div>
                    </div>
                    
                    <motion.p 
                      className="relative text-gray-400 leading-relaxed text-sm md:text-base group-hover:text-gray-300 transition-colors duration-300 md:ml-14"
                      style={{ transform: 'translateZ(10px)' }}
                    >
                      {edu.description}
                    </motion.p>
                  </div>

                  {/* Animated particles */}
                  {Array.from({ length: 3 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className={`absolute w-1 h-1 rounded-full bg-gradient-to-r ${edu.gradient} opacity-0 group-hover:opacity-100`}
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
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
