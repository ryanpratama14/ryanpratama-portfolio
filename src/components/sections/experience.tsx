import Container from "@/components/container";
import HistoryCard from "@/components/history-card";
import { Accordion } from "@/components/ui/accordion";
import { EXPERIENCES } from "@/lib/constants";
import type { DictionaryStatic, Lang } from "@/types";

type Props = { s: DictionaryStatic; lang: Lang };

export default function ProfessionalExperiences({ s, lang }: Props) {
  return (
    <Container title={s.MENUS.experience}>
      <Accordion type="multiple" className="space-y-2.5">
        {EXPERIENCES.map((e) => {
          return <HistoryCard key={e.key} data={e} lang={lang} />;
        })}
      </Accordion>
    </Container>
  );
}
