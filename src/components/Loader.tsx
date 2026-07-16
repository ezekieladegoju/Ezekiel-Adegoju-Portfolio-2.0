import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

/**
 * Properties expected by the Loader component.
 */
interface LoaderProps {
  /** Callback triggered immediately after the loading animation reaches 100% and finishes exiting */
  onComplete: () => void;
}

/**
 * Loader Component
 * Renders an immersive, full-screen preloading cover featuring the developer name and professional subtitle.
 * Uses a precise setInterval timer to step loading progress to 100% and exits gracefully with a smooth overlay lift.
 */
export default function Loader({ onComplete }: LoaderProps) {
  // Numeric progress counter state (0 to 100)
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 1200; // Total 1.2 seconds loading sequence duration
    const intervalTime = 30; // Update step interval in milliseconds
    const step = 100 / (duration / intervalTime); // Standard percentage increment per interval

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          // Wait a small physical delay before raising complete flag to ensure visual completion
          setTimeout(() => {
            onComplete();
          }, 200);
          return 100;
        }
        return prev + step;
      });
    }, intervalTime);

    // Clean up timer handle on component teardown
    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        id="cinematic-loader"
        className="fixed inset-0 bg-[#070708] z-[100] flex flex-col justify-center items-center"
        exit={{ 
          y: "-100%",
          opacity: 0,
          transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } 
        }}
      >
        <div className="flex flex-col items-center max-w-xs w-full px-6">
          {/* Logo Name */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="font-display text-4xl sm:text-5xl tracking-widest text-white text-center mb-6"
          >
            EZEKIEL ADEGOJU
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="font-sans text-[10px] tracking-[0.2em] text-white/75 uppercase mb-8 text-center"
          >
            Full-Stack Developer
          </motion.p>

          {/* Elegant loading line track */}
          <div className="w-full h-[1px] bg-white/10 relative overflow-hidden rounded-full mb-3">
            {/* Red growing progress bar */}
            <motion.div
              className="absolute left-0 top-0 bottom-0 bg-accent"
              style={{ width: `${progress}%` }}
              transition={{ ease: "easeOut" }}
            />
          </div>

          {/* Percentage */}
          <motion.span 
            className="font-mono text-[10px] text-accent tracking-wider"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
          >
            {Math.min(Math.round(progress), 100)}%
          </motion.span>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
