import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed w-full top-0 z-50 px-6 py-6 transition-all duration-300 bg-base/80 backdrop-blur-md border-b border-ink/5">
      <div className="max-w-[1400px] mx-auto flex justify-between items-center">
        <Link href="/" className="font-serif text-2xl tracking-widest uppercase text-ink">
          Luna Kids
        </Link>
        <div className="hidden md:flex gap-8 text-[11px] font-sans font-semibold tracking-[0.2em] uppercase text-ink/70">
          <Link href="/colecciones" className="hover:text-ink transition-colors">Colección</Link>
          <Link href="/atelier" className="hover:text-ink transition-colors">El Taller</Link>
          <Link href="/ceremonia" className="hover:text-ink transition-colors">Ceremonia</Link>
        </div>
        <div className="flex gap-4">
          <button className="text-[11px] font-sans font-semibold tracking-[0.2em] uppercase text-ink hover:text-accent transition-colors">
            Cesta (0)
          </button>
        </div>
      </div>
    </nav>
  );
}
