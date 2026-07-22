"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre-mi" className="py-24 px-6">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          Sobre <span className="text-accent">Mí</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-4 text-muted leading-relaxed max-w-3xl mx-auto"
        >
          <p>
            Estudiante de Ingeniería Civil en Computación e Informática en la
            Universidad Católica del Norte en Coquimbo. Responsable, honesto y
            perseverante, con habilidades para la toma de decisiones, el trabajo
            en equipo y la resolución creativa de problemas.
          </p>
          <p>
            Me caracterizo por mi capacidad de adaptación, flexibilidad y
            motivación constante por aprender y mejorar en el ámbito académico
            y profesional. Realicé un intercambio estudiantil en la Universidad
            de la República Oriental del Uruguay en el segundo semestre de 2025.
          </p>
          <p>
            Apasionado por el desarrollo de software moderno, busco siempre
            escribir código limpio, escalable y bien documentado. Creo
            firmemente que la mejor tecnología es la que resuelve problemas
            reales de manera simple y elegante.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
