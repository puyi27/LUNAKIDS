"use client";

import React from 'react';
import Link from 'next/link';
import { useWaaSStoreBase } from '../../store/waasStore';

export default function ProductGrid({ products }: { products: any[] }) {
  if (!products || products.length === 0) {
    return <p className="text-center font-sans text-ink/50 py-12">No hay productos disponibles ahora mismo.</p>;
  }

  return (
    <div className="columns-2 lg:columns-3 xl:columns-4 gap-4 md:gap-8">
      {products.map((item: any) => (
        <div 
          key={item.id}
          className="w-full break-inside-avoid mb-4 md:mb-8 group cursor-pointer block animate-fade-in-up"
        >
          <div className="w-full h-full">
            <div className="relative overflow-hidden rounded-xl bg-paper mb-4 md:mb-6 shadow-[0_4px_20px_rgba(44,42,41,0.03)] group transition-shadow duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] hover:shadow-[0_12px_30px_rgba(44,42,41,0.08)]">
              <Link href={`/producto/${item.id}`} className="block w-full h-full relative focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none focus-visible:ring-ink/20 rounded-xl">
                <img 
                  src={item.img || "/prod_teal.png"} 
                  alt={item.name} 
                  className="w-full h-auto object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105 mix-blend-multiply" 
                />
                <div className="absolute inset-0 bg-ink/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </Link>
              
              <button 
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-base/80 backdrop-blur-md rounded-full flex items-center justify-center text-ink/40 hover:text-burgundy opacity-0 group-hover:opacity-100 transition-all duration-500 shadow-[0_4px_12px_rgba(44,42,41,0.05)] hover:bg-base focus-visible:opacity-100 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none focus-visible:ring-ink/20 active:scale-[0.92]"
                aria-label="Añadir a la lista de deseos"
              >
                <span className="material-symbols-outlined text-[20px]">favorite</span>
              </button>

              <div className="absolute bottom-4 left-0 w-full px-4 z-10 opacity-0 md:group-hover:opacity-100 translate-y-4 md:group-hover:translate-y-0 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] flex justify-center">
                {item.isAtelier ? (
                  <a 
                    href={`https://wa.me/34619172134?text=${encodeURIComponent(`Hola, estoy interesada en el servicio Atelier para el artículo: ${item.name}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-base/90 backdrop-blur-md py-3 text-[11px] font-sans text-ink font-semibold tracking-widest uppercase rounded-lg shadow-[0_8px_20px_rgba(44,42,41,0.08)] hover:bg-base transition-colors text-center focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none focus-visible:ring-ink/20 active:scale-[0.98]"
                  >
                    Conserje VIP
                  </a>
                ) : (
                  <button 
                    onClick={(e) => { e.preventDefault(); useWaaSStoreBase.getState().addItemToCart(item); }}
                    className="w-full bg-base/90 backdrop-blur-md py-3 text-[11px] font-sans text-ink font-semibold tracking-widest uppercase rounded-lg shadow-[0_8px_20px_rgba(44,42,41,0.08)] hover:bg-base transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none focus-visible:ring-ink/20 active:scale-[0.98]"
                  >
                    Añadir a la cesta
                  </button>
                )}
              </div>
            </div>
            
            <Link href={`/producto/${item.id}`} className="flex flex-col items-center text-center px-1 md:px-2 focus-visible:ring-2 focus-visible:ring-offset-4 focus-visible:outline-none focus-visible:ring-ink/20 rounded">
              <h3 className="text-[16px] md:text-xl text-ink mb-1 font-serif tracking-wide">{item.name}</h3>
              <p className="font-sans text-[11px] text-ink/60 uppercase tracking-widest mb-2">{item.mat || "Algodón & Lino"}</p>
              <p className="font-sans text-[13px] md:text-[15px] text-ink tracking-wider">€{item.price}</p>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
