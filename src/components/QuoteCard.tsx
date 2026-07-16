import { motion } from "motion/react";
import { Quote } from "lucide-react";

/**
 * QuoteCard Component
 * Displays an editorial quote box with a dynamic, animating gradient background.
 * Embeds styling to simulate the signature branding, pairing elegant serif fonts, cursive handwriting, and responsive vectors.
 */
export default function QuoteCard() {
  return (
    <div id="quote-card-container" className="flex flex-col justify-between h-full bg-transparent text-left">
      
      {/* 1. Main Quote Box with subtle animated gradient background */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative w-full aspect-[4/3] rounded-xl overflow-hidden p-8 flex flex-col justify-between border border-white/[0.08] shadow-2xl bg-gradient-to-br from-[#900c12] via-[#5e0508] to-[#2d0204]"
        style={{
          backgroundSize: "200% 200%",
        }}
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 0.6,
          backgroundPosition: {
            repeat: Infinity,
            duration: 15,
            ease: "linear",
          }
        }}
      >
        {/* Large Fading Quote icon in background */}
        <div className="absolute -top-6 -left-4 text-white/[0.04] pointer-events-none select-none">
          <Quote className="w-48 h-48 transform -rotate-12" />
        </div>

        {/* Small top quote icon */}
        <div className="z-10 text-white/45">
          <Quote className="w-8 h-8 fill-white/10" />
        </div>

        {/* Quote Text */}
        <div className="z-10 my-auto">
          <p className="font-sans text-lg sm:text-xl md:text-lg lg:text-xl font-light italic text-white/95 leading-relaxed tracking-wide">
            "Good design is not just how it looks, but how it works."
          </p>
        </div>

        {/* Cursive Signature of Rayhan (Remains Still) */}
        <div className="z-10 flex justify-between items-end border-t border-white/10 pt-4 mt-2">
          <span className="font-mono text-[9px] tracking-widest text-white/50 uppercase">
            Signature Design
          </span>
          <span className="font-hand text-3xl text-white/90 font-bold tracking-wider select-none pr-2">
            Ezekiel
          </span>
        </div>
      </motion.div>

      {/* 2. Banner: LET'S CREATE SOMETHING GREAT TOGETHER */}
      <div className="mt-12 flex flex-col items-start gap-4">
        {/* Repeating star decoration */}
        <motion.svg
          className="w-4 h-4 text-accent"
          viewBox="0 0 24 24"
          fill="currentColor"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        >
          <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4Z" />
        </motion.svg>
        
        <h4 className="font-display text-3xl sm:text-4xl text-white tracking-wider leading-none max-w-xs">
          LET'S CREATE SOMETHING GREAT TOGETHER.
        </h4>
      </div>

    </div>
  );
}
