"use client";

import { ICONS } from "@/lib/constants";
import { cn, loadToTop } from "@/lib/utils";
import { Icon } from "@iconify-icon/react";
import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 300) setVisible(true);
      if (scrolled <= 300) setVisible(false);
    };
    window.addEventListener("scroll", toggleVisible, { passive: true });
  }, []);

  return (
    <button
      type="button"
      onClick={loadToTop}
      className={cn(
        "animate fixed px-shorter max-md:right-0 max-md:bottom-0 md:centered-bottom -translate-y-2 hover:scale-110 hover:-translate-y-3 z-10",
        { "scale-0 translate-y-full": !visible },
      )}
    >
      <span className="sr-only">Scroll to Top</span>
      <Icon icon={ICONS.arrow} rotate={1} width={25} />
    </button>
  );
}
