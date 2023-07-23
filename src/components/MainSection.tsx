import styles from "./MainSection.module.css";
import HeadShot from "../../public/headshot.png";
import Image from "next/image";

export default function MainSection({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.container}>
      <Image src={HeadShot} alt="" className={styles.image} priority />
      {children}
    </div>
  );
}
