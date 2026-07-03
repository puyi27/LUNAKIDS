"use client";

import React from 'react';
import { motion } from 'framer-motion';

import { useWaaSStoreBase } from '../../store/waasStore';

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as const }
};

export default function ProductDetailUI({ product }: any) {

  if (!product) return null;

  return (
    <div className="pt-32 px-6 max-w-[1400px] mx-auto min-h-screen pb-32">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
        
        <motion.div 
          className="lg:col-span-7 aspect-[3/4] rounded-2xl overflow-hidden bg-[#F2EFE8] shadow-sm relative"
          initial="initial" animate="animate" variants={fadeUp}
        >
          <img src={product.img || "/prod_teal.png"} alt={product.name} className="w-full h-full object-cover opacity-90 mix-blend-multiply" />
        </motion.div>

        <motion.div 
          className="lg:col-span-5 flex flex-col justify-center"
          initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] as const }}
        >
          <div className="mb-6">
            <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-ink/50 font-bold border-b border-ink/10 pb-2">{product.mat || "Tejido Artesanal"}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif text-ink leading-[1.1] mb-6 tracking-tight">{product.name}</h1>
          <p className="text-3xl font-sans font-light text-ink mb-12">€{product.price}</p>
          
          <p className="text-[15px] font-sans text-ink/80 leading-[2] mb-12 font-medium">
            {product.desc || "Diseñado y confeccionado en nuestro taller de Sevilla con materiales de primera calidad."}
          </p>

          <div className="mb-12">
            <div className="flex justify-between items-center mb-6">
              <span className="font-sans text-[11px] uppercase tracking-widest text-ink font-semibold">Talla (Años)</span>
              <button className="text-[10px] uppercase tracking-widest text-ink/40 hover:text-ink transition-colors underline">Medidas del taller</button>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[2, 3, 4, 5, 6, 8, 10, 12].map(size => (
                <button key={size} className="border border-ink/10 py-4 font-sans text-xs font-medium text-ink/60 hover:border-ink hover:text-ink transition-all duration-300 rounded-lg">
                  {size}
                </button>
              ))}
            </div>
          </div>

          {product.isAtelier ? (
            <a 
              href={`https://wa.me/34619172134?text=${encodeURIComponent(`Hola, estoy interesada en el servicio Atelier para el artículo: ${product.name}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full block text-center border border-ink text-ink py-5 font-sans text-[11px] uppercase tracking-[0.2em] font-semibold rounded-full hover:bg-ink hover:text-base transition-all duration-500 ease-out shadow-sm"
            >
              Conserje Atelier
            </a>
          ) : (
            <button 
              onClick={() => useWaaSStoreBase.getState().addItemToCart(product)}
              className="w-full bg-ink text-base py-5 font-sans text-[11px] uppercase tracking-[0.2em] font-semibold rounded-full hover:bg-accent hover:text-ink transition-all duration-500 ease-out shadow-sm hover:shadow-md"
            >
              Añadir a la Cesta
            </button>
          )}
          
          <div className="mt-12 pt-8 border-t border-ink/10">
            <p className="text-[11px] font-sans text-ink/50 font-medium leading-[1.8] uppercase tracking-widest">
              Cortado y cosido a mano en Sevilla.<br/>Envío cuidado en 2-4 días laborables.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
