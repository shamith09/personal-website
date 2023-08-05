"use client";

import { useEffect, useState } from "react";
import styles from "./index.module.css";

export default function LineChart({
  text,
  percentage,
}: {
  text: string;
  percentage: number;
}) {
  const [fillWidth, setFillWidth] = useState(0);

  useEffect(() => {
    setFillWidth(percentage);
  }, [percentage]);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={`${styles.text} text`}>{text}</div>
        <div className={`${styles.text} text`}>{percentage}%</div>
      </div>
      <div className={styles.bar}>
        <div
          className={styles.fill}
          style={{ width: `${fillWidth}%` }}
        ></div>
      </div>
    </div>
  );
}
