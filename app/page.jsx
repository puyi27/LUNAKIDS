"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
};

export default function Home() {
  return (
    <div className="pt-32 bg-base min-h-screen">
      
      {/* BLOQUE 1: Hero Asimétrico */}
      <section className="relative px-6 max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center min-h-[80vh]">
        <motion.div 
          className="md:col-span-7 flex flex-col justify-center order-2 md:order-1"
          initial="initial" animate="whileInView" variants={fadeUp}
        >
          <h1 className="text-6xl md:text-8xl font-serif text-ink leading-[1.05] tracking-tight mb-6">
            Moda infantil<br />con alma<br />artesanal.
          </h1>
          <p className="font-script text-3xl text-terracotta mb-8">Como se hacía antes</p>
          <div className="max-w-md">
            <p className="text-base text-ink/80 font-sans font-medium leading-[1.8] mb-12">
              Vestidos de ceremonia y diario diseñados y confeccionados a mano en Sevilla. Moda clásica con esencia andaluza para acompañar a las más pequeñas.
            </p>
            <Link href="/colecciones" className="inline-flex items-center gap-4 bg-burgundy text-base px-8 py-4 font-sans text-[11px] uppercase tracking-[0.2em] font-semibold rounded-full hover:bg-accent hover:text-base shadow-md transition-colors duration-500">
              Ver Colección
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </motion.div>
        
        <motion.div 
          className="md:col-span-5 h-[60vh] md:h-[80vh] w-full rounded-2xl overflow-hidden order-1 md:order-2"
          initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <img src="/hero_luna.png" alt="Confección artesanal" className="w-full h-full object-cover object-top opacity-90" />
        </motion.div>
      </section>

      {/* BLOQUE 2: Editorial / El Ruido de las Tijeras */}
      <section className="py-32 px-6 max-w-[1400px] mx-auto bg-base relative overflow-hidden">
        {/* Fondo decorativo plumeti muy sutil */}
        <div className="absolute inset-0 bg-plumeti opacity-50 pointer-events-none" />
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center relative z-10">
          <motion.div className="md:col-span-4 h-[70vh] rounded-2xl overflow-hidden bg-paper shadow-md p-2" {...fadeUp}>
            <div className="w-full h-full rounded-xl overflow-hidden border-stitch">
              <img src="/prod_dots.png" alt="Detalle de madroños" className="w-full h-full object-cover object-center mix-blend-multiply opacity-95" />
            </div>
          </motion.div>
          
          <motion.div className="md:col-span-6 md:col-start-6" {...fadeUp}>
            <h2 className="text-4xl md:text-5xl font-serif text-ink italic mb-8">Hecho a mano,<br/>prenda a prenda.</h2>
            <p className="text-[15px] font-sans text-ink/80 leading-[2] font-medium mb-8">
              En Luna Kids trabajamos como siempre se ha hecho. Desde nuestro taller en Sevilla, seleccionamos tejidos de primera calidad, cortamos los patrones y cosemos cada detalle con el cuidado que la ropa infantil merece.
            </p>
            <p className="text-[15px] font-sans text-ink/80 leading-[2] font-medium">
              Creemos en prendas bien hechas, cómodas y elegantes. Ropa pensada para disfrutarse hoy y guardarse con cariño para el día de mañana.
            </p>
          </motion.div>
        </div>
      </section>

      {/* BLOQUE 3: Colecciones Asimétricas */}
      <section className="py-32 px-6 max-w-[1400px] mx-auto">
        <motion.h2 className="text-5xl font-serif text-ink mb-24 text-center" {...fadeUp}>Nuestras Líneas</motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <motion.div className="group cursor-pointer" {...fadeUp}>
            <Link href="/producto/2">
              <div className="aspect-[3/4] bg-paper mb-6 overflow-hidden rounded-xl relative border-[6px] border-paper shadow-sm transition-all duration-500 group-hover:shadow-lg">
                <div className="w-full h-full rounded-lg overflow-hidden border-stitch">
                  <img src="/flamenca_luna_2.png" className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110 opacity-95 mix-blend-multiply" />
                </div>
              </div>
              <div className="text-center">
                <p className="font-serif italic text-3xl text-ink mb-1">Herencia Flamenca</p>
                <p className="font-script text-2xl text-terracotta">Tira bordada y madroños</p>
              </div>
            </Link>
          </motion.div>

          <motion.div className="group cursor-pointer" {...fadeUp}>
            <Link href="/producto/1">
              <div className="aspect-[3/4] bg-paper mb-6 overflow-hidden rounded-xl relative border-[6px] border-paper shadow-sm transition-all duration-500 group-hover:shadow-lg">
                <div className="w-full h-full rounded-lg overflow-hidden border-stitch">
                  <img src="/prod_teal.png" className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110 opacity-95 mix-blend-multiply" />
                </div>
              </div>
              <div className="text-center">
                <p className="font-serif italic text-3xl text-ink mb-1">Ceremonia & Arras</p>
                <p className="font-script text-2xl text-terracotta">Linos crudos y terciopelo</p>
              </div>
            </Link>
          </motion.div>

          <motion.div className="group cursor-pointer" {...fadeUp}>
            <Link href="/colecciones">
              <div className="aspect-[3/4] bg-paper mb-6 overflow-hidden rounded-xl relative border-[6px] border-paper shadow-sm transition-all duration-500 group-hover:shadow-lg">
                <div className="w-full h-full rounded-lg overflow-hidden border-stitch">
                  <img src="/diario_luna_2.png" className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110 opacity-95 mix-blend-multiply" />
                </div>
              </div>
              <div className="text-center">
                <p className="font-serif italic text-3xl text-ink mb-1">Diario Elegante</p>
                <p className="font-script text-2xl text-terracotta">Vichys y plumetis ligeros</p>
              </div>
            </Link>
          </motion.div>
          
        </div>
      </section>
    </div>
  );
}
