"use client";

import Link from "next/link";
import styles from "./index.module.css";
import { usePathname } from "next/navigation";

export default function Links() {
  const pathname = usePathname();

  return (
    <div className={styles.container}>
      <Link href="/">
        <div
          className={` ${styles.text} text ${
            pathname === "/" ? styles.active : styles.inactive
          }`}
        >
          Home
        </div>
      </Link>
      <Link href="/about">
        <div
          className={`${styles.text} text ${
            pathname === "/about" ? styles.active : styles.inactive
          }`}
        >
          About
        </div>
      </Link>
      <Link href="/blog">
        <div
          className={`${styles.text} text ${
            pathname === "/blog" ? styles.active : styles.inactive
          }`}
        >
          Blog
        </div>
      </Link>
      <Link href="/projects">
        <div
          className={`${styles.text} text ${
            pathname === "/projects" ? styles.active : styles.inactive
          }`}
        >
          Projects
        </div>
      </Link>
      <Link href="/Shamith_Pasula_resume.pdf">
        <div
          className={`${styles.text} text ${
            pathname === "/resume" ? styles.active : styles.inactive
          }`}
        >
          Resume
        </div>
      </Link>
      <Link href="/contact">
        <div
          className={`${styles.text} text ${
            pathname === "/contact" ? styles.active : styles.inactive
          }`}
        >
          Contact
        </div>
      </Link>
    </div>
  );
}
