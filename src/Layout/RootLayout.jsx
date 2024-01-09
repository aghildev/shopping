import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { themeContext } from "../context/ThemeContext";

const RootLayout = () => {
  const { color, setColor } = useContext(themeContext);
  return (
    <div style={{ backgroundColor: color }}>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
