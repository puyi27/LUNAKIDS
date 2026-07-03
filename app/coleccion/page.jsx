import React from 'react';
import ProductGrid from '../../components/ui/ProductGrid';
import { getProductsByCategory } from '../../lib/data';

export const metadata = {
  title: 'Colección | Luna Kids',
  description: 'Descubre nuestra colección completa de moda infantil artesanal, batas, y trajes de flamenca.',
};

export default function ColeccionPage() {
  const products = getProductsByCategory('coleccion');

  return (
    <div className="pt-32 pb-24 bg-base min-h-screen">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-sans text-[11px] uppercase tracking-[0.2em] font-semibold text-accent mb-4">Catálogo Completo</p>
          <h1 className="text-4xl md:text-6xl font-serif text-ink italic mb-6">Nuestra Colección</h1>
          <p className="font-sans text-ink/70 max-w-2xl mx-auto text-[15px] leading-relaxed">
            Cada pieza de Luna Kids está diseñada con el corazón y confeccionada a mano en nuestro taller de Sevilla. 
            Tejidos cuidadosamente seleccionados para que los más pequeños vistan con estilo sin renunciar a la comodidad.
          </p>
        </div>
        
        <ProductGrid products={products} />
      </div>
    </div>
  );
}
