"use client";

import type { PROJECTS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useState } from "react";
import Img from "./html/img";
import LinkButton from "./html/link-button";

export default function ProjectCard({ data }: { data: (typeof PROJECTS)[number] & { desc: string; visitProjectText: string } }) {
  const e = data;

  const [clicked, setClicked] = useState(false);

  return (
    <button type="button" onClick={() => setClicked(!clicked)} className="mb-2 aspect-square relative overflow-hidden rounded-sm group">
      <section
        className={cn("z-10 absolute top-0 left-0 size-full opacity-0 bg-black/90 animate group-hover:opacity-100", {
          "opacity-100": clicked,
        })}
      >
        <div
          className={cn("flex flex-col items-end absolute font-semibold top-2 w-full px-3 text-right translate-x-full group-hover:translate-x-0", {
            "translate-x-0": clicked,
          })}
        >
          <p>{e.label}</p>
          <div className="w-6 h-0.5 bg-white" />
        </div>
        <small className="flex text-center px-3 w-full absolute centered font-medium text-balance">{e.desc}</small>

        <LinkButton
          href={e.href}
          className={cn("z-10 translate-y-full absolute centered-bottom group-hover:-translate-y-4", { "-translate-y-4": clicked })}
        >
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
