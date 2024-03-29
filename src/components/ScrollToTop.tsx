"use client";

import Iconify from "@/components/Iconify";
import { LoadToTop } from "@/utils/utils";
import { useEffect, useState } from "react";

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
      type="button"
      onClick={LoadToTop}
      className={`animate fixed px-normal left-0 bottom-0 md:centered-bottom -translate-y-4 hover:scale-110 hover:-translate-y-6 z-10 ${
        !visible && "scale-0 translate-y-full"
      }`}
    >
      <Iconify icon="material-symbols:arrow-back-ios" rotate={1} width={30} />
    </button>
  );
}
