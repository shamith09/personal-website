import Link from "next/link";
import styles from "./Links.module.css";

export default function Links() {
  return (
    <div className={styles.container}>
      <Link href="/about" className={`${styles.text} text`}>
        About
      </Link>
      <Link href="/blog" className={`${styles.text} text`}>
        Blog
      </Link>
      <Link href="/projects" className={`${styles.text} text`}>
        Projects
      </Link>
      <Link href="/resume" className={`${styles.text} text`}>
        Resume
      </Link>
      <Link href="/contact" className={`${styles.text} text`}>
        Contact
      </Link>
    </div>
  );
}
