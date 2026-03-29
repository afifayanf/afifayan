import { useEffect, useState } from "react";
import { motion, useSpring } from "motion/react";

export function CustomCursor() {
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useSpring(0, { stiffness: 600, damping: 30 });
  const cursorY = useSpring(0, { stiffness: 600, damping: 30 });
  
  const outerX = useSpring(0, { stiffness: 400, damping: 25 });
  const outerY = useSpring(0, { stiffness: 400, damping: 25 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      
      outerX.set(e.clientX);
      outerY.set(e.clientY);
      
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement;
      const isClickable =
        window.getComputedStyle(target).cursor === "pointer" ||
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a");

      setIsPointer(!!isClickable);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible, cursorX, cursorY, outerX, outerY]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] hidden md:block">
      {/* Main Cursor Dot */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className={`w-2 h-2 rounded-full bg-[#ff3333] fixed top-0 left-0 transition-all duration-150 ${
          isPointer ? "scale-150" : "scale-100"
        }`}
      />
      
      {/* Tracking Outer Circle */}
      <motion.div
        style={{
          x: outerX,
          y: outerY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isPointer ? 2.5 : 1,
          opacity: isPointer ? 0.3 : 1,
        }}
        className="w-8 h-8 rounded-full border border-[#ff3333]/40 fixed top-0 left-0 shadow-[0_0_15px_rgba(255,51,51,0.2)]"
      />
    </div>
  );
}
