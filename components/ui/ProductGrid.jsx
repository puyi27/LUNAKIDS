"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
};

export default function ProductGrid({ products }) {
  if (!products || products.length === 0) {
    return <p className="text-center font-sans text-ink/50 py-12">No hay productos disponibles ahora mismo.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 items-start">
      {products.map((item) => (
        <motion.div 
          key={item.id}
          className="w-full group cursor-pointer block"
          {...fadeUp}
        >
          <Link href={`/producto/${item.id}`}>
            <div className="aspect-[3/4] bg-paper mb-5 overflow-hidden rounded-xl relative border-[6px] border-paper shadow-sm transition-all duration-500 group-hover:shadow-lg">
              <div className="w-full h-full rounded-lg overflow-hidden border-stitch">
                <img src={item.img || "/prod_teal.png"} alt={item.name} className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110 opacity-95 mix-blend-multiply" />
              </div>
              
              {/* Overlay sutil para hover */}
              <div className="absolute inset-0 bg-burgundy/0 group-hover:bg-burgundy/10 transition-colors duration-500 pointer-events-none" />
            </div>
            
            <div className="flex flex-col items-center text-center px-2">
              <h3 className="font-serif text-2xl text-ink mb-1">{item.name}</h3>
              <p className="font-script text-xl text-terracotta mb-2">{item.mat || "Algodón & Lino"}</p>
              <p className="font-sans text-sm font-semibold text-ink">€{item.price}</p>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
