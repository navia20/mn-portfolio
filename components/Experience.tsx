"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    role: "Desarrollador Web y Móvil (Práctica Profesional)",
    company: "Praderas Verdes",
    period: "Enero – Marzo 2026",
    description: [
      "Desarrollo de un sistema de formularios dinámicos para la creación y despliegue instantáneo de herramientas de captura de datos desde una aplicación web hacia una App móvil, eliminando el registro manual y garantizando la integridad de la información en terreno.",
      "Liderazgo en la reingeniería del Módulo de Cotizaciones mediante la automatización de reportes oficiales en formato PDF, optimizando la lógica operativa del sistema y reduciendo significativamente los tiempos de emisión de documentación técnica y comercial.",
    ],
  },
  {
    role: "Desarrollador Web",
    company: "UDELAR - eagerworks",
    period: "Agosto – Diciembre 2025",
    description: [
      "Desarrollo de una plataforma web integral para la centralización de información del personal y automatización de los procesos de gestión de licencias. Se implementaron herramientas de autogestión para empleados y paneles de control para líderes de proyecto y RRHH (aprobaciones, gestión de equipos y generación de reportes).",
    ],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experiencia" className="py-24 px-6">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          <span className="text-accent">Experiencia</span> Profesional
        </motion.h2>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-card-border" />

          {experiences.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative flex items-start mb-12 last:mb-0 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-accent flex items-center justify-center z-10">
                <Briefcase size={14} className="text-white" />
              </div>

              <div className="ml-12 md:ml-0 md:w-1/2 md:px-8">
                <div className="bg-card-bg border border-card-border rounded-xl p-6">
                  <div className="flex items-center gap-2 text-sm text-muted mb-2">
                    <Calendar size={14} />
                    <span>{item.period}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-1">{item.role}</h3>
                  <p className="text-accent text-sm font-medium mb-3">
                    {item.company}
                  </p>
                  {item.description.map((desc, i) => (
                    <p key={i} className="text-muted text-sm leading-relaxed mb-2 last:mb-0">
                      {desc}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
