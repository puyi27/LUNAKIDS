"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useWaaSStore, useWaaSStoreBase } from '../../store/waasStore';

const easeOut = [0.23, 1, 0.32, 1] as const;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const cartItems = useWaaSStore((state: any) => state.items, []);
  const setCartOpen = useWaaSStoreBase((state: any) => state.setCartOpen);
  const itemCount = cartItems ? cartItems.length : 0;
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cierra el menú al cambiar de ruta
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

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
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="fixed w-full top-0 z-50 flex flex-col"
      >
        <div className={`w-full bg-linen/90 backdrop-blur-md border-b border-ink/10 relative transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${scrolled ? 'py-2 shadow-md' : 'pt-4 pb-2'}`}>
          <div className="max-w-[1400px] mx-auto px-4 flex items-center justify-between relative">
            
            {/* Menú Hamburgesa (Móvil) & Links Izquierda (PC) */}
            <div className="w-1/3 flex items-center justify-start">
              <button 
                className="md:hidden text-ink min-w-[44px] min-h-[44px] flex items-center justify-center -ml-2 active:scale-90 transition-transform duration-300"
                onClick={() => setIsOpen(true)}
                aria-label="Abrir menú"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
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
                    <AnimatePresence>
                      {hoveredMenu === item.id && item.submenus && (
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2, ease: easeOut }}
                          className="absolute top-full left-0 mt-0 w-48 bg-base/95 backdrop-blur-md border border-ink/5 shadow-xl py-3 flex flex-col z-50 rounded-b-xl"
                        >
                          {item.submenus.map((sub, idx) => (
                            <Link key={idx} href={sub.href} className="px-5 py-2.5 text-[10px] text-ink/70 hover:text-accent hover:bg-linen transition-colors">
                              {sub.title}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>

            {/* Logo Central */}
            <div className="w-1/3 flex justify-center relative h-16">
              <Link href="/" className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center group z-50 -mt-4 md:-mt-8">
                <div 
                  className={`rounded-full overflow-hidden bg-base border border-ink/5 shadow-md flex items-center justify-center relative transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${
                    scrolled 
                      ? 'w-16 h-16 md:w-20 md:h-20 mt-6 md:mt-8' 
                      : 'w-20 h-20 md:w-36 md:h-36'
                  }`} 
                >
                  <img 
                    src="/logo_final.png" 
                    alt="Medallón Luna Kids" 
                    className="w-full h-full object-cover scale-[1.15] mix-blend-multiply group-hover:scale-[1.25] transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] rounded-full" 
                  />
                </div>
              </Link>
            </div>

            {/* Links Derecha & Iconos */}
            <div className="w-1/3 flex items-center justify-end gap-6">
              <div className="hidden md:flex gap-8 text-[10px] lg:text-[11px] font-sans font-semibold tracking-[0.2em] text-ink/80 mr-6 items-center">
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
                    <AnimatePresence>
                      {hoveredMenu === item.id && item.submenus && (
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2, ease: easeOut }}
                          className="absolute top-full right-0 mt-0 w-48 bg-base/95 backdrop-blur-md border border-ink/5 shadow-xl py-3 flex flex-col z-50 rounded-b-xl"
                        >
                          {item.submenus.map((sub, idx) => (
                            <Link key={idx} href={sub.href} className="px-5 py-2.5 text-[10px] text-ink/70 hover:text-accent hover:bg-linen transition-colors text-right">
                              {sub.title}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
                
                {/* Mi Cuenta Desktop */}
                <Link href="/cuenta" className="hover:text-accent transition-colors py-4">
                  MI CUENTA
                </Link>
              </div>

              <button onClick={() => setCartOpen(true)} className="text-accent hover:text-ink transition-colors flex items-center gap-1.5 active:scale-90" aria-label="Cesta">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
                {mounted && (
                  <span className="text-[11px] font-sans font-bold tracking-wider">{itemCount}</span>
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Menú Móvil (Smooth Drawer) */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsOpen(false)}
              className="md:hidden fixed inset-0 bg-ink/40 backdrop-blur-sm z-[60]"
            />
            <motion.div 
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
              className="md:hidden fixed top-0 left-0 h-full w-[85%] max-w-sm bg-base shadow-2xl z-[70] overflow-y-auto flex flex-col border-r border-ink/5"
            >
              <div className="p-6 flex justify-between items-center border-b border-ink/5">
                <span className="font-serif text-xl italic text-ink/80">Menú</span>
                <button onClick={() => setIsOpen(false)} className="p-2 -mr-2 text-ink/50 hover:text-ink active:scale-90 transition-transform bg-ink/5 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="px-8 py-8 flex flex-col gap-6 font-sans text-ink flex-1">
                {menuItems.map((item) => (
                  <div key={item.id} className="flex flex-col border-b border-ink/5 pb-4 last:border-0">
                    <Link href={item.href} onClick={() => setIsOpen(false)} className="py-2 text-[14px] font-bold tracking-[0.15em] uppercase flex items-center justify-between group">
                      {item.title}
                      <svg className="w-4 h-4 opacity-50 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </Link>
                    {item.submenus && (
                      <div className="mt-3 flex flex-col gap-2 pl-4 border-l border-ink/10">
                        {item.submenus.map((sub, idx) => (
                          <Link key={idx} href={sub.href} onClick={() => setIsOpen(false)} className="py-2 text-[12px] text-ink/60 tracking-widest hover:text-accent transition-colors uppercase">
                            {sub.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              
              <div className="p-8 bg-ink/5 border-t border-ink/5 flex flex-col gap-4">
                <Link href="/cuenta" onClick={() => setIsOpen(false)} className="flex items-center gap-3 text-[12px] font-bold tracking-widest uppercase text-ink/80 hover:text-accent transition-colors">
                  <span className="material-symbols-outlined text-[18px]">person</span>
                  Mi Cuenta
                </Link>
                <Link href="/ayuda" onClick={() => setIsOpen(false)} className="flex items-center gap-3 text-[12px] font-bold tracking-widest uppercase text-ink/80 hover:text-accent transition-colors">
                  <span className="material-symbols-outlined text-[18px]">help</span>
                  Ayuda / Contacto
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
