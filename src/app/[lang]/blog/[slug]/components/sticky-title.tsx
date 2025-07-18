"use client";

import { Mail } from "lucide-react";
import { useEffect, useState } from "react";
import LinkButton from "@/components/html/link-button";
import LocalTime from "@/components/local-time";
import { PERSONALS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import type { PostDetailOutput } from "@/server/router/post";
import type { Lang } from "@/types";

export default function StickyTitle({ data, lang }: { data: PostDetailOutput["data"]; lang: Lang }) {
  const [visible, setVisible] = useState<boolean>(true);

  useEffect(() => {
    const ctr = new AbortController();
    const handleScroll = () => {
      const titleEl = document.getElementById("post-title");
      if (titleEl) {
        const rect = titleEl.getBoundingClientRect();
        const titleTop = rect.top;
        setVisible(titleTop > 0 && titleTop < window.innerHeight);
      }
    };
    window.addEventListener("scroll", handleScroll, ctr);

    return () => ctr.abort();
  }, []);

  return (
    <nav
      className={cn("shadow w-full fixed left-0 top-0 animate-longer bg-blue-600 main-padding-x py-3 md:py-4", {
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
          className="shadow p-1 md:p-1.5 aspect-square rounded-sm flex items-center justify-center bg-white hover:bg-white/80 text-blue-600"
        >
          <Mail className="size-5 md:size-[1.4rem]" />
        </LinkButton>
      </div>
    </nav>
  );
}
