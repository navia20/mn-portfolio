"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Code } from "lucide-react";

const projects = [
  {
    title: "Proyecto 1",
    description:
      "Descripción breve del proyecto. Explica qué hace, qué problema resuelve o qué tecnologías clave usaste.",
    image: "/projects/proyecto1.png",
    tech: ["React", "Next.js", "Tailwind CSS"],
    demo: "https://demo-ejemplo.com",
    repo: "https://github.com/tuusuario/proyecto1",
  },
  {
    title: "Proyecto 2",
    description:
      "Otro proyecto destacado. Menciona las funcionalidades principales y tu rol en el desarrollo.",
    image: "/projects/proyecto2.png",
    tech: ["TypeScript", "Node.js", "MongoDB"],
    demo: "https://demo-ejemplo.com",
    repo: "https://github.com/tuusuario/proyecto2",
  },
  {
    title: "Proyecto 3",
    description:
      "Un proyecto más. Puede ser un proyecto personal, freelance o de trabajo que muestre tus habilidades.",
    image: "/projects/proyecto3.png",
    tech: ["React", "Firebase", "Stripe"],
    demo: "https://demo-ejemplo.com",
    repo: "https://github.com/tuusuario/proyecto3",
  },
];

function ProjectImage({ src, alt }: { src: string; alt: string }) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-section-bg">
        <span className="text-4xl font-bold text-accent/20">{alt[0]}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      onError={() => setError(true)}
    />
  );
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="proyectos" className="py-24 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          <span className="text-accent">Proyectos</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card-bg border border-card-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="relative aspect-video bg-section-bg overflow-hidden">
                <ProjectImage src={project.image} alt={project.title} />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                      aria-label="Ver demo"
                    >
                      <ExternalLink size={18} className="text-gray-900" />
                    </a>
                  )}
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                      aria-label="Ver código"
                    >
                      <Code size={18} className="text-gray-900" />
                    </a>
                  )}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-muted text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full"
                    >
                      {tech}
                    </span>
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
