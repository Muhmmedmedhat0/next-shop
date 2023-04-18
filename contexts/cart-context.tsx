import { createContext, useState } from "react";
import { CartContextType, CartItemType, CartProviderProps } from "../Types/app-props.types";


// create context
export const CartContext = createContext<CartContextType>({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  updateQuantity: () => {},
});


// create provider to wrap children to access context
export const CartContextProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);

  // Add item to the cart
  const addToCart = (item: CartItemType) => {
    setCartItems((prev) => {
      // If item is already in the cart, update the quantity
      const foundIndex = prev.findIndex((el) => el.id === item.id);
      if (foundIndex !== -1) {
        const copy = [...prev];
        copy[foundIndex].quantity += item.quantity;
        return copy;
      }
      // If item is not in the cart yet, add it
      return [...prev, item];
    });
  };

  // Remove item from the cart
  const removeFromCart = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Update quantity of an item in the cart
  const updateQuantity = (id: number, quantity: number) => {
    setCartItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return { ...item, quantity };
        }
        return item;
      })
    );
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity }}>
			{/* consumers */}
      {children} 
    </CartContext.Provider>
  );
};