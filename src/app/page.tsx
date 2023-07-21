import Image from "next/image";
import styles from "./page.module.css";
import SPLogo from "../../public/Logo.svg";

export default function Home() {
  return (
    <>
      <Image src={SPLogo} alt="logo" />
    </>
  );
}
