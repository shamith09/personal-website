"use client";

import styles from "./ContactForm.module.css";
import sendEmail, { Params } from "@/email";

export default function ContactForm() {
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const data = Object.fromEntries(formData) as unknown as Params;
    await sendEmail(data);
  };

  return (
    <form onSubmit={onSubmit}>
      <div className={styles.formContainer}>
        <h1 className={`${styles.title} text`}>Got a question?</h1>
        <div className={`${styles.form} text`}>
          <input name="name" placeholder="Name" className={styles.input} />
        </div>
        <div className={`${styles.form} text`}>
          <input name="email" placeholder="Email" className={styles.input} />
        </div>
        <div className={`${styles.form} text`}>
          <input
            name="subject"
            placeholder="Subject"
            className={styles.input}
          />
        </div>
        <div className={`${styles.form} ${styles.largeForm} text`}>
          <textarea
            name="message"
            placeholder="Message"
            className={styles.input}
          />
        </div>
        <button type="submit" className={styles.button}>
          <div className={`${styles.submit} text`}>Submit</div>
        </button>
      </div>
    </form>
  );
}
