import styles from "../styles/navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navContainer}>
      <div>Aghil Shoppy !</div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Cart</li>
      </ul>
    </nav>
  );
};

export default Navbar;
