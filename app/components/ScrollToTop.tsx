"use client";
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { LoadToTop } from "@/utils/utils";

const ScrollToTop = (): React.JSX.Element => {
  const [visible, setVisible] = useState<boolean>(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", toggleVisible);
  }

  return (
    <div
      className={
        visible
          ? "flex f-centered fixed bottom-6 right-0 z-10 transition-all transform w-full"
          : "hidden"
      }
    >
      <div
        onClick={LoadToTop}
        className="block themedText cursor-pointer hover:scale-105 hover:-translate-y-1"
      >
        <Icon icon="material-symbols:arrow-back-ios" rotate={1} width={30} />
      </div>
    </div>
  );
};

export default ScrollToTop;
