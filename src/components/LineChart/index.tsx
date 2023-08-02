import styles from "./index.module.css";

export default function LineChart({
  text,
  percentage,
}: {
  text: string;
  percentage: number;
}) {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={`${styles.text} text`}>{text}</div>
        <div className={`${styles.text} text`}>{percentage}%</div>
      </div>
      <div className={styles.bar}>
        <div className={styles.fill} style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
}
