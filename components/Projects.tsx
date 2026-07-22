"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    title: "Solicitar Licencia",
    description:
      "Plataforma web desarrollada en colaboración con UDELAR y eagerworks de Uruguay para la centralización de información del personal y automatización de los procesos de gestión de licencias.",
    details: [
      "Herramientas de autogestión para empleados",
      "Paneles de control para líderes de proyecto y RRHH",
      "Sistema de aprobaciones y gestión de equipos",
      "Generación de reportes y seguimiento de licencias",
    ],
    image: "/projects/project-1/solicitar-licencia.png",
    tech: ["Next.js", "Ruby on Rails", "Railway", "React", "API REST", "Docker", "TypeScript", "PostgreSQL",],
  },
  {
    title: "Sistema de Formularios Dinámicos y Cotizaciones",
    description:
      "Sistema de cotizaciones y formularios dinámicos desarrollado como parte de la práctica profesional en Praderas Verdes. Permite la creación y despliegue instantáneo de herramientas de captura de datos desde web hacia app móvil.",
    details: [
      "Desarrollo de formularios dinámicos con GraphQL para captura de datos desde web hacia app móvil",
      "Automatización del módulo de cotizaciones con generación de reportes PDF",
      "Optimización de la lógica operativa del sistema y reducción de tiempos de emisión de documentación técnica y comercial"
      ,
    ],
    image: "/projects/project-2/registros-cotizaciones.png",
    tech: ["Next.js", "React", "API REST", "GraphQL", "TypeScript", "PostgreSQL", "mongodb"],
  },
  {
    title: "Sistema CRM - ERP",
    description:
      "Proyecto de universidad para el desarrollo de un sistema de soporte CRM conectado a un ERP para la gestión integral de clientes. Implementación de módulos conectados para el envío y recepción de información entre sistemas.",
    details: [
      "Integración CRM con ERP para sincronización de datos",
      "Contacto con clientes en tiempo real para su seguimiento y gestión",
      "Categorización de tickets, notificaciones y seguimiento de solicitudes",
      "Generación de reportes y análisis de datos para la toma de decisiones estratégicas",

    ],
    image: "/projects/project-3/registro-tickets.png",
    tech: ["React", "Node.js", "TypeScript", "API REST", "vercel", "PostgreSQL"],
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
      className="w-full h-full object-cover"
      onError={() => setError(true)}
    />
  );
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selected, setSelected] = useState<number | null>(null);

  const closeModal = () => setSelected(null);
  const prevProject = () =>
    setSelected((s) => (s !== null ? (s - 1 + projects.length) % projects.length : s));
  const nextProject = () =>
    setSelected((s) => (s !== null ? (s + 1) % projects.length : s));

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (selected === null) return;
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowLeft") prevProject();
      if (e.key === "ArrowRight") nextProject();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selected]);

  return (
    <section id="proyectos" className="py-24 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          <span className="text-accent">Proyectos</span> más recientes
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelected(index)}
              className="group bg-card-bg border border-card-border rounded-xl overflow-hidden hover:shadow-lg hover:scale-[1.02] transition-all duration-300 cursor-pointer"
            >
              <div className="relative aspect-video bg-section-bg overflow-hidden">
                <ProjectImage src={project.image} alt={project.title} />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-muted text-sm mb-4 leading-relaxed line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selected !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-card-bg border border-card-border rounded-xl overflow-hidden max-w-3xl w-full max-h-[90vh] overflow-y-auto"
              >
                <div className="relative aspect-video bg-section-bg overflow-hidden">
                  <ProjectImage
                    src={projects[selected].image}
                    alt={projects[selected].title}
                  />
                  <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors z-10"
                  >
                    <X size={20} />
                  </button>

                  <button
                    onClick={(e) => { e.stopPropagation(); prevProject(); }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors z-10"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); nextProject(); }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors z-10"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">
                    {projects[selected].title}
                  </h3>
                  <p className="text-muted mb-6 leading-relaxed">
                    {projects[selected].description}
                  </p>

                  <ul className="space-y-3 mb-6">
                    {projects[selected].details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-muted">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {projects[selected].tech.map((tech) => (
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
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
