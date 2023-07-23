import Link from "next/link";
import Instagram from "../../public/instagram.svg";
import Twitter from "../../public/twitter.svg";
import LinkedIn from "../../public/linkedin.svg";
import GitHub from "../../public/github.svg";
import GMail from "../../public/gmail.svg";
import Image from "next/image";
import styles from "./Icons.module.css";

export default function Icons() {
  return (
    <div className={styles.container}>
      <Link href="https://www.instagram.com/_shamyth_/">
        <Image src={Instagram} alt="Instagram" height={24} />
      </Link>
      <Link href="https://twitter.com/shamith09">
        <Image src={Twitter} alt="Twitter" height={24} />
      </Link>
      <Link href="https://www.linkedin.com/in/shamith-pasula-802275199/">
        <Image src={LinkedIn} alt="LinkedIn" height={24} />
      </Link>
      <Link href="https://github.com/shamith09">
        <Image src={GitHub} alt="GitHub" height={24} />
      </Link>
      <Link href="mailto:shamith09@berkeley.edu">
        <Image src={GMail} alt="GMail" height={24} />
      </Link>
    </div>
  );
}
