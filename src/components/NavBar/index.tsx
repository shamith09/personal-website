import styles from "./index.module.css";
import Links from "../Links";
import SPLogo from "public/Logo.png";
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <div className={styles.buffer}>
      <div className={styles.container}>
        <Link href="/" className={styles.logoContainer}>
          <Image src={SPLogo} alt="Logo" className={styles.logo} />
          <p className={`${styles.title} title`}>Shamith</p>
        </Link>
        <Links />
      </div>
    </div>
  );
}
