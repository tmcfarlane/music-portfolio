import styles from "./shows.module.css";
import Showbox from "../../components/showbox/showbox";
import Social from "../../components/social/social";

function Shows(): JSX.Element {
  return (
    <section id="shows" className={styles["shows"]}>
      <h2 className={styles["heading"]}>
        Upcoming <span>Shows</span>
      </h2>

      <div className={styles["shows-row"]}>
        <div className={styles["shows-column"]}>
          <h3 className={styles["title"]}>Future</h3>
          <p className={styles["coming-soon"]}>
            More shows coming soon! <br />
            Follow me to stay updated!
          </p>

          <div className={styles["social"]}>
            <Social />
          </div>
          {/* <Showbox
            date="June 14th, 2024"
            title="Open Mic Night"
            location="Location: Wm Grassie Wine Estates in Duvall, WA"
            time="Time: 6:30PM"
          /> */}
          <h3 className={styles["title"]}>Past</h3>
          <Showbox
            date="Saturday, May 4th, 2024"
            title="Open Mic Night"
            location="Location: SoulFood CoffeeHouse in Redmond, WA"
          />
          <Showbox
            date="Friday, April 12th, 2024"
            title="Open Mic Night"
            location="Location: Wm Grassie Wine Estates in Duvall, WA"
          />
          <Showbox
            date="Wednesday, March 20th, 2024"
            title="Open Mic Night"
            location="Location: Tim's Tavern in Seattle, WA"
          />
          <Showbox
            date="Saturday, February 3rd, 2024"
            title="Open Mic Night"
            location="Location: SoulFood CoffeeHouse in Redmond, WA"
          />
          <Showbox
            date="Saturday, December 2nd, 2023"
            title="Open Mic Night"
            location="Location: SoulFood CoffeeHouse in Redmond, WA"
          />
          <Showbox
            date="Saturday, October 7th, 2023"
            title="Open Mic Night"
            location="Location: SoulFood CoffeeHouse in Redmond, WA"
          />
        </div>
      </div>
    </section>
  );
}

export default Shows;
