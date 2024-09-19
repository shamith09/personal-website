import TableList from "@/components/TableList";
import styles from "./page.module.css";
import Subtitle from "@/components/Subtitle";
import Link from "next/link";
import SkillsSection from "@/components/SkillsSection";

export default function About() {
  const stats = {
    Age: "21",
    School: "University of California, Berkeley",
    Major: "Computer Science",
    Hometown: "San Ramon, CA",
  };

  const interests = {
    Music: "Rap, R&B, Pop",
    Sports: "MMA, Cricket, Spikeball",
    Organizations: "PlexTech, CS 162 Staff",
    Hobbies: "Working out, Making music, Selling pani puri",
  };

  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <Subtitle>About me</Subtitle>
        <div className={styles.paragraphContainer}>
          <p className={`${styles.paragraph} text`}>
            I&apos;m a third year at UC Berkeley studying Computer Science and
            Astrophysics. I&apos;m passionate about building products that
            improve our lives little by little, and I&apos;m not afraid of
            getting my hands dirty and overengineering things.
          </p>
          <p className={`${styles.paragraph} text`}>
            My interests lie in full-stack development, machine learning,
            robotics, and systems engineering. I&apos;m always looking for
            opportunities to learn new things and work with new people, so feel
            free to visit the <Link href="/contact">Contact</Link> page and
            reach out!
          </p>
        </div>
      </div>
      <div className={styles.section}>
        <div className={`${styles.statsAndInterestsContainer} text`}>
          <div className={styles.statsContainer}>
            <Subtitle>Stats</Subtitle>
            <TableList items={stats} />
          </div>
          <div className={styles.interestsContainer}>
            <Subtitle>Interests</Subtitle>
            <TableList items={interests} />
          </div>
        </div>
      </div>
      <div className={styles.section}>
        <SkillsSection />
      </div>
      <div className={styles.section}>
        {/* <Subtitle>Experience</Subtitle> */}
      </div>
    </div>
  );
}
