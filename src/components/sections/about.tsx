import GradientText from "@/components/gradient-text";
import Iconify from "@/components/iconify";
import Img from "@/components/img";
import { experienceData, getIdendityData, skillsData } from "@/lib/constants";
import { cn } from "@/lib/functions";
import type { Language } from "@/types";
import Link from "next/link";

type Props = { language: Language };

export default function About({ language }: Props) {
  const { fn, t, isJapanese } = language;

  return (
    <article className="min-h-screen main-padding space-y-6" id="about">
      <GradientText text1={t.SECTIONS.aboutMe.split(" ")[0] ?? ""} text2={t.SECTIONS.aboutMe.split(" ")[1] ?? ""} bigger />
      <section className="space-y-1">
        <section className="flex relative w-fit divide-x justify-between gap-2">
          {getIdendityData(t, isJapanese).map((e, i) => {
            return (
              <p key={e} className={cn("label", { "pl-2": i !== 0 })}>
                {e}
              </p>
            );
          })}
        </section>
        <p className="xl:w-[80%]">{t.PERSONAL_DATA.about}</p>
      </section>
      <section className="md:w-[80%] lg:w-[70%] flex flex-wrap gap-3">
        {skillsData.map((e) => {
          return (
            <section key={e.label} className="flex gap-2 text-sm xl:text-base items-center font-medium text-graydarker">
              <span className="text-turquoise">
                <Iconify icon={e.icon} width={22.5} />
              </span>
              {e.label}
            </section>
          );
        })}
      </section>

      <section className="space-y-4">
        <h4>{t.SECTIONS.professionalExperience}</h4>
        <nav className="grid md:grid-cols-2 xl:grid-cols-3 gap-x-10 gap-y-6">
          {experienceData.map((e) => {
            return (
              <Link
                key={e.label}
                href={e.link}
                target="_blank"
                className="flex group items-center hover:shadow-[-6px_6px_0px_0px_#323232] hover:translate-x-0.5 hover:-translate-y-0.5"
              >
                <figure className="flex items-center justify-center aspect-square p-3 bg-white md:h-[7rem] h-24">
                  <Img src={e.src} alt={e.label} className="object-contain" />
                </figure>
                <section className="relative md:h-[7rem] h-24 flex items-center w-full">
                  <div className="-z-10 absolute w-0 group-hover:w-full animate-longer h-full bg-gradient-to-br from-turquoise" />
                  <section className="w-full flex flex-col px-4">
                    <h5 className="flex items-center drop-shadow gap-2">
                      {e.label}
                      <span className="group-hover:opacity-100 opacity-0 group-hover:-translate-x-0 -translate-x-full p">
                        <Iconify icon="mingcute:external-link-fill" />
                      </span>
                    </h5>
                    <small className="italic text-gray group-hover:text-white font-medium">
                      {fn.formatMonth(e.since)} — {e.till ? fn.formatMonth(e.till) : t.SECTIONS.present}
                    </small>
                    <small className="font-medium">{t.LOCATIONS[e.location]}</small>
                  </section>
                </section>
              </Link>
            );
          })}
        </nav>
      </section>
    </article>
  );
}
