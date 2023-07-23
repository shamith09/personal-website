"use client";

import NavBar from "@/components/NavBar";
import MainSection from "@/components/MainSection";
import BottomBar from "@/components/BottomBar";
import MovingIcons from "@/components/MovingIcons";
import { useEffect, useState } from "react";

const MyComponent = () => {
  const [iconsCenter, setIconsCenter] = useState(false);

  useEffect(() => {
    setIconsCenter(true);
  }, []);

  return (
    <>
      <NavBar />
      <MainSection>
        <>
          <MovingIcons iconsCenter={iconsCenter} />
        </>
      </MainSection>
      <BottomBar showIcons={false} />
    </>
  );
};

export default MyComponent;
