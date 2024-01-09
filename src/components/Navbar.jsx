import { NavLink } from "react-router-dom";
import styles from "../styles/navbar.module.css";
import { useContext } from "react";
import { cartContext } from "../context/CartContext";
import { themeContext } from "../context/ThemeContext";

const Navbar = () => {
  const { cartItems, setCartItems } = useContext(cartContext);
  const { color, setColor } = useContext(themeContext);
  // console.log(data);
  const handleColor = () => {
    setColor(color === "white" ? "grey" : "white");
  };
  return (
    <nav className={styles.navContainer}>
      <div>
        <h1>Aghil Shoppy !</h1>
      </div>
      <ul className={styles.navItems}>
        <NavLink to="/" className={styles.li}>
          Home
        </NavLink>
        <NavLink to="/about" className={styles.li}>
          About
        </NavLink>
        <NavLink to="/cart" className={styles.li}>
          Cart - {cartItems.length}
        </NavLink>
      </ul>
      <div>
        <h2 onClick={handleColor}>Colormode</h2>
      </div>
    </nav>
  );
};

export default Navbar;
