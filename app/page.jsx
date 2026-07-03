"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import useEmblaCarousel from 'embla-carousel-react';
import BrandPillars from '../components/ui/BrandPillars';
import Bow from '../components/ui/Bow';

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
};

export default function Home() {
  const [emblaRef] = useEmblaCarousel({ loop: true });

  return (
    <div className="pt-40 md:pt-48 min-h-screen overflow-hidden">
      
      {/* BLOQUE 1: Hero */}
      <section className="relative max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-0 md:gap-12 items-center min-h-[85vh] md:min-h-[80vh] pb-12 md:pb-0 md:px-6 bg-magic">
        <div className="absolute top-0 right-0 z-10 hidden md:block">
           <Bow />
        </div>

        <motion.div 
          className="md:col-span-5 flex flex-col justify-center order-2 md:order-1 relative z-10 px-6 md:px-0 mt-8 md:mt-0"
          initial="initial" animate="whileInView" variants={fadeUp}
        >
          <div className="absolute -left-4 top-10 hidden md:block rotate-12">
             <Bow />
          </div>
          <h1 className="text-5xl md:text-7xl font-serif text-ink leading-[1.05] tracking-tight mb-4 md:mb-6">
            Vestimos su infancia <br className="hidden md:block"/> con el cariño <br className="hidden md:block"/> de siempre.
          </h1>
          <p className="font-script text-[28px] md:text-4xl text-terracotta mb-6 md:mb-8 leading-none">Diseño y confección en Sevilla</p>
          <div className="max-w-md">
            <p className="text-[14px] md:text-[15px] text-ink/80 font-sans font-medium leading-[1.8] mb-10 md:mb-12">
              Creamos colecciones clásicas y atemporales para las más pequeñas. Cada batita, vestido y traje de flamenca está confeccionado íntegramente a mano, utilizando tejidos premium para garantizar la máxima comodidad en su día a día, en la Feria o en el Rocío.
            </p>
            <Link href="/coleccion" className="inline-flex items-center justify-center w-full md:w-auto gap-4 bg-burgundy text-white md:text-base px-8 py-5 md:py-4 font-sans text-[11px] md:text-[12px] uppercase tracking-[0.2em] font-semibold rounded-full hover:bg-accent shadow-xl transition-colors duration-500">
              Descubrir la colección
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </motion.div>
        
        <motion.div 
          className="md:col-span-7 h-[65vh] md:h-[80vh] w-full relative order-1 md:order-2 overflow-hidden shadow-sm md:rounded-bl-3xl"
          initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="overflow-hidden w-full h-full cursor-grab active:cursor-grabbing" ref={emblaRef}>
            <div className="flex h-full">
              <div className="flex-[0_0_100%] min-w-0 relative">
                <img src="/img/flamenca_blanca.png" alt="Luna Kids - Colección" className="w-full h-full object-cover object-center" style={{ objectPosition: 'center 20%' }} />
              </div>
              <div className="flex-[0_0_100%] min-w-0 relative">
                <img src="/img/galeria_4.png" alt="Luna Kids - Ceremonia" className="w-full h-full object-cover object-center" />
              </div>
              <div className="flex-[0_0_100%] min-w-0 relative">
                <img src="/img/ninas_vichy.png" alt="Luna Kids - Diario" className="w-full h-full object-cover object-center" />
              </div>
              <div className="flex-[0_0_100%] min-w-0 relative">
                <img src="/img/galeria_3.png" alt="Luna Kids - Taller" className="w-full h-full object-cover object-center" style={{ objectPosition: 'center 15%' }} />
              </div>
            </div>
          </div>
          <div className="absolute bottom-4 left-4 z-10 rotate-[-20deg]">
            <Bow />
          </div>
        </motion.div>
      </section>

      <BrandPillars />

      {/* BLOQUE ESPECIAL: Colección Madre e Hija (Mini-Me) */}
      <section className="py-24 px-6 max-w-[1400px] mx-auto">
        <motion.div 
          className="relative w-full rounded-3xl overflow-hidden shadow-2xl group cursor-pointer"
          initial="initial" animate="whileInView" variants={fadeUp}
        >
          {/* Fondo Imagen Real */}
          <div className="absolute inset-0 w-full h-full">
            <img src="/img/madre_hija_amarillo.png" alt="Colección Madre e Hija Luna Kids" className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105" />
          </div>
          
          {/* Overlay Elegante */}
          <div className="absolute inset-0 bg-ink/30 group-hover:bg-ink/40 transition-colors duration-500" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />

          {/* Contenido Textual Centrado */}
          <div className="relative z-10 w-full h-[60vh] md:h-[70vh] flex flex-col items-center justify-end text-center pb-16 md:pb-24 px-6">
            <p className="font-sans text-[11px] md:text-[12px] uppercase tracking-[0.3em] font-bold text-white mb-4 md:mb-6">Novedad Especial</p>
            <h2 className="text-4xl md:text-6xl font-serif text-white italic mb-4 md:mb-6">Colección Mini-Me</h2>
            <p className="text-white/90 font-sans text-sm md:text-base max-w-lg mb-8 md:mb-10 leading-relaxed">
              Porque los momentos más bonitos se comparten. Descubre nuestra línea exclusiva de vestidos y trajes de flamenca diseñados a conjunto para madre e hija.
            </p>
            <Link href="/coleccion" className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 font-sans text-[11px] uppercase tracking-[0.2em] font-semibold rounded-full hover:bg-white hover:text-ink transition-all duration-300">
              Ver conjuntos a juego
            </Link>
          </div>
        </motion.div>
      </section>

      {/* BLOQUE 2: Editorial / El Taller */}
      <section className="py-24 md:py-32 px-6 max-w-[1400px] mx-auto relative">
        <div className="absolute -inset-x-10 inset-y-0 bg-plumeti opacity-40 pointer-events-none" />
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center relative z-10">
          <motion.div className="md:col-span-5 relative h-[60vh] md:h-[75vh]" {...fadeUp}>
            <div className="absolute top-0 left-0 w-4/5 h-4/5 overflow-hidden z-10 relative">
              <div className="absolute -top-3 -left-3 z-20 text-accent rotate-[-15deg]">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M12 9l-4-4-2 2 4 4-4 4 2 2 4-4 4 4 2-2-4-4 4-4-2-2-4 4z"/></svg>
              </div>
              <img src="/img/galeria_1.png" alt="Detalle Taller Luna Kids" className="w-full h-full object-cover object-center mix-blend-multiply opacity-95 rounded-tl-xl" />
            </div>
            <div className="absolute bottom-0 right-0 w-3/5 h-3/5 overflow-hidden z-20 shadow-lg">
              <img src="/img/galeria_2.png" alt="Lifestyle Luna Kids" className="w-full h-full object-cover object-center" />
            </div>
          </motion.div>
          
          <motion.div className="md:col-span-6 md:col-start-7 p-6 md:p-12" {...fadeUp}>
            <p className="font-script text-2xl text-accent mb-4">Nuestro proceso</p>
            <h2 className="text-3xl md:text-5xl font-serif text-ink italic mb-6 leading-tight">La importancia <br className="hidden md:block"/>de lo hecho a mano.</h2>
            <p className="text-[15px] font-sans text-ink/80 leading-[2] font-medium mb-6">
              En Luna Kids huimos de la producción en masa. Desde nuestro taller, seleccionamos meticulosamente cada tela, cortamos los patrones y cosemos las prendas prestando atención al más mínimo detalle. Sabemos que la calidad se nota y se siente.
            </p>
            <p className="text-[15px] font-sans text-ink/80 leading-[2] font-medium mb-8">
              Diseñamos ropa infantil elegante, duradera y cómoda. Prendas que resisten los juegos de hoy y que tienen la calidad suficiente para guardarse y pasar a la siguiente generación.
            </p>
            <div className="flex items-center gap-4 border-t border-ink/10 pt-6">
              <div className="w-12 h-12 rounded-full bg-vichy flex-shrink-0" />
              <div>
                <p className="font-serif italic text-ink font-bold">100% Confección Andaluza</p>
                <p className="font-sans text-[11px] uppercase tracking-widest text-terracotta">Materiales de origen sostenible</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* BLOQUE 3: Colecciones Destacadas */}
      <section className="py-24 md:py-32 px-6 max-w-[1400px] mx-auto border-t border-ink/5">
        <div className="text-center mb-16 md:mb-24">
          <motion.p className="font-sans text-[11px] uppercase tracking-[0.2em] font-semibold text-accent mb-4" {...fadeUp}>Nuestras Líneas</motion.p>
          <motion.h2 className="text-4xl md:text-5xl font-serif text-ink" {...fadeUp}>Colección Destacada</motion.h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          
          <motion.div className="group cursor-pointer" {...fadeUp}>
            <Link href="/coleccion/flamenca">
              <div className="aspect-[3/4] mb-6 overflow-hidden relative transition-opacity duration-500 group-hover:opacity-90">
                <div className="w-full h-full relative">
                  <img src="/img/galeria_3.png" className="w-full h-full object-cover object-top transition-transform duration-1000 ease-out group-hover:scale-105 mix-blend-multiply" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="absolute bottom-4 right-4 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-ink">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </div>
                </div>
              </div>
              <div className="text-center md:text-left px-2">
                <p className="font-serif italic text-3xl text-ink mb-1 group-hover:text-terracotta transition-colors">Tradición del Sur</p>
                <p className="font-script text-xl md:text-2xl text-terracotta/80">Trajes de flamenca artesanales</p>
              </div>
            </Link>
          </motion.div>

          <motion.div className="group cursor-pointer md:translate-y-12" {...fadeUp}>
            <Link href="/coleccion">
              <div className="aspect-[3/4] mb-6 overflow-hidden relative transition-opacity duration-500 group-hover:opacity-90">
                <div className="w-full h-full relative">
                  <img src="/img/galeria_4.png" className="w-full h-full object-cover object-top transition-transform duration-1000 ease-out group-hover:scale-105 mix-blend-multiply" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="absolute bottom-4 right-4 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-ink">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </div>
                </div>
              </div>
              <div className="text-center md:text-left px-2">
                <p className="font-serif italic text-3xl text-ink mb-1 group-hover:text-terracotta transition-colors">Ceremonia & Arras</p>
                <p className="font-script text-xl md:text-2xl text-terracotta/80">Linos crudos y terciopelo</p>
              </div>
            </Link>
          </motion.div>

          <motion.div className="group cursor-pointer" {...fadeUp}>
            <Link href="/coleccion/batas">
              <div className="aspect-[3/4] mb-6 overflow-hidden relative transition-opacity duration-500 group-hover:opacity-90">
                <div className="w-full h-full relative">
                  <img src="/img/ninas_vichy.png" className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105 mix-blend-multiply" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="absolute bottom-4 right-4 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-ink">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </div>
                </div>
              </div>
              <div className="text-center md:text-left px-2">
                <p className="font-serif italic text-3xl text-ink mb-1 group-hover:text-terracotta transition-colors">El día a día</p>
                <p className="font-script text-xl md:text-2xl text-terracotta/80">Batas vichy y plumetis ligeros</p>
              </div>
            </Link>
          </motion.div>
          
        </div>
      </section>
    </div>
  );
}
