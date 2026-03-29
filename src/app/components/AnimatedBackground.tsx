import { motion } from "motion/react";
import { useEffect, useState } from "react";

export function AnimatedBackground() {
  const [petals, setPetals] = useState<Array<{ id: number; x: number; delay: number; duration: number }>>([]);

  useEffect(() => {
    // Generate floating petals/particles
    const petalArray = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 10 + Math.random() * 10,
    }));
    setPetals(petalArray);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0000] to-black" />
      
      {/* Pulsing red moon glow effect */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(255,0,0,0.3) 0%, rgba(255,0,0,0.1) 40%, transparent 70%)",
          filter: "blur(60px)",
        }}
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

      {/* Additional red glow on right */}
      <motion.div
        className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(255,50,50,0.2) 0%, rgba(255,0,0,0.05) 40%, transparent 70%)",
          filter: "blur(80px)",
        }}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating red petals/particles */}
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute w-2 h-2 bg-red-500/20 rounded-full"
          style={{
            left: `${petal.x}%`,
            top: "-5%",
            boxShadow: "0 0 10px rgba(255,0,0,0.5)",
          }}
          animate={{
            y: ["0vh", "110vh"],
            x: [0, Math.sin(petal.id) * 100],
            opacity: [0, 1, 1, 0],
            scale: [0, 1, 1, 0],
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Animated red lines/streaks */}
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={`streak-${i}`}
          className="absolute h-[2px] bg-gradient-to-r from-transparent via-red-500/30 to-transparent"
          style={{
            width: `${200 + Math.random() * 300}px`,
            top: `${20 + i * 20}%`,
            left: `-${200 + Math.random() * 100}px`,
          }}
          animate={{
            x: ["0vw", "120vw"],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            delay: i * 0.5,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,0,0,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,0,0,0.3) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />
    </div>
  );
}
