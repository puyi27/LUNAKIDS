import React from 'react';
import ProductDetailUI from '../../../components/ui/ProductDetailUI';
import { supabase } from '../../../lib/supabase';

// METADATA DINÁMICA (SEO)
export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { id } = resolvedParams;
  
  const { data: product } = await supabase
    .from('products')
    .select('name, desc')
    .eq('id', id)
    .single();

  if (product) {
    return {
      title: `${product.name} | Luna Kids`,
      description: product.desc,
    };
  }
  return {
    title: 'Producto | Luna Kids'
  }
}

// SERVER COMPONENT
export default async function ProductDetail({ params }) {
  const resolvedParams = await params;
  const { id } = resolvedParams;

  const { data: product } = await supabase
    .from('products')
    .select('*')
    .eq('id', id)
    .single();

  // MOCK FALLBACK (Si no hay BBDD conectada todavía)
  const mockProduct = product || {
    id,
    name: id === "2" ? "Conjunto Trianera" : "Vestido Albero Perforado",
    price: id === "2" ? "110.00" : "95.00",
    desc: id === "2" 
      ? "Conjunto clásico de vichy negro, un básico atemporal perfecto para cualquier ocasión. Destaca por sus remates en pasamanería y detalles cuidados al máximo. Un diseño cómodo, elegante y fácil de combinar."
      : "Vestido confeccionado en algodón perforado de alta calidad, muy ligero y agradable para los días cálidos. Destaca por el contraste de los madroños en verde cerceta (pato) que le aportan un toque original a un corte clásico.",
    img: id === "2" ? "/prod_dots.png" : "/prod_teal.png",
    mat: id === "2" ? "Vichy Negro & Pasamanería" : "Algodón Perforado & Cerceta"
  };

  return <ProductDetailUI product={mockProduct} />;
}
