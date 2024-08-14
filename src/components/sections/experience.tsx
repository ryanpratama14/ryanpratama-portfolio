import Img from "@/components/img";
import MenuTitle from "@/components/menu-title";
import Text from "@/components/text";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { EXPERIENCES } from "@/lib/constants";
import { useLanguageFn } from "@/lib/internationalization";
import type { DictionaryStatic, Lang } from "@/types";

type Props = { s: DictionaryStatic; lang: Lang };

export default function ProfessionalExperiences({ s, lang }: Props) {
  const { formatMonth } = useLanguageFn(lang);

  return (
    <article>
      <MenuTitle title={s.MENUS.experience} />

      {EXPERIENCES.map((e) => {
        return (
          <Accordion key={e.label} type="multiple">
            <AccordionItem value={e.label}>
              <AccordionTrigger>
                <section className="flex items-center text-left relative cursor-pointer animate w-full">
                  <section className="w-16 md:w-20 aspect-square relative bg-white p-2 flex items-center justify-center rounded-l-md shadow-xl">
                    <Img src={e.src} className="object-contain" alt={e.label} />
                  </section>
                  <section className="pl-2.5 md:pl-3 flex flex-col">
                    <Text>
                      <p>{s.PERSONAL_DATA.position[e.position]}</p>
                    </Text>

                    <Text color="graydarker" as="list">
                      <span className="font-medium">{e.label}</span> • {formatMonth(e.since)} - {e.till ? formatMonth(e.till) : s.SECTIONS.present}
                    </Text>
                  </section>
                </section>
              </AccordionTrigger>
              <AccordionContent>
                <ul className="mt-2">
                  {e.duty.map((duty) => (
                    <li key={duty}>
                      <Text as="list">{duty}</Text>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        );
      })}
    </article>
  );
}
