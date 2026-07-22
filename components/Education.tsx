"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Calendar } from "lucide-react";

const education = [
  {
    degree: "Ingeniería Civil en Computación e Informática",
    institution: "Universidad Católica del Norte — Campus Coquimbo",
    period: "2021 – Presente",
    description:
      "Estudiante de 5to año. Formación en desarrollo de software, algoritmos, bases de datos, redes y gestión de proyectos tecnológicos.",
  },
  {
    degree: "Intercambio Estudiantil — Ingeniería en Computación",
    institution: "Universidad de la República Oriental del Uruguay",
    period: "2025",
    description:
      "Programa de intercambio en el segundo semestre de 2025 en Montevideo, Uruguay. Ampliación de perspectiva académica y experiencia internacional.",
  },
];

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="educacion" className="py-24 px-6 bg-section-bg">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          <span className="text-accent">Educación</span>
        </motion.h2>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-card-border" />

          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative flex items-start mb-12 last:mb-0 ${
                index % 2 === 0
                  ? "md:flex-row"
                  : "md:flex-row-reverse"
              }`}
            >
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-accent flex items-center justify-center z-10">
                <GraduationCap size={14} className="text-white" />
              </div>

              <div className="ml-12 md:ml-0 md:w-1/2 md:px-8">
                <div className="bg-card-bg border border-card-border rounded-xl p-6">
                  <div className="flex items-center gap-2 text-sm text-muted mb-2">
                    <Calendar size={14} />
                    <span>{item.period}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-1">{item.degree}</h3>
                  <p className="text-accent text-sm font-medium mb-3">
                    {item.institution}
                  </p>
                  <p className="text-muted text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
