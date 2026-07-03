import React from 'react';
import ProductGrid from '../../components/ui/ProductGrid';
import { getProductsByCategory } from '../../lib/data';

export const metadata = {
  title: 'Complementos Infantiles | Luna Kids',
  description: 'Lazos y complementos para el pelo artesanales.',
};

export default function ComplementosPage() {
  const products = getProductsByCategory('complementos');

  return (
    <div className="pt-32 pb-24 bg-base min-h-screen">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-sans text-[11px] uppercase tracking-[0.2em] font-semibold text-accent mb-4">El toque final</p>
          <h1 className="text-4xl md:text-6xl font-serif text-ink italic mb-6">Complementos</h1>
          <p className="font-sans text-ink/70 max-w-2xl mx-auto text-[15px] leading-relaxed">
            El detalle que marca la diferencia. Lazos de terciopelo, coleteros y diademas 
            confeccionados a mano para conjuntar a la perfección con nuestras prendas.
          </p>
        </div>
        
        <ProductGrid products={products} />
      </div>
    </div>
  );
}
