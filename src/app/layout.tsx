import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import styles from "./layout.module.css";
import BottomBar from "@/components/BottomBar";
import MainSection from "@/components/MainSection";
import NavBar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shamith Pasula",
  description: "Shamith Pasula's personal website",
  twitter: {
    card: "summary_large_image",
    images: ["https://shamithpasula.vercel.app/website-preview.png"],
  },
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
          <NavBar />
          <MainSection>
            {children}
          </MainSection>
          <BottomBar />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
