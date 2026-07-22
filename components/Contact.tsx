"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Code, Link, FileDown } from "lucide-react";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "matinavia.063@gmail.com",
    href: "mailto:matinavia.063@gmail.com",
  },
  {
    icon: Code,
    label: "GitHub",
    value: "github.com/navia20",
    href: "https://github.com/navia20",
  },
  {
    icon: Link,
    label: "LinkedIn",
    value: "linkedin.com/in/matías-navia-barrientos",
    href: "https://linkedin.com/in/matías-navia-barrientos/",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contacto" className="py-24 px-6">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-4 text-center"
        >
          <span className="text-accent">Contacto</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-muted text-center mb-12 max-w-xl mx-auto"
        >
          ¿Tienes un proyecto en mente o quieres colaborar? No dudes en
          escribirme. Estaré encantado de escucharte.
        </motion.p>

        <div className="grid sm:grid-cols-3 gap-6 mb-10">
          {contactLinks.map((contact, index) => (
            <motion.a
              key={contact.label}
              href={contact.href}
              target={contact.href.startsWith("mailto") ? undefined : "_blank"}
              rel={
                contact.href.startsWith("mailto")
                  ? undefined
                  : "noopener noreferrer"
              }
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="flex flex-col items-center gap-3 p-6 bg-card-bg border border-card-border rounded-xl hover:border-accent hover:shadow-md transition-all duration-300"
            >
              <contact.icon size={28} className="text-accent" />
              <span className="font-medium">{contact.label}</span>
              <span className="text-sm text-muted text-center break-all">
                {contact.value}
              </span>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center"
        >
          <a
            href="/cv.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent-light transition-colors font-medium"
          >
            <FileDown size={18} />
            Descargar CV
          </a>
        </motion.div>
      </div>
    </section>
  );
}
