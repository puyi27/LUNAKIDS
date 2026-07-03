import React from 'react';
import ProductGrid from '../../components/ui/ProductGrid';
import { getProductsByCategory } from '../../lib/data';

export default function ColeccionPage() {
  const products = getProductsByCategory('coleccion');

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-ink/60">
          Mostrando todos los productos ({products.length})
        </p>
      </div>
      <ProductGrid products={products} />
    </div>
  );
}
