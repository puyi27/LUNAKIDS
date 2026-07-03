import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useCartStore = create(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,
      
      toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),
      
      addItem: (product) => set((state) => {
        const existingItem = state.items.find((item) => item.id === product.id);
        
        if (existingItem) {
          return {
            items: state.items.map((item) =>
              item.id === product.id 
                ? { ...item, quantity: item.quantity + 1 } 
                : item
            ),
            isOpen: true
          };
        }
        
        return { 
          items: [...state.items, { ...product, quantity: 1 }],
          isOpen: true
        };
      }),
      
      removeItem: (productId) => set((state) => ({
        items: state.items.filter((item) => item.id !== productId),
      })),
      
      updateQuantity: (productId, quantity) => set((state) => {
        if (quantity <= 0) {
          return {
            items: state.items.filter((item) => item.id !== productId),
          };
        }
        
        return {
          items: state.items.map((item) =>
            item.id === productId ? { ...item, quantity } : item
          ),
        };
      }),
      
      clearCart: () => set({ items: [] }),
      
      getTotal: () => {
        const state = get();
        return state.items.reduce(
          (total, item) => total + parseFloat(item.price) * item.quantity, 
          0
        );
      },
      
      getItemCount: () => {
        const state = get();
        return state.items.reduce((count, item) => count + item.quantity, 0);
      }
    }),
    {
      name: 'lunakids-cart',
      partialize: (state) => ({ items: state.items }),
    }
  )
);
