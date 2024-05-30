import styles from "./about.module.css";

function About() {
  return (
    <section id="about" className={styles["about"]}>
      <h2 className="heading">
        About <span>Me</span>
      </h2>

      <div className="about-img">
        <img src="me_small.png" alt="me" />
        <span className="circle-spin"></span>
      </div>

      <div className="about-content">
        <h3>
          I'm a <span>Musician</span>
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, quia
          voluptates, voluptas, cumque, accusantium quidem quibusdam doloribus
          quod autem iure voluptate.
        </p>
      </div>
    </section>
  );
}

export default About;
