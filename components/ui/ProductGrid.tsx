"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useWaaSStoreBase } from '../../store/waasStore';

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as const }
};

export default function ProductGrid({ products }) {
  if (!products || products.length === 0) {
    return <p className="text-center font-sans text-ink/50 py-12">No hay productos disponibles ahora mismo.</p>;
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-8 items-start">
      {products.map((item) => (
        <motion.div 
          key={item.id}
          className="w-full group cursor-pointer block"
          {...fadeUp}
        >
          <div className="w-full h-full">
            <div className="aspect-[3/4] mb-4 md:mb-6 overflow-hidden relative transition-opacity duration-500 group-hover:opacity-90">
              <Link href={`/producto/${item.id}`} className="block w-full h-full">
                <div className="w-full h-full relative">
                  <img src={item.img || "/prod_teal.png"} alt={item.name} className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105 mix-blend-multiply" />
                </div>
              </Link>
              
              {/* Icono Wishlist - Aparece en hover */}
              <button 
                className="absolute top-2 right-2 md:top-4 md:right-4 z-10 min-w-[44px] min-h-[44px] bg-base rounded-full shadow-md flex items-center justify-center text-ink/40 hover:text-burgundy opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-out"
                aria-label="Añadir a la lista de deseos"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </button>

              {/* Botón Acción - Aparece en hover desde abajo */}
              <div className="absolute bottom-4 left-0 w-full px-4 z-10 opacity-0 md:group-hover:opacity-100 translate-y-4 md:group-hover:translate-y-0 transition-all duration-300 ease-out flex justify-center">
                {item.isAtelier ? (
                  <a 
                    href={`https://wa.me/34619172134?text=${encodeURIComponent(`Hola, estoy interesada en el servicio Atelier para el artículo: ${item.name}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center w-full bg-base/95 backdrop-blur py-3 text-[10px] font-sans font-bold tracking-[0.2em] uppercase text-ink hover:bg-ink hover:text-base border border-ink/10 rounded shadow-lg transition-colors"
                  >
                    Conserje VIP
                  </a>
                ) : (
                  <button 
                    onClick={(e) => { e.preventDefault(); useWaaSStoreBase.getState().addItemToCart(item); }}
                    className="w-full bg-base/95 backdrop-blur py-3 text-[10px] font-sans font-bold tracking-[0.2em] uppercase text-ink hover:bg-accent hover:text-ink rounded shadow-lg transition-colors"
                  >
                    Añadir a la cesta
                  </button>
                )}
              </div>
            </div>
            
            <Link href={`/producto/${item.id}`} className="flex flex-col items-center text-center px-1 md:px-2">
              <h3 className="font-serif text-[15px] md:text-2xl text-ink mb-1 md:mb-2 font-medium tracking-wide">{item.name}</h3>
              <p className="font-sans text-[11px] md:text-[13px] text-ink/60 uppercase tracking-[0.2em] mb-1.5 md:mb-2">{item.mat || "Algodón & Lino"}</p>
              <p className="font-sans text-[13px] md:text-base text-ink tracking-wider">€{item.price}</p>
            </Link>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
