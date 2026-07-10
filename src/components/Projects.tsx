import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, X, ExternalLink, Calendar, User, Briefcase, Tag } from "lucide-react";
import { Project } from "../types";

const PROJECTS_DATA: Project[] = [
  {
    id: "hscgroup",
    number: "01",
    title: "HEALTH SYSTEM CONSULTANTS",
    subtitle: "HEALTH ADVISORY & RESEARCH PLATFORM",
    imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1200",
    category: "Full-Stack Development & Architecture",
    description: "A robust, high-performance digital presence and consulting directory developed for Health System Consultants Limited. Engineered for medical systems analytics, research publishing, and smooth advisory pipelines, combining crisp layouts with extreme response optimization.",
    client: "Health System Consultants Limited",
    date: "2024 - Present",
    services: ["React.js", "TypeScript", "Next.js", "Tailwind CSS", "REST API Integration"],
    link: "https://hscgroup.org/"
  },
  {
    id: "agmfoundation",
    number: "02",
    title: "AGM FOUNDATION",
    subtitle: "AMOS MAGAJI FOUNDATION PORTAL",
    imageUrl: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=1200",
    category: "Interactive Non-Profit Web Engineering",
    description: "The digital gateway for the Amos Magaji Foundation, showcasing broad philanthropic activities, community empowerment reports, and donor workflows. Built with buttery-smooth motion pathing, optimized responsive assets, and high accessibility standards.",
    client: "Amos Magaji Foundation",
    date: "2024",
    services: ["React.js", "Framer Motion", "Tailwind CSS", "UI/UX Design", "Custom CMS"],
    link: "https://www.amosmagajifoundation.org/"
  },
  {
    id: "pomade",
    number: "03",
    title: "POMADE CONSULTANCY",
    subtitle: "ENTERPRISE SOLUTIONS PORTAL",
    imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200",
    category: "Enterprise Web Engineering & SEO",
    description: "A complete professional services website for Pomade Consultancy Limited. Designed to feature project advisory metrics, management frameworks, and business inquiries with elite SEO, high performance indexing, and elegant dark mode aesthetics.",
    client: "Pomade Consultancy Limited",
    date: "2024",
    services: ["Next.js", "Tailwind CSS", "TypeScript", "Zustand State", "SEO Optimization"],
    link: "https://www.pomadelimited.com/"
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects-section" className="relative w-full bg-[#070708] py-24 border-t border-white/[0.05] px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex justify-between items-baseline mb-16">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-4xl sm:text-5xl tracking-wider text-white"
          >
            SELECTED PROJECTS
          </motion.h2>

          <motion.button
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onClick={() => setSelectedProject(PROJECTS_DATA[0])} // opens first project by default, or opens list
            className="group flex items-center gap-2 font-mono text-xs tracking-widest text-white/50 hover:text-accent transition-colors uppercase cursor-pointer"
          >
            VIEW ALL PROJECTS
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
          </motion.button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PROJECTS_DATA.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              onClick={() => setSelectedProject(project)}
              className="group relative cursor-pointer flex flex-col justify-between rounded-lg bg-[#0d0d0f] border border-white/[0.03] overflow-hidden p-6 aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] hover:border-accent/40 transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,32,32,0.1)] interactive"
            >
              {/* Card Hover Border Glow (Overlay) */}
              <div className="absolute inset-0 border border-accent/0 group-hover:border-accent/15 transition-all duration-500 rounded-lg pointer-events-none" />

              {/* Top info and Image container */}
              <div className="w-full h-[65%] rounded overflow-hidden relative bg-[#131316]">
                {/* Image zoom effect */}
                <motion.img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover select-none pointer-events-none filter brightness-90 group-hover:brightness-100"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  style={{ referrerPolicy: "no-referrer" }}
                />
              </div>

              {/* Bottom text: Number + Title Info + Moving Arrow */}
              <div className="flex items-end justify-between mt-6">
                <div className="flex items-center gap-4">
                  {/* Big red number */}
                  <span className="font-display text-4xl sm:text-5xl text-accent font-bold select-none">
                    {project.number}
                  </span>
                  
                  {/* Title & subtitle slider */}
                  <div className="flex flex-col">
                    <h3 className="font-display text-2xl tracking-wider text-white group-hover:text-accent transition-colors group-hover:translate-x-1 duration-300">
                      {project.title}
                    </h3>
                    <p className="font-mono text-[9px] tracking-widest text-white/40 uppercase">
                      {project.subtitle}
                    </p>
                  </div>
                </div>

                {/* Micro-interaction sliding arrow */}
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-white/[0.02] group-hover:border-accent group-hover:bg-accent/10 transition-colors duration-300">
                  <ArrowRight className="w-4 h-4 text-white/60 group-hover:text-accent group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detailed Fullscreen Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-[#070708]/98 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto"
            >
              {/* Backing Card */}
              <motion.div
                initial={{ y: 50, scale: 0.95, opacity: 0 }}
                animate={{ y: 0, scale: 1, opacity: 1 }}
                exit={{ y: 50, scale: 0.95, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 180 }}
                className="bg-[#0c0c0e] border border-white/10 w-full max-w-5xl rounded-xl overflow-hidden relative shadow-2xl flex flex-col"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-50 bg-white/5 hover:bg-accent/20 border border-white/10 hover:border-accent text-white p-2 rounded-full transition-all duration-300 group cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
                </button>

                {/* Modal Layout Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2">
                  
                  {/* Left: Project Image */}
                  <div className="relative h-[300px] md:h-full min-h-[350px] md:min-h-[550px] bg-[#141416]">
                    <img
                      src={selectedProject.imageUrl}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover filter brightness-95"
                      style={{ referrerPolicy: "no-referrer" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e] via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-[#0c0c0e]/30" />
                    
                    {/* Floating Project Number */}
                    <div className="absolute bottom-6 left-6 flex items-center gap-3">
                      <span className="font-display text-6xl text-accent font-bold select-none leading-none">
                        {selectedProject.number}
                      </span>
                      <div className="h-8 w-[1px] bg-accent/30" />
                      <span className="font-mono text-xs text-white/50 tracking-widest uppercase">
                        Case Study
                      </span>
                    </div>
                  </div>

                  {/* Right: Project Details & Context */}
                  <div className="p-8 md:p-12 flex flex-col justify-between bg-[#0c0c0e] text-left">
                    <div>
                      {/* Header */}
                      <span className="font-mono text-[10px] tracking-widest text-accent uppercase font-semibold">
                        {selectedProject.category}
                      </span>
                      <h3 className="font-display text-4xl sm:text-5xl text-white tracking-wider mt-2 mb-6">
                        {selectedProject.title}
                      </h3>

                      {/* Main Description */}
                      <p className="font-sans text-sm text-white/70 leading-relaxed mb-8">
                        {selectedProject.description}
                      </p>

                      {/* Project Specs */}
                      <div className="grid grid-cols-2 gap-y-6 gap-x-4 border-t border-b border-white/10 py-6 mb-8 font-sans text-xs">
                        <div className="flex items-center gap-3">
                          <User className="w-4 h-4 text-accent shrink-0" />
                          <div>
                            <p className="text-white/40 uppercase tracking-widest text-[9px] font-mono">Client</p>
                            <p className="text-white/90 font-medium">{selectedProject.client}</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <Calendar className="w-4 h-4 text-accent shrink-0" />
                          <div>
                            <p className="text-white/40 uppercase tracking-widest text-[9px] font-mono">Date</p>
                            <p className="text-white/90 font-medium">{selectedProject.date}</p>
                          </div>
                        </div>

                        <div className="col-span-2 flex items-start gap-3">
                          <Tag className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                          <div>
                            <p className="text-white/40 uppercase tracking-widest text-[9px] font-mono mb-1">Services</p>
                            <div className="flex flex-wrap gap-1.5">
                              {selectedProject.services.map((srv) => (
                                <span key={srv} className="px-2 py-0.5 bg-white/5 text-white/80 rounded border border-white/5 text-[10px]">
                                  {srv}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Footer Buttons */}
                    <div className="flex items-center gap-4 mt-auto">
                      {selectedProject.link && (
                        <a
                          href={selectedProject.link}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-2 px-5 py-2.5 bg-accent hover:bg-accent/80 text-white font-mono text-xs tracking-wider uppercase rounded font-medium transition-colors cursor-pointer"
                        >
                          Launch Website
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                      <button
                        onClick={() => setSelectedProject(null)}
                        className="px-5 py-2.5 border border-white/10 hover:border-white/30 text-white/60 hover:text-white font-mono text-xs tracking-wider uppercase rounded transition-colors cursor-pointer"
                      >
                        Close Details
                      </button>
                    </div>

                  </div>

                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
