import React from 'react';
import ProductGrid from '../../components/ui/ProductGrid';
import { getProductsByCategory } from '../../lib/data';

export const metadata = {
  title: 'Batas Infantiles | Luna Kids',
  description: 'Batas y vestidos para el día a día. Comodidad y diseño artesanal.',
};

export default function BatasPage() {
  const products = getProductsByCategory('batas');

  return (
    <div className="pt-32 pb-24 bg-base min-h-screen">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-sans text-[11px] uppercase tracking-[0.2em] font-semibold text-accent mb-4">El día a día</p>
          <h1 className="text-4xl md:text-6xl font-serif text-ink italic mb-6">Batas y Vestidos</h1>
          <p className="font-sans text-ink/70 max-w-2xl mx-auto text-[15px] leading-relaxed">
            Nuestra colección más versátil. Diseñada para que las más pequeñas vayan impecables en su día a día, 
            con tejidos naturales como el vichy y el plumeti que garantizan libertad de movimiento.
          </p>
        </div>
        
        <ProductGrid products={products} />
      </div>
    </div>
  );
}
