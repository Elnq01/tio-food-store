import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { ProductType } from '../actions/actionServer';


export type CartItem = ProductType & {
  quantity: number;
};

type TioStore = {
  cart: CartItem[];
  deliveryPrice: number;
  addItemToCart: (item: CartItem) => void;
  removeItemFromCart: (id: string) => void;
  increaseItemQuantity: (id: string) => void;
  decreaseItemQuantity: (id: string) => void;
  clearCart: () => void;
  addDeliveryPrice: (price: number) => void;
  clearDeliveryPrice: () => void;
};

export const useStore = create<TioStore>()(
  persist(
    (set) => ({
      cart: [],
      deliveryPrice: 0,

      addItemToCart: (item) =>
        set((state) => {
          const existing = state.cart.find((i) => i._id === item._id);
          if (existing) {
            alert('Item already in cart');
            return state;
          }
          return { cart: [...state.cart, { ...item, quantity: 1 }] };
        }),

      removeItemFromCart: (id) =>
        set((state) => {
          const newCartState = state.cart.filter((item) => item._id !== id);
          return { cart: newCartState };
        }),

      increaseItemQuantity: (id) =>
        set((state) => {
          const newCart = state.cart.map((item) =>
            item._id === id ? { ...item, quantity: item.quantity + 1 } : item
          );
          return { cart: newCart };
        }),

      decreaseItemQuantity: (id) =>
        set((state) => {
          const newCart = state.cart.map((item) =>
            item._id === id ? { ...item, quantity: item.quantity - 1 } : item
          );
          return { cart: newCart };
        }),

      clearCart: () => set(() => ({ cart: [] })),

      addDeliveryPrice: (price) => set(() => ({ deliveryPrice: price })),

      clearDeliveryPrice: () => set(() => ({ deliveryPrice: 0 })),
    }),
    {
      name: 'food-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
