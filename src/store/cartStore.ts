import { create } from "zustand";

export const cartStore = create((set) => ({
    items: 0,
    increaseItem: () => set((state) => ({items: state.items + 1})),
    removeAllItems: () => set({ items: 0 }),
}))