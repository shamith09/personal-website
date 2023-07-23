import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Instagram from "../../public/instagram.svg";
import Twitter from "../../public/twitter.svg";
import LinkedIn from "../../public/linkedin.svg";
import GitHub from "../../public/github.svg";
import GMail from "../../public/gmail.svg";
import styles from "./MovingIcons.module.css";

interface Props {
  iconsCenter: boolean;
}

export default function MovingIcons({ iconsCenter }: Props) {
  const size = iconsCenter ? 32 : 16;

  return (
    <div
      className={`${styles.iconContainer} ${
        iconsCenter ? styles.initial : styles.final
      }`}
    >
      <motion.div layout style={{ width: `${size}px`, height: `${size}px` }}>
        <Link href="https://www.instagram.com/_shamyth_/">
          <Image src={Instagram} alt="Instagram" height={size} />
        </Link>
      </motion.div>
      <motion.div layout style={{ width: `${size}px`, height: `${size}px` }}>
        <Link href="https://twitter.com/shamith09">
          <Image src={Twitter} alt="Twitter" height={size} />
        </Link>
      </motion.div>
      <motion.div layout style={{ width: `${size}px`, height: `${size}px` }}>
        <Link href="https://www.linkedin.com/in/shamith-pasula-802275199/">
          <Image src={LinkedIn} alt="LinkedIn" height={size} />
        </Link>
      </motion.div>
      <motion.div layout style={{ width: `${size}px`, height: `${size}px` }}>
        <Link href="https://github.com/shamith09">
          <Image src={GitHub} alt="GitHub" height={size} />
        </Link>
      </motion.div>
      <motion.div layout style={{ width: `${size}px`, height: `${size}px` }}>
        <Link href="mailto:shamith09@berkeley.edu">
          <Image src={GMail} alt="GMail" height={size} />
        </Link>
      </motion.div>
    </div>
  );
}
