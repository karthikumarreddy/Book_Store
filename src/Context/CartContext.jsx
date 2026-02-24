import { createContext } from "react";
import { useState } from "react";

export const CartContext = createContext();
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const list = localStorage.getItem("cart");
    return list ? JSON.parse(list) : [];
  }, []);

  const addToCart = (id) => {
    const update = [...cart, id];
    setCart(update);
    localStorage.setItem("cart", JSON.stringify(update));
  };

  const removeCart = (id) => {
    const update = cart.filter((item) => item.id !== id);
    setCart(update);
    localStorage.setItem("cart", JSON.stringify(update));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeCart }}>
      {children}
    </CartContext.Provider>
  );
};
