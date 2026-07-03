import React from 'react';
import ProductGrid from '../../../components/ui/ProductGrid';
import { getProductsByCategory } from '../../../lib/data';

export function generateStaticParams() {
  return [
    { categoria: 'flamenca' },
    { categoria: 'batas' },
    { categoria: 'complementos' }
  ];
}

export function generateMetadata({ params }) {
  const titles = {
    flamenca: 'Trajes de Flamenca',
    batas: 'Batas y Diario',
    complementos: 'Complementos'
  };
  
  return {
    title: `${titles[params.categoria] || 'Colección'} | Luna Kids`,
  };
}

export default function CategoriaPage({ params }) {
  const products = getProductsByCategory(params.categoria);
  
  const titles = {
    flamenca: 'Trajes de Flamenca',
    batas: 'Batas y Diario',
    complementos: 'Complementos'
  };

  const catName = titles[params.categoria] || 'Colección';

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h2 className="font-serif text-2xl md:text-3xl text-ink hidden md:block">{catName}</h2>
        <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-ink/60">
          Mostrando {products.length} productos
        </p>
      </div>
      <ProductGrid products={products} />
    </div>
  );
}
