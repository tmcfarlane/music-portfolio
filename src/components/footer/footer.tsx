import { FaArrowUp } from "react-icons/fa6";
import styles from "./footer.module.css";

function Footer(): JSX.Element {
  return (
    <footer className={styles["footer"]}>
      <div className={styles["footer-text"]}>
        <p>Copyright &copy; 2024 by Trent | All rights reserved.</p>
      </div>
      <div className={styles["footer-iconTop"]}>
        <a href="#home">
          <FaArrowUp size={20} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
