"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Drawer } from 'vaul';
import { motion } from 'framer-motion';

const categories = [
  { name: 'Todo', path: '/coleccion' },
  { name: 'Trajes de Flamenca', path: '/coleccion/flamenca' },
  { name: 'Batas y Diario', path: '/coleccion/batas' },
  { name: 'Complementos', path: '/coleccion/complementos' },
];

const events = [
  'El Rocío', 'Comunión', 'Bautizo', 'Feria', 'Paseo'
];

const sizes = [
  '2 Años', '4 Años', '6 Años', '8 Años', '10 Años', '12 Años'
];

export default function SidebarFilter() {
  const pathname = usePathname();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const FilterContent = ({ isMobile = false }: { isMobile?: boolean }) => (
    <div className="flex flex-col gap-10">
      {/* Category Filter */}
      <div>
        <h3 className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-ink mb-5 pb-2 flex items-center gap-2">
          Categoría
        </h3>
        <ul className="space-y-1 font-sans text-[13px] text-ink/70">
          {categories.map((cat) => {
            const isActive = pathname === cat.path;
            return (
              <li key={cat.path}>
                <Link 
                  href={cat.path} 
                  onClick={() => isMobile && setMobileFiltersOpen(false)}
                  className={`flex items-center justify-between min-h-[44px] px-3 py-1 rounded-lg transition-all duration-300 ${isActive ? 'bg-ink/5 text-ink font-semibold' : 'hover:bg-ink/5 hover:text-ink'}`}
                >
                  {cat.name}
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-terracotta"></span>}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Event Filter */}
      <div>
        <h3 className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-ink mb-5 pb-2">
          Por Evento
        </h3>
        <ul className="space-y-1 font-sans text-[13px] text-ink/70">
          {events.map((evt) => (
            <li key={evt}>
              <label className="flex items-center justify-between cursor-pointer group min-h-[44px] px-3 py-1 rounded-lg hover:bg-ink/5 transition-colors">
                <span className="group-hover:text-ink transition-colors">{evt}</span>
                <div className="w-4 h-4 border border-ink/20 rounded-sm flex items-center justify-center group-hover:border-ink/50 transition-colors relative">
                   <div className="w-2 h-2 bg-accent rounded-[1px] opacity-0 scale-0 transition-all duration-200 group-active:opacity-100 group-active:scale-100" />
                </div>
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Size Filter */}
      <div>
        <h3 className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-ink mb-5 pb-2">
          Talla
        </h3>
        <div className="flex flex-wrap gap-2 px-1">
          {sizes.map((size) => (
            <button 
              key={size}
              className="border border-ink/10 px-4 font-sans text-[11px] font-medium text-ink/60 hover:border-ink hover:text-ink hover:bg-ink/5 active:scale-95 transition-all duration-300 rounded-md min-h-[40px] flex items-center justify-center shadow-sm"
            >
              {size}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile Filter Button */}
      <div className="md:hidden mb-8 sticky top-20 z-40">
        <motion.button 
          whileTap={{ scale: 0.96 }}
          onClick={() => setMobileFiltersOpen(true)}
          className="w-full flex items-center justify-center gap-2 bg-base/90 backdrop-blur-md border border-ink/10 shadow-lg rounded-full font-sans text-[11px] font-bold uppercase tracking-widest text-ink transition-colors min-h-[48px]"
        >
          <span className="material-symbols-outlined text-[18px]">tune</span>
          Filtros y Categorías
        </motion.button>
      </div>

      {/* Mobile Vaul Drawer (Bottom Sheet) */}
      <Drawer.Root open={mobileFiltersOpen} onOpenChange={setMobileFiltersOpen}>
        <Drawer.Portal>
          <Drawer.Overlay className="fixed inset-0 bg-ink/40 backdrop-blur-sm z-[60]" />
          <Drawer.Content className="bg-base flex flex-col rounded-t-[2rem] h-[85vh] mt-24 fixed bottom-0 left-0 right-0 z-[70] outline-none shadow-[0_-20px_50px_rgba(0,0,0,0.1)] border-t border-ink/5">
            <div className="p-4 bg-base rounded-t-[2rem] flex justify-center sticky top-0 z-20">
              <div className="w-12 h-1.5 bg-ink/20 rounded-full" />
            </div>
            
            <div className="px-6 flex justify-between items-center border-b border-ink/5 pb-4 sticky top-6 z-20 bg-base">
              <span className="font-serif text-2xl text-ink">Filtros</span>
              <button 
                onClick={() => setMobileFiltersOpen(false)} 
                className="text-ink/60 hover:text-ink bg-ink/5 hover:bg-ink/10 rounded-full p-2 active:scale-90 transition-all"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>

            <div className="p-6 overflow-y-auto flex-1">
              <FilterContent isMobile={true} />
            </div>

            <div className="p-6 bg-base border-t border-ink/5 pb-8">
               <button 
                 onClick={() => setMobileFiltersOpen(false)}
                 className="w-full bg-ink text-white min-h-[50px] rounded-full font-sans text-[11px] uppercase tracking-widest font-bold hover:bg-accent transition-colors active:scale-95"
               >
                 Aplicar filtros
               </button>
            </div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>

      {/* Desktop Sticky Sidebar */}
      <div className="hidden md:block sticky top-32 bg-base/60 backdrop-blur-xl border border-ink/5 rounded-3xl p-8 shadow-[0_8px_30px_rgba(44,42,41,0.03)]">
        <FilterContent />
      </div>
    </>
  );
}
