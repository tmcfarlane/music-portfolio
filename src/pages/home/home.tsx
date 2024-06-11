import styles from "./home.module.css";
import { FaPlay } from "react-icons/fa";
import { FaYoutube, FaTiktok } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

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
        <p>
          I create spontaneous musical adventures by combining guitar, vocals,
          live looping, and a touch of humor. My goal is to inspire others to
          find joy and authenticity in their passions, embracing imperfection
          along the way.
        </p>
        <div className={styles["btn-box"]}>
          <a href="#" className={styles.btn}>
            Book Me
          </a>
          <a href="#videos" className={styles.btn}>
            Watch Me <FaPlay className={styles["btn-icon"]} />
          </a>
        </div>
      </div>

      <div className={styles["home-img"]}>
        <img src="me_fade.png" alt="music" />
      </div>

      <div className={styles["home-sci"]}>
        <a href="#">
          <FaYoutube />
        </a>
        <a href="#">
          <FaTiktok />
        </a>
        <a href="#">
          <BsTwitterX />
        </a>
      </div>
    </section>
  );
}

export default Home;
