import Iconify from "@/components/iconify";
import Img from "@/components/img";
import MenuTitle from "@/components/menu-title";
import { EXPERIENCES } from "@/lib/constants";
import { useLanguageFn } from "@/lib/internationalization";
import { COLORS } from "@/styles";
import type { DictionaryStatic, Lang } from "@/types";

type Props = { s: DictionaryStatic; lang: Lang };

export default function ProfessionalExperiences({ s, lang }: Props) {
  const { formatMonth } = useLanguageFn(lang);

  return (
    <article>
      <MenuTitle title={s.MENUS.experience} />

      {EXPERIENCES.map((e) => {
        return (
          <details className="flex flex-col gap-2 group" key={e.label}>
            <summary className="flex items-center text-left relative cursor-pointer group-open:bg-graydarker/20 animate">
              <section className="w-20 aspect-square relative bg-white p-2 flex items-center justify-center">
                <Img src={e.src} className="object-contain" alt={e.label} />
              </section>

              <section className="flex justify-between items-center w-full px-3">
                <section className="space-y-2">
                  <p className="font-medium">{s.PERSONAL_DATA.position[e.position]}</p>
                  <small className="text-graydarker">
                    {e.label} • {formatMonth(e.since)} - {e.till ? formatMonth(e.till) : s.SECTIONS.present}
                  </small>
                </section>
                <Iconify icon="bxs:up-arrow" rotate={2} width={15} color={COLORS.gray} className="animate group-open:rotate-180" />
              </section>
            </summary>

            <ul className="ml-4 list-disc animate mt-2">
              {e.duty.map((duty) => (
                <li key={duty} className="text-sm lg:text-base">
                  {duty}
                </li>
              ))}
            </ul>
          </details>
        );
      })}
    </article>
  );
}
