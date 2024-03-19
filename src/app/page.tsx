"use client";

import styles from "./page.module.css";
import Typewriter from "typewriter-effect";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={`${styles.title} title`}>Shamith Pasula</h1>
      <div className={styles.line} />
      <div className={`${styles.subtitle} text`}>
        I am
        <Typewriter
          options={{
            strings: [
              " a software engineer.",
              " a UC Berkeley student.",
              " a full-stack developer.",
              " an artist.",
            ],
            autoStart: true,
            loop: true,
            delay: 35,
            deleteSpeed: 35
          }}
        />
      </div>
    </div>
  );
}
