import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { useSyncExternalStore } from 'react';

export interface ProductPayload {
  id: string;
  name: string;
  price: number;
  img?: string;
  category?: string;
  isAtelier?: boolean;
  mat?: string;
  description?: string;
  hoverImage?: string;
}

export interface WaaSCartState {
  items: ProductPayload[];
  wishlist: ProductPayload[];
  isCartOpen: boolean;
  setCartOpen: (isOpen: boolean) => void;
  addItemToCart: (item: ProductPayload) => void;
  removeItemFromCart: (id: string) => void;
  toggleWishlist: (item: ProductPayload) => void;
  getCrossSellRecommendations: () => string[];
  clearCart: () => void;
}

export const useWaaSStoreBase = create<WaaSCartState>()(
  persist(
    (set, get) => ({
      items: [],
      wishlist: [],
      isCartOpen: false,
      setCartOpen: (isOpen) => set({ isCartOpen: isOpen }),
      addItemToCart: (item) =>
        set((state) => ({ items: [...state.items, item], isCartOpen: true })),
      removeItemFromCart: (id) =>
        set((state) => ({ items: state.items.filter((i) => i.id !== id) })),
      toggleWishlist: (item) =>
        set((state) => {
          const exists = state.wishlist.some((i) => i.id === item.id);
          return {
            wishlist: exists
              ? state.wishlist.filter((i) => i.id !== item.id)
              : [...state.wishlist, item],
          };
        }),
      getCrossSellRecommendations: () => {
        const { items } = get();
        if (items.length === 0) return [];
        const collections = new Set(items.map((i) => i.category || ''));
        return Array.from(collections).filter(Boolean);
      },
      clearCart: () => set({ items: [] }),
    }),
    {
      name: 'waas-luxury-retention-storage',
      storage: createJSONStorage(() => localStorage),
      skipHydration: true,
      partialize: (state) => ({ items: state.items, wishlist: state.wishlist }),
    }
  )
);

export function useWaaSStore<T>(
  selector: (state: WaaSCartState) => T,
  serverFallback: T
): T {
  return useSyncExternalStore(
    useWaaSStoreBase.subscribe,
    () => selector(useWaaSStoreBase.getState()),
    () => serverFallback
  );
}
