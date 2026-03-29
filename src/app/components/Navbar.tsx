import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Sparkles } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#Home" },
    { name: "Services", href: "#Services" },
    { name: "Skills", href: "#Skills" },
    { name: "Education", href: "#Education" },
    { name: "Experience", href: "#Experience" },
    { name: "Contact", href: "#Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
        isScrolled
          ? "py-3 md:py-4 bg-black/80 backdrop-blur-xl border-b border-[#ff6b6b]/20 shadow-[0_8px_32px_rgba(255,107,107,0.2)]"
          : "py-4 md:py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20 flex items-center justify-between">
        <motion.a
          href="#Home"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl md:text-2xl font-bold text-white tracking-tighter cursor-none flex items-center gap-3 group"
        >
          {/* Added Logo Image */}
          <motion.img
            src="/img/logo.png"
            alt="Logo"
            className="w-8 h-8 md:w-10 md:h-10 object-contain drop-shadow-[0_0_15px_rgba(255,107,107,0.8)] mix-blend-screen bg-transparent"
            initial={{ rotate: -180, scale: 0 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            onError={(e) => {
              // Fallback to Sparkles icon if image is not found
              (e.target as HTMLElement).style.display = 'none';
            }}
          />
          <motion.div
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
            className="logo-fallback-icon"
          >
            <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-[#ff6b6b] drop-shadow-[0_0_8px_rgba(255,107,107,0.8)]" />
          </motion.div>
          
          <span className="relative font-['Orbitron'] tracking-wider">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-white drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">AFIF</span>
            <span className="text-[#ff6b6b] bg-clip-text text-transparent bg-gradient-to-r from-[#ff6b6b] to-[#ff3333] group-hover:drop-shadow-[0_0_15px_rgba(255,51,51,0.9)] transition-all duration-300">AYAN</span>
            
            {/* Cyberpunk Glitch effect on hover */}
            <motion.span 
              className="absolute top-0 left-0 w-full h-full bg-[#ff6b6b]/20 blur-md -z-10 opacity-0 group-hover:opacity-100 transition-opacity"
            />
          </span>
        </motion.a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8 xl:space-x-10">
          {navLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative text-gray-300 hover:text-[#ff6b6b] font-medium transition-colors text-sm uppercase tracking-widest cursor-none group"
              whileHover={{ y: -2 }}
            >
              {link.name}
              <motion.span 
                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#ff6b6b] to-pink-500 transition-all duration-300 group-hover:w-full"
                whileHover={{ boxShadow: "0 0 10px rgba(255,107,107,0.8)" }}
              />
            </motion.a>
          ))}
          <motion.a
            href="#Contact"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-6 py-2 rounded-full border-2 border-[#ff6b6b]/50 text-[#ff6b6b] font-bold uppercase tracking-widest text-sm cursor-none overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#ff6b6b] to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">
              Hire Me
            </span>
            
            {/* Glowing effect */}
            <div className="absolute inset-0 bg-[#ff6b6b] blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <motion.button
          className="lg:hidden text-white cursor-none relative z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          whileTap={{ scale: 0.9 }}
        >
          <AnimatePresence mode="wait">
            {isMobileMenuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={28} className="text-[#ff6b6b]" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={28} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Menu Content */}
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-screen w-[280px] sm:w-[320px] bg-gradient-to-br from-black via-black/95 to-black/90 backdrop-blur-2xl border-l border-[#ff6b6b]/20 lg:hidden overflow-y-auto shadow-[0_0_50px_rgba(255,107,107,0.3)]"
            >
              <div className="flex flex-col p-8 pt-24 space-y-6">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 10, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative text-xl font-bold text-white hover:text-[#ff6b6b] transition-colors uppercase tracking-widest py-3 px-4 rounded-xl hover:bg-[#ff6b6b]/10"
                  >
                    <span className="relative z-10">{link.name}</span>
                    <motion.div
                      className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-gradient-to-b from-[#ff6b6b] to-pink-500 group-hover:h-full transition-all duration-300 rounded-full"
                    />
                  </motion.a>
                ))}
                
                <motion.a
                  href="#Contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navLinks.length * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative mt-4 px-6 py-4 rounded-full text-center font-bold text-white overflow-hidden border-2 border-[#ff6b6b]"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#ff6b6b] to-pink-500"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative z-10 uppercase tracking-widest">
                    Hire Me
                  </span>
                </motion.a>

                {/* Decorative elements */}
                <motion.div
                  className="absolute top-1/4 right-0 w-32 h-32 bg-[#ff6b6b]/10 rounded-full blur-3xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
