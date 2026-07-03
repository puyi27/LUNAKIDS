"use client";

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCartStore } from '../../store/cartStore';
import Link from 'next/link';
import { X, Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, getTotal, getItemCount } = useCartStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-ink/30 backdrop-blur-sm z-50"
            onClick={closeCart}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-base z-50 shadow-2xl flex flex-col border-l border-ink/5"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-ink/5">
              <h2 className="font-serif text-2xl text-ink flex items-center gap-2">
                <ShoppingBag className="w-5 h-5" /> Mi Cesta ({getItemCount()})
              </h2>
              <button
                onClick={closeCart}
                className="p-2 text-ink/60 hover:text-ink transition-colors rounded-full hover:bg-ink/5"
                aria-label="Cerrar cesta"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6 scrollbar-hide">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-ink/5 flex items-center justify-center mb-2">
                    <ShoppingBag className="w-6 h-6 text-ink/40" />
                  </div>
                  <p className="font-serif text-xl text-ink">Tu cesta está vacía</p>
                  <p className="font-sans text-[13px] text-ink/60 max-w-xs">
                    Descubre nuestra colección de moda infantil y añade tus prendas favoritas.
                  </p>
                  <button
                    onClick={closeCart}
                    className="mt-6 px-8 py-4 bg-ink text-base font-sans text-[11px] uppercase tracking-[0.2em] font-semibold hover:bg-accent transition-colors duration-300"
                  >
                    Ir a la Colección
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-4 group">
                      <div className="w-24 h-32 bg-paper relative overflow-hidden flex-shrink-0">
                        <img
                          src={item.img}
                          alt={item.name}
                          className="w-full h-full object-cover mix-blend-multiply transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                      <div className="flex-1 flex flex-col justify-between py-1">
                        <div>
                          <div className="flex justify-between items-start mb-1">
                            <h3 className="font-serif text-lg text-ink font-medium leading-tight">
                              {item.name}
                            </h3>
                            <button
                              onClick={() => removeItem(item.id)}
                              className="text-ink/40 hover:text-burgundy transition-colors p-1"
                              aria-label="Eliminar producto"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                          <p className="font-sans text-[10px] text-ink/60 uppercase tracking-[0.15em]">
                            {item.mat}
                          </p>
                        </div>
                        <div className="flex items-center justify-between mt-4">
                          <div className="flex items-center border border-ink/10">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-8 h-8 flex items-center justify-center text-ink/60 hover:text-ink hover:bg-ink/5 transition-colors"
                              aria-label="Disminuir cantidad"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="w-8 text-center font-sans text-[12px] font-medium text-ink">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-8 h-8 flex items-center justify-center text-ink/60 hover:text-ink hover:bg-ink/5 transition-colors"
                              aria-label="Aumentar cantidad"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                          <p className="font-sans text-sm font-semibold text-ink">
                            €{(parseFloat(item.price) * item.quantity).toFixed(2)}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="p-6 border-t border-ink/5 bg-base">
                <div className="flex items-center justify-between mb-6">
                  <span className="font-sans text-[12px] uppercase tracking-[0.1em] text-ink/60">Subtotal</span>
                  <span className="font-serif text-2xl text-ink">€{getTotal().toFixed(2)}</span>
                </div>
                <p className="font-sans text-[10px] text-ink/50 text-center mb-6">
                  Impuestos incluidos. Los gastos de envío se calculan en la pantalla de pago.
                </p>
                <button className="w-full py-4 bg-ink text-base font-sans text-[11px] uppercase tracking-[0.2em] font-semibold hover:bg-accent transition-colors duration-300">
                  Finalizar Compra
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
