import ContactForm from "@/components/ContactForm";
import styles from "./page.module.css";
import ContactIcons from "@/components/ContactIcons";

export default function MyComponent() {
  
  return (
    <>
      <ContactIcons />
      <div className={styles.center}></div>
      <div className={styles.right}>
        <ContactForm />
      </div>
    </>
  );
}
