import Container from "@/components/container";
import HistoryCard from "@/components/history-card";
import { Accordion } from "@/components/shadcn/ui/accordion";
import { EXPERIENCES } from "@/lib/constants";
import type { DictionaryStatic, Lang } from "@/types";

type Props = { s: DictionaryStatic; lang: Lang; isJapanese: boolean };

export default function ProfessionalExperiences({ s, lang, isJapanese }: Props) {
  return (
    <Container title={s.MENUS.experience}>
      <Accordion type="multiple" className="space-y-2.5">
        {EXPERIENCES.map((e) => {
          return <HistoryCard s={s} key={e.key} data={e} lang={lang} isJapanese={isJapanese} />;
        })}
      </Accordion>
    </Container>
  );
}
