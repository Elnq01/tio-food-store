import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export const useStore = create()(
    persist(
        (set) => ({
            cart: [],
            deliveryPrice:0,

        addItemToCart: (item) => set((state) => {
            const existing = state.cart.find((i) => i._id === item._id);
            if (existing) {
                alert('Item already in cart');
                return state; // return current state unchanged
            }
            return {cart:[...state.cart, {...item, quantity:1}]}
        }),

        removeItemFromCart: (id) => set((state) => {
            // console.log("Am I here! ", id)
            const oldCartState = [...state.cart];
            console.log("Am I here! 1", oldCartState)

            const newCartState = oldCartState.filter(item => item._id !== id);
            
            console.log("Am I here! ", newCartState)
            return {cart:newCartState};
        }),

        increaseItemQuantity:(id) => set((state) => {
            const oldCart = [...state.cart];
            const newCart = oldCart.map(item => {
                if(item._id == id){
                    return {...item, quantity: item.quantity + 1}
                }

                return item;
            })
            return {cart:newCart}
        }),

        decreaseItemQuantity:(id) => set((state) => {
            const oldCart = [...state.cart];
            const newCart = oldCart.map(item => {
                if(item._id == id){
                    return {...item, quantity: item.quantity - 1}
                }

                return item;
            })
            return {cart:newCart}

        }),

        clearCart:() => set(() => {
            return {cart:[]}
        }),

        addDeliveryPrice:(price) => set(() => {
            return {deliveryPrice:price}
        }),

        clearDeliveryPrice:() => set(() => {
            return {deliveryPrice:0}
        })
    }),
    {
        name: 'food-storage', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage),
    }
)
)
