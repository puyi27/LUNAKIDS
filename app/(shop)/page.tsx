"use client";

import React, { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import Bow from '../../components/ui/Bow';
import SocialProofGrid from '../../components/ui/SocialProofGrid';

const easeOut = [0.23, 1, 0.32, 1] as const;

// Text animation variants
const textContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

const textItem = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 1, ease: easeOut } 
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 1, ease: easeOut } }
};

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  
  // Parallax Values
  const springScroll = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const yHeroBg = useTransform(springScroll, [0, 1], [0, 400]);
  const opacityHero = useTransform(scrollYProgress, [0.15, 0.35], [1, 0]);
  
  // Parallax for floating elements
  const bow1Y = useTransform(springScroll, [0, 1], [0, -300]);
  const bow2Y = useTransform(springScroll, [0, 1], [0, 200]);
  const bow3Y = useTransform(springScroll, [0, 1], [0, -500]);
  const bow4Y = useTransform(springScroll, [0, 1], [0, 400]);

  // Scroll animations for "Nuestro Proceso"
  const processRef = useRef<HTMLElement>(null);
  const { scrollYProgress: processProgress } = useScroll({
    target: processRef,
    offset: ["0 1", "0.6 1"]
  });

  const p1X = useTransform(processProgress, [0, 1], [-100, 0]);
  const p1Rotate = useTransform(processProgress, [0, 1], [-25, -8]);
  const p1Opacity = useTransform(processProgress, [0, 1], [0, 1]);

  const p2Y = useTransform(processProgress, [0, 1], [150, 0]);
  const p2Rotate = useTransform(processProgress, [0, 1], [25, 4]);
  const p2Opacity = useTransform(processProgress, [0, 1], [0, 1]);

  const textX = useTransform(processProgress, [0, 1], [50, 0]);
  const textOpacity = useTransform(processProgress, [0, 1], [0, 1]);

  const carouselImages = [
    { src: "/img/flamenca_blanca.png", name: "Traje Flamenca Blanca", link: "/producto/1" },
    { src: "/img/galeria_4.png", name: "Vestido Ceremonia", link: "/producto/2" },
    { src: "/img/ninas_vichy.png", name: "Bata Vichy", link: "/producto/3" },
    { src: "/img/galeria_3.png", name: "Traje Flamenca Volantes", link: "/producto/4" },
    { src: "/img/galeria_1.png", name: "Vestido Plumeti", link: "/producto/5" },
    { src: "/img/galeria_2.png", name: "Conjunto Lino", link: "/producto/6" }
  ];

  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentHeroIndex((prev) => (prev + newDirection + carouselImages.length) % carouselImages.length);
  };

  // Auto-play the crossfade slider
  useEffect(() => {
    const interval = setInterval(() => {
      paginate(1);
    }, 4500);
    return () => clearInterval(interval);
  }, [carouselImages.length]);

  const sliderVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 800 : -800,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 800 : -800,
      opacity: 0,
      scale: 0.95
    })
  };

  const handleDragEnd = (e: any, { offset, velocity }: any) => {
    const swipe = Math.abs(offset.x) * velocity.x;
    if (swipe < -100) {
      paginate(1);
    } else if (swipe > 100) {
      paginate(-1);
    }
  };

  return (
    <div className="min-h-screen overflow-hidden bg-base relative" ref={containerRef}>
      
      {/* Background Textures */}
      <div className="absolute inset-0 bg-plumeti opacity-40 pointer-events-none mix-blend-multiply fixed z-0" />
      
      {/* FLOATING PARALLAX ELEMENTS (BACKGROUND) */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <motion.div style={{ y: bow1Y, rotate: springScroll }} className="absolute top-[20%] left-[5%] opacity-30 text-terracotta scale-150 blur-[1px]">
          <Bow />
        </motion.div>
        <motion.div style={{ y: bow2Y, rotate: -15 }} className="absolute top-[40%] right-[10%] opacity-20 text-accent scale-[2] blur-[2px]">
          <Bow />
        </motion.div>
        <motion.div style={{ y: bow3Y, rotate: 20 }} className="absolute top-[70%] left-[15%] opacity-15 text-ink scale-[2.5] blur-[3px]">
          <Bow />
        </motion.div>
        <motion.div style={{ y: bow4Y, rotate: -45 }} className="absolute top-[85%] right-[5%] opacity-25 text-terracotta scale-110 blur-[1px]">
          <Bow />
        </motion.div>
      </div>

      {/* 1. HERO: Cinematográfico */}
      <section className="relative w-full max-w-[1400px] mx-auto px-4 grid grid-cols-1 md:grid-cols-12 gap-0 md:gap-8 items-center min-h-[90vh] md:min-h-screen pb-12 md:pb-0 z-10 pt-20 md:pt-0">
        
        <motion.div 
          className="md:col-span-5 flex flex-col justify-center relative z-20 md:pl-8 xl:pl-12 mt-0 md:mt-0 max-w-2xl"
          style={{ y: yHeroBg }}
        >
          {/* Lazo Anclado al texto */}
          <motion.div 
            className="absolute -left-4 md:-left-8 -top-6 md:top-0 rotate-12 opacity-80 text-accent z-30"
            initial={{ scale: 0, rotate: -45 }}
            animate={{ scale: 1.15, rotate: 12 }}
            transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.5 }}
            whileHover={{ rotate: -5, scale: 1.25 }}
          >
             <Bow />
          </motion.div>
          
          <motion.h1 
            className="text-[4rem] md:text-8xl lg:text-[100px] font-serif font-medium text-ink leading-[0.9] tracking-tight mb-2 md:mb-6 mt-2 md:mt-0 relative z-20"
            variants={textContainer}
            initial="hidden"
            animate="show"
          >
            {["Ropa", "de", "nuestra", "tierra."].map((word, i) => (
              <motion.span key={i} variants={textItem} className="inline-block mr-2 md:mr-6">
                {word}
              </motion.span>
            ))}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 1, ease: easeOut }}
            className="font-script font-semibold text-[36px] md:text-[42px] text-terracotta mb-6 md:mb-10 leading-none relative z-20"
          >
            Esencia andaluza a medida
          </motion.p>
          
          <motion.div 
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="max-w-md relative z-20 mt-6 md:mt-10"
          >
            {/* Solo mostramos la tarjeta de cristal en Desktop, en móvil dejamos el texto libre para que respire */}
            <div className="hidden md:block absolute -inset-4 bg-base/60 backdrop-blur-xl rounded-[2rem] -z-10 shadow-[0_20px_40px_rgba(44,42,41,0.05)] border border-white/60" />
            
            <p className="hidden md:block text-[14px] md:text-[16px] text-ink/70 font-sans font-medium leading-[1.9] mb-8 md:mb-10">
              Boutique premium de moda infantil. Cada batita, vestido y traje de flamenca está confeccionado íntegramente a mano en nuestro taller de Sevilla, utilizando tejidos seleccionados de máxima calidad.
            </p>
            {/* Desktop Button: Elegant Editorial Style */}
            <Link href="/coleccion" className="hidden md:inline-flex items-center gap-4 text-ink font-sans text-[11px] uppercase tracking-[0.3em] font-bold group relative w-max">
              <span className="relative pb-1">
                Descubrir la colección
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-ink transform origin-left scale-x-100 group-hover:scale-x-0 transition-transform duration-500" />
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-accent transform origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </span>
              <motion.svg 
                className="w-4 h-4 text-accent" 
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </motion.svg>
            </Link>
          </motion.div>
        </motion.div>
        
        {/* Slider Hero de una foto (Crossfade + Swipe) */}
        <motion.div 
          className="md:col-span-7 w-full flex flex-col relative mt-2 md:mt-0 md:px-0"
          initial={{ opacity: 0, scale: 0.95, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
        >
          <div className="h-[55vh] md:h-[85vh] w-full relative overflow-hidden rounded-2xl md:rounded-[3rem] group shadow-2xl">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentHeroIndex}
                custom={direction}
                variants={sliderVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={handleDragEnd}
                className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing"
              >
                <Link href={carouselImages[currentHeroIndex].link} className="w-full h-full block relative">
                  <Image 
                    src={carouselImages[currentHeroIndex].src} 
                    alt={carouselImages[currentHeroIndex].name} 
                    fill 
                    sizes="(max-width: 768px) 100vw, 50vw" 
                    className="object-cover object-center pointer-events-none" 
                  />
                  {/* Overlay gradiente editorial */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  
                  {/* Nombre del producto on Hover (always visible on mobile) */}
                  <div className="absolute bottom-6 md:bottom-8 left-6 md:left-8 text-white opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500 transform translate-y-0 md:translate-y-4 md:group-hover:translate-y-0">
                    <p className="font-serif text-3xl md:text-5xl mb-1 md:mb-2">{carouselImages[currentHeroIndex].name}</p>
                    <p className="font-sans text-[10px] md:text-xs uppercase tracking-[0.2em] opacity-90 font-semibold flex items-center gap-2">
                      Ver producto
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </p>
                  </div>
                </Link>
              </motion.div>
            </AnimatePresence>
            
            {/* Dots Indicadores */}
            <div className="absolute top-6 md:top-8 left-1/2 transform -translate-x-1/2 flex items-center gap-3 z-20">
              {carouselImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setDirection(idx > currentHeroIndex ? 1 : -1);
                    setCurrentHeroIndex(idx);
                  }}
                  className={`transition-all duration-500 rounded-full bg-white ${currentHeroIndex === idx ? 'w-8 h-1.5 opacity-100' : 'w-1.5 h-1.5 opacity-40 hover:opacity-80'}`}
                  aria-label={`Ver foto ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Mobile Button: Elegant Editorial Style (Below Carousel) */}
          <div className="md:hidden w-full flex flex-col items-center justify-center mt-12 mb-8 z-20">
            <Link href="/coleccion" className="flex items-center gap-3 text-ink font-sans text-[11px] uppercase tracking-[0.3em] font-bold group relative">
              <span className="relative pb-1">
                Colección Completa
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-ink transform origin-left scale-x-100" />
              </span>
              <motion.svg 
                className="w-4 h-4 text-accent" 
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </motion.svg>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* 2. EL TALLER: Collage Asimétrico con Parallax Extremo (Overlapping) */}
      <section ref={processRef} className="pt-8 pb-24 md:pt-16 md:pb-40 px-6 max-w-[1400px] mx-auto relative z-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16 md:gap-12 relative">
          
          {/* Mancha de color de fondo (Glassmorphism) */}
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[700px] md:h-[700px] bg-terracotta/10 rounded-full blur-[100px] -z-10"
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Collage de Polaroids (Overlapping) */}
          <div className="w-full md:w-1/2 h-[75vh] md:h-[90vh] relative order-2 md:order-1 mt-12 md:mt-0">
            
            {/* Polaroid Secundaria (Fondo) */}
            <motion.div 
              style={{ x: p1X, rotate: p1Rotate, opacity: p1Opacity, willChange: 'transform, opacity' }}
              className="absolute top-0 md:top-10 left-0 w-[70%] md:w-[60%] z-10 bg-base p-3 md:p-5 pb-14 md:pb-20 shadow-[0_20px_50px_-12px_rgba(44,42,41,0.15)] rounded-sm border border-ink/5"
              whileHover={{ rotate: -2, scale: 1.05, zIndex: 30 }}
            >
              <div className="w-full aspect-[3/4] relative overflow-hidden bg-ink/5 group">
                <img src="/img/galeria_2.png" alt="Lifestyle Luna Kids" className="w-full h-full object-cover object-center mix-blend-multiply transition-transform duration-1000 group-hover:scale-110" />
              </div>
              <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 font-script text-ink/70 text-2xl md:text-3xl whitespace-nowrap rotate-[-3deg]">
                Trazos y patrones
              </div>
            </motion.div>

            {/* Polaroid Principal (Frente) */}
            <motion.div 
              style={{ y: p2Y, rotate: p2Rotate, opacity: p2Opacity, willChange: 'transform, opacity' }}
              className="absolute bottom-10 right-0 w-[80%] md:w-[75%] z-20 bg-base p-3 md:p-5 pb-14 md:pb-20 shadow-[0_25px_60px_-15px_rgba(44,42,41,0.3)] rounded-sm border border-ink/5"
              whileHover={{ rotate: 0, scale: 1.05, zIndex: 30 }}
            >
              <motion.div 
                className="absolute -top-6 -right-6 z-30 text-terracotta rotate-[15deg] drop-shadow-lg opacity-90 scale-125"
                animate={{ rotate: [15, 25, 15] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <Bow />
              </motion.div>
              <div className="w-full aspect-square relative overflow-hidden bg-ink/5 group">
                <img src="/img/galeria_1.png" alt="Detalle Taller Luna Kids" className="w-full h-full object-cover object-center mix-blend-multiply transition-transform duration-1000 group-hover:scale-110" />
              </div>
              <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 font-script text-ink/90 text-3xl md:text-4xl whitespace-nowrap rotate-[2deg]">
                Sevilla, 2024
              </div>
            </motion.div>
          </div>

          {/* Texto Descriptivo Minimalista */}
          <motion.div 
            style={{ x: textX, opacity: textOpacity, willChange: 'transform, opacity' }}
            className="w-full md:w-1/2 order-1 md:order-2 relative z-30 md:-ml-12"
          >
            <div className="bg-base/70 backdrop-blur-2xl p-8 md:p-14 rounded-[3rem] shadow-[0_20px_60px_rgba(44,42,41,0.08)] border border-white/60 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/15 rounded-full blur-3xl -z-10" />
              
              <p className="font-script text-4xl md:text-5xl text-accent mb-4">Nuestro proceso</p>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-ink italic mb-6 leading-[1.1]">La magia de <br/>lo hecho a mano.</h2>
              
              <p className="text-[15px] md:text-[17px] font-sans text-ink/80 leading-[1.8] font-medium mb-10">
                Diseño exclusivo y confección artesanal. Cuidamos cada puntada desde Sevilla para vestir a los más pequeños.
              </p>
              
              <Link href="/taller" className="inline-flex items-center gap-3 text-ink font-sans text-[11px] uppercase tracking-[0.3em] font-bold group relative">
                <span className="relative pb-1">
                  Ver nuestro taller
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-ink transform origin-left scale-x-100 group-hover:scale-x-0 transition-transform duration-500" />
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-accent transform origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </span>
                <svg className="w-4 h-4 text-accent group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 3. COLECCIÓN DESTACADA: Scroll Horizontal Nativo y Suave */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-24 bg-ink text-base overflow-hidden relative rounded-t-[3rem] md:rounded-t-[5rem] z-30 shadow-[0_-30px_60px_rgba(0,0,0,0.15)]">
        
        <div className="absolute inset-0 bg-plumeti opacity-10 mix-blend-overlay pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-6 mb-12 flex flex-col md:flex-row justify-between items-start md:items-end relative z-10">
          <motion.div 
            initial={{opacity:0, y:40}} 
            whileInView={{opacity:1, y:0}} 
            viewport={{once:true}} 
            transition={{ type: "spring", stiffness: 60, damping: 20 }}
          >
            <h2 className="text-5xl md:text-[5rem] font-serif text-linen leading-none mb-3">Colecciones</h2>
            <p className="font-script text-3xl md:text-5xl text-accent">Nuestras líneas principales</p>
          </motion.div>
        </div>

        <div className="w-full max-w-[1400px] mx-auto px-6 relative z-10">
          <div className="flex flex-nowrap gap-6 md:gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8 pt-4 md:justify-center" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            
            {/* Tarjeta 1 */}
            <motion.div 
              className="flex-[0_0_85%] md:flex-1 snap-center group cursor-pointer"
              whileHover={{ y: -20, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <Link href="/coleccion/flamenca" className="block relative h-full">
                <div className="aspect-[3/4.5] rounded-[2rem] overflow-hidden relative shadow-[0_20px_40px_rgba(0,0,0,0.5)] mb-8">
                  <img src="/img/galeria_3.png" className="w-full h-full object-cover transition-transform duration-[2s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110 opacity-80 group-hover:opacity-100" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
                  
                  {/* Decorative Bow in Card */}
                  <div className="absolute top-6 right-6 text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -rotate-12 scale-125">
                     <Bow />
                  </div>

                  <div className="absolute bottom-10 left-10 text-white transform transition-transform duration-500 group-hover:-translate-y-2">
                    <h3 className="font-serif text-5xl mb-3 group-hover:text-accent transition-colors">Tradición del Sur</h3>
                    <p className="font-sans text-[13px] uppercase tracking-[0.25em] text-white/80 font-bold">Trajes de flamenca</p>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Tarjeta 2 */}
            <motion.div 
              className="flex-[0_0_85%] md:flex-1 snap-center group cursor-pointer"
              whileHover={{ y: -20, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <Link href="/coleccion" className="block relative h-full">
                <div className="aspect-[3/4.5] rounded-[2rem] overflow-hidden relative shadow-[0_20px_40px_rgba(0,0,0,0.5)] mb-8">
                  <img src="/img/galeria_4.png" className="w-full h-full object-cover transition-transform duration-[2s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110 opacity-80 group-hover:opacity-100" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="absolute top-6 right-6 text-terracotta opacity-0 group-hover:opacity-100 transition-opacity duration-500 rotate-12 scale-125">
                     <Bow />
                  </div>

                  <div className="absolute bottom-10 left-10 text-white transform transition-transform duration-500 group-hover:-translate-y-2">
                    <h3 className="font-serif text-5xl mb-3 group-hover:text-terracotta transition-colors">Ceremonia</h3>
                    <p className="font-sans text-[13px] uppercase tracking-[0.25em] text-white/80 font-bold">Arras y Bautizos</p>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Tarjeta 3 */}
            <motion.div 
              className="flex-[0_0_85%] md:flex-1 snap-center group cursor-pointer"
              whileHover={{ y: -20, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <Link href="/coleccion/batas" className="block relative h-full">
                <div className="aspect-[3/4.5] rounded-[2rem] overflow-hidden relative shadow-[0_20px_40px_rgba(0,0,0,0.5)] mb-8">
                  <img src="/img/ninas_vichy.png" className="w-full h-full object-cover transition-transform duration-[2s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110 opacity-80 group-hover:opacity-100" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="absolute top-6 right-6 text-linen opacity-0 group-hover:opacity-100 transition-opacity duration-500 -rotate-6 scale-125">
                     <Bow />
                  </div>

                  <div className="absolute bottom-10 left-10 text-white transform transition-transform duration-500 group-hover:-translate-y-2">
                    <h3 className="font-serif text-5xl mb-3 group-hover:text-accent transition-colors">El día a día</h3>
                    <p className="font-sans text-[13px] uppercase tracking-[0.25em] text-white/80 font-bold">Vichy y Plumetis</p>
                  </div>
                </div>
              </Link>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 4. SOCIAL PROOF: El "Club" Luna Kids (Instagram Feed simulado) */}
      <div className="relative z-20">
        <SocialProofGrid />
      </div>

    </div>
  );
}
