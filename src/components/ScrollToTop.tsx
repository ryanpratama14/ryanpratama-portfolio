"use client";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { LoadToTop } from "@/utils/utils";

export default function ScrollToTop(): React.JSX.Element {
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
    <button
      onClick={LoadToTop}
      className={`animate fixed bottom-4 hover:scale-110 hover:-translate-y-1 -translate-x-[50%] left-[50%] z-10 ${
        !visible && "scale-0 translate-y-full"
      }`}
    >
      <Icon icon="material-symbols:arrow-back-ios" rotate={1} width={30} />
    </button>
  );
}
