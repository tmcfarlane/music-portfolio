import styles from "./social.module.css";

import { FaYoutube, FaTiktok } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Social(): JSX.Element {
  return (
    <div className={styles["home-sci"]}>
      <a
        href="https://www.youtube.com/channel/UCGZGKDnmdsfb3-h1Q0iq0LA/"
        target="blank"
      >
        <FaYoutube />
      </a>
      <a
        href="#"
        onClick={(event) => {
          event.preventDefault();
          toast.error("TikTok will be added soon.");
        }}
      >
        <FaTiktok />
      </a>
      <a
        href="#"
        onClick={(event) => {
          event.preventDefault();
          toast.error("X will be added soon.");
        }}
      >
        <BsTwitterX />
      </a>

      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={true}
      />
    </div>
  );
}

export default Social;
