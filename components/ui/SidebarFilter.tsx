"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

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

  const FilterContent = () => (
    <div className="flex flex-col gap-10">
      {/* Category Filter */}
      <div>
        <h3 className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-ink mb-6 border-b border-ink/10 pb-2">
          Categoría
        </h3>
        <ul className="space-y-2 font-sans text-[13px] text-ink/70">
          {categories.map((cat) => {
            const isActive = pathname === cat.path;
            return (
              <li key={cat.path}>
                <Link 
                  href={cat.path} 
                  onClick={() => setMobileFiltersOpen(false)}
                  className={`flex items-center min-h-[44px] transition-colors ${isActive ? 'text-ink font-semibold' : 'hover:text-ink'}`}
                >
                  {cat.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Event Filter */}
      <div>
        <h3 className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-ink mb-6 border-b border-ink/10 pb-2">
          Por Evento
        </h3>
        <ul className="space-y-2 font-sans text-[13px] text-ink/70">
          {events.map((evt) => (
            <li key={evt}>
              <label className="flex items-center gap-3 cursor-pointer group min-h-[44px]">
                <div className="w-4 h-4 border border-ink/20 rounded-sm flex items-center justify-center group-hover:border-ink/50 transition-colors"></div>
                <span className="group-hover:text-ink transition-colors">{evt}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Size Filter */}
      <div>
        <h3 className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-ink mb-6 border-b border-ink/10 pb-2">
          Talla
        </h3>
        <div className="flex flex-wrap gap-2">
          {sizes.map((size) => (
            <button 
              key={size}
              className="border border-ink/10 px-3 font-sans text-[11px] font-medium text-ink/60 hover:border-ink hover:text-ink transition-all duration-300 rounded min-w-[44px] min-h-[44px] flex items-center justify-center"
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
      <div className="md:hidden mb-6">
        <button 
          onClick={() => setMobileFiltersOpen(true)}
          className="w-full flex items-center justify-center gap-2 border border-ink/20 rounded-full font-sans text-[11px] uppercase tracking-widest text-ink hover:bg-ink hover:text-white transition-colors min-h-[44px]"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>
          Filtrar Colección
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileFiltersOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileFiltersOpen(false)}
              className="md:hidden fixed inset-0 bg-ink/20 backdrop-blur-sm z-[60]"
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="md:hidden fixed top-0 right-0 h-full w-4/5 max-w-sm bg-linen shadow-2xl z-[70] overflow-y-auto flex flex-col"
            >
              <div className="p-6 flex justify-between items-center border-b border-ink/5 bg-base sticky top-0 z-10">
                <span className="font-serif italic text-lg text-ink">Filtros</span>
                <button onClick={() => setMobileFiltersOpen(false)} className="text-ink/70 hover:text-ink min-w-[44px] min-h-[44px] flex items-center justify-center -mr-2">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
              </div>
              <div className="p-8">
                <FilterContent />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Desktop Sticky Sidebar */}
      <div className="hidden md:block sticky top-32">
        <FilterContent />
      </div>
    </>
  );
}
