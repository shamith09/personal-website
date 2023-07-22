"use client";

import styles from "./Name.module.css";
import Typewriter from "typewriter-effect";

export default function Name() {
  return (
    <div className={styles.container}>
      <h1 className={`${styles.title} title`}>SHAMITH PASULA</h1>
      <div className={styles.line} />
      <div className={`${styles.subtitle} text`}>
        I am
        <Typewriter
          options={{
            strings: [
              " a Software Engineer.",
              " a UC Berkeley student.",
              " a full-stack developer.",
              " an artist."
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
    </div>
  );
}
