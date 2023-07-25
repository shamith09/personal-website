"use client";

import Typewriter from "typewriter-effect";
import styles from "./ContactIcons.module.css";
import Link from "next/link";
import Subtitle from "./Subtitle";
import { useState, useEffect } from "react";

export default function MyComponent() {
  const [displaySubtitle, setDisplaySubtitle] = useState<boolean>(false);

  useEffect(() => {
    setDisplaySubtitle(true);
  }, []);

  return (
    <div className={styles.container}>
      {displaySubtitle && (
        <div className={styles.subtitle}>
          <Subtitle>Links</Subtitle>
        </div>
      )}
      <div className={styles.containerLeft}>
        <Link
          href="https://www.instagram.com/_shamyth_/"
          className={`${styles.text} text`}
        >
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString("_shamyth_").start();
            }}
            options={{
              cursor: "",
            }}
          />
        </Link>
        <Link
          href="https://twitter.com/shamith09"
          className={`${styles.text} text`}
        >
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString("shamith09").start();
            }}
            options={{
              cursor: "",
            }}
          />
        </Link>
        <Link
          href="https://www.linkedin.com/in/shamith-pasula-802275199/"
          className={`${styles.text} text`}
        >
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString("Shamith Pasula").start();
            }}
            options={{
              cursor: "",
            }}
          />
        </Link>
        <Link
          href="https://github.com/shamith09"
          className={`${styles.text} text`}
        >
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString("shamith09").start();
            }}
            options={{
              cursor: "",
            }}
          />
        </Link>
        <Link
          href="mailto:shamith09@berkeley.edu"
          className={`${styles.text} text`}
        >
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString("shamith09@berkeley.edu").start();
            }}
            options={{
              cursor: "",
            }}
          />
        </Link>
      </div>
    </div>
  );
}
