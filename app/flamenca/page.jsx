import React from 'react';
import ProductGrid from '../../components/ui/ProductGrid';
import { getProductsByCategory } from '../../lib/data';

export const metadata = {
  title: 'Moda Flamenca Infantil | Luna Kids',
  description: 'Trajes de flamenca artesanales para niñas. Tradición andaluza y confección a medida.',
};

export default function FlamencaPage() {
  const products = getProductsByCategory('flamenca');

  return (
    <div className="pt-32 pb-24 bg-base min-h-screen">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-sans text-[11px] uppercase tracking-[0.2em] font-semibold text-accent mb-4">Tradición del Sur</p>
          <h1 className="text-4xl md:text-6xl font-serif text-ink italic mb-6">Trajes de Flamenca</h1>
          <p className="font-sans text-ink/70 max-w-2xl mx-auto text-[15px] leading-relaxed">
            La Feria y el Rocío merecen ser vividos con la máxima elegancia. Diseñamos trajes de flamenca cómodos, 
            con tiras bordadas, madroños y tejidos ligeros para que bailen y jueguen sin parar.
          </p>
        </div>
        
        <ProductGrid products={products} />
      </div>
    </div>
  );
}
