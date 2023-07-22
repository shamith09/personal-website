import styles from "./Name.module.css";

export default function Name() {
  return (
    <div className={styles.container}>
      <h1 className={`${styles.title} title`}>SHAMITH PASULA</h1>
      <div className={styles.line} />
      <h2 className={`${styles.subtitle} text`}>Software Engineer</h2>
    </div>
  );
}
