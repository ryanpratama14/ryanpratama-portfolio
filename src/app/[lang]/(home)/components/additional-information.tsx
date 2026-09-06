import Container from "@/components/container";
import HistoryCard from "@/components/history-card";
import { Accordion } from "@/components/shadcn/ui/accordion";
import { getLang } from "@/internationalization/functions";
import { OTHERS } from "@/lib/constants";
import type { DictionaryStatic, Lang } from "@/types";

type Props = { s: DictionaryStatic; lang: Lang };

export default function AdditionalInformation({ s, lang }: Props) {
  const { formatList } = getLang(lang);

  return (
    <Container title={s.MENUS.additionalInformation}>
      <section className="space-y-2">
        <section>
          <p className="text-graydarker">{s.OTHER.languages}</p>
          <p>{formatList(OTHERS.languages.map((e) => s.PERSONAL_DATA.languages[e]))}</p>
        </section>
        <section className="space-y-0.5">
          <p className="text-graydarker">{s.OTHER.education}</p>
          <Accordion type="multiple" className="space-y-2.5">
            {OTHERS.education.map((e) => {
              return <HistoryCard key={e.key} data={e} lang={lang} s={s} />;
            })}
          </Accordion>
        </section>
      </section>
    </Container>
  );
}
