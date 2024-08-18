"use client";

import Iconify from "@/components/html/iconify";
import { ICONS } from "@/lib/constants";
import { cn, loadToTop } from "@/lib/functions";
import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState<boolean>(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) setVisible(true);
    if (scrolled <= 300) setVisible(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
  });

  return (
    <button
      type="button"
      onClick={loadToTop}
      className={cn(
        "animate fixed px-shorter max-md:right-0 max-md:bottom-0 md:centered-bottom -translate-y-3 hover:scale-110 hover:-translate-y-4 z-10",
        { "scale-0 translate-y-full": !visible },
      )}
    >
      <span className="sr-only">Scroll to Top</span>
      <Iconify icon={ICONS.arrow} rotate={1} width={25} />
    </button>
  );
}
