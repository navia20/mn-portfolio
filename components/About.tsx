"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield } from "lucide-react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre-mi" className="py-24 px-6">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          Sobre <span className="text-accent">Mí</span>
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-2 space-y-4 text-muted leading-relaxed"
          >
            <p>
              Soy estudiante de Ingeniería Civil en Computación e Informática en la
              Universidad Católica del Norte. Me considero una persona profesional versátil, 
              con la convicción de que la tecnología va mucho más allá de escribir código: 
              se trata de comprender a fondo el modelo de negocio y las necesidades reales del cliente o la persona, 
              diseñando soluciones a medida que satisfagan plenamente sus requerimientos y generen un impacto general.
            </p>
            <p>
              Realicé un intercambio estudiantil en Uruguay en 2025, 
              el cual fue una experiencia súper nutritiva a nivel académico y profesional. 
              Me ayudó a contrastar los diferentes ecosistemas y modelos que existían, 
              y también a aprender a adaptarme y colaborar de buena manera con diversos grupos de personas.
            </p>
            <p>
              Para materializar las ideas en productos web rápidos y eficientes, trabajo principalmente con tecnologías modernas como React, Next.js y TypeScript. Mi meta es resolver problemas reales y aportar un valor directo a la empresa como tal.
            </p>
         </motion.div>
          <div className="flex flex-col gap-4 h-fit">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-card-bg border border-card-border rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-emerald-500/10 rounded-lg">
                  <Shield size={20} className="text-emerald-500" />
                </div>
                <h3 className="font-semibold text-foreground">Minor</h3>
              </div>
              <p className="text-accent font-medium mb-2">
                Seguridad Digital y Ciberinteligencia
              </p>
              <p className="text-sm text-muted">
                Formación complementaria en ciberseguridad, análisis de amenazas y
                protección de sistemas.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-card-bg border border-card-border rounded-xl p-4 text-center"
            >
              <p className="text-2xl font-bold text-accent">+1</p>
              <p className="text-sm text-muted">año de experiencia</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
