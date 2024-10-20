import Container from "@/components/container";
import HistoryCard from "@/components/history-card";
import Text from "@/components/html/text";
import { Accordion } from "@/components/ui/accordion";
import { OTHERS } from "@/lib/constants";
import type { DictionaryStatic, Lang } from "@/types";

type Props = { s: DictionaryStatic; lang: Lang; isJapanese: boolean };

export default function AdditionalInformation({ s, lang, isJapanese }: Props) {
  return (
    <Container title={s.MENUS.additionalInformation}>
      <section className="flex flex-col gap-2">
        <section className="flex flex-col">
          <Text tag="p" color="graydarker">
            {s.MENUS.OTHER.languages}
          </Text>

          <Text tag="p">{OTHERS.languages.map((e) => s.PERSONAL_DATA.languages[e]).join(isJapanese ? "、" : " / ")}</Text>
        </section>
        <section className="flex flex-col gap-0.5">
          <Text tag="p" color="graydarker">
            {s.MENUS.OTHER.education}
          </Text>
          <Accordion type="multiple" className="space-y-2.5">
            {OTHERS.education.map((e) => {
              return <HistoryCard key={e.key} data={e} lang={lang} s={s} isJapanese={isJapanese} />;
            })}
          </Accordion>
        </section>
      </section>
    </Container>
  );
}
