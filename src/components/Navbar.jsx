import styles from "../styles/navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navContainer}>
      <div>
        <h1>Aghil Shoppy !</h1>
      </div>
      <ul className={styles.navItems}>
        <li>Home</li>
        <li>About</li>
        <li>Cart</li>
      </ul>
    </nav>
  );
};

export default Navbar;
