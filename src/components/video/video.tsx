import styles from "./video.module.css";

type VideoProps = {
  title: string;
  url: string;
};

function Video({ title, url }: VideoProps): JSX.Element {
  return (
    <div className={styles["video-container"]}>
      <h3 className={styles["video-title"]}>{title}</h3>
      <iframe
        width="800"
        height="450"
        src={url}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default Video;
