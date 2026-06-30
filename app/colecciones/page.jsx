import React from 'react';
import ProductGrid from '../../components/ui/ProductGrid';
import { supabase } from '../../lib/supabase';

// SERVER COMPONENT
export default async function Colecciones() {
  
  // Fetch real data from Supabase
  const { data: products, error } = await supabase
    .from('products')
    .select('*')
    .order('created_at', { ascending: false });

  // Si no hay datos (aún no se ha poblado la BD), usamos un fallback temporal para la demo
  const displayProducts = products?.length > 0 ? products : [
    { id: "1", name: "Vestido Albero Perforado", price: "95.00", img: "/prod_teal.png", mat: "Algodón Perforado & Cerceta" },
    { id: "2", name: "Conjunto Trianera", price: "110.00", img: "/prod_dots.png", mat: "Vichy Negro & Pasamanería" },
    { id: "3", name: "Vestido Romería", price: "85.00", img: "/flamenca_luna_2.png", mat: "Algodón Rústico" },
    { id: "4", name: "Conjunto Lino Crudo", price: "65.00", img: "/ceremonia_luna_2.png", mat: "Lino Alta Densidad" },
    { id: "5", name: "Vestido Plumeti y Terciopelo", price: "120.00", img: "/hero_luna.png", mat: "Plumeti Blanco" }
  ];

  return (
    <div className="pt-40 px-6 max-w-[1400px] mx-auto min-h-screen pb-32">
      <div className="mb-32 text-center max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-serif text-ink italic mb-6">Nuestra Colección</h1>
        <p className="text-ink/70 font-sans text-[15px] leading-relaxed font-medium">
          Diseños clásicos y atemporales para vestir a los más pequeños en cualquier ocasión. Desde conjuntos de diario hasta vestidos y complementos para ceremonia y eventos especiales.
        </p>
      </div>

      {/* Grid Animado (Client Component) recibiendo los datos del Servidor */}
      <ProductGrid products={displayProducts} />
    </div>
  );
}
