"use client";

import { useState } from "react";
import styles from "./page.module.css";
import ContactIcons from "@/components/ContactIcons";
import Link from "next/link";

interface State {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function MyComponent() {
  const [state, setState] = useState<State>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  return (
    <>
      <ContactIcons />
      <div className={styles.center}></div>
      <div className={styles.right}>
        <h1 className={`${styles.title} text`}>Got a question?</h1>
        <div className={`${styles.form} text`}>Name</div>
        <div className={`${styles.form} text`}>Email</div>
        <div className={`${styles.form} text`}>Subject</div>
        <div className={`${styles.form} ${styles.largeForm} text`}>Message</div>
        <div className={`${styles.submit} text`}>Submit</div>
      </div>
    </>
  );
}
