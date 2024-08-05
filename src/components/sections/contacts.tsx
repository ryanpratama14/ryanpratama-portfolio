import GradientText from "@/components/gradient-text";
import Iconify from "@/components/iconify";
import { linkSocial } from "@/lib/constants";
import { cn } from "@/lib/functions";
import type { Dictionary } from "@/types";
import Link from "next/link";

type Props = { isMain?: boolean; t: Dictionary };

export default function Contacts({ isMain = true, t }: Props) {
  return (
    <article
      id="contacts"
      className={cn("relative main-padding flex flex-col gap-6 justify-center min-h-[50vh]", {
        "min-h-[40vh]": isMain,
      })}
    >
      <div className="top-12 max-xl:hidden absolute left-44 w-72 aspect-square rounded-full bg-blue/30 blur-3xl -z-10" />
      <GradientText text1={t.SECTIONS.moreContacts.split(" ")[0] ?? ""} text2={t.SECTIONS.moreContacts.split(" ")[1] ?? ""} bigger />
      <p className="md:w-[80%] lg:w-[70%] xl:w-[65%]">{t.SECTIONS.moreContactsDescription}</p>
      <nav className="flex gap-2 self-end">
        {linkSocial.map((e) => {
          return (
            <Link
              key={e.href}
              href={e.href}
              rel="noreferrer"
              target="_blank"
              className="flex flex-col items-center hover:shadow-glowed"
            >
              <span className="rotate-[10deg] hover:rotate-0 hover:-translate-y-1 hover:scale-110 animate-longer">
                <Iconify icon={e.icon} width={35} />
              </span>
              <span className="sr-only">{e.label}</span>
            </Link>
          );
        })}
      </nav>
    </article>
  );
}
