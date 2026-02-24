import type { ProductCardProps } from "@/types/Product";
import { create } from "zustand";

type CartStore = {
  cart: ProductCardProps[],
  addToCart: (product: ProductCardProps) => void,
  removeFromCart: (id: number) => void,
  updateToCart: (id:number,quantity:number) => void,
}

export const useCartStore = create<CartStore>((set) => ({
  cart: JSON.parse(localStorage.getItem("cart") || "[]"),
  addToCart: (product) => {
    set((state) => {
      product.amount = 1
      localStorage.setItem("cart",JSON.stringify([...state.cart, product]))
      return ({
        cart: [...state.cart, product]
      })
    })
  },
  removeFromCart: (id) => {
    set((state) => {
      const carts = state.cart.filter(product => product.id !== id);
      localStorage.setItem("cart",JSON.stringify(carts))
      return (
        {
          cart: [...carts]
        }
      )
    })
  },
  updateToCart:(id,quantity) => {
    set((state) => {
      const carts = state.cart.filter(product => product.id === id ? product.amount=quantity : product);
      localStorage.setItem("cart",JSON.stringify(carts))
      return (
        {
          cart: [...carts]
        }
      )
    })
  }
}));
