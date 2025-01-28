"use client";

import LinkButton from "@/components/html/link-button";
import LocalTime from "@/components/local-time";
import { ICONS, PERSONALS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import type { SanityPostDetaiResultOutput } from "@/server/api/routers/sanity";
import type { Lang } from "@/types";
import { Icon } from "@iconify-icon/react/dist/iconify.mjs";
import { useEffect, useState } from "react";

type Props = { data: SanityPostDetaiResultOutput; lang: Lang };

export default function StickyTitle({ data, lang }: Props) {
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

    const ctr = new AbortController();

    window.addEventListener("scroll", handleScroll, { signal: ctr.signal });

    return () => {
      ctr.abort();
    };
  }, []);

  return (
    <nav
      className={cn("shadow-sm w-full fixed left-0 top-0 animate-longer bg-blue-600 main-padding-x py-4", {
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
          href={PERSONALS.mailTo}
          className="shadow-sm size-8 text-[1.3rem] md:size-9 md:text-2xl aspect-square rounded-full flex items-center justify-center bg-white hover:bg-white/80 text-blue-600"
        >
          <Icon icon={ICONS.email} />
        </LinkButton>
      </div>
    </nav>
  );
}
