import { createContext, useState } from "react";

export const cartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  return (
    <cartContext.Provider value={{ data: "apw" }}>
      {children}
    </cartContext.Provider>
  );
};

export default CartContextProvider;
