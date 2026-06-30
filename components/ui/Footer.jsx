import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-ink text-base py-24 px-6">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <h2 className="font-serif text-4xl mb-6">Luna Kids</h2>
          <p className="font-sans text-[13px] text-base/60 leading-relaxed max-w-sm">
            Diseñamos y confeccionamos moda infantil desde Sevilla. Ropa cómoda, elegante y de gran calidad para los más pequeños.
          </p>
        </div>
        <div>
          <h4 className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] mb-6">Explorar</h4>
          <ul className="space-y-4 font-sans text-[13px] text-base/60">
            <li><Link href="/colecciones" className="hover:text-base transition-colors">Catálogo</Link></li>
            <li><Link href="/atelier" className="hover:text-base transition-colors">Nuestro Taller</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] mb-6">Atención</h4>
          <ul className="space-y-4 font-sans text-[13px] text-base/60">
            <li><a href="#" className="hover:text-base transition-colors">Guía de Tallas</a></li>
            <li><a href="#" className="hover:text-base transition-colors">Envíos y Devoluciones</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-[1400px] mx-auto mt-24 pt-8 border-t border-base/10 text-center font-sans text-[11px] text-base/40">
        &copy; {new Date().getFullYear()} Luna Kids. Hecho con ❤️ en Andalucía.
      </div>
    </footer>
  );
}
