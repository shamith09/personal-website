import styles from "./index.module.css";
import Subtitle from "@/components/Subtitle";
import CircleChart from "@/components/CircleChart";
import LineChart from "@/components/LineChart";

export default function SkillsSection() {
  return (
    <div className={styles.skillsContainer}>
      <div className={styles.languagesContainer}>
        <Subtitle>Languages</Subtitle>
        <div className={styles.circlesContainer}>
          <CircleChart text="Python" percentage={100} />
          <CircleChart text="TypeScript" percentage={90} />
          <CircleChart text="Java" percentage={80} />
          <CircleChart text="C/C++" percentage={75} />
        </div>
      </div>
      <div className={styles.librariesContainer}>
        <Subtitle>Libraries</Subtitle>
        <LineChart text="React.js" percentage={100} />
        <LineChart text="MongoDB" percentage={80} />
        <LineChart text="Tensorflow" percentage={60} />
        <LineChart text="AWS" percentage={50} />
      </div>
    </div>
  );
}
