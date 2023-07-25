import styles from "./index.module.css";

export default function Subtitle({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.titleContainer}>
      <h1 className={styles.title}>{children}</h1>
      <div className={styles.line} />
    </div>
  );
}
