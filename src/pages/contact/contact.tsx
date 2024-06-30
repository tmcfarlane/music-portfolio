import React from "react";
import styles from "./contact.module.css";
import homestyles from "../home/home.module.css";
import Swal from "sweetalert2";

const Contact: React.FC = (): JSX.Element => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "2c8cac5f-9a30-44df-bddd-5c318eb237bc");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Thank you for contacting me! I will get back to you soon.",
        icon: "success",
      });
    }
  };

  return (
    <section id="contact" className={styles["contact"]}>
      <h2 className={styles["heading"]}>
        Contact <span>Me!</span>
      </h2>

      <form onSubmit={onSubmit}>
        <div className={styles["input-box"]}>
          <div className={styles["input-field"]}>
            <input
              type="text"
              placeholder="Full Name"
              required
              name="fullName"
            />
            <span className={styles["focus"]}></span>
          </div>

          <div className={styles["input-field"]}>
            <input
              type="email"
              placeholder="Email Address"
              required
              name="email"
            />
            <span className={styles["focus"]}></span>
          </div>
        </div>

        <div className={styles["input-box"]}>
          <div className={styles["input-field"]}>
            <input
              type="tel"
              placeholder="Phone Number"
              required
              name="phone"
            />
            <span className={styles["focus"]}></span>
          </div>
          <div className={styles["input-field"]}>
            <input
              type="text"
              placeholder="Reason for Contacting"
              required
              name="subject"
            />
            <span className={styles["focus"]}></span>
          </div>
        </div>

        <div className={styles["textarea-field"]}>
          <textarea
            placeholder="Message"
            cols={30}
            rows={10}
            required
            name="message"
          />
          <span className={styles["focus"]}></span>
        </div>

        <button type="submit" className={styles["btn"]}>
          Send
        </button>
      </form>
    </section>
  );
};

export default Contact;
