"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';

const valores = [
  {
    titulo: "Tejidos Premium",
    descripcion: "Linos puros, algodones orgánicos y plumetis seleccionados por su suavidad. Materiales que respetan la piel de los más pequeños.",
    icono: "✨"
  },
  {
    titulo: "Hecho a Mano",
    descripcion: "Cada prenda se corta, hilvana y confecciona artesanalmente en nuestro taller de Sevilla. Sin prisas, cuidando cada detalle.",
    icono: "🧵"
  },
  {
    titulo: "Diseño Andaluz",
    descripcion: "Nuestra estética bebe de la luz del sur, los clásicos atemporales y la tradición de la costura de toda la vida.",
    icono: "🌿"
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(5px)" },
  show: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 80, damping: 20 } as any
  }
};

export default function ValoresEditorial() {
  return (
    <section className="relative w-full max-w-[1400px] mx-auto px-4 py-24 md:py-32 overflow-hidden">
      
      {/* Fondo sutil (Plumeti/Vichy) */}
      <div className="absolute inset-0 bg-plumeti opacity-20 pointer-events-none mix-blend-multiply" />
      
      <div className="relative z-10 flex flex-col items-center text-center mb-16">
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="font-sans text-[11px] uppercase tracking-[0.3em] font-bold text-accent mb-4"
        >
          El valor de lo auténtico
        </motion.p>
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-serif text-ink italic leading-tight"
        >
          Por qué elegir Luna Kids
        </motion.h2>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10"
      >
        {valores.map((valor, idx) => (
          <motion.div 
            key={idx}
            variants={itemVariants}
            className="group relative bg-base/80 backdrop-blur-md p-8 md:p-12 rounded-[2rem] border border-white/50 shadow-[0_10px_30px_rgba(44,42,41,0.03)] flex flex-col items-center text-center transition-transform duration-500 hover:-translate-y-2"
            style={{ willChange: "transform, opacity" }}
          >
            {/* Elemento decorativo hover */}
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-b from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            <span className="text-3xl mb-6 opacity-80 group-hover:scale-110 transition-transform duration-500">{valor.icono}</span>
            <h3 className="font-serif text-2xl text-ink mb-4">{valor.titulo}</h3>
            <p className="font-sans text-[15px] text-ink/75 leading-[1.8]">
              {valor.descripcion}
            </p>
          </motion.div>
        ))}
      </motion.div>

    </section>
  );
}
