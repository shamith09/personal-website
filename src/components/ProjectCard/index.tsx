import Link from "next/link";
import Image from "next/image";
import styles from "./index.module.css";

export default function ProjectCard({ project }: { project: any }) {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Image src={project.image} alt="" fill />
      </div>
      <div className={styles.bottom}>
        <Link href={project.url} className={styles.name}>
          {project.name}
        </Link>
        <p className={`${styles.description} text`}>{project.description}</p>
      </div>
    </div>
  );
}
