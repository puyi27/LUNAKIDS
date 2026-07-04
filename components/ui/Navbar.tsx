"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useWaaSStore, useWaaSStoreBase } from '../../store/waasStore';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const cartItems = useWaaSStore((state: any) => state.items, []);
  const setCartOpen = useWaaSStoreBase((state: any) => state.setCartOpen);
  const itemCount = cartItems ? cartItems.length : 0;
  const [hoveredMenu, setHoveredMenu] = useState(null);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    {
      id: 'coleccion',
      title: 'COLECCIÓN',
      href: '/coleccion',
      submenus: [
        { title: 'Ver todo', href: '/coleccion' },
        { title: 'Novedades', href: '/coleccion?sort=newest' },
      ]
    },
    {
      id: 'flamenca',
      title: 'FLAMENCA',
      href: '/coleccion/flamenca',
      submenus: [
        { title: 'Trajes de Flamenca', href: '/coleccion/flamenca' },
        { title: 'Mantoncillos y Flores', href: '/coleccion/flamenca?type=accesorios' },
      ]
    },
    {
      id: 'batas',
      title: 'BATAS',
      href: '/coleccion/batas',
      submenus: [
        { title: 'Batas de Plumeti', href: '/coleccion/batas?type=plumeti' },
        { title: 'Batas de Vichy', href: '/coleccion/batas?type=vichy' },
      ]
    },
    {
      id: 'complementos',
      title: 'COMPLEMENTOS',
      href: '/coleccion/complementos',
      submenus: [
        { title: 'Lazos y Diademas', href: '/coleccion/complementos?type=pelo' },
        { title: 'Calcetería', href: '/coleccion/complementos?type=calcetines' },
      ]
    },
    {
      id: 'taller',
      title: 'EL TALLER',
      href: '/taller',
      submenus: null
    }
  ];

  return (
    <nav className="fixed w-full top-0 z-50 flex flex-col transition-all duration-300">
      <div className={`w-full bg-softBeige border-b border-ink/5 transition-all duration-300 ${scrolled ? 'h-0 overflow-hidden' : 'h-8'}`}>
        <div className="max-w-[1400px] mx-auto px-4 h-full flex justify-between items-center text-[10px] font-sans uppercase tracking-widest text-ink/70">
          <span className="hidden md:block">Envíos gratuitos a Península desde 100€</span>
          <span className="md:hidden">Envíos gratuitos &gt; 100€</span>
          <div className="flex gap-4">
            <Link href="/ayuda" className="hover:text-accent transition-colors">Ayuda</Link>
            <Link href="/cuenta" className="hover:text-accent transition-colors">Mi Cuenta</Link>
          </div>
        </div>
      </div>

      <div className={`w-full bg-linen border-b border-ink/10 relative transition-all duration-300 ${scrolled ? 'py-2 shadow-md' : 'pt-4 pb-2'}`}>
        <div className="max-w-[1400px] mx-auto px-4 flex items-center justify-between relative">
          
          <div className="w-1/3 flex items-center justify-start">
            <button 
              className="md:hidden text-ink min-w-[44px] min-h-[44px] flex items-center justify-center -ml-2"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Abrir menú"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
            
            <div className="hidden md:flex gap-8 text-[10px] lg:text-[11px] font-sans font-semibold tracking-[0.2em] text-ink/80">
              {menuItems.slice(0, 3).map((item) => (
                <div 
                  key={item.id} 
                  className="relative group py-4"
                  onMouseEnter={() => setHoveredMenu(item.id)}
                  onMouseLeave={() => setHoveredMenu(null)}
                >
                  <Link href={item.href} className="hover:text-accent transition-colors">
                    {item.title}
                  </Link>
                  <>
                    {hoveredMenu === item.id && item.submenus && (
                      <div 
                        className="absolute top-full left-0 mt-0 w-48 bg-base border border-ink/10 shadow-lg py-3 flex flex-col z-50 rounded-b-md"
                      >
                        {item.submenus.map((sub, idx) => (
                          <Link key={idx} href={sub.href} className="px-5 py-2 text-[10px] text-ink/70 hover:text-accent hover:bg-linen transition-colors">
                            {sub.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                </div>
              ))}
            </div>
          </div>

          <div className="w-1/3 flex justify-center relative h-16">
            <Link href="/" className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center group z-50 md:-mt-8 -mt-6">
              <div 
                className={`rounded-full overflow-hidden bg-base border border-ink/5 shadow-md flex items-center justify-center relative transition-all duration-300 ${
                  scrolled 
                    ? 'w-16 h-16 md:w-20 md:h-20 mt-6 md:mt-8' 
                    : 'w-28 h-28 md:w-36 md:h-36'
                }`} 
              >
                <img 
                  src="/logo_final.png" 
                  alt="Medallón Luna Kids" 
                  className="w-full h-full object-cover scale-[1.15] mix-blend-multiply group-hover:scale-[1.25] transition-transform duration-500 rounded-full" 
                />
              </div>
            </Link>
          </div>

          <div className="w-1/3 flex items-center justify-end gap-6">
            <div className="hidden md:flex gap-8 text-[10px] lg:text-[11px] font-sans font-semibold tracking-[0.2em] text-ink/80 mr-6">
              {menuItems.slice(3).map((item) => (
                <div 
                  key={item.id} 
                  className="relative group py-4"
                  onMouseEnter={() => setHoveredMenu(item.id)}
                  onMouseLeave={() => setHoveredMenu(null)}
                >
                  <Link href={item.href} className="hover:text-accent transition-colors">
                    {item.title}
                  </Link>
                  <>
                    {hoveredMenu === item.id && item.submenus && (
                      <div 
                        className="absolute top-full right-0 mt-0 w-48 bg-base border border-ink/10 shadow-lg py-3 flex flex-col z-50 rounded-b-md"
                      >
                        {item.submenus.map((sub, idx) => (
                          <Link key={idx} href={sub.href} className="px-5 py-2 text-[10px] text-ink/70 hover:text-accent hover:bg-linen transition-colors text-right">
                            {sub.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                </div>
              ))}
            </div>

            <button className="hidden md:block hover:text-accent transition-colors" aria-label="Buscar">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </button>
            <button onClick={() => setCartOpen(true)} className="text-accent hover:text-ink transition-colors flex items-center gap-1.5" aria-label="Cesta">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
              <span className="text-[11px] font-sans font-bold tracking-wider">{itemCount}</span>
            </button>
          </div>
        </div>
      </div>

      <>
        {isOpen && (
          <>
            <div
              onClick={() => setIsOpen(false)}
              className="md:hidden fixed inset-0 bg-ink/20 backdrop-blur-sm z-[60]"
            />
            <div 
              className="md:hidden fixed top-0 left-0 h-full w-4/5 max-w-sm bg-linen shadow-2xl z-[70] overflow-y-auto flex flex-col transition-transform"
            >
              <div className="p-6 flex justify-end">
                <button onClick={() => setIsOpen(false)} className="p-2 -mr-2 text-ink/70 hover:text-ink">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="px-8 pb-8 flex flex-col gap-6 font-sans text-ink">
                {menuItems.filter(item => item.id !== 'taller' && item.id !== 'atelier').map((item) => (
                  <div key={item.id} className="flex flex-col border-b border-ink/5 pb-4">
                    <Link href={item.href} onClick={() => setIsOpen(false)} className="py-2 text-[13px] font-bold tracking-[0.15em] uppercase flex items-center justify-between">
                      {item.title}
                    </Link>
                    {item.submenus && (
                      <div className="mt-3 flex flex-col gap-3 pl-4 border-l border-ink/10">
                        {item.submenus.map((sub, idx) => (
                          <Link key={idx} href={sub.href} onClick={() => setIsOpen(false)} className="py-2 text-[11px] text-ink/70 tracking-widest hover:text-accent">
                            {sub.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="mt-auto p-8 bg-softBeige/50 border-t border-ink/5">
                <Link href="/cuenta" onClick={() => setIsOpen(false)} className="block py-3 text-[11px] font-bold tracking-widest uppercase text-ink/70 hover:text-ink">Mi Cuenta</Link>
                <Link href="/ayuda" onClick={() => setIsOpen(false)} className="block py-3 text-[11px] font-bold tracking-widest uppercase text-ink/70 hover:text-ink">Ayuda / FAQ</Link>
              </div>
            </div>
          </>
        )}
      </>
    </nav>
  );
}
