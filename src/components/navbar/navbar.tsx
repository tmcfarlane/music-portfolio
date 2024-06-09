import { useState } from "react";
import styles from "./navbar.module.css";
import { IoMenu, IoClose } from "react-icons/io5";

function Navbar(): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <a href="#home" className={styles.logo}>
        TRENT
      </a>

      <div className={styles.icons} onClick={toggleMenu}>
        {isMenuOpen ? <IoClose color="white" /> : <IoMenu color="white" />}
      </div>

      <nav
        className={`${styles.navbar} ${isMenuOpen ? styles.navbarOpen : ""}`}
      >
        <a href="#about">About</a>
        <a href="#shows">Upcoming Shows</a>
        <a href="#videos">Videos</a>
        <a href="#contact">Contact</a>
      </nav>

      <button className={styles.animatedButton}>Book Me</button>
    </header>
  );
}

export default Navbar;
