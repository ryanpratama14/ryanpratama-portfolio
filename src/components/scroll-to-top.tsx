"use client";

import { Icon } from "@iconify-icon/react";
import { useEffect, useState } from "react";
import { ICONS } from "@/lib/constants";
import { cn, loadToTop } from "@/lib/utils";

export default function ScrollToTop() {
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    const ctr = new AbortController();
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 300) setVisible(true);
      if (scrolled <= 300) setVisible(false);
    };
    toggleVisible();
    window.addEventListener("scroll", toggleVisible, ctr);
    return () => ctr.abort();
  }, []);

  return (
    <button
      type="button"
      onClick={loadToTop}
      className={cn("fixed px-shorter max-md:right-0 max-md:bottom-0 md:centered-bottom -translate-y-2 hover:scale-110 hover:-translate-y-3 z-10", {
        "scale-0 translate-y-full": !visible,
      })}
    >
      <span className="sr-only">Button</span>
      <Icon icon={ICONS.arrow} rotate={1} width={25} />
    </button>
  );
}
