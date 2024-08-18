import Container from "@/components/container";
import Img from "@/components/html/img";
import Text from "@/components/html/text";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { EXPERIENCES, ICONS } from "@/lib/constants";
import { useLanguageFn } from "@/lib/internationalization";
import type { DictionaryStatic, Lang } from "@/types";
import Link from "next/link";
import Iconify from "../html/iconify";

type Props = { s: DictionaryStatic; lang: Lang };

export default function ProfessionalExperiences({ s, lang }: Props) {
  const { formatMonth } = useLanguageFn(lang);

  return (
    <Container title={s.MENUS.experience}>
      {EXPERIENCES.map((e) => {
        return (
          <Accordion key={e.label} type="multiple">
            <AccordionItem value={e.label}>
              <AccordionTrigger>
                <section className="flex items-center text-left relative cursor-pointer animate w-full">
                  <section className="w-16 lg:w-20 aspect-square relative bg-white p-2 flex items-center justify-center rounded-l-md shadow-xl">
                    <Img src={e.src} className="object-contain" alt={e.label} />
                  </section>
                  <section className="pl-2.5 md:pl-3 flex flex-col">
                    <Link target="_blank" href={e.href} className="flex items-center gap-1 md:gap-1.5">
                      <Text className="hover:underline">
                        <p>{e.label}</p>
                      </Text>
                      <Iconify icon={ICONS.link} width={12} />
                    </Link>
                    <Text color="gray" as="small">
                      <p className="font-medium">{s.PERSONAL_DATA.position[e.position]}</p>
                    </Text>
                    <Text color="graydarker" as="small">
                      <p>
                        {formatMonth(e.since)} — {e.till ? formatMonth(e.till) : s.SECTIONS.present}
                      </p>
                    </Text>
                  </section>
                </section>
              </AccordionTrigger>
              <AccordionContent>
                <ul className="mt-2">
                  {e.duty.map((duty) => (
                    <li key={duty}>{duty}</li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        );
      })}
    </Container>
  );
}
