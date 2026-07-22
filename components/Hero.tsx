"use client";

import { motion } from "framer-motion";
import { ArrowDown, Code, Link, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center px-6 pt-20"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-section-bg border-2 border-card-border flex items-center justify-center text-4xl font-bold text-accent">
            MN
          </div>
          {/* Para usar tu foto, reemplaza el div de arriba por:
          <img src="/foto-perfil.jpg" alt="Matías Navia" className="w-32 h-32 mx-auto mb-8 rounded-full object-cover border-2 border-card-border" />
          */}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Hola, soy{" "}
          <span className="text-accent">Matías Navia</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-muted mb-8"
        >
          Ingeniería Civil en Computación e Informática
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-muted max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Estudiante de 5to año en la Universidad Católica del Norte. Apasionado
          por el desarrollo de software, la resolución creativa de problemas y las
          tecnologías modernas.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center justify-center gap-4 mb-12"
        >
          <a
            href="#proyectos"
            className="px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent-light transition-colors font-medium"
          >
            Ver Proyectos
          </a>
          <a
            href="#contacto"
            className="px-6 py-3 border border-card-border rounded-lg hover:bg-section-bg transition-colors font-medium"
          >
            Contacto
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center justify-center gap-6"
        >
          <a
            href="https://github.com/navia20"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-foreground transition-colors"
            aria-label="GitHub"
          >
            <Code size={22} />
          </a>
          <a
            href="https://linkedin.com/in/matías-navia-barrientos/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <Link size={22} />
          </a>
          <a
            href="mailto:matinavia.063@gmail.com"
            className="text-muted hover:text-foreground transition-colors"
            aria-label="Email"
          >
            <Mail size={22} />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <a
            href="#sobre-mi"
            className="inline-block text-muted hover:text-foreground transition-colors animate-bounce"
            aria-label="Scroll down"
          >
            <ArrowDown size={24} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
