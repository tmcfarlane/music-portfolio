import { FaCalendarAlt } from "react-icons/fa";
import styles from "./showbox.module.css";

interface ShowBoxProps {
  date: string;
  title: string;
  location: string;
  time?: string;
  link?: string;
}

const Showbox = ({
  date,
  title,
  location,
  time,
  link,
}: ShowBoxProps): JSX.Element => (
  <div className={styles["showbox"]}>
    <div className={styles["showbox-content"]}>
      <div className={styles["content"]}>
        <div className={styles["date"]}>
          <FaCalendarAlt className={styles["calendar-icon"]} />
          {date}
        </div>
        <h3>{title}</h3>
        <p>{location}</p>
        {time && <p>{time}</p>}
        {link && <a href={link}>Link</a>}
        {/* Watch button */}
        {/* Photo from event */}
      </div>
    </div>
  </div>
);

export default Showbox;
