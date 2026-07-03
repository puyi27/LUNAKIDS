"use client";

import { useWaaSStore } from '../../store/waasStore';
import { motion, AnimatePresence } from 'framer-motion';

export function FloatingCartWidget() {
  const cartItems = useWaaSStore((state) => state.items, []);
  const itemCount = cartItems.length;

  return (
    <AnimatePresence>
      {itemCount > 0 && (
        <motion.aside
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          className="fixed right-6 bottom-6 z-50 flex flex-col gap-2"
        >
          <div className="bg-neutral-950 text-neutral-50 px-6 py-5 rounded-2xl shadow-2xl min-w-[320px] ring-1 ring-neutral-800">
            <header className="flex justify-between items-center mb-5">
              <span className="font-semibold uppercase tracking-widest text-[10px] text-neutral-400">
                Atelier Cart
              </span>
              <span className="bg-neutral-50 text-neutral-950 text-xs px-2.5 py-1 rounded-full font-medium">
                {itemCount}
              </span>
            </header>
            <ul className="flex flex-col gap-4">
              {cartItems.map((item, idx) => (
                <li key={`${item.id}-${idx}`} className="flex justify-between text-sm items-center">
                  <span className="font-medium truncate pr-4">{item.name}</span>
                  <span className="text-neutral-400 tabular-nums">${item.price.toFixed(2)}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
