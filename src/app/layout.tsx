import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import BottomBar from "@/components/BottomBar";
import NavBar from "@/components/NavBar";
import styles from "./layout.module.css";
import MainSection from "@/components/MainSection";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shamith Pasula",
  description: "Shamith Pasula's personal website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={styles.container}>
          <div className={styles.navBar}>
            <NavBar />
          </div>
          <MainSection>{children}</MainSection>
          <div className={styles.bottomBar}>
            <BottomBar />
          </div>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
