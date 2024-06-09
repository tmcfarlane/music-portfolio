import Video from "../../components/video/video";
import styles from "./videos.module.css";

function Videos(): JSX.Element {
  const videoList = [
    {
      title: "Video 1",
      url: "https://www.youtube.com/embed/sQoiM7i5Nqc?si=lRWpkmBJ4hGAcM-X",
    },
    {
      title: "Video 2",
      url: "https://www.youtube.com/embed/uZICbR7qzyY?si=h8YyDEgnZUg0tigw",
    },
    // Add more videos here
  ];

  return (
    <section id="videos" className={styles["videos"]}>
      <h2 className={styles["heading"]}>Videos</h2>
      <div className={styles["video-list"]}>
        {videoList.map((video, index) => (
          <Video key={index} title={video.title} url={video.url} />
        ))}
      </div>
    </section>
  );
}

export default Videos;
