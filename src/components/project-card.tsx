"use client";

import { useState } from "react";
import type { PROJECTS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Img from "./html/img";
import LinkButton from "./html/link-button";

export default function ProjectCard({ data }: { data: (typeof PROJECTS)[number] & { desc: string; visitProjectText: string } }) {
  const e = data;

  const [clicked, setClicked] = useState(false);

  return (
    <button type="button" onClick={() => setClicked(!clicked)} className="mb-2 aspect-square relative overflow-hidden rounded-sm group">
      <section
        className={cn(
          "z-10 absolute flex flex-col gap-2.5 justify-between p-2.5 top-0 left-0 size-full opacity-0 bg-black/90 animate group-hover:opacity-100",
          {
            "opacity-100": clicked,
          },
        )}
      >
        <div className="flex flex-col gap-0.5 items-end">
          <p className="font-semibold text-right">{e.label}</p>
          <div className="w-6 h-[1px] bg-white" />
        </div>
        <small className="text-center text-balance">{e.desc}</small>

        <LinkButton href={e.href} className="md:h-7 h-6 w-fit mx-auto mb-1">
          {e.visitProjectText}
        </LinkButton>
      </section>

      <Img
        src={e.src}
        alt={e.desc}
        className={cn("rounded-sm object-cover size-full animate-longer group-hover:scale-[1.1]", { "scale-[1.1]": clicked })}
        priority
      />
    </button>
  );
}
