import styles from "./landing.module.css";

function Landing() {
  return (
    <div className={styles.styledBlock}>
      <div>
        <h1 className={styles.heading}>Welcome to your Awakening</h1>
        <p className={styles.paragraph}>
          Explore my music, watch my performances, and see what's next!
        </p>
        <button className={styles.button}>Watch My Latest Video</button>
      </div>
    </div>
  );
}

export default Landing;
