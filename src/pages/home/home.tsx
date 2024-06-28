import styles from "./home.module.css";
import { FaPlay } from "react-icons/fa";
import { scrollIntoView } from "../../utils/utils";
import Social from "../../components/social/social";

function Home() {
  return (
    <section className={styles.home} id="home">
      <div className={styles["home-content"]}>
        <h1>
          Hi, I'm <span>Trent.</span>
        </h1>
        <div className={styles["text-animate"]}>
          <h3>I do music.</h3>
        </div>
        <p className={styles["tag-line"]}>
          Unplanned,
          <br />
          Unscripted, <br />
          Unforgettable. <br />
          Music Made with <span>You</span>
        </p>
        <div className={styles["btn-box"]}>
          <a
            href="#contact"
            className={styles.btn}
            onClick={scrollIntoView("contact")}
          >
            Book Me
          </a>
          <a
            href="#videos"
            className={styles.btn}
            onClick={scrollIntoView("videos")}
          >
            Watch Me <FaPlay className={styles["btn-icon"]} />
          </a>
        </div>
        <div className={styles["social"]}>
          <Social />
        </div>
        <div className={styles["home-img"]}></div>
      </div>
    </section>
  );
}

export default Home;
