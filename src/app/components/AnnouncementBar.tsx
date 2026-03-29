import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { Megaphone, X } from "lucide-react";

export function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Read from localStorage to simulate reading from `/public/annuse`
    const fetchAnnouncement = () => {
      const enabled = localStorage.getItem("annuseEnabled") === "true";
      const savedMessage = localStorage.getItem("annuseMessage") || "Welcome to Afifayan Portfolio! Exciting updates coming soon.";
      
      // Also check if the user manually dismissed it this session
      const dismissed = sessionStorage.getItem("annuseDismissed") === "true";
      
      if (enabled && !dismissed) {
        setMessage(savedMessage);
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    fetchAnnouncement();

    // Listen for cross-tab or same-window storage updates from Admin panel
    window.addEventListener("storage", fetchAnnouncement);
    // Custom event since same-window storage event doesn't trigger automatically
    window.addEventListener("annuseUpdated", fetchAnnouncement);
    
    return () => {
      window.removeEventListener("storage", fetchAnnouncement);
      window.removeEventListener("annuseUpdated", fetchAnnouncement);
    };
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    sessionStorage.setItem("annuseDismissed", "true");
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="bg-gradient-to-r from-[#ff3333]/90 via-[#ff6b6b]/90 to-[#ff3333]/90 backdrop-blur-md text-white sticky top-0 z-[101] shadow-[0_4px_15px_rgba(255,107,107,0.3)] overflow-hidden"
        >
          <div className="container mx-auto px-4 py-2 flex items-center justify-between gap-4 relative">
            {/* Animated shine effect */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            
            <div className="flex items-center gap-2 md:gap-3 flex-1 justify-center relative z-10">
              <Megaphone className="w-4 h-4 md:w-5 md:h-5 animate-pulse" />
              <p className="text-xs md:text-sm font-medium font-['Orbitron'] tracking-wide truncate md:whitespace-normal text-center max-w-[90%]">
                {message}
              </p>
            </div>
            
            <button 
              onClick={handleDismiss}
              className="relative z-10 p-1 hover:bg-white/20 rounded-full transition-colors cursor-pointer shrink-0"
              aria-label="Close announcement"
            >
              <X className="w-4 h-4 md:w-5 md:h-5" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
