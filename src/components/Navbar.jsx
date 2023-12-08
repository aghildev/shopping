import { NavLink } from "react-router-dom";
import styles from "../styles/navbar.module.css";
import { useContext } from "react";
import { cartContext } from "../context/CartContext";

const Navbar = () => {
  const { data } = useContext(cartContext);
  console.log(data);
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
          Cart - {data}
        </NavLink>
      </ul>
      <div>Colormode</div>
    </nav>
  );
};

export default Navbar;
