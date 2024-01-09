import { createContext, useState } from "react";

export const themeContext = createContext();

export default function ThemeContextProvider({ children }) {
  const [color, setColor] = useState("white");
  return (
    <themeContext.Provider value={{ color, setColor }}>
      {children}
    </themeContext.Provider>
  );
}
