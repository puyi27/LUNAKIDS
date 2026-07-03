"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

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

  return (
    <div className="flex flex-col gap-10">
      
      {/* Category Filter */}
      <div>
        <h3 className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-ink mb-6 border-b border-ink/10 pb-2">
          Categoría
        </h3>
        <ul className="space-y-4 font-sans text-[13px] text-ink/70">
          {categories.map((cat) => {
            const isActive = pathname === cat.path;
            return (
              <li key={cat.path}>
                <Link 
                  href={cat.path} 
                  className={`transition-colors ${isActive ? 'text-ink font-semibold' : 'hover:text-ink'}`}
                >
                  {cat.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Event Filter (Mock Visual) */}
      <div>
        <h3 className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-ink mb-6 border-b border-ink/10 pb-2">
          Por Evento
        </h3>
        <ul className="space-y-4 font-sans text-[13px] text-ink/70">
          {events.map((evt) => (
            <li key={evt}>
              <label className="flex items-center gap-3 cursor-pointer group">
                <div className="w-4 h-4 border border-ink/20 rounded-sm flex items-center justify-center group-hover:border-ink/50 transition-colors"></div>
                <span className="group-hover:text-ink transition-colors">{evt}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Size Filter (Mock Visual) */}
      <div>
        <h3 className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-ink mb-6 border-b border-ink/10 pb-2">
          Talla
        </h3>
        <div className="flex flex-wrap gap-2">
          {sizes.map((size) => (
            <button 
              key={size}
              className="border border-ink/10 py-2 px-3 font-sans text-[11px] font-medium text-ink/60 hover:border-ink hover:text-ink transition-all duration-300 rounded"
            >
              {size}
            </button>
          ))}
        </div>
      </div>

    </div>
  );
}
