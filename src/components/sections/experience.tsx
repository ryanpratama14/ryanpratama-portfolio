import Container from "@/components/container";
import HistoryCard from "@/components/history-card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { EXPERIENCES, ICONS } from "@/lib/constants";
import type { DictionaryStatic, Lang } from "@/types";

type Props = { s: DictionaryStatic; lang: Lang };

export default function ProfessionalExperiences({ s, lang }: Props) {
  return (
    <Container title={s.MENUS.experience}>
      {EXPERIENCES.map((e) => {
        return (
          <Accordion key={e.label} type="multiple">
            <AccordionItem value={e.label}>
              <AccordionTrigger>
                <HistoryCard
                  s={s}
                  label={e.label}
                  icon={ICONS.link}
                  href={e.href}
                  since={e.since}
                  till={e.till}
                  src={e.src}
                  lang={lang}
                  description={s.PERSONAL_DATA.position[e.position]}
                />
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
