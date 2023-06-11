"use client";
import React, { useEffect, useState } from "react";
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

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", toggleVisible);
    }
  }, []);

  return (
    <div
      className={`animate
        ${
          visible
            ? "flex scale-100 translate-y-0 justify-center items-center fixed bottom-5 right-0 z-10 w-full"
            : "scale-0 translate-y-12"
        }
      `}
    >
      <div
        onClick={LoadToTop}
        className="block animate cursor-pointer hover:scale-105 hover:-translate-y-1"
      >
        <Icon icon="material-symbols:arrow-back-ios" rotate={1} width={30} />
      </div>
    </div>
  );
};

export default ScrollToTop;
