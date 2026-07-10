import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { Globe } from "lucide-react";

// Hook to animate numbers counting up
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

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Mouse position tracking for beautiful subtle interactive parallax
  const mouseX = useSpring(0, { stiffness: 50, damping: 20 });
  const mouseY = useSpring(0, { stiffness: 50, damping: 20 });

  // Scroll tracking for background parallax
  const { scrollY } = useScroll();
  const bgParallaxY = useTransform(scrollY, [0, 800], [0, 150]);

  useEffect(() => {
    // Trigger entrance animations after mount
    setIsLoaded(true);

    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const { clientWidth, clientHeight } = heroRef.current;
      // Coordinates normalized between -0.5 and 0.5
      const x = (e.clientX / window.innerWidth) - 0.5;
      const y = (e.clientY / window.innerHeight) - 0.5;
      
      mouseX.set(x * 15); // max 15px shift
      mouseY.set(y * 15);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Statistics counters
  const triggerStats = isLoaded;
  const expCount = useCountUp(3, 1500, triggerStats);
  const projectsCount = useCountUp(40, 1500, triggerStats);
  const clientsCount = useCountUp(20, 1500, triggerStats);

  return (
    <section
      ref={heroRef}
      id="hero-section"
      className="relative w-full min-h-screen bg-[#070708] flex flex-col justify-between overflow-hidden px-6 md:px-12 pt-28 pb-12 select-none"
    >
      {/* 1. Huge Background PORTFOLIO Parallax Text */}
      <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
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

      {/* 2. Floating Centered Portrait with Mouse Shift */}
      <div className="absolute inset-x-0 bottom-0 top-0 flex items-end justify-center z-10 pointer-events-none">
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
          {/* Main Portrait */}
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

      {/* 3. Main Foreground Grid Content */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 items-end justify-between h-full flex-grow z-20 pointer-events-none mt-auto">
        
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
    </section>
  );
}
