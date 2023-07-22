import styles from "./NavBar.module.css";
import Links from "./Links";
import SPLogo from "../../public/Logo.svg";
import Image from "next/image";

export default function NavBar() {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <Image src={SPLogo} alt="Logo" className={styles.logo}/>
        <p className={`${styles.title} title`}>SHAMITH</p>
      </div>
      <Links />
    </div>
  );
}
