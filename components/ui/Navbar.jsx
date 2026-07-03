"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useCartStore } from '../../store/cartStore';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { getItemCount, openCart } = useCartStore();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="fixed w-full top-0 z-50 flex flex-col transition-all duration-300 shadow-sm">
      {/* Tier 1: Top Bar (Soft Beige) */}
      <div className="w-full bg-softBeige border-b border-ink/5">
        <div className="max-w-[1400px] mx-auto px-4 h-8 flex justify-between items-center text-[10px] font-sans uppercase tracking-widest text-ink/70">
          <span className="hidden md:block">Envíos gratuitos a Península desde 100€</span>
          <span className="md:hidden">Envíos gratuitos &gt; 100€</span>
          <div className="flex gap-4">
            <Link href="/ayuda" className="hover:text-accent transition-colors">Ayuda</Link>
            <Link href="/cuenta" className="hover:text-accent transition-colors">Mi Cuenta</Link>
          </div>
        </div>
      </div>

      {/* Tier 2: Main Bar (Linen Background) */}
      <div className="w-full bg-linen border-b border-ink/10 relative">
        <div className="max-w-[1400px] mx-auto px-4 pt-6 pb-4 flex flex-col items-center relative">
          
          {/* Absolute left/right for mobile icons & desktop actions */}
          <div className="absolute top-6 left-4 md:left-6">
            <button 
              className="md:hidden p-2 text-ink"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Abrir menú"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>

          <div className="absolute top-6 right-4 md:right-6 flex gap-4 text-ink">
            <button className="hidden md:block hover:text-accent transition-colors" aria-label="Buscar">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </button>
            <button onClick={openCart} className="text-accent hover:text-ink transition-colors flex items-center gap-1.5" aria-label="Cesta">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
              <span className="text-[11px] font-sans font-bold tracking-wider">{mounted ? getItemCount() : 0}</span>
            </button>
          </div>
          
          {/* Center Logo Medallion */}
          <Link href="/" className="flex flex-col items-center justify-center -mt-2 group">
            <div className="w-24 h-24 md:w-32 md:h-32 mb-2 relative overflow-hidden flex items-center justify-center">
              <img 
                src="/logo_final.png" 
                alt="Medallón Luna Kids" 
                className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500" 
              />
            </div>
            <h1 className="font-serif text-2xl md:text-3xl text-burgundy tracking-wide leading-none">LUNA KIDS</h1>
            <span className="font-sans text-[9px] md:text-[10px] uppercase tracking-[0.4em] font-semibold text-burgundy/80 mt-2">Moda Infantil</span>
          </Link>

          {/* Navigation Row (Desktop) */}
          <div className="hidden md:flex gap-10 mt-8 text-[11px] font-sans font-semibold tracking-[0.2em] uppercase text-ink/80">
            <Link href="/coleccion" className="hover:text-accent transition-colors">Colección</Link>
            <Link href="/coleccion/flamenca" className="hover:text-accent transition-colors">Flamenca</Link>
            <Link href="/coleccion/batas" className="hover:text-accent transition-colors">Batas</Link>
            <Link href="/coleccion/complementos" className="hover:text-accent transition-colors">Complementos</Link>
            <Link href="/taller" className="hover:text-accent transition-colors">El Taller</Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-linen border-b border-ink/5 shadow-xl py-6 px-6 flex flex-col gap-6 text-[13px] font-sans font-semibold tracking-[0.15em] uppercase text-ink">
          <Link href="/coleccion" onClick={() => setIsOpen(false)}>Colección</Link>
          <div className="w-full h-px bg-ink/10"></div>
          <Link href="/coleccion/flamenca" onClick={() => setIsOpen(false)}>Flamenca</Link>
          <div className="w-full h-px bg-ink/10"></div>
          <Link href="/coleccion/batas" onClick={() => setIsOpen(false)}>Batas</Link>
          <div className="w-full h-px bg-ink/10"></div>
          <Link href="/coleccion/complementos" onClick={() => setIsOpen(false)}>Complementos</Link>
          <div className="w-full h-px bg-ink/10"></div>
          <Link href="/taller" onClick={() => setIsOpen(false)}>El Taller</Link>
        </div>
      )}
    </nav>
  );
}
