import Icons from "./Icons";
import styles from "./BottomBar.module.css";

interface Props {
  showIcons: boolean;
}

export default function BottomBar({ showIcons }: Props) {
  return (
    <div className={styles.container}>
      <p className={`${styles.text} text`}>Copyright © 2023</p>
      {showIcons ? <Icons /> : <div />}
    </div>
  );
}
