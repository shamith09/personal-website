import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <h1 className={`${styles.title} title`}>404</h1>
      <p className={`${styles.text} text`}>Page not found</p>
    </div>
  );
}
