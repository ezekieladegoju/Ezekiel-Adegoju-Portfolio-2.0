import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Loader from "./components/Loader";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import EducationSkills from "./components/EducationSkills";
import WorkProcess from "./components/WorkProcess";
import QuoteCard from "./components/QuoteCard";
import ContactSection from "./components/ContactSection";
import Helmet from "./components/Helmet";

/**
 * App Root Component
 * Serves as the primary entry point and orchestrator for the portfolio website.
 * Manages the cinematic initialization loader, locks/unlocks page scrolling during preloads,
 * and mounts core responsive layouts (Hero, Projects, Skills, Process, Quote, and Contact).
 */
export default function App() {
  // Boolean state monitoring the preloading phase
  const [isLoading, setIsLoading] = useState(true);

  // Lock or release the body scrollbar dynamically depending on loader status
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isLoading]);

  return (
    <>
      {/* Native Head Injection Component managing SEO & Social Graph properties */}
      <Helmet />

      {/* 1. Cinematic Loading Screen */}
      <AnimatePresence mode="wait">
        {isLoading && <Loader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {/* Main Content Layout */}
      {!isLoading && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative min-h-screen bg-[#070708] text-white flex flex-col overflow-hidden"
        >
          {/* Subtle noise film grain overlay */}
          <div className="noise-bg" />

          {/* 2. Premium Custom Cursor */}
          <CustomCursor />

          {/* 3. Navigation Bar */}
          <Navbar />

          {/* 4. Core Editorial Sections */}
          <main className="flex-grow w-full">
            
            {/* Hero Section */}
            <Hero />

            {/* Selected Projects Case Studies Grid */}
            <Projects />

            {/* Side-by-side Editorial Grid (Education/Skills, Work Process, Quote) */}
            <section
              id="details-grid-section"
              className="relative w-full bg-[#070708] py-24 border-t border-white/[0.05] px-6 md:px-12"
            >
              <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-12 items-start">
                
                {/* Column 1: Education Credentials & Skills */}
                <motion.div
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <EducationSkills />
                </motion.div>

                {/* Column 2: Work Process Sequential Timeline */}
                <motion.div
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                >
                  <WorkProcess />
                </motion.div>

                {/* Column 3: Subtle Animated Quote Card */}
                <motion.div
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <QuoteCard />
                </motion.div>

              </div>
            </section>

            {/* Contact & Dynamic Laptop Mockup Footer Section */}
            <ContactSection />

          </main>

        </motion.div>
      )}
    </>
  );
}
