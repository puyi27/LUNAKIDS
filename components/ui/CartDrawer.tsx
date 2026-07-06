"use client";

import { useWaaSStoreBase } from '../../store/waasStore';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Drawer } from 'vaul';

export function CartDrawer() {
  const items = useWaaSStoreBase((state) => state.items);
  const isCartOpen = useWaaSStoreBase((state) => state.isCartOpen);
  const setCartOpen = useWaaSStoreBase((state) => state.setCartOpen);
  const removeItemFromCart = useWaaSStoreBase((state) => state.removeItemFromCart);

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const subtotal = items.reduce((acc, item) => acc + item.price, 0);

  return (
    <Drawer.Root direction="right" open={isCartOpen} onOpenChange={setCartOpen}>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-ink/40 backdrop-blur-sm z-40" />
        <Drawer.Content className="fixed top-0 right-0 z-50 w-full max-w-md h-full bg-base flex flex-col shadow-2xl border-l border-ink/5">
          
          <header className="flex items-center justify-between px-6 py-8 border-b border-ink/5">
            <Drawer.Title className="font-serif text-2xl text-ink font-medium tracking-wide">
              Tu paquete de Sevilla
            </Drawer.Title>
            <Drawer.Close className="p-2 text-ink/60 hover:text-ink transition-colors duration-300 rounded-full hover:bg-ink/5 focus-visible:ring-1 focus-visible:ring-offset-2 focus-visible:outline-none focus-visible:ring-ink/20 active:scale-[0.94]">
              <span className="material-symbols-outlined text-[24px]">close</span>
            </Drawer.Close>
          </header>

          <div className="flex-1 overflow-y-auto px-6 py-8 space-y-8">
            {items.length === 0 ? (
              <p className="text-ink/60 text-center font-sans mt-10">Tu carrito está vacío.</p>
            ) : (
              items.map((item, idx) => (
                <div key={`${item.id}-${idx}`} className="flex gap-4 items-start group">
                  <div className="w-24 h-32 flex-shrink-0 rounded-lg overflow-hidden shadow-[0_4px_12px_rgba(44,42,41,0.05)] relative bg-paper transition-transform duration-500 group-hover:scale-[1.02]">
                    {item.img && (
                      <Image 
                        alt={item.name} 
                        className="w-full h-full object-cover mix-blend-multiply" 
                        src={item.img} 
                        fill
                        sizes="96px"
                      />
                    )}
                  </div>
                  <div className="flex-1 flex flex-col justify-between h-32 py-1">
                    <div>
                      <h3 className="font-sans text-[15px] text-ink font-medium tracking-wide">{item.name}</h3>
                      <p className="font-sans text-[12px] text-ink/60 mt-1 uppercase tracking-widest">
                        {item.isAtelier ? 'Medida Personalizada' : 'Talla Estándar'}
                      </p>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-sans text-[14px] text-ink tracking-wider">€ {item.price.toFixed(2)}</span>
                      <button 
                        onClick={() => removeItemFromCart(item.id)}
                        className="font-sans text-[11px] text-ink/60 hover:text-burgundy transition-colors uppercase tracking-widest focus-visible:ring-1 focus-visible:ring-offset-2 focus-visible:outline-none focus-visible:ring-ink/20 active:scale-[0.96]"
                      >
                        Quitar
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {items.length > 0 && (
            <footer className="px-6 py-8 bg-base border-t border-ink/5">
              <div className="flex justify-between items-center mb-6">
                <span className="font-sans text-[13px] uppercase tracking-widest text-ink/60">Subtotal</span>
                <span className="font-serif text-2xl text-ink">€ {subtotal.toFixed(2)}</span>
              </div>
              <p className="font-sans text-[11px] text-ink/60 text-center mb-6 flex items-center justify-center gap-2 tracking-wide">
                <span className="material-symbols-outlined text-[16px]">featured_seasonal_and_gifts</span>
                Envuelto a mano con lazos de terciopelo. Envío gratuito.
              </p>
              <button className="w-full bg-burgundy text-base font-sans text-[12px] uppercase tracking-[0.2em] py-4 rounded hover:bg-burgundy/90 transition-all duration-300 shadow-[0_8px_20px_rgba(122,28,41,0.2)] hover:shadow-[0_12px_24px_rgba(122,28,41,0.3)] hover:-translate-y-1 active:translate-y-0 active:scale-[0.98] focus-visible:ring-1 focus-visible:ring-offset-2 focus-visible:outline-none focus-visible:ring-burgundy/50">
                Preparar mi envío
              </button>
            </footer>
          )}
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
