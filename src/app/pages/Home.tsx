import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CustomCursor } from "../components/Cursor";
import { Particles } from "../components/Particles";
import { AnimatedBackground } from "../components/AnimatedBackground";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { Skills } from "../components/Skills";
import { Education } from "../components/Education";
import { Experience } from "../components/Experience";
import { Contact } from "../components/Contact";
import { MusicPlayer } from "../components/MusicPlayer";
import { Heart } from "lucide-react";
import { LoadingScreen } from "../components/LoadingScreen";
import { AnnouncementBar } from "../components/AnnouncementBar";

function Footer() {
  return (
    <footer className="py-12 bg-black border-t border-white/5 text-center px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <div className="flex items-center justify-center gap-2 text-gray-400">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-[#ff3333] fill-[#ff3333]" />
            <span>by Afifayan</span>
          </div>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Afifayan. All Rights Reserved.
          </p>
          <div className="flex items-center justify-center gap-6 pt-4">
            <a href="#Home" className="text-gray-400 hover:text-[#ff3333] text-sm transition-colors cursor-none">Home</a>
            <a href="#Services" className="text-gray-400 hover:text-[#ff3333] text-sm transition-colors cursor-none">Services</a>
            <a href="#Skills" className="text-gray-400 hover:text-[#ff3333] text-sm transition-colors cursor-none">Skills</a>
            <a href="#Education" className="text-gray-400 hover:text-[#ff3333] text-sm transition-colors cursor-none">Education</a>
            <a href="#Experience" className="text-gray-400 hover:text-[#ff3333] text-sm transition-colors cursor-none">Experience</a>
            <a href="#Contact" className="text-gray-400 hover:text-[#ff3333] text-sm transition-colors cursor-none">Contact</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Dynamically inject favicon
    let link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.head.appendChild(link);
    }
    link.type = 'image/png';
    link.href = '/favicon.png';
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && <LoadingScreen key="loading" onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1 }}
          className="min-h-screen bg-black text-white relative font-sans overflow-x-hidden selection:bg-[#ff3333] selection:text-white"
        >
          <AnnouncementBar />
          <AnimatedBackground />
          <CustomCursor />
          <Particles />
          <Navbar />
          <MusicPlayer />
          
          <main>
            <Hero />
            <Services />
            <Skills />
            <Education />
            <Experience />
            <Contact />
          </main>
          
          <Footer />
        </motion.div>
      )}
    </>
  );
}
