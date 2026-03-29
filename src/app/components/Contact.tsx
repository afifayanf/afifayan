import { motion } from "motion/react";
import { Mail, MessageSquare, MapPin, Send, Sparkles } from "lucide-react";

export function Contact() {
  return (
    <section id="Contact" className="py-16 md:py-24 px-4 sm:px-6 md:px-12 lg:px-20 relative overflow-hidden">
      {/* Animated background effects */}
      <motion.div 
        className="absolute top-1/4 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-red-500/10 rounded-full blur-[100px]"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div 
        className="absolute bottom-1/4 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-red-500/10 rounded-full blur-[100px]"
        animate={{
          scale: [1.3, 1, 1.3],
          x: [0, -50, 0],
        }}
        transition={{
          duration: 10,
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
            📬 Get In <span className="text-[#ff6b6b]">Touch</span>
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 md:space-y-8"
          >
            <motion.div 
              whileHover={{ scale: 1.02, y: -5 }}
              className="group p-6 md:p-8 rounded-2xl bg-gradient-to-br from-black/40 to-black/60 border border-white/10 backdrop-blur-md hover:border-[#ff6b6b]/50 transition-all duration-500 overflow-hidden"
              style={{
                transformStyle: 'preserve-3d',
                perspective: '1000px',
              }}
            >
              {/* Gradient overlay on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />

              <h3 className="relative text-xl md:text-2xl font-bold text-white mb-6 flex items-center gap-2">
                Contact Info
                <Sparkles className="w-5 h-5 text-[#ff6b6b]" />
              </h3>
              
              <div className="relative space-y-6">
                <motion.div 
                  className="flex items-center gap-4 group/item"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div 
                    className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-red-500 to-pink-500 flex items-center justify-center text-white shadow-lg"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Mail className="w-5 h-5 md:w-6 md:h-6" />
                    {/* Icon glow */}
                    <motion.div
                      className="absolute inset-0 rounded-xl bg-gradient-to-br from-red-500 to-pink-500 blur-md opacity-0 group-hover/item:opacity-50"
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                  <div>
                    <p className="text-gray-400 text-xs uppercase tracking-widest">Email</p>
                    <p className="text-white font-medium text-sm md:text-base group-hover/item:text-[#ff6b6b] transition-colors">
                      info@afifayan.fun
                    </p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-center gap-4 group/item"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div 
                    className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-white shadow-lg"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <MessageSquare className="w-5 h-5 md:w-6 md:h-6" />
                    {/* Icon glow */}
                    <motion.div
                      className="absolute inset-0 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 blur-md opacity-0 group-hover/item:opacity-50"
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                  <div>
                    <p className="text-gray-400 text-xs uppercase tracking-widest">Discord</p>
                    <p className="text-white font-medium text-sm md:text-base group-hover/item:text-[#ff6b6b] transition-colors">
                      afifayan
                    </p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-center gap-4 group/item"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div 
                    className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-red-600 to-rose-500 flex items-center justify-center text-white shadow-lg"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <MapPin className="w-5 h-5 md:w-6 md:h-6" />
                    {/* Icon glow */}
                    <motion.div
                      className="absolute inset-0 rounded-xl bg-gradient-to-br from-red-600 to-rose-500 blur-md opacity-0 group-hover/item:opacity-50"
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                  <div>
                    <p className="text-gray-400 text-xs uppercase tracking-widest">Location</p>
                    <p className="text-white font-medium text-sm md:text-base group-hover/item:text-[#ff6b6b] transition-colors">
                      Sylhet, Bangladesh
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form 
              className="group p-6 md:p-8 rounded-2xl bg-gradient-to-br from-black/40 to-black/60 border border-white/10 backdrop-blur-md hover:border-[#ff6b6b]/50 transition-all duration-500 space-y-6 overflow-hidden"
              style={{
                transformStyle: 'preserve-3d',
                perspective: '1000px',
              }}
            >
              {/* Gradient overlay on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              />

              <div className="relative space-y-2">
                <label className="text-sm text-gray-400 ml-1">Full Name</label>
                <motion.input
                  type="text"
                  placeholder="Enter your name"
                  whileFocus={{ scale: 1.01 }}
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#ff6b6b]/50 focus:shadow-[0_0_20px_rgba(255,107,107,0.2)] transition-all"
                />
              </div>

              <div className="relative space-y-2">
                <label className="text-sm text-gray-400 ml-1">Email Address</label>
                <motion.input
                  type="email"
                  placeholder="Enter your email"
                  whileFocus={{ scale: 1.01 }}
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#ff6b6b]/50 focus:shadow-[0_0_20px_rgba(255,107,107,0.2)] transition-all"
                />
              </div>

              <div className="relative space-y-2">
                <label className="text-sm text-gray-400 ml-1">Message</label>
                <motion.textarea
                  rows={4}
                  placeholder="How can I help you?"
                  whileFocus={{ scale: 1.01 }}
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#ff6b6b]/50 focus:shadow-[0_0_20px_rgba(255,107,107,0.2)] transition-all resize-none"
                />
              </div>

              <motion.button
                type="button"
                whileHover={{ scale: 1.03, y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="relative w-full py-4 rounded-xl text-white font-bold flex items-center justify-center gap-2 overflow-hidden cursor-none group/btn"
              >
                {/* Animated gradient background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-red-500 via-pink-500 to-red-500"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    backgroundSize: "200% 200%",
                  }}
                />
                
                {/* Glowing effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-pink-500 blur-xl opacity-50 group-hover/btn:opacity-100 transition-opacity duration-300" />
                
                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  animate={{
                    x: ["-200%", "200%"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 1,
                    ease: "easeInOut",
                  }}
                />

                <span className="relative z-10 flex items-center gap-2">
                  <Send className="w-5 h-5 group-hover/btn:rotate-45 transition-transform" />
                  Send Message
                </span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
