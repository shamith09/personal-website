"use client";

import styles from "./MainSection.module.css";
import HeadShot from "../../public/headshot.png";
import Image from "next/image";
import MovingIcons from "./MovingIcons";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function MainSection({
  children,
}: {
  children: React.ReactNode;
}) {
  const [iconsCenter, setIconsCenter] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    setIconsCenter(pathname === "/contact");
  }, [pathname]);

  return (
    <div className={styles.container}>
      <Image src={HeadShot} alt="" className={styles.image} priority />
      <MovingIcons iconsCenter={iconsCenter} init={pathname === "/contact"} />
      {children}
      {pathname === "/contact" && (
        <>
          <div className={styles.center} />
          <div className={styles.right} />
        </>
      )}
    </div>
  );
}
