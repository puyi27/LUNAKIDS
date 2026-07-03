import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-base border-t border-ink/5 text-ink py-8 px-6">
      <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">
        <div className="col-span-2 md:col-span-1 flex flex-col justify-center">
          <img src="/logo_final.png" alt="Luna Kids" className="h-10 md:h-12 w-auto object-contain mix-blend-multiply opacity-80 mb-3" />
          <p className="font-sans text-[11px] text-ink/50 hidden md:block leading-relaxed">
            Diseñamos y confeccionamos moda infantil clásica desde Sevilla.
          </p>
        </div>
        <div>
          <h4 className="font-sans text-[9px] font-semibold uppercase tracking-[0.2em] mb-3">Explorar</h4>
          <ul className="space-y-2 font-sans text-[11px] text-ink/60">
            <li><Link href="/coleccion" className="hover:text-ink transition-colors">Catálogo</Link></li>
            <li><Link href="/" className="hover:text-ink transition-colors">Nuestro Taller</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-sans text-[9px] font-semibold uppercase tracking-[0.2em] mb-3">Atención</h4>
          <ul className="space-y-2 font-sans text-[11px] text-ink/60">
            <li><a href="#" className="hover:text-ink transition-colors">Tallas</a></li>
            <li><a href="#" className="hover:text-ink transition-colors">Envíos</a></li>
          </ul>
        </div>
        <div className="col-span-2 md:col-span-1 mt-4 md:mt-0">
          <h4 className="font-sans text-[9px] font-semibold uppercase tracking-[0.2em] mb-3">Síguenos</h4>
          <div className="flex gap-4 font-sans text-[11px] text-ink/60">
            <a href="https://www.instagram.com/lunakidsmoda/?hl=es" target="_blank" rel="noopener noreferrer" className="hover:text-ink transition-colors">Instagram</a>
            <a href="https://www.facebook.com/ModainfantilLunaKids/?locale=es_ES" target="_blank" rel="noopener noreferrer" className="hover:text-ink transition-colors">Facebook</a>
            <a href="https://wa.me/34619172134" target="_blank" rel="noopener noreferrer" className="hover:text-ink transition-colors">WhatsApp</a>
          </div>
        </div>
      </div>
      <div className="max-w-[1400px] mx-auto mt-8 pt-4 border-t border-ink/5 flex flex-col md:flex-row justify-between items-center gap-2 font-sans text-[9px] text-ink/40 uppercase tracking-[0.1em]">
        <span>&copy; {new Date().getFullYear()} Luna Kids.</span>
        <span>Hecho en Andalucía.</span>
      </div>
    </footer>
  );
}
