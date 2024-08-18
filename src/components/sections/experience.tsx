import Container from "@/components/container";
import HistoryCard from "@/components/history-card";
import { EXPERIENCES } from "@/lib/constants";
import type { DictionaryStatic, Lang } from "@/types";

type Props = { s: DictionaryStatic; lang: Lang };

export default function ProfessionalExperiences({ s, lang }: Props) {
  return (
    <Container title={s.MENUS.experience}>
      {EXPERIENCES.map((e) => {
        return <HistoryCard key={e.key} s={s} data={e} lang={lang} />;
      })}
    </Container>
  );
}
