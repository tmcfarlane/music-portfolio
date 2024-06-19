import { useState } from "react";
import styles from "./navbar.module.css";
import { IoMenu, IoClose } from "react-icons/io5";

function Navbar(): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollIntoView = (id: string) => (event: React.MouseEvent) => {
    event.preventDefault();
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = (event: React.MouseEvent) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
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
