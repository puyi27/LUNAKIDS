"use client";

import React, { useState, useRef, useEffect } from 'react';
import { useWaaSStoreBase } from '../../store/waasStore';
import Image from 'next/image';
import WhatsAppButton from './WhatsAppButton';
import ProductGrid from './ProductGrid';
import { MOCK_PRODUCTS } from '../../lib/data';

export default function ProductDetailUI({ product }: { product: any }) {
  const sizes = [2, 4, 6, 8, 10, 12];
  const [selectedSize, setSelectedSize] = useState(sizes[1]);
  const tapeRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const relatedProducts = MOCK_PRODUCTS.filter(p => p.category === product?.category && p.id !== product?.id).slice(0, 4);

  useEffect(() => {
    const handleMove = (e: PointerEvent) => {
      if (!isDragging || !tapeRef.current) return;
      const rect = tapeRef.current.getBoundingClientRect();
      let x = e.clientX - rect.left;
      x = Math.max(0, Math.min(x, rect.width));
      const percent = (x / rect.width) * 100;
      const stepPercent = 100 / (sizes.length - 1);
      const closestIndex = Math.round(percent / stepPercent);
      setSelectedSize(sizes[closestIndex]);
    };
    const handleUp = () => setIsDragging(false);

    if (isDragging) {
      window.addEventListener('pointermove', handleMove);
      window.addEventListener('pointerup', handleUp);
    }
    return () => {
      window.removeEventListener('pointermove', handleMove);
      window.removeEventListener('pointerup', handleUp);
    };
  }, [isDragging, sizes]);

  if (!product) return null;

  const handlePercent = (sizes.indexOf(selectedSize) / (sizes.length - 1)) * 100;

  return (
    <>
      <style jsx global>{`
        .tape-measure {
            position: relative;
            height: 60px;
            background-color: #E6E1DC; 
            border-radius: 8px;
            overflow: hidden;
            display: flex;
            align-items: center;
            cursor: pointer;
            transition: box-shadow 0.3s ease;
        }
        .tape-measure:focus-visible {
            outline: none;
            box-shadow: 0 0 0 2px #FAF8F5, 0 0 0 4px rgba(26, 94, 92, 0.4);
        }
        .tape-marks {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 100%;
            background-image: 
                linear-gradient(90deg, transparent 49%, rgba(44,42,41,0.2) 50%, transparent 51%), 
                linear-gradient(90deg, transparent 49%, rgba(44,42,41,0.1) 50%, transparent 51%); 
            background-size: 40px 100%, 10px 30%;
            background-position: 0 0, 0 0;
            background-repeat: repeat-x;
        }
        .tape-slider {
            position: absolute;
            top: 0;
            height: 100%;
            width: 4px;
            background-color: #1A5E5C; 
            transform: translateX(-50%);
            transition: left 0.5s cubic-bezier(0.25, 1, 0.5, 1);
            z-index: 10;
        }
        .tape-slider.dragging {
            transition: none;
        }
        .tape-slider::after {
            content: '';
            position: absolute;
            top: -5px;
            left: 50%;
            transform: translateX(-50%);
            width: 14px;
            height: 14px;
            border-radius: 50%;
            background-color: #1A5E5C;
            box-shadow: 0 2px 8px rgba(26, 94, 92, 0.4);
        }
        .tape-labels {
            position: absolute;
            bottom: 4px;
            width: 100%;
            display: flex;
            justify-content: space-between;
            padding: 0 20px;
            font-family: 'Inter', sans-serif;
            font-size: 10px;
            color: rgba(44,42,41,0.6);
            pointer-events: none;
        }
      `}</style>
      <main className="flex-grow w-full max-w-[1400px] mx-auto px-4 md:px-8 py-12 md:py-24 flex flex-col md:flex-row gap-8 md:gap-16 items-start pt-16">
        
        <section className="w-full md:w-3/5 relative group">
          <div className="rounded-xl overflow-hidden shadow-[0_10px_40px_-10px_rgba(44,42,41,0.05)] bg-paper relative w-full h-[60vh] md:h-[80vh]">
            <img 
              alt={product.name} 
              className="w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.03] mix-blend-multiply" 
              src={product.img || "/prod_teal.png"}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/5 to-transparent pointer-events-none"></div>
          </div>
        </section>

        <section className="w-full md:w-2/5 flex flex-col gap-8 md:sticky top-32">
          <nav className="flex gap-2 items-center font-sans text-[11px] uppercase tracking-widest text-ink/60">
            <span className="hover:text-ink transition-colors cursor-pointer">{product.category || "Couture"}</span>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <span className="text-ink">{product.name}</span>
          </nav>

          <div className="flex flex-col gap-4">
            <h1 className="text-4xl md:text-5xl text-ink tracking-wide font-serif leading-tight">{product.name}</h1>
            <p className="font-sans text-[15px] text-ink/70 leading-relaxed mt-4">
              {product.desc || "Una pieza maestra de nuestro atelier, confeccionada a mano. Cada detalle cuenta una historia de artesanía y elegancia."}
            </p>
            <p className="text-2xl font-sans font-medium text-ink mt-2 tracking-wider">€{product.price}</p>
          </div>

          <div className="flex flex-col gap-2 mt-6">
            <label className="font-sans text-[13px] uppercase tracking-widest text-ink flex justify-between items-end mb-2">
              Talla (Años)
              <span className="text-accent font-medium normal-case tracking-normal text-[15px]">Talla {selectedSize}</span>
            </label>
            <div 
              className="tape-measure mt-2" 
              role="slider" 
              tabIndex={0}
              aria-valuemin={sizes[0]} 
              aria-valuemax={sizes[sizes.length - 1]} 
              aria-valuenow={selectedSize}
              ref={tapeRef}
              onPointerDown={(e) => {
                setIsDragging(true);
                tapeRef.current?.setPointerCapture(e.pointerId);
                const rect = tapeRef.current?.getBoundingClientRect();
                if (rect) {
                  let x = e.clientX - rect.left;
                  x = Math.max(0, Math.min(x, rect.width));
                  const percent = (x / rect.width) * 100;
                  const stepPercent = 100 / (sizes.length - 1);
                  const closestIndex = Math.round(percent / stepPercent);
                  setSelectedSize(sizes[closestIndex]);
                }
              }}
              onKeyDown={(e) => {
                const currentIndex = sizes.indexOf(selectedSize);
                if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
                  e.preventDefault();
                  if (currentIndex < sizes.length - 1) setSelectedSize(sizes[currentIndex + 1]);
                } else if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
                  e.preventDefault();
                  if (currentIndex > 0) setSelectedSize(sizes[currentIndex - 1]);
                }
              }}
            >
              <div className="tape-marks"></div>
              <div 
                className={`tape-slider ${isDragging ? 'dragging' : ''}`} 
                style={{ left: `${handlePercent}%` }}
              ></div>
              <div className="tape-labels">
                {sizes.map(s => <span key={s}>{s}</span>)}
              </div>
            </div>
            <p className="font-sans text-[11px] uppercase tracking-widest text-ink/50 mt-4 flex items-center gap-1 hover:text-ink cursor-pointer transition-colors w-fit">
              <span className="material-symbols-outlined text-[14px]">straighten</span> 
              Guía de medidas
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-4">
            {product.isAtelier ? (
              <a 
                href={`https://wa.me/34619172134?text=${encodeURIComponent(`Hola, estoy interesada en el servicio Atelier para el artículo: ${product.name}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-accent text-base rounded font-sans text-[12px] uppercase tracking-[0.2em] flex items-center justify-center gap-2 hover:bg-accent/90 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] shadow-[0_8px_20px_rgba(26,94,92,0.2)] hover:shadow-[0_12px_24px_rgba(26,94,92,0.3)] hover:-translate-y-1 active:translate-y-0 active:scale-[0.98] group text-center focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none focus-visible:ring-accent/50"
              >
                <span className="material-symbols-outlined group-hover:-translate-y-1 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]">candle</span>
                Hablar con el Conserje del Atelier
              </a>
            ) : (
              <button 
                onClick={() => useWaaSStoreBase.getState().addItemToCart({ ...product, size: selectedSize })}
                className="w-full py-4 bg-ink text-base rounded font-sans text-[12px] uppercase tracking-[0.2em] flex items-center justify-center gap-2 hover:bg-ink/90 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] shadow-[0_8px_20px_rgba(44,42,41,0.2)] hover:shadow-[0_12px_24px_rgba(44,42,41,0.3)] hover:-translate-y-1 active:translate-y-0 active:scale-[0.98] group focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none focus-visible:ring-ink/50"
              >
                <span className="material-symbols-outlined group-hover:-translate-y-1 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]">shopping_bag</span>
                Añadir a la Cesta
              </button>
            )}
            <p className="text-center font-sans text-[12px] text-ink/60 mt-2">
              Nuestras piezas se confeccionan bajo pedido. Tiempo estimado de atelier: 4-6 semanas.
            </p>
          </div>

          <div className="mt-8 border-t border-ink/10 pt-6 flex flex-col gap-4">
            <details className="group cursor-pointer">
              <summary className="flex justify-between items-center font-sans text-[13px] uppercase tracking-widest text-ink list-none pb-2 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none focus-visible:ring-ink/20 rounded">
                Materiales y Cuidados
                <span className="material-symbols-outlined text-ink/60 group-open:rotate-180 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]">expand_more</span>
              </summary>
              <div className="pt-4 font-sans text-[14px] text-ink/70 leading-relaxed animate-fade-in-up">
                {product.mat || "Tejido Artesanal"}. Lavado en seco profesional exclusivamente. Guardar en la funda de algodón orgánico proporcionada, lejos de la luz solar directa.
              </div>
            </details>
            <details className="group cursor-pointer">
              <summary className="flex justify-between items-center font-sans text-[13px] uppercase tracking-widest text-ink list-none pb-2 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none focus-visible:ring-ink/20 rounded">
                El Proceso de Atelier
                <span className="material-symbols-outlined text-ink/60 group-open:rotate-180 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]">expand_more</span>
              </summary>
              <div className="pt-4 font-sans text-[14px] text-ink/70 leading-relaxed animate-fade-in-up">
                Cada vestido requiere más de 40 horas de trabajo manual. Nuestro conserje le guiará a través del proceso de toma de medidas a distancia para asegurar un ajuste perfecto.
              </div>
            </details>
          </div>

        </section>
      </main>

      {/* WhatsApp CTA Flotante */}
      <WhatsAppButton />

      {/* Completa el look (Cross-selling) */}
      {relatedProducts.length > 0 && (
        <section className="max-w-[1400px] mx-auto px-6 py-16 md:py-24 border-t border-ink/5 mt-10">
          <h2 className="text-2xl md:text-4xl font-serif text-ink mb-2 text-center md:text-left">También te encantará</h2>
          <p className="font-sans text-[12px] uppercase tracking-widest text-ink/50 mb-10 text-center md:text-left">Prendas recomendadas para completar tu look</p>
          <ProductGrid products={relatedProducts} />
        </section>
      )}
    </>
  );
}
