import styles from "./about.module.css";
import homestyles from "../home/home.module.css";

function About() {
  return (
    <section id="about" className={styles["about"]}>
      <h2 className={styles["heading"]}>
        About <span>Me</span>
      </h2>

      <div className={styles["about-img"]}>
        <img src="me_small.png" alt="me" />
        <span className={styles["circle-spin"]}></span>
      </div>

      <div className={styles["about-content"]}>
        <h3>Who I Am</h3>
        <p>
          I'm a <span className={styles["musician"]}>Musician</span>. I am a new
          artist. I have done several open mic nights now and I’m looking to
          start my own shows.
        </p>
        <h3>What I do</h3>
        <p>
          My performance is a fun mix of jamming on the guitar and singing my
          heart out, with pre-recorded loops that I improvise lyrics to, live
          looping beats and instrumentals that I create on the spot, spontaneous
          freestyling, and dancing like there's no tomorrow. I try to make every
          show a dynamic and thrilling musical adventure, infused with my own
          brand of humor and comedy.
        </p>
        <h3>Why I do it</h3>
        <p>
          I do it for myself. I challenge myself to go to open mic nights
          feeling unprepared, with a few tracks I made, no lyrics written, and
          nothing planned. I just get on stage, play my music, and have fun. My
          hope is to inspire others to discover their own joy and authenticity
          in whatever they love, and to be unapologetically themselves.
        </p>
        <div className={`${homestyles["btn-box"]} ${homestyles["btns"]}`}>
          <a href="#" className={homestyles["btn"]}>
            Read More
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
