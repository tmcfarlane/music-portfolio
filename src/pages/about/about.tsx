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
          I'm a <span className={styles["musician"]}>Musician</span>. As a new
          artist, I've continuously pushed boundaries and experimented with
          fresh ideas at open mic nights. Now, I'm excited to bring that same
          spirit of innovation and creativity to my own full-length shows.
        </p>
        <h3>What I do</h3>
        <p>
          My performance is a blend of jamming on the guitar, singing, and
          live-looping beats. I create instrumentals on the spot, improvise
          lyrics, freestyle, and dance like there's no tomorrow. Each show is a
          dynamic musical adventure, where <span>I make music with you</span>,
          inviting the audience to join in the creative process.
        </p>
        <h3>Why I do it</h3>
        <p>
          I do it for myself. I challenge myself to go to open mic nights
          feeling unprepared, with a few tracks I made, no lyrics written, and
          nothing planned. I just get on stage, play my music, and have fun.{" "}
          <span className={styles["inspire"]}>
            My hope is to inspire others
          </span>{" "}
          to discover their own joy and authenticity in whatever they love, and
          to be unapologetically themselves.
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
