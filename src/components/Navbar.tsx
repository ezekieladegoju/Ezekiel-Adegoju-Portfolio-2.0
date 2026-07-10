import { useEffect, useState } from "react";
import { motion } from "motion/react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 px-6 md:px-12 py-5 ${
        scrolled 
          ? "bg-[#070708]/95 border-b border-white/[0.04] py-4" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Left: Stacked text logo */}
        <div className="flex flex-col select-none">
          <motion.div 
            className="flex items-center gap-3"
            animate={{ gap: scrolled ? 8 : 12 }}
          >
            <span className="font-display text-lg tracking-[0.15em] text-white">
              EZEKIEL ADEGOJU
            </span>
            <span className="h-3 w-[1px] bg-white/20 hidden sm:inline" />
            <span className="font-mono text-[9px] tracking-widest text-white/50 hidden sm:inline uppercase">
              Full-Stack Developer
            </span>
          </motion.div>
        </div>

        {/* Right: Availability Badge */}
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
          </span>
          <motion.div 
            className="flex items-center gap-1.5"
            whileHover={{ scale: 1.02 }}
          >
            <span className="font-mono text-[10px] md:text-[11px] tracking-[0.2em] text-white/90 uppercase font-medium">
              AVAILABLE FOR FREELANCE
            </span>
            {/* Spinning vector star */}
            <motion.svg
              className="w-3 h-3 text-accent"
              viewBox="0 0 24 24"
              fill="currentColor"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
            >
              <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4Z" />
            </motion.svg>
          </motion.div>
        </div>
      </div>
    </header>
  );
}
