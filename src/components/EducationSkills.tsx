import { motion } from "motion/react";
import { GraduationCap } from "lucide-react";
import { EducationItem } from "../types";

const EDUCATION_DATA: EducationItem[] = [
  {
    degree: "B.Sc. Computer Science",
    school: "Oduduwa University, Osun state",
    years: "2021 - 2025"
  },
  {
    degree: "Advanced Diploma in Software Engineering",
    school: "Aptech Computer Education, F.C.T",
    years: "2019 - 2020"
  }
];

const SKILLS_DATA = [
  "REACT",
  "NEXT.JS",
  "TYPESCRIPT",
  "REACT NATIVE",
  "FASTAPI",
  "SQL",
  "PYTHON",
  "DOCKER",
  "ZUSTAND",
  "NODE.JS",
  "GITHUB"
];

export default function EducationSkills() {
  return (
    <div id="education-skills-container" className="flex flex-col justify-start h-full text-left bg-transparent">
      
      {/* Education block */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-8">
          <GraduationCap className="w-4 h-4 text-accent" />
          <h3 className="font-mono text-xs tracking-[0.25em] text-accent uppercase font-bold">
            EDUCATION
          </h3>
        </div>

        <div className="flex flex-col gap-8">
          {EDUCATION_DATA.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex justify-between items-start gap-4 border-b border-white/[0.04] pb-6"
            >
              <div className="flex flex-col gap-1">
                <h4 className="font-sans text-sm font-semibold text-white">
                  {item.degree}
                </h4>
                <p className="font-sans text-xs text-white/50">
                  {item.school}
                </p>
              </div>
              <span className="font-mono text-xs text-accent whitespace-nowrap bg-accent/5 px-2.5 py-1 rounded border border-accent/15">
                {item.years}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Skills block */}
      <div>
        <h3 className="font-mono text-xs tracking-[0.25em] text-accent uppercase font-bold mb-8">
          SKILLS
        </h3>

        <div className="flex flex-wrap gap-2.5">
          {SKILLS_DATA.map((skill, idx) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="font-mono text-[10px] tracking-wider text-white/60 bg-[#121215] border border-white/10 px-3.5 py-2 rounded-full cursor-default select-none transition-all duration-300"
              whileHover={{
                scale: 1.05,
                backgroundColor: "#ff2020",
                borderColor: "#ff2020",
                textColor: "#ffffff",
                boxShadow: "0 4px 15px rgba(255, 32, 32, 0.25)"
              }}
            >
              <span className="hover:text-white transition-colors">{skill}</span>
            </motion.span>
          ))}
        </div>
      </div>

    </div>
  );
}
