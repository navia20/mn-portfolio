"use client";

import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useState, useEffect } from "react";

const messages = [
"¡Holaaa, bienvenido a mi portafolio! 👋",
"¿Te gusta? 😄",
"Si me preguntas a mí... ¡está genial! ✨",
"Hola mamita, estoy en una página web 😎",
"Hey... ¿cuándo se actualizó la base de datos de virus?",
"Nvm, ya vi... hace 2 días. 😌",
"¿Y ahora qué hacemos?",
"Podríamos explorar mis proyectos. 👀",
"Bueno... también puedes usar el menú de navegación.",
"Trabajé bastante en él. 😅",
"Qué chulada, ¿no?",
"¿Sabías que estudié un semestre en Uruguay? 🇺🇾",
"Bo, Tán de má la tortas fritas y el chivito, olvidate 😌",
"Si alguna vez tenés la oportunidad de viajar, hacelo.😎",
"Mi portafolio está en constante actualización.",
"Así que si encuentras algo raro...",
"...probablemente ya lo estoy arreglando. 😂",
"Ups... creo que rompí algo. 😅",
"Espera...",
"Listo, ya quedó. 👍",
"TUN TUN TUN!, la base de datos de virus ha sido actualizada. 📢",
"Ahora sí puedo dormir tranquilo. 😌",
"¿Sigues acá? Eso es buena señal.",
"Prometo que este proyecto sí está ordenado.",
"El botón funciona.",
"Sí... ese también.",
"Probé todos. Bueno... casi todos.",
"recién hice un pull en un proyecto.",
"npm install sin errores... sospechoso.",
"¿Te doy un consejo informatico?",
"Nunca hagas un commit un viernes en la tarde",
"y menos si es un proyecto de producción. 😅",




];

const glitchChars = "█▓▒░@#$%^&*ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

function TypewriterMessages() {
  const [phase, setPhase] = useState<"typing" | "glitch" | "question">("typing");
  const [messageIndex, setMessageIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [glitchText, setGlitchText] = useState("");
  const [questionText, setQuestionText] = useState("");

  useEffect(() => {
    if (phase !== "typing") return;

    const currentMessage = messages[messageIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && text === currentMessage) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      if (messageIndex === messages.length - 1) {
        setPhase("glitch");
      } else {
        setMessageIndex((prev) => prev + 1);
      }
    } else {
      timeout = setTimeout(
        () => {
          setText(
            isDeleting
              ? currentMessage.substring(0, text.length - 1)
              : currentMessage.substring(0, text.length + 1)
          );
        },
        isDeleting ? 30 : 60
      );
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, messageIndex, phase]);

  useEffect(() => {
    if (phase !== "glitch") return;

    let count = 0;
    const interval = setInterval(() => {
      const len = 25 + Math.floor(Math.random() * 15);
      let result = "";
      for (let i = 0; i < len; i++) {
        result += glitchChars[Math.floor(Math.random() * glitchChars.length)];
      }
      setGlitchText(result);
      count++;
      if (count >= 25) {
        clearInterval(interval);
        setPhase("question");
      }
    }, 70);

    return () => clearInterval(interval);
  }, [phase]);

  useEffect(() => {
    if (phase !== "question") return;

    const msg = "¿Qué fue eso? 😳";
    let i = 0;
    const interval = setInterval(() => {
      setQuestionText(msg.substring(0, i + 1));
      i++;
      if (i >= msg.length) {
        clearInterval(interval);
        setTimeout(() => {
          setPhase("typing");
          setMessageIndex(0);
          setText("");
          setGlitchText("");
          setQuestionText("");
        }, 2500);
      }
    }, 60);

    return () => clearInterval(interval);
  }, [phase]);

  if (phase === "glitch") {
    return (
      <div className="relative bg-black border border-green-500/50 rounded-2xl px-6 py-3 mb-6 inline-block shadow-lg shadow-green-500/20">
        <p className="text-green-400 font-mono text-sm md:text-base">
          {glitchText}
        </p>
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-black border-b border-r border-green-500/50 rotate-45" />
      </div>
    );
  }

  if (phase === "question") {
    return (
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative bg-card-bg border border-card-border rounded-2xl px-6 py-3 mb-6 inline-block shadow-sm"
      >
         <p className="text-sm md:text-base text-foreground min-h-[1.5em]">
      {questionText}
      <span className="animate-pulse text-accent">|</span>
        </p>
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-card-bg border-b border-r border-card-border rotate-45" />
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="relative bg-card-bg border border-card-border rounded-2xl px-6 py-3 mb-6 inline-block shadow-sm"
    >
      <p className="text-sm md:text-base text-foreground min-h-[1.5em]">
        {text}
        <span className="animate-pulse text-accent">|</span>
      </p>
      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-card-bg border-b border-r border-card-border rotate-45" />
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center px-6 pt-20"
    >
      <div className="max-w-4xl mx-auto text-center">
        <TypewriterMessages />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="/icon/1bb29497-6e27-4abf-b62a-71245509ed5f.jpg"
            alt="Matías Navia"
            className="w-32 h-32 mx-auto mb-8 rounded-full object-cover border-2 border-card-border"
          />
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
            <FaGithub size={22} />
          </a>
          <a
            href="https://linkedin.com/in/matías-navia-barrientos/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={22} />
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
