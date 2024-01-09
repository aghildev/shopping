import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import CartContextProvider from "./context/CartContext";
import ThemeContextProvider from "./context/ThemeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartContextProvider>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </CartContextProvider>
  </React.StrictMode>
);
