import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 30, stiffness: 300, mass: 0.6 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Check if device is touch-based or has fine pointer
    const mediaQuery = window.matchMedia("(pointer: coarse)");
    setIsMobile(mediaQuery.matches);
    
    if (mediaQuery.matches) return;

    setIsVisible(true);
    document.body.classList.add("custom-cursor-active");

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 12);
      cursorY.set(e.clientY - 12);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      
      const isInteractive = 
        target.tagName === "A" || 
        target.tagName === "BUTTON" || 
        target.closest("a") || 
        target.closest("button") || 
        target.closest(".interactive") ||
        target.getAttribute("role") === "button" ||
        target.classList.contains("interactive-hover");

      setIsHovered(!!isInteractive);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      document.body.classList.remove("custom-cursor-active");
    };
  }, [cursorX, cursorY]);

  if (isMobile || !isVisible) return null;

  return (
    <>
      {/* Dynamic trailing circle */}
      <motion.div
        style={{
          left: cursorXSpring,
          top: cursorYSpring,
        }}
        className="fixed pointer-events-none z-50 rounded-full border border-accent mix-blend-difference"
        animate={{
          width: isHovered ? 48 : 24,
          height: isHovered ? 48 : 24,
          x: isHovered ? -12 : 0,
          y: isHovered ? -12 : 0,
          backgroundColor: isHovered ? "rgba(255, 32, 32, 0.25)" : "rgba(255, 32, 32, 0)",
          borderColor: isHovered ? "rgba(255, 32, 32, 1)" : "rgba(255, 32, 32, 0.8)",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 28 }}
      />
      {/* Centered fine dot */}
      <motion.div
        style={{
          left: cursorX,
          top: cursorY,
        }}
        className="fixed w-2 h-2 bg-accent rounded-full pointer-events-none z-50 transform translate-x-[8px] translate-y-[8px]"
        animate={{
          scale: isHovered ? 0.5 : 1,
        }}
      />
    </>
  );
}
