import styles from "./video.module.css";
import { FaPlay } from "react-icons/fa";

type VideoProps = {
  title: string;
  url: string;
};

function Video({ title, url }: VideoProps): JSX.Element {
  return (
    <div className={styles["video-container"]}>
      <a
        href={url}
        className={styles["iframe-link"]}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className={styles["video-text"]}>
          <h3 className={styles["video-title"]}>{title}</h3>
          <FaPlay className={styles["play-button"]} />
        </div>
      </a>
      <div className={styles["iframe-wrapper"]}>
        <iframe
          className={styles["responsive-iframe"]}
          src={url}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default Video;
