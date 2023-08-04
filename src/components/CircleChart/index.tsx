"use client";

import React, { useState, useEffect } from "react";
import styles from "./index.module.css";

export default function CircleChart({
  text,
  percentage,
}: {
  text: string;
  percentage: number;
}) {
  const [clampedPercentage, setClampedPercentage] = useState(0);

  useEffect(() => {
    setClampedPercentage(Math.min(Math.max(percentage, 0), 100));
  }, [percentage]);

  // Calculate the stroke-dasharray value to create the partial darker circle
  const circumference = 2 * Math.PI * 45; // Radius is 45
  const dashArrayValue = `${
    (circumference * clampedPercentage) / 100
  } ${circumference}`;

  return (
    <div className={styles.circleContainer}>
      <svg className={styles.circleSvg} viewBox="0 0 100 100">
        {/* Background circle */}
        <circle className={styles.circleBackground} cx="50" cy="50" r="45" />

        {/* Partial darker circle */}
        <circle
          className={`${styles.circleOverlay} ${styles.contiguousOverlay}`}
          cx="50"
          cy="50"
          r="45"
          strokeDasharray={dashArrayValue}
        />
      </svg>
      <div className={`${styles.textContainer} text`}>
        <div className={styles.percentageText}>{percentage}%</div>
        <div className={styles.descriptionText}>{text}</div>
      </div>
    </div>
  );
}
