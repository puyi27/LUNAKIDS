"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Marquee from './Marquee';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 flex flex-col transition-all duration-300">
      <Marquee />
      <div className="w-full bg-base/85 md:bg-base/95 backdrop-blur-lg md:backdrop-blur-md border-b border-ink/5">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 h-16 md:h-20 flex justify-between items-center">
          
          {/* Hamburger Menu (Mobile Only) */}
          <button 
            className="md:hidden p-2 text-ink"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Abrir menú"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>

          {/* Left Navigation (Desktop Only) */}
          <div className="hidden md:flex flex-1 gap-8 text-[11px] font-sans font-semibold tracking-[0.2em] uppercase text-ink/70">
            <Link href="/coleccion" className="hover:text-ink transition-colors">Colección</Link>
            <Link href="/flamenca" className="hover:text-ink transition-colors">Flamenca</Link>
            <Link href="/batas" className="hover:text-ink transition-colors">Batas</Link>
            <Link href="/complementos" className="hover:text-ink transition-colors">Complementos</Link>
          </div>
          
          {/* Center Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center justify-center">
            <img 
              src="/logo_final.png" 
              alt="Luna Kids Moda Infantil" 
              className="h-14 md:h-20 w-auto object-contain mix-blend-multiply" 
            />
          </Link>

          {/* Right Icons */}
          <div className="flex flex-1 justify-end gap-4 md:gap-6 text-ink/70">
            <button className="hidden md:block hover:text-accent transition-colors" aria-label="Buscar">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </button>
            <button className="hidden sm:block hover:text-burgundy transition-colors" aria-label="Lista de deseos">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
            </button>
            <button className="hover:text-accent transition-colors flex items-center gap-1.5" aria-label="Cesta">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
              <span className="text-[10px] font-sans font-semibold tracking-wider">0</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-base border-b border-ink/5 shadow-xl py-6 px-6 flex flex-col gap-6 text-[13px] font-sans font-semibold tracking-[0.15em] uppercase text-ink">
          <Link href="/coleccion" onClick={() => setIsOpen(false)}>Colección</Link>
          <div className="w-full h-px bg-ink/5"></div>
          <Link href="/flamenca" onClick={() => setIsOpen(false)}>Flamenca</Link>
          <div className="w-full h-px bg-ink/5"></div>
          <Link href="/batas" onClick={() => setIsOpen(false)}>Batas</Link>
          <div className="w-full h-px bg-ink/5"></div>
          <Link href="/complementos" onClick={() => setIsOpen(false)}>Complementos</Link>
          
          <div className="pt-4 flex gap-6 mt-4">
            <a href="https://www.instagram.com/lunakidsmoda/?hl=es" target="_blank" rel="noopener noreferrer" className="text-ink/60 hover:text-ink">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
            </a>
            <a href="https://www.facebook.com/ModainfantilLunaKids/?locale=es_ES" target="_blank" rel="noopener noreferrer" className="text-ink/60 hover:text-ink">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
