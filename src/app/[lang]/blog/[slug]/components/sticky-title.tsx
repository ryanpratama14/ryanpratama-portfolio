"use client";

import LinkButton from "@/components/html/link-button";
import LocalTime from "@/components/local-time";
import { ICONS, MAILTO } from "@/lib/constants";
import { cn } from "@/lib/utils";
import type { PostDetail } from "@/sanity/lib/api";
import type { Lang } from "@/types";
import { Icon } from "@iconify-icon/react/dist/iconify.mjs";
import { useEffect, useState } from "react";

export default function StickyTitle({ data, lang }: { data: PostDetail; lang: Lang }) {
  const [visible, setVisible] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      const titleEl = document.getElementById("post-title");
      if (titleEl) {
        const rect = titleEl.getBoundingClientRect();
        const titleTop = rect.top;
        setVisible(titleTop > 0 && titleTop < window.innerHeight);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={cn("py-4 shadow w-full px-4 md:px-6 xl:px-16 left-0 fixed top-0 animate-longer bg-blue-600 main-padding-x", {
        "-translate-y-full invisible opacity-0": visible,
      })}
    >
      <div className="wrapper flex justify-between gap-4 items-center">
        <header className="flex flex-col">
          <h2 className="font-semibold line-clamp-1">{data.title}</h2>
          <LocalTime lang={lang} date={data.publishedAtDate} />
        </header>

        <LinkButton
          unstyled
          href={MAILTO}
          className="shadow size-8 text-[1.3rem] md:size-9 md:text-2xl aspect-square rounded-full flex items-center justify-center bg-white text-blue-600"
        >
          <Icon icon={ICONS.email} />
        </LinkButton>
      </div>
    </nav>
  );
}
