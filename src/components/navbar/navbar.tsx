import { useState } from "react";
import styles from "./navbar.module.css";
import { IoMenu, IoClose } from "react-icons/io5";
import { scrollIntoView, scrollToTop } from "../../utils/utils";

interface NavBarProps {
  closeTrackList: () => void; // Function to close the tracklist
}

function Navbar({ closeTrackList }: NavBarProps): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Function to handle scrolling and closing menus
  const handleLinkClick = (id: string) => (event: React.MouseEvent) => {
    scrollIntoView(id)(event); // Scroll to the section
    setIsMenuOpen(false); // Close the menu
    closeTrackList(); // Close the tracklist
  };

  return (
    <header className={styles.header}>
      {/* Logo */}
      <a
        href="#home"
        className={styles.logo}
        onClick={(event) => {
          scrollToTop(event);
          closeTrackList(); // Close the tracklist when clicking the logo
          setIsMenuOpen(false); // Close the menu
        }}
      >
        TRENT
      </a>

      {/* Menu Toggle Icon */}
      <div className={styles.icons} onClick={toggleMenu}>
        {isMenuOpen ? <IoClose color="white" /> : <IoMenu color="white" />}
      </div>

      {/* Navigation Links */}
      <nav
        className={`${styles.navbar} ${isMenuOpen ? styles.navbarOpen : ""}`}
      >
        <a href="#about" onClick={handleLinkClick("about")}>
          About
        </a>
        <a href="#shows" onClick={handleLinkClick("shows")}>
          Upcoming Shows
        </a>
        <a href="#videos" onClick={handleLinkClick("videos")}>
          Videos
        </a>
        <a href="#contact" onClick={handleLinkClick("contact")}>
          Contact
        </a>
      </nav>

      {/* Book Me Button */}
      <button
        className={styles.animatedButton}
        onClick={handleLinkClick("contact")}
      >
        Book Me
      </button>
    </header>
  );
}

export default Navbar;
