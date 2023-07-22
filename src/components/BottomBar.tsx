import Icons from "./Icons";
import styles from "./BottomBar.module.css";

export default function BottomBar() {
  return (
    <div className={styles.container}>
      <p className={`${styles.text} text`}>Copyright © 2023</p>
      <Icons />
    </div>
  );
}
