import GradientText from "@/components/GradientText";
import Iconify from "@/components/Iconify";
import Img from "@/components/Img";
import { experienceData, getIdendityData, skillsData } from "@/lib/constants";
import { cn } from "@/lib/functions";
import { LANGUAGES } from "@/lib/internationalization";
import type { Dictionary, Lang } from "@/types";
import Link from "next/link";

type Props = { t: Dictionary; lang: Lang };

export default function About({ t, lang }: Props) {
  return (
    <article className="min-h-screen main-padding space-y-6" id="about">
      <GradientText text1={t.SECTIONS.aboutMe.split(" ")[0] ?? ""} text2={t.SECTIONS.aboutMe.split(" ")[1] ?? ""} bigger />
      <section className="space-y-1">
        <header className="flex relative w-fit divide-x justify-between gap-2">
          {getIdendityData(t).map((e, i) => {
            return (
              <p key={e} className={cn("font-monserrat label", { "pl-2": i !== 0 })}>
                {e}
              </p>
            );
          })}
        </header>
        <p className="xl:w-[80%]">{t.PERSONAL_DATA.about}</p>
      </section>
      <section className="md:w-[80%] lg:w-[70%] flex flex-wrap gap-y-3 gap-x-4">
        {skillsData.map((e) => {
          return (
            <p key={e.icon} className="flex gap-2 text-sm xl:text-base items-center font-medium text-graydarker">
              <span className="text-turquoise">
                <Iconify icon={e.icon} width={25} />
              </span>
              {e.label}
            </p>
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
                  <header className="w-full flex flex-col px-4">
                    <h5 className="flex items-center drop-shadow gap-2">
                      {e.label}
                      <span className="group-hover:opacity-100 opacity-0 group-hover:-translate-x-0 -translate-x-full p">
                        <Iconify icon="mingcute:external-link-fill" />
                      </span>
                    </h5>
                    <small className="italic text-gray group-hover:text-white font-medium">
                      {e.since.toLocaleDateString(LANGUAGES[lang].locale, {
                        month: "short",
                        year: "numeric",
                      })}{" "}
                      — {e.till || t.SECTIONS.present}
                    </small>
                    <small className="font-medium">{t.LOCATIONS[e.location]}</small>
                  </header>
                </section>
              </Link>
            );
          })}
        </nav>
      </section>
    </article>
  );
}
