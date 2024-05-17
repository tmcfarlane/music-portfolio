import styles from "./navbar.module.css";

function Navbar() {
  return (
    <div className={styles.navbarContainer}>
      <nav className={styles.navigation}>
        <ul className={styles.navigationCenterList}>
          <li className={styles.navigationItem}>
            <a className={styles.navLink} href="#about">
              About
            </a>
          </li>
          <li className={styles.navigationItem}>
            <a className={styles.navLink} href="#shows">
              Upcoming Shows
            </a>
          </li>
          <li className={styles.navigationItem}>
            <a className={styles.navLink} href="#videos">
              Videos
            </a>
          </li>
          <li className={styles.navigationItem}>
            <a className={styles.navLink} href="#blog">
              Blog
            </a>
          </li>
        </ul>
        <div className={styles.buttonContainer}>
          <button className={styles.button}>Book Me</button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
