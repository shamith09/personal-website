import styles from "./page.module.css";
import Subtitle from "@/components/Subtitle";

export default function About() {
  return (
    <div className={styles.container}>
      <Subtitle>About me</Subtitle>
      <div className={`${styles.paragraphs} text`}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut
          fermentum purus. Nunc consectetur lorem est, et tempus lacus mattis
          eget. Proin nec mauris commodo, fringilla odio sit amet, venenatis
          turpis. Cras eu euismod dui, vitae volutpat libero.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut
          fermentum purus. Nunc consectetur lorem est, et tempus lacus mattis
          eget. Proin nec mauris commodo, fringilla odio sit amet, venenatis
          turpis. Cras eu euismod dui, vitae volutpat libero.
        </p>
      </div>
      <div className={`${styles.statsContainer} text`}>
        <Subtitle>Stats</Subtitle>
        <div className={styles.statsList}>
          <div className={styles.statsItem}>
            <p className={`${styles.statsItemTitle} title`}>Age</p>
            <p className={`${styles.statsItemText} text`}>19</p>
          </div>
          <div className={styles.statsItem}>
            <p className={`${styles.statsItemTitle} title`}>School</p>
            <p className={`${styles.statsItemText} text`}>UC Berkeley</p>
          </div>
          <div className={styles.statsItem}>
            <p className={`${styles.statsItemTitle} title`}>Major</p>
            <p className={`${styles.statsItemText} text`}>Computer Science & Astrophysics</p>
          </div>
          <div className={styles.statsItem}>
            <p className={`${styles.statsItemTitle} title`}>Hometown</p>
            <p className={`${styles.statsItemText} text`}>San Ramon, CA</p>
          </div>
        </div>
      </div>
    </div>
  );
}
