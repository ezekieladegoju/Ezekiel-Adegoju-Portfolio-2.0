import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Globe, Phone, MapPin, ArrowRight, Sparkles } from "lucide-react";

type MockScreen = "homepage" | "projects" | "about" | "contact";

const SCREEN_ORDER: MockScreen[] = ["homepage", "projects", "about", "contact"];

export default function ContactSection() {
  const [activeScreen, setActiveScreen] = useState<MockScreen>("homepage");

  // Cycle mock laptop screen every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveScreen((prev) => {
        const currentIndex = SCREEN_ORDER.indexOf(prev);
        const nextIndex = (currentIndex + 1) % SCREEN_ORDER.length;
        return SCREEN_ORDER[nextIndex];
      });
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  // Contact list items
  const contacts = [
    {
      id: "email",
      icon: <Mail className="w-4 h-4 text-accent transition-transform duration-300 group-hover:rotate-12" />,
      label: "Email",
      value: "ezekieladegoju@gmail.com",
      href: "mailto:ezekieladegoju@gmail.com",
    },
    {
      id: "website",
      icon: <Globe className="w-4 h-4 text-accent transition-transform duration-300 group-hover:rotate-12" />,
      label: "Website",
      value: "ezekiel-adegoju-portfolio.vercel.app",
      href: "https://ezekiel-adegoju-portfolio.vercel.app",
    },
    {
      id: "phone",
      icon: <Phone className="w-4 h-4 text-accent transition-transform duration-300 group-hover:rotate-12" />,
      label: "Phone",
      value: "+2349058636787",
      href: "tel:+2349058636787",
    },
    {
      id: "location",
      icon: <MapPin className="w-4 h-4 text-accent transition-transform duration-300 group-hover:rotate-12" />,
      label: "Location",
      value: "Abuja, Nigeria",
      href: "https://maps.google.com/?q=Abuja,Nigeria",
    },
  ];

  return (
    <section id="contact-section" className="relative w-full bg-[#070708] py-24 border-t border-white/[0.05] px-6 md:px-12 select-none">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Side: Text and Contact Buttons */}
        <div className="lg:col-span-6 flex flex-col items-start text-left">
          
          <div className="flex items-center gap-2 mb-6">
            <Sparkles className="w-5 h-5 text-accent animate-pulse" />
            <span className="font-mono text-xs tracking-[0.25em] text-accent uppercase font-bold">
              GET IN TOUCH
            </span>
          </div>

          <h2 className="font-display text-5xl sm:text-6xl text-white tracking-wider leading-none mb-6">
            LET'S WORK<br />TOGETHER
          </h2>

          <p className="font-sans text-sm text-white/50 leading-relaxed max-w-md mb-10">
            I'm currently open for new projects, remote roles, and creative collaborations. Let's combine efforts to design and build something beautiful and high-performing.
          </p>

          {/* Contact Details Grid */}
          <div className="w-full flex flex-col gap-4 mb-10">
            {contacts.map((c) => (
              <motion.a
                key={c.id}
                href={c.href}
                target={c.id !== "phone" && c.id !== "email" ? "_blank" : undefined}
                rel="noreferrer"
                whileHover={{ scale: 1.01 }}
                className="group flex items-center justify-between p-4 rounded-lg bg-[#0d0d0f] border border-white/[0.03] hover:border-accent/30 hover:shadow-[0_0_20px_rgba(255,32,32,0.05)] transition-all duration-300 text-left interactive cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  {/* Glowing container */}
                  <div className="w-10 h-10 rounded-full bg-white/[0.02] border border-white/10 flex items-center justify-center group-hover:border-accent group-hover:bg-accent/10 transition-colors duration-300">
                    {c.icon}
                  </div>
                  <div>
                    <span className="font-mono text-[9px] tracking-widest text-white/40 uppercase block mb-0.5">
                      {c.label}
                    </span>
                    <span className="font-sans text-sm font-semibold text-white group-hover:text-accent transition-colors">
                      {c.value}
                    </span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-white/20 group-hover:text-accent group-hover:translate-x-1 transition-all" />
              </motion.a>
            ))}
          </div>

          {/* Availability Footer Badge (Interactive) */}
          <motion.div
            className="flex items-center gap-2 px-4 py-2 border border-accent/20 bg-accent/5 hover:bg-accent hover:border-accent rounded-full transition-colors duration-300 cursor-pointer"
            whileHover={{ scale: 1.03 }}
          >
            <div className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
            <span className="font-mono text-[10px] tracking-widest text-white font-medium uppercase">
              AVAILABLE FOR FREELANCE
            </span>
          </motion.div>
        </div>

        {/* Right Side: High-End CSS Laptop Mockup with looped screens */}
        <div className="lg:col-span-6 flex justify-center items-center">
          <div className="relative w-full max-w-[500px] flex flex-col items-center">
            
            {/* 1. Laptop Screen Lid */}
            <div className="relative w-full aspect-[16/10] bg-[#1a1a1f] rounded-t-2xl p-2.5 sm:p-3.5 border-t border-x border-white/15 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)]">
              {/* Inner bezel */}
              <div className="relative w-full h-full bg-black rounded-lg overflow-hidden border border-white/5 flex flex-col justify-between">
                
                {/* Looped Screen content panel */}
                <div className="relative flex-grow w-full overflow-hidden">
                  <AnimatePresence mode="wait">
                    {activeScreen === "homepage" && (
                      <motion.div
                        key="homepage"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0 bg-[#070708] p-4 flex flex-col justify-between"
                      >
                        {/* Mock Hero content */}
                        <div className="flex justify-between items-center border-b border-white/5 pb-2">
                          <span className="font-display text-[9px] text-white">E.A</span>
                          <span className="font-mono text-[6px] text-accent">AVAILABLE</span>
                        </div>
                        <div className="my-auto flex flex-col items-center justify-center relative">
                          <span className="font-display text-[5vw] sm:text-[3.5rem] font-bold text-accent/15 leading-none absolute">PORTFOLIO</span>
                          <h4 className="font-display text-lg sm:text-2xl text-white tracking-widest z-10 leading-none">EZEKIEL ADEGOJU</h4>
                          <p className="font-sans text-[7px] text-white/50 tracking-wider mt-1 uppercase">Full-Stack Developer</p>
                        </div>
                        <div className="flex justify-between items-center border-t border-white/5 pt-2">
                          <span className="font-mono text-[5px] text-white/40">© 2026</span>
                          <span className="font-mono text-[5px] text-accent">3+ YEARS EXP</span>
                        </div>
                      </motion.div>
                    )}

                    {activeScreen === "projects" && (
                      <motion.div
                        key="projects"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0 bg-[#0c0c0e] p-4 flex flex-col justify-between text-left"
                      >
                        <div className="flex justify-between items-center border-b border-white/5 pb-2">
                          <span className="font-mono text-[7px] text-white/40 uppercase">Selected Projects</span>
                          <span className="font-mono text-[6px] text-accent">03 ITEMS</span>
                        </div>
                        <div className="grid grid-cols-3 gap-2 my-auto">
                          <div className="rounded border border-white/10 bg-[#141416] p-1.5 flex flex-col justify-between h-20">
                            <span className="font-mono text-[6px] text-accent">01</span>
                            <span className="font-display text-[8px] text-white leading-tight">HEALTH SYSTEM</span>
                          </div>
                          <div className="rounded border border-white/10 bg-[#141416] p-1.5 flex flex-col justify-between h-20">
                            <span className="font-mono text-[6px] text-accent">02</span>
                            <span className="font-display text-[8px] text-white leading-tight">AGM FOUNDATION</span>
                          </div>
                          <div className="rounded border border-white/10 bg-[#141416] p-1.5 flex flex-col justify-between h-20">
                            <span className="font-mono text-[6px] text-accent">03</span>
                            <span className="font-display text-[8px] text-white leading-tight">POMADE LIMITED</span>
                          </div>
                        </div>
                        <div className="text-[5px] text-white/30 border-t border-white/5 pt-1">
                          Clicking opens responsive fullscreen modal details.
                        </div>
                      </motion.div>
                    )}

                    {activeScreen === "about" && (
                      <motion.div
                        key="about"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0 bg-[#070708] p-4 flex flex-col justify-between text-left"
                      >
                        <div className="border-b border-white/5 pb-2">
                          <span className="font-mono text-[7px] text-white/40 uppercase">About & Credentials</span>
                        </div>
                        <div className="my-auto space-y-2.5">
                          <div>
                            <h5 className="font-mono text-[8px] text-accent uppercase font-bold">Education</h5>
                            <p className="font-sans text-[7px] text-white/80">B.Sc. Computer Science — Oduduwa Univ</p>
                          </div>
                          <div>
                            <h5 className="font-mono text-[8px] text-accent uppercase font-bold">Skills</h5>
                            <div className="flex flex-wrap gap-1 mt-1">
                              <span className="bg-white/5 border border-white/10 px-1 py-0.5 rounded text-[5px] text-white/70">REACT</span>
                              <span className="bg-white/5 border border-white/10 px-1 py-0.5 rounded text-[5px] text-white/70">NEXT.JS</span>
                              <span className="bg-white/5 border border-white/10 px-1 py-0.5 rounded text-[5px] text-white/70">TYPESCRIPT</span>
                              <span className="bg-white/5 border border-white/10 px-1 py-0.5 rounded text-[5px] text-white/70">FASTAPI</span>
                            </div>
                          </div>
                        </div>
                        <div className="border-t border-white/5 pt-1 text-[5px] text-white/30">
                          Equipped with solid design systems principles.
                        </div>
                      </motion.div>
                    )}

                    {activeScreen === "contact" && (
                      <motion.div
                        key="contact"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0 bg-[#0c0c0e] p-4 flex flex-col justify-between text-left"
                      >
                        <div className="border-b border-white/5 pb-2">
                          <span className="font-mono text-[7px] text-white/40 uppercase">Interactive Form</span>
                        </div>
                        <div className="my-auto space-y-1.5 max-w-[150px]">
                          <h5 className="font-display text-xs text-white leading-tight">START A PROJECT</h5>
                          <div className="h-2 w-full bg-white/5 border border-white/10 rounded flex items-center px-1 text-[5px] text-white/40">Name</div>
                          <div className="h-2 w-full bg-white/5 border border-white/10 rounded flex items-center px-1 text-[5px] text-white/40">Email</div>
                          <div className="h-3 w-10 bg-accent rounded flex items-center justify-center text-[5px] text-white font-bold font-mono">SEND</div>
                        </div>
                        <div className="border-t border-white/5 pt-1 text-[5px] text-white/30">
                          Reach directly at ezekieladegoju@gmail.com
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Bottom screen camera notch / logo line */}
                <div className="h-4 bg-[#141417] border-t border-white/5 flex items-center justify-between px-3 text-[6px] text-white/40">
                  <span>MacBook Pro</span>
                  {/* Small LED power indicator */}
                  <div className="w-1 h-1 rounded-full bg-green-500 animate-pulse" />
                </div>
              </div>
            </div>

            {/* 2. Laptop Lower Base / Body */}
            <div className="w-[114%] h-2.5 sm:h-3.5 bg-[#25252b] rounded-b-lg border-b-2 border-white/20 relative z-10 flex justify-center">
              {/* Notch trackpad handle */}
              <div className="absolute top-0 w-20 h-1 bg-[#1a1a1f] rounded-b-md" />
            </div>

            {/* Laptop Base Stand Shadow */}
            <div className="w-[105%] h-2 bg-black/80 blur-md rounded-full mt-[-2px] opacity-90" />

            {/* Indicator Tabs */}
            <div className="flex gap-2 mt-6 justify-center">
              {SCREEN_ORDER.map((screen) => (
                <button
                  key={screen}
                  onClick={() => setActiveScreen(screen)}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    activeScreen === screen 
                      ? "bg-accent scale-125" 
                      : "bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Go to ${screen} preview`}
                />
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
