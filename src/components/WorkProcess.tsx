import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Search, Lightbulb, Pen, Code, Send } from "lucide-react";
import { WorkProcessStep } from "../types";

const PROCESS_STEPS: WorkProcessStep[] = [
  {
    number: "01",
    title: "DISCOVER",
    description: "Understanding goals, audience, and project requirements.",
    iconName: "search"
  },
  {
    number: "02",
    title: "IDEATE",
    description: "Planning, wireframing, and creating the right concept.",
    iconName: "lightbulb"
  },
  {
    number: "03",
    title: "DESIGN",
    description: "Crafting visual design with a focus on user experience.",
    iconName: "pencil"
  },
  {
    number: "04",
    title: "DEVELOP",
    description: "Building fast, responsive, and high-performing websites.",
    iconName: "code"
  },
  {
    number: "05",
    title: "DELIVER",
    description: "Testing, optimizing, and launching with perfection.",
    iconName: "send"
  }
];

const renderIcon = (name: string, active: boolean) => {
  const baseClasses = `w-4 h-4 transition-all duration-300 ${active ? "text-white scale-110" : "text-white/40"}`;
  switch (name) {
    case "search":
      return <Search className={baseClasses} />;
    case "lightbulb":
      return <Lightbulb className={baseClasses} />;
    case "pencil":
      return <Pen className={baseClasses} />;
    case "code":
      return <Code className={baseClasses} />;
    case "send":
      return <Send className={baseClasses} />;
    default:
      return <Search className={baseClasses} />;
  }
};

export default function WorkProcess() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll inside the work process container to dynamically animate the timeline line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Scale the height of the active filling timeline line
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div 
      ref={containerRef} 
      id="work-process-container" 
      className="flex flex-col justify-start h-full text-left bg-transparent"
    >
      <h3 className="font-mono text-xs tracking-[0.25em] text-accent uppercase font-bold mb-8">
        WORK PROCESS
      </h3>

      <div className="relative flex flex-col gap-10 pl-8">
        
        {/* Left Side: Background Timeline Track */}
        <div className="absolute left-3.5 top-2 bottom-2 w-[1px] bg-white/10 rounded-full overflow-hidden">
          {/* Animated fill line */}
          <motion.div 
            style={{ height: lineHeight }} 
            className="w-full bg-accent origin-top"
          />
        </div>

        {/* Timeline Steps */}
        {PROCESS_STEPS.map((step, idx) => {
          return (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative flex gap-6 items-start"
            >
              {/* Outer circle positioned absolutely on the line */}
              <div className="absolute -left-8 top-1.5 z-10 flex items-center justify-center">
                <motion.div 
                  className="w-7 h-7 rounded-full border border-white/10 bg-[#0c0c0e] flex items-center justify-center transition-all duration-500 group-hover:border-accent group-hover:bg-accent/15"
                  whileHover={{ scale: 1.15 }}
                >
                  {renderIcon(step.iconName, true)}
                </motion.div>
              </div>

              {/* Step info details */}
              <div className="flex flex-col gap-1 text-left">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-semibold text-accent">
                    {step.number}
                  </span>
                  <h4 className="font-display text-lg tracking-wider text-white group-hover:text-accent transition-colors duration-300">
                    {step.title}
                  </h4>
                </div>
                <p className="font-sans text-xs text-white/50 leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                  {step.description}
                </p>
              </div>
            </motion.div>
          );
        })}

      </div>
    </div>
  );
}
