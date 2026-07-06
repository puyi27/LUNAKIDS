"use client";

import React, { useRef } from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { useWaaSStoreBase } from '../../store/waasStore';
import { useAtelierStore } from '../../store/atelierStore';

const easeOut = [0.23, 1, 0.32, 1] as const;

function TiltCard({ children }: { children: React.ReactNode }) {
  const cardRef = useRef<HTMLDivElement>(null);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    // Lower divisor means more tilt. 30 is subtle and elegant.
    const rotateX = -(y - centerY) / 30; 
    const rotateY = (x - centerX) / 30;
    card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02,1.02,1.02)`;
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)';
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="transition-transform duration-300 ease-out w-full"
      style={{ transformStyle: 'preserve-3d' }}
    >
      {children}
    </div>
  );
}

export default function ProductGrid({ products }: { products: any[] }) {
  const shouldReduceMotion = useReducedMotion();

  if (!products || products.length === 0) {
    return <p className="text-center font-sans text-ink/50 py-12">No hay productos disponibles ahora mismo.</p>;
  }

  return (
    <motion.div 
      className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.1 } }
      }}
    >
      {products.map((item: any, idx: number) => (
        <motion.div 
          key={item.id}
          className="w-full group cursor-pointer block"
          variants={{
            hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 30 },
            show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }
          }}
        >
          <div className="w-full flex flex-col">
            <TiltCard>
              <div className="relative overflow-hidden rounded-xl bg-paper aspect-[3/4] mb-4 md:mb-6 shadow-[0_4px_20px_rgba(44,42,41,0.03)] group transition-shadow duration-700 hover:shadow-[0_15px_35px_rgba(44,42,41,0.1)]">
                <Link href={`/producto/${item.id}`} className="block w-full h-full relative focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none focus-visible:ring-ink/20 rounded-xl">
                  <img 
                    src={item.img || "/prod_teal.png"} 
                    alt={item.name} 
                    className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105 mix-blend-multiply" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Etiqueta de Urgencia / Scarcity */}
                  {item.stock && item.stock <= 3 ? (
                    <div className="absolute top-3 md:top-4 left-3 md:left-4 z-10 px-3 py-1.5 bg-burgundy/95 backdrop-blur-md text-white text-[8px] md:text-[9px] font-sans font-bold tracking-[0.2em] uppercase rounded shadow-sm pointer-events-none">
                      Últimas {item.stock} ud.
                    </div>
                  ) : item.isNew ? (
                    <div className="absolute top-3 md:top-4 left-3 md:left-4 z-10 px-3 py-1.5 bg-accent/95 backdrop-blur-md text-white text-[8px] md:text-[9px] font-sans font-bold tracking-[0.2em] uppercase rounded shadow-sm pointer-events-none">
                      Novedad
                    </div>
                  ) : null}
                </Link>
                
                <button 
                  className="absolute top-4 right-4 z-10 w-10 h-10 bg-base/80 backdrop-blur-md rounded-full flex items-center justify-center text-ink/40 hover:text-burgundy opacity-0 group-hover:opacity-100 transition-all duration-500 shadow-[0_4px_12px_rgba(44,42,41,0.05)] hover:bg-base focus-visible:opacity-100 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none focus-visible:ring-ink/20 active:scale-[0.92]"
                  aria-label="Añadir a la lista de deseos"
                >
                  <span className="material-symbols-outlined text-[20px]">favorite</span>
                </button>

                <div className="absolute bottom-4 left-0 w-full px-4 z-10 opacity-0 md:group-hover:opacity-100 translate-y-4 md:group-hover:translate-y-0 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] flex justify-center pointer-events-none md:pointer-events-auto">
                  {item.isAtelier ? (
                    <motion.button 
                      onClick={(e) => { e.preventDefault(); useAtelierStore.getState().openModal(item.name); }}
                      className="w-full bg-base/90 backdrop-blur-md py-3 text-[11px] font-sans text-ink font-semibold tracking-widest uppercase rounded-lg shadow-[0_8px_20px_rgba(44,42,41,0.08)] hover:bg-base transition-colors text-center focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none focus-visible:ring-ink/20 pointer-events-auto"
                      whileTap={{ scale: 0.97 }}
                    >
                      Cita Atelier
                    </motion.button>
                  ) : (
                    <motion.button 
                      onClick={(e) => { e.preventDefault(); useWaaSStoreBase.getState().addItemToCart(item); }}
                      className="w-full bg-base/90 backdrop-blur-md py-3 text-[11px] font-sans text-ink font-semibold tracking-widest uppercase rounded-lg shadow-[0_8px_20px_rgba(44,42,41,0.08)] hover:bg-base transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none focus-visible:ring-ink/20 pointer-events-auto"
                      whileTap={{ scale: 0.97 }}
                    >
                      Añadir a la cesta
                    </motion.button>
                  )}
                </div>
              </div>
            </TiltCard>
            
            <Link href={`/producto/${item.id}`} className="flex flex-col items-center text-center px-1 md:px-2 focus-visible:ring-2 focus-visible:ring-offset-4 focus-visible:outline-none focus-visible:ring-ink/20 rounded mt-4">
              <h3 className="text-[16px] md:text-xl text-ink mb-1 font-serif tracking-wide transition-colors group-hover:text-accent">{item.name}</h3>
              <p className="font-sans text-[11px] text-ink/50 uppercase tracking-widest mb-2">{item.mat || "Algodón & Lino"}</p>
              <p className="font-sans text-[13px] md:text-[15px] text-ink tracking-wider font-medium">€{item.price}</p>
            </Link>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
