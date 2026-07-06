"use client";

import React from 'react';
import { useAtelierStore } from '../../../store/atelierStore';

export default function Atelier() {
  return (
    <div className="pt-32 pb-24 md:pb-32 min-h-screen bg-base">
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* Columna Izquierda: La Historia */}
        <div className="order-2 md:order-1 flex flex-col justify-center animate-fade-in-up">
          <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-burgundy font-bold mb-4">Nuestra Historia</span>
          <h1 className="text-5xl md:text-7xl font-serif text-ink leading-tight mb-2">Hecho a mano<br/>en Sevilla.</h1>
          <p className="font-script text-4xl text-terracotta mb-8">Puntada a puntada</p>
          
          <div className="space-y-6 text-[15px] font-sans text-ink/80 leading-relaxed font-medium">
            <p>
              Luna Kids nació con una idea muy simple: recuperar la forma en la que se hacía la ropa antes. Esa ropa que duraba, que no picaba, y que pasaba de hermanos a primos.
            </p>
            <p>
              No creemos en las prisas ni en la producción masiva. Por eso, en nuestro pequeño taller andaluz, cortamos cada patrón y elegimos cada tejido pensando en las niñas que lo van a llevar. Desde el frescor del algodón para una tarde de parque, hasta la caída del lino para el día de su Primera Comunión.
            </p>
            <p>
              Ropa de niños, hecha por manos que entienden de infancia.
            </p>
          </div>

            <div className="mt-12 pt-8 border-t border-ink/10 flex flex-col md:flex-row gap-8 md:gap-12 md:items-center">
              <div className="flex gap-12">
                <div>
                  <p className="font-serif text-3xl text-ink mb-1">100%</p>
                  <p className="font-sans text-[10px] uppercase tracking-widest text-ink/50 font-semibold">Artesanal</p>
                </div>
                <div>
                  <p className="font-serif text-3xl text-ink mb-1">KM 0</p>
                  <p className="font-sans text-[10px] uppercase tracking-widest text-ink/50 font-semibold">Diseño Local</p>
                </div>
              </div>
              
              <button 
                onClick={() => useAtelierStore.getState().openModal()}
                className="bg-ink text-white font-sans text-[11px] uppercase tracking-[0.2em] font-bold py-4 px-8 rounded-xl hover:bg-accent transition-colors flex items-center gap-3 w-max"
              >
                <span className="material-symbols-outlined text-[18px]">auto_awesome</span>
                Contactar con el Taller
              </button>
            </div>
          </div>

          {/* Columna Derecha: Imagen Elegante */}
          <div className="order-1 md:order-2 h-[60vh] md:h-[80vh] w-full rounded-2xl overflow-hidden bg-[#F2EFE8] shadow-sm relative animate-fade-in-up">
            <img src="/atelier_luna.png" alt="Taller de Luna Kids" className="w-full h-full object-cover object-center opacity-90 mix-blend-multiply" />
          </div>

        </div>
      </div>
    );
  }
