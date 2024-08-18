import Container from "@/components/container";
import HistoryCard from "@/components/history-card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { EXPERIENCES } from "@/lib/constants";
import type { DictionaryStatic, Lang } from "@/types";

type Props = { s: DictionaryStatic; lang: Lang };

export default function ProfessionalExperiences({ s, lang }: Props) {
  return (
    <Container title={s.MENUS.experience}>
      {EXPERIENCES.map((e) => {
        return (
          <Accordion key={s.PERSONAL_DATA.history[e.key].label} type="multiple">
            <AccordionItem value={s.PERSONAL_DATA.history[e.key].label}>
              <AccordionTrigger>
                <HistoryCard s={s} data={e} lang={lang} />
              </AccordionTrigger>
              <AccordionContent>
                <ul className="mt-2">
                  {e.duty?.map((duty) => (
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
