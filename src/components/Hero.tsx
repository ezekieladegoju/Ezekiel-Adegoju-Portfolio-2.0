import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { Globe } from "lucide-react";

// Hook to animate numbers counting up
/**
 * Custom React hook that animates a numerical value counting up from zero to a target value.
 * Utilizes requestAnimationFrame to ensure high-performance, stutter-free animation.
 * 
 * @param endVal The target value to count up to.
 * @param durationMs Duration of the counting animation in milliseconds.
 * @param trigger Boolean control to initiate the counting animation once true.
 */
function useCountUp(endVal: number, durationMs = 1500, trigger = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / durationMs, 1);
      setCount(Math.floor(progress * endVal));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [endVal, durationMs, trigger]);

  return count;
}

/**
 * Hero Section Component
 * Serves as the primary viewport presentation for Ezekiel Adegoju.
 * Implements mouse-tracking cursor-interactive layout parallax, scroll parallax, and counting stats.
 */
export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Spring-interpolated physics values for the interactive mouse-following offset
  const mouseX = useSpring(0, { stiffness: 50, damping: 20 });
  const mouseY = useSpring(0, { stiffness: 50, damping: 20 });

  // Native scrolling position tracking bound to vertical movement for background parallax
  const { scrollY } = useScroll();
  const bgParallaxY = useTransform(scrollY, [0, 800], [0, 150]);

  useEffect(() => {
    // Flag set to true upon browser mount to unlock entrance triggers
    setIsLoaded(true);

    // Dynamic mouse tracker mapping pixel inputs to normalized vector space
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      // Coordinates normalized between -0.5 and 0.5
      const x = (e.clientX / window.innerWidth) - 0.5;
      const y = (e.clientY / window.innerHeight) - 0.5;
      
      mouseX.set(x * 15); // Maximum 15px spring shift bounds
      mouseY.set(y * 15);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Statistics counters animated dynamically post-mount
  const triggerStats = isLoaded;
  const expCount = useCountUp(3, 1500, triggerStats);
  const projectsCount = useCountUp(40, 1500, triggerStats);
  const clientsCount = useCountUp(20, 1500, triggerStats);

  return (
    <section
      ref={heroRef}
      id="hero-section"
      className="relative w-full min-h-screen bg-[#070708] flex flex-col justify-between overflow-hidden px-4 sm:px-6 md:px-12 pt-20 sm:pt-24 md:pt-28 pb-10 md:pb-12 select-none"
    >
      {/* =========================================================================
          DESKTOP-ONLY OVERLAY LAYOUT (>= 768px / md:)
         ========================================================================= */}

      {/* 1. Desktop Background PORTFOLIO Parallax Text */}
      <div className="hidden md:flex absolute inset-0 items-center justify-center z-0 pointer-events-none">
        <motion.div
          style={{ 
            y: bgParallaxY,
            x: useTransform(mouseX, (x) => x * -0.5), // slight opposite shift for deep depth
          }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 0.9, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-display text-[22vw] leading-none text-accent font-bold tracking-tight text-center whitespace-nowrap"
        >
          PORTFOLIO
        </motion.div>
      </div>

      {/* 2. Desktop Floating Centered Portrait with Mouse Shift */}
      <div className="hidden md:flex absolute inset-x-0 bottom-0 top-0 items-end justify-center z-10 pointer-events-none">
        <motion.div
          style={{ 
            x: mouseX, 
            y: useTransform(mouseY, (y) => y + bgParallaxY.get() * 0.1) 
          }}
          animate={{
            // Floating 3-5px slowly
            y: [0, -6, 0],
          }}
          transition={{
            y: {
              repeat: Infinity,
              duration: 4.5,
              ease: "easeInOut"
            }
          }}
          className="relative h-[65vh] sm:h-[75vh] md:h-[82vh] max-h-[850px] w-full max-w-[550px] flex items-end justify-center"
        >
          <motion.img
            src="https://res.cloudinary.com/m8xlnr2j/image/upload/v1783707281/download_mnn4ww.png"
            alt="Ezekiel Adegoju Portrait"
            className="h-full object-contain object-bottom pointer-events-auto select-none"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{ referrerPolicy: "no-referrer" }}
          />
        </motion.div>
      </div>

      {/* 3. Desktop Main Foreground Grid Content */}
      <div className="hidden md:grid max-w-7xl mx-auto w-full grid-cols-12 items-end justify-between h-full flex-grow z-20 pointer-events-none mt-auto">
        
        {/* Left Column: Hello, name & info */}
        <div className="md:col-span-5 flex flex-col items-start pointer-events-auto text-left mb-6 md:mb-0">
          
          {/* "Hello, I'm" Script text */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="font-hand text-3xl sm:text-4xl text-accent mb-2"
          >
            Hello, I'm
          </motion.p>

          {/* Huge Stacked Condensed Name Heading */}
          <div className="overflow-hidden mb-4">
            <motion.h2
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-7xl sm:text-8xl lg:text-[10rem] leading-[0.82] text-white tracking-wide uppercase flex flex-col"
            >
              <span>EZEKIEL</span>
              <span>ADEGOJU</span>
            </motion.h2>
          </div>

          {/* Title & Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="font-sans font-semibold tracking-[0.25em] text-accent text-xs sm:text-sm uppercase mb-4"
          >
            Full-Stack Developer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="font-sans text-white/60 text-xs sm:text-sm leading-relaxed max-w-xs mb-8"
          >
            Full-Stack Developer with experience designing, building, deploying, and maintaining production web applications. Skilled in React, Next.js, TypeScript, React Native, FastAPI, and SQL databases.
          </motion.p>

          {/* Available Worldwide badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            className="flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.02] interactive"
            whileHover={{ scale: 1.05, borderColor: "rgba(255, 32, 32, 0.3)" }}
          >
            <Globe className="w-3.5 h-3.5 text-accent animate-pulse" />
            <span className="font-mono text-[9px] tracking-widest text-white/70 uppercase">
              AVAILABLE WORLDWIDE
            </span>
          </motion.div>
        </div>

        {/* Space Spacer for center portrait */}
        <div className="hidden md:block md:col-span-3 h-20" />

        {/* Right Column: Mini sub-card & Counting statistics */}
        <div className="md:col-span-4 flex flex-col justify-end items-start md:items-end gap-12 pointer-events-auto mb-4">
          
          {/* Abstract Star + Text */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex items-start gap-3 max-w-[200px]"
          >
            <motion.svg
              className="w-4 h-4 text-accent shrink-0 mt-1"
              viewBox="0 0 24 24"
              fill="currentColor"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
            >
              <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4Z" />
            </motion.svg>
            <p className="font-sans text-xs text-white/70 leading-relaxed">
              Turning ideas into powerful digital experiences.
            </p>
          </motion.div>

          {/* Counting Stats Section */}
          <div className="w-full max-w-[200px] flex flex-col divide-y divide-white/10 border-t border-b border-white/10 py-1">
            {/* Stat 1 */}
            <div className="flex items-center justify-between py-3">
              <span className="font-display text-4xl text-accent">
                {expCount}+
              </span>
              <span className="font-mono text-[9px] tracking-widest text-white/50 uppercase text-right leading-tight max-w-[80px]">
                Years Experience
              </span>
            </div>
            {/* Stat 2 */}
            <div className="flex items-center justify-between py-3">
              <span className="font-display text-4xl text-accent">
                {projectsCount}+
              </span>
              <span className="font-mono text-[9px] tracking-widest text-white/50 uppercase text-right leading-tight max-w-[80px]">
                Projects Completed
              </span>
            </div>
            {/* Stat 3 */}
            <div className="flex items-center justify-between py-3">
              <span className="font-display text-4xl text-accent">
                {clientsCount}+
              </span>
              <span className="font-mono text-[9px] tracking-widest text-white/50 uppercase text-right leading-tight max-w-[80px]">
                Happy Clients
              </span>
            </div>
          </div>

        </div>

      </div>

      {/* =========================================================================
          MOBILE-ONLY SINGLE-COLUMN STACK LAYOUT (< 768px / md:hidden)
         ========================================================================= */}
      <div className="flex md:hidden flex-col gap-6 w-full max-w-md mx-auto z-20 pt-2 pb-4 text-left">
        
        {/* 1. Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03] w-fit"
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse shrink-0" />
          <span className="font-mono text-[10px] tracking-widest text-white/80 uppercase">
            AVAILABLE FOR FREELANCE
          </span>
        </motion.div>

        {/* 2. Name & Title */}
        <div className="flex flex-col gap-1">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-hand text-2xl text-accent"
          >
            Hello, I'm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display text-5xl sm:text-6xl text-white tracking-wide uppercase leading-none font-bold"
          >
            EZEKIEL ADEGOJU
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="font-sans font-semibold tracking-[0.2em] text-accent text-xs uppercase mt-1"
          >
            Full-Stack Developer
          </motion.p>
        </div>

        {/* 3. Short Description / Bio paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="font-sans text-white/70 text-xs sm:text-sm leading-relaxed"
        >
          Full-Stack Developer with experience designing, building, deploying, and maintaining production web applications. Skilled in React, Next.js, TypeScript, React Native, FastAPI, and SQL databases.
        </motion.p>

        {/* 4. Watermark Header */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center font-display text-5xl sm:text-6xl font-bold text-accent tracking-tight uppercase my-1"
        >
          PORTFOLIO
        </motion.div>

        {/* 5. Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex items-center justify-center gap-2 text-center bg-white/[0.02] border border-white/5 rounded-xl px-4 py-3"
        >
          <motion.svg
            className="w-4 h-4 text-accent shrink-0"
            viewBox="0 0 24 24"
            fill="currentColor"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
          >
            <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4Z" />
          </motion.svg>
          <p className="font-sans text-xs text-white/80 font-medium">
            Turning ideas into powerful digital experiences.
          </p>
        </motion.div>

        {/* 6. Profile Photo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="relative w-full max-w-[280px] sm:max-w-[320px] mx-auto flex items-end justify-center pt-2"
        >
          <img
            src="https://res.cloudinary.com/m8xlnr2j/image/upload/v1783707281/download_mnn4ww.png"
            alt="Ezekiel Adegoju Portrait"
            className="w-full h-auto max-h-[360px] object-contain object-bottom select-none"
            style={{ referrerPolicy: "no-referrer" }}
          />
        </motion.div>

        {/* 7. Metrics/Stats Grid strictly BELOW portrait photo */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid grid-cols-3 gap-2 sm:gap-3 w-full pt-2"
        >
          <div className="bg-[#0d0d0f] border border-white/10 rounded-xl p-3 flex flex-col items-center text-center justify-center">
            <span className="font-display text-2xl sm:text-3xl text-accent font-bold">
              {expCount}+
            </span>
            <span className="font-mono text-[8px] sm:text-[9px] tracking-wider text-white/60 uppercase leading-tight mt-1">
              3+ YEARS EXPERIENCE
            </span>
          </div>
          <div className="bg-[#0d0d0f] border border-white/10 rounded-xl p-3 flex flex-col items-center text-center justify-center">
            <span className="font-display text-2xl sm:text-3xl text-accent font-bold">
              {projectsCount}+
            </span>
            <span className="font-mono text-[8px] sm:text-[9px] tracking-wider text-white/60 uppercase leading-tight mt-1">
              40+ PROJECTS COMPLETED
            </span>
          </div>
          <div className="bg-[#0d0d0f] border border-white/10 rounded-xl p-3 flex flex-col items-center text-center justify-center">
            <span className="font-display text-2xl sm:text-3xl text-accent font-bold">
              {clientsCount}+
            </span>
            <span className="font-mono text-[8px] sm:text-[9px] tracking-wider text-white/60 uppercase leading-tight mt-1">
              20+ HAPPY CLIENTS
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

