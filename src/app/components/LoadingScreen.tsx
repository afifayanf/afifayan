import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const interval = 20; // Update every 20ms
    const step = 100 / (duration / interval);

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev + step >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 200); // Small delay before hiding
          return 100;
        }
        return prev + step;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[999] bg-black flex flex-col items-center justify-center overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,107,107,0.15)_0%,transparent_60%)]" />

      {/* Glitch Logo */}
      <motion.div
        className="relative font-['Orbitron'] text-4xl md:text-6xl font-bold tracking-wider mb-8"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">AFIF</span>
        <span className="text-[#ff6b6b] drop-shadow-[0_0_20px_rgba(255,51,51,0.8)]">AYAN</span>
        <motion.div
          className="absolute inset-0 bg-[#ff6b6b]/30 blur-xl"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.2, repeat: Infinity, repeatType: "mirror" }}
        />
        <Sparkles className="absolute -top-4 -right-4 w-6 h-6 text-[#ff6b6b] animate-pulse" />
      </motion.div>

      {/* Loading Bar */}
      <div className="w-64 md:w-80 h-1 bg-gray-900 rounded-full overflow-hidden relative border border-white/5">
        <motion.div
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#ff6b6b] to-red-500 shadow-[0_0_10px_rgba(255,107,107,0.8)]"
          style={{ width: `${progress}%` }}
        />
      </div>
      
      {/* Percentage */}
      <motion.div 
        className="mt-4 font-['Orbitron'] text-[#ff6b6b] text-sm tracking-widest"
      >
        LOADING {Math.round(progress)}%
      </motion.div>
    </motion.div>
  );
}
