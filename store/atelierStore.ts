import { create } from 'zustand';

interface AtelierState {
  isOpen: boolean;
  selectedItemName: string;
  openModal: (itemName?: string) => void;
  closeModal: () => void;
}

export const useAtelierStore = create<AtelierState>((set) => ({
  isOpen: false,
  selectedItemName: '',
  openModal: (itemName = '') => set({ isOpen: true, selectedItemName: itemName }),
  closeModal: () => set({ isOpen: false, selectedItemName: '' }),
}));
