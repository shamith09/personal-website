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
            pathname === "/" && styles.active
          }`}
        >
          Home
        </div>
      </Link>
      <Link href="/about">
        <div
          className={`${styles.text} text ${
            pathname === "/about" && styles.active
          }`}
        >
          About
        </div>
      </Link>
      <Link href="/blog">
        <div
          className={`${styles.text} text ${
            pathname === "/blog" && styles.active
          }`}
        >
          Blog
        </div>
      </Link>
      <Link href="/projects">
        <div
          className={`${styles.text} text ${
            pathname === "/projects" && styles.active
          }`}
        >
          Projects
        </div>
      </Link>
      <Link href="/shamith-pasula-resume.pdf">
        <div className={`${styles.text} text`}>Resume</div>
      </Link>
      <Link href="/contact">
        <div
          className={`${styles.text} text ${
            pathname === "/contact" && styles.active
          }`}
        >
          Contact
        </div>
      </Link>
    </div>
  );
}
