"use client";
import { useState } from "react";
import { Icon } from "@iconify/react";

const ScrollToTop = (): JSX.Element => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <div
      className={
        visible
          ? "flex justify-center items-center fixed bottom-10 right-0 z-10 transition-all transform w-full"
          : "hidden"
      }
    >
      <div
        onClick={scrollToTop}
        className="block themedText cursor-pointer hover:scale-105 hover:-translate-y-1"
      >
        <Icon icon="material-symbols:arrow-back-ios" rotate={1} width={30} />
      </div>
    </div>
  );
};

export default ScrollToTop;
