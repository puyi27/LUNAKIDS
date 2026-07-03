import React from 'react';
import ProductDetailUI from '../../../components/ui/ProductDetailUI';
import { getProductById } from '../../../lib/data';

export async function generateMetadata({ params }) {
  const product = getProductById(params.id);
  if (!product) {
    return { title: 'Producto no encontrado | Luna Kids' };
  }
  return {
    title: `${product.name} | Luna Kids`,
    description: product.description,
  };
}

export default function ProductPage({ params }) {
  const product = getProductById(params.id);

  if (!product) {
    return (
      <div className="pt-32 min-h-[60vh] flex items-center justify-center font-sans text-ink/60">
        Lo sentimos, el producto no existe o ya no está disponible.
      </div>
    );
  }

  // Mapeamos el campo description a desc para ProductDetailUI
  const productForUI = { ...product, desc: product.description };

  return <ProductDetailUI product={productForUI} />;
}
