import Subtitle from "@/components/Subtitle";
import styles from "./page.module.css";
import ProjectCard from "@/components/ProjectCard";
import projects from "./projects"

export interface Project {
  name: string;
  description: string;
  image: string;
  url: string;
}

export default function Projects() {
  return (
    <div className={styles.container}>
      <Subtitle>Projects</Subtitle>
      <div className={styles.grid}>
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </div>
  );
}
