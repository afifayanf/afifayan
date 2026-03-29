import { motion } from "motion/react";
import { Laptop, Globe, Cpu, Palette } from "lucide-react";

const services = [
  {
    title: "Web Design",
    description: "I design modern, responsive, and user-friendly websites with clean layouts and smooth animations. My goal is to create websites that look great on both desktop and mobile devices.",
    icon: <Globe className="w-8 h-8" />,
    emoji: "🌐",
    gradient: "from-red-500 to-pink-500",
  },
  {
    title: "Full Stack Development",
    description: "I build complete web applications including both frontend and backend systems. From database setup to user interfaces, I develop fast and scalable solutions.",
    icon: <Laptop className="w-8 h-8" />,
    emoji: "💻",
    gradient: "from-orange-500 to-red-500",
  },
  {
    title: "Custom Software",
    description: "I create custom tools, bots, and software to solve specific problems. This includes automation systems, Discord bots, and other development solutions.",
    icon: <Cpu className="w-8 h-8" />,
    emoji: "⚙️",
    gradient: "from-red-600 to-rose-500",
  },
  {
    title: "UI / UX Design",
    description: "I focus on creating simple, beautiful, and easy-to-use interfaces. A good design helps users enjoy the experience while using a website or application.",
    icon: <Palette className="w-8 h-8" />,
    emoji: "🎨",
    gradient: "from-pink-500 to-red-400",
  }
];

export function Services() {
  return (
    <section id="Services" className="py-16 md:py-24 px-4 sm:px-6 md:px-12 lg:px-20 relative overflow-hidden">
      {/* Animated background effects */}
      <motion.div 
        className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-red-500/10 rounded-full blur-[100px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div 
        className="absolute bottom-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-red-500/10 rounded-full blur-[100px]"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 8,
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
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            💼 My <span className="text-[#ff6b6b] drop-shadow-[0_0_20px_rgba(255,107,107,0.6)]">Services</span>
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -15,
                rotateY: 5,
                rotateX: 5,
              }}
              className="group relative p-6 md:p-8 rounded-2xl bg-gradient-to-br from-black/40 to-black/60 border border-white/10 backdrop-blur-md hover:border-[#ff6b6b]/50 transition-all duration-500 cursor-none overflow-hidden"
              style={{
                transformStyle: 'preserve-3d',
                perspective: '1000px',
              }}
            >
              {/* Gradient overlay on hover */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                initial={{ scale: 0, rotate: 0 }}
                whileHover={{ scale: 1.5, rotate: 180 }}
                transition={{ duration: 0.8 }}
              />

              {/* Glowing border effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.gradient} blur-xl`} />
              </div>

              {/* Icon container */}
              <motion.div 
                className={`relative mb-6 w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white shadow-lg`}
                whileHover={{ 
                  rotate: [0, -10, 10, -10, 0],
                  scale: 1.1,
                }}
                transition={{ duration: 0.5 }}
                style={{ 
                  transformStyle: 'preserve-3d',
                  transform: 'translateZ(30px)',
                  boxShadow: '0 10px 40px rgba(255,107,107,0.3)',
                }}
              >
                {service.icon}
                
                {/* Icon glow */}
                <motion.div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} blur-md opacity-50`}
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
              <motion.h3 
                className="relative text-xl md:text-2xl font-bold text-white mb-3 md:mb-4 flex items-center gap-2"
                style={{ transform: 'translateZ(20px)' }}
              >
                <span className="text-2xl md:text-3xl">{service.emoji}</span> 
                <span className="group-hover:text-[#ff6b6b] transition-colors duration-300">
                  {service.title}
                </span>
              </motion.h3>

              <motion.p 
                className="relative text-gray-400 text-sm md:text-base leading-relaxed group-hover:text-gray-300 transition-colors duration-300"
                style={{ transform: 'translateZ(10px)' }}
              >
                {service.description}
              </motion.p>

              {/* Animated particles */}
              {Array.from({ length: 3 }).map((_, i) => (
                <motion.div
                  key={i}
                  className={`absolute w-1 h-1 rounded-full bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100`}
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
