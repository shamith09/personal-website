import styles from "./index.module.css";
import Subtitle from "../Subtitle";

export default function Stats({ items }: { items: Record<string, string> }) {
  return (
    <div className={styles.statsList}>
      {Object.keys(items).map((key) => (
        <div className={styles.statsItem} key={key}>
          <p className={`${styles.statsItemTitle} title`}>{key}</p>
          <p className={`${styles.statsItemText} text`}>{items[key]}</p>
        </div>
      ))}
    </div>
  );
}
