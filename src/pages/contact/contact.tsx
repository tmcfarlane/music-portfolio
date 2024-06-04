import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import styles from "./contact.module.css";
import homestyles from "../home/home.module.css";

type FormValues = {
  fullName: string;
  email: string;
  phone: string;
  eventDate?: string; // Optional field
  eventType?: string; // Optional field
  message: string;
};

const Contact: React.FC = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <section id="contact" className={styles["contact"]}>
      <h2 className={styles["heading"]}>
        Contact <span>Me!</span>
      </h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles["input-box"]}>
          <div className={styles["input-field"]}>
            <input
              type="text"
              placeholder="Full Name"
              {...register("fullName", { required: true })}
            />
            <span className={styles["focus"]}></span>
          </div>
        </div>

        <div className={styles["input-box"]}>
          <div className={styles["input-field"]}>
            <input
              type="tel"
              placeholder="Phone Number"
              {...register("phone", { required: true })}
            />
            <span className={styles["focus"]}></span>
          </div>
        </div>

        <div className={styles["input-box"]}>
          <div className={styles["input-field"]}>
            <input
              type="email"
              placeholder="Email"
              {...register("email", { required: true })}
            />
            <span className={styles["focus"]}></span>
          </div>
        </div>

        <div className={styles["input-box"]}>
          <div className={styles["input-field"]}>
            <input
              type="text"
              placeholder="Event Type"
              {...register("eventType")}
            />
            <span className={styles["focus"]}></span>
          </div>
        </div>

        <div className={styles["input-box"]}>
          <div className={styles["input-field"]}>
            <input
              type="date"
              placeholder="Event Date"
              {...register("eventDate")}
            />
            <span className={styles["focus"]}></span>
          </div>
        </div>

        <div className={styles["textarea-field"]}>
          <textarea
            placeholder="Message"
            cols={30}
            rows={10}
            {...register("message", { required: true })}
          />
          <span className={styles["focus"]}></span>
        </div>

        <div className={`${homestyles["btn-box"]} ${homestyles["btns"]}`}>
          <button type="submit" className={homestyles["btn"]}>
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
