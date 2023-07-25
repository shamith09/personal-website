import ContactForm from "@/components/ContactForm";
import styles from "./page.module.css";
import ContactIcons from "@/components/ContactIcons";
import Map from "@/components/Map";

export default function MyComponent() {
  
  return (
    <>
      <ContactIcons />
      <div className={styles.center}>
        <Map />
      </div>
      <div className={styles.right}>
        <ContactForm />
      </div>
    </>
  );
}
