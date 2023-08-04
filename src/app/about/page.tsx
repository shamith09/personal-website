import styles from "./page.module.css";
import LineChart from "@/components/LineChart";

export default function About() {
  return <div className={styles.container}>
    <LineChart text="HTML" percentage={50} />
  </div>;
}
