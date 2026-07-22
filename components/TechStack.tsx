"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  SiPython,
  SiC,
  SiTypescript,
  SiRuby,
  SiPostgresql,
  SiReact,
  SiNextdotjs,
  SiNestjs,
  SiRubyonrails,
  SiMongodb,
  SiGit,
  SiDocker,
  SiKubernetes,
  SiVercel,
  SiRailway,
  SiMysql,
  SiCplusplus,
  SiPhp,
  SiLaravel,
  SiGo,
  SiJavascript,
  SiSharp,
  SiGraphql,
  SiOpenapiinitiative,
} from "react-icons/si";
import { FaJava, FaChartBar } from "react-icons/fa";

const categories = [
  {
    name: "Lenguajes",
    techs: [
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "Java", icon: FaJava, color: "#ED8B00" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "C", icon: SiC, color: "#A8B9CC" },
      { name: "C++", icon: SiCplusplus, color: "#00599C" },
      { name: "C#", icon: SiSharp, color: "#239120" },
      { name: "Go", icon: SiGo, color: "#00ADD8" },
      { name: "PHP", icon: SiPhp, color: "#777BB4" },
      { name: "Ruby", icon: SiRuby, color: "#CC342D" },
    ],
  },
  {
    name: "Frameworks & DB",
    techs: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
      { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
      { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
      { name: "Rails", icon: SiRubyonrails, color: "#CC0000" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    ],
  },
  {
    name: "Herramientas",
    techs: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
      { name: "Vercel", icon: SiVercel, color: "#000000" },
      { name: "Railway", icon: SiRailway, color: "#0B0D0E" },
      { name: "API REST", icon: SiOpenapiinitiative, color: "#6BA539" },
      { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
      { name: "Power BI", icon: FaChartBar, color: "#F2C811" },
    ],
  },
];

export default function TechStack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="stack" className="py-24 px-6 bg-section-bg">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          Stack <span className="text-accent">Tecnológico</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category, catIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: catIndex * 0.15 }}
              className="bg-card-bg border border-card-border rounded-xl p-6"
            >
              <h3 className="text-lg font-semibold mb-6 text-center text-accent">
                {category.name}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {category.techs.map((tech, techIndex) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.3,
                      delay: catIndex * 0.15 + techIndex * 0.05,
                    }}
                    className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-section-bg transition-colors"
                  >
                    <tech.icon
                      size={28}
                      style={{ color: tech.color }}
                      className="dark:invert-[0.15]"
                    />
                    <span className="text-xs text-muted text-center">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
