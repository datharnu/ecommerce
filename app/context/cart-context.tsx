import { StaticImageData } from "next/image";
import React, { createContext, useContext, useState, ReactNode } from "react";

// Product interface for product details
interface Product {
  id: number;
  title: string;
  price: number;
  image: StaticImageData;
}

// CartItem extends Product and adds quantity
interface CartItem extends Product {
  quantity: number;
}

// CartContextType defines the structure of the CartContext
interface CartContextType {
  cart: CartItem[]; // Array of cart items
  cartCount: number; // The total count of items in the cart
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, newQuantity: number) => void;
  clearCart: () => void;
}

// Create the CartContext
const CartContext = createContext<CartContextType | undefined>(undefined);

// CartProvider to provide CartContext to components
export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Add product to cart
  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        // If the product already exists, increase the quantity
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      // If the product is not in the cart, add it with quantity 1
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // Remove product from cart by id
  const removeFromCart = (productId: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  // Update quantity of a specific product in the cart
  const updateQuantity = (productId: number, newQuantity: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Clear all products from the cart
  const clearCart = () => {
    setCart([]);
  };

  // Calculate the total number of items in the cart, considering quantity
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        cartCount,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to access the cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
