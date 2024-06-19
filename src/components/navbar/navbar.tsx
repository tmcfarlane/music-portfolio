import { useState } from "react";
import styles from "./navbar.module.css";
import { IoMenu, IoClose } from "react-icons/io5";
import { scrollIntoView, scrollToTop } from "../../utils/utils";

function Navbar(): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <a href="#home" className={styles.logo} onClick={scrollToTop}>
        TRENT
      </a>

      <div className={styles.icons} onClick={toggleMenu}>
        {isMenuOpen ? <IoClose color="white" /> : <IoMenu color="white" />}
      </div>

      <nav
        className={`${styles.navbar} ${isMenuOpen ? styles.navbarOpen : ""}`}
      >
        <a href="#about" onClick={scrollIntoView("about")}>
          About
        </a>
        <a href="#shows" onClick={scrollIntoView("shows")}>
          Upcoming Shows
        </a>
        <a href="#videos" onClick={scrollIntoView("videos")}>
          Videos
        </a>
        <a href="#contact" onClick={scrollIntoView("contact")}>
          Contact
        </a>
      </nav>

      <button
        className={styles["animatedButton"]}
        onClick={scrollIntoView("contact")}
      >
        Book Me
      </button>
    </header>
  );
}

export default Navbar;
