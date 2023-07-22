import styles from "./page.module.css";
import "./globals.css";
import NavBar from "@/components/NavBar";
import BottomBar from "@/components/BottomBar";
import MainSection from "@/components/MainSection";
import Name from "@/components/Name";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.navBar}>
        <NavBar />
      </div>
      <MainSection>
        <Name />
      </MainSection>
      <div className={styles.bottomBar}>
        <BottomBar />
      </div>
    </div>
  );
}
