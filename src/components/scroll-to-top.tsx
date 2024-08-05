"use client";

import Iconify from "@/components/iconify";
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
        "animate fixed px-normal left-0 bottom-0 md:centered-bottom -translate-y-4 hover:scale-110 hover:-translate-y-6 z-10",
        { "scale-0 translate-y-full": !visible },
      )}
    >
      <span className="sr-only">Scroll to Top</span>
      <Iconify icon="material-symbols:arrow-back-ios" rotate={1} width={30} />
    </button>
  );
}
