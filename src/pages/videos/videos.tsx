import Video from "../../components/video/video";
import styles from "./videos.module.css";

function Videos(): JSX.Element {
  const videoList = [
    {
      title: "Open Mic - Soulfood Coffeehouse WITH KIDS",
      url: "https://www.youtube.com/embed/LZCyjJaMyZM?si=4vS050CT3uC22ILW",
    },
    {
      title: "Open Mic - Wm Grassie Wine Estates",
      url: "https://www.youtube.com/embed/VArE6B6cdXU?si=Va_FH6vfcuOP7wmS",
    },
    {
      title: "Open Mic - Tim's Tavern",
      url: "https://www.youtube.com/embed/7xmi9NtFUXk?si=txFq2oPZP1qLlP6M",
    },
    {
      title: "Open Mic - Soulfood Coffeehouse WITH SURPRISE PROPOSAL!",
      url: "https://www.youtube.com/embed/U_8dx9xTgqI?si=0MgJohoREn_F2ys7",
    },
    {
      title: "Open Mic Freestyle - Use What You Got",
      url: "https://www.youtube.com/embed/xIiyxV0ITmg?si=4-ShCA99C8K-vEjp",
    },
    {
      title: "Open Mic Rap - Never Again",
      url: "https://www.youtube.com/embed/tfvqcxFrI5o?si=CajBRd2B6y0ECFdM",
    },
    {
      title: "Open Mic - (Cover) I Love You More Than You Will Ever Know",
      url: "https://www.youtube.com/embed/TmuTQ_DTaV8?si=ECCc-jZFrtPPxGQ2",
    },
    {
      title: "Open Mic - Loop Station Trial Run - Rave",
      url: "https://www.youtube.com/embed/N-ZWh3BRfYY?si=GcA-Thf2-aDiHs4R",
    },
    {
      title: "Open Mic - I Can Hear You Coming Through",
      url: "https://www.youtube.com/embed/-NfMG-agtIo?si=OcHwowzDHOqoE_W2",
    },
    {
      title: "Open Mic - Tell Me Again Who I Am",
      url: "https://www.youtube.com/embed/wETKPV5h6v8?si=-6tHCCCKJ3890Zdb",
    },
  ];

  return (
    <section id="videos" className={styles["videos"]}>
      <h2 className={styles["heading"]}>Videos</h2>
      <p className={styles["subheading"]}>
        The following videos have their{" "}
        <span className={styles["colors"]}>color adjusted.</span> <br />
        Visit my Youtube channel to see non-smurf colors.
      </p>
      <div className={styles["video-list"]}>
        {videoList.map((video, index) => (
          <Video key={index} title={video.title} url={video.url} />
        ))}
      </div>
    </section>
  );
}

export default Videos;
