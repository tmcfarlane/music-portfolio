import styles from "./home.module.css";

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
          Lorem ipsum dolor sit amet. Est aliquam accusantium non voluptas
          incidunt rem molestiae deleniti. Non quia eaque et quas amet ab cumque
          molestiae est maxime debitis ut distinctio quam.
        </p>
        <div className={styles["btn-box"]}>
          <a href="#" className={styles.btn}>
            Book Me
          </a>
          <a href="#" className={styles.btn}>
            Watch Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
