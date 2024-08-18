import Container from "@/components/container";
import HistoryCard from "@/components/history-card";
import Text from "@/components/html/text";
import { ICONS, OTHERS } from "@/lib/constants";
import type { DictionaryStatic, Lang } from "@/types";

type Props = { s: DictionaryStatic; lang: Lang; isJapanese: boolean };

export default function AdditionalInformation({ s, lang, isJapanese }: Props) {
  const { education: edu } = s.PERSONAL_DATA;

  return (
    <Container title={s.MENUS.additionalInformation}>
      <section className="flex flex-col gap-2">
        <section className="flex flex-col">
          <Text color="graydarker">
            <p>{s.MENUS.OTHER.languages}</p>
          </Text>

          <Text>
            <p>{OTHERS.languages.map((e) => s.PERSONAL_DATA.languages[e]).join(isJapanese ? "、" : " / ")}</p>
          </Text>
        </section>
        <section className="flex flex-col gap-0.5">
          <Text color="graydarker">
            <p>{s.MENUS.OTHER.education}</p>
          </Text>
          {OTHERS.education.map((e) => {
            return (
              <HistoryCard
                hasSquarePhoto
                key={e.key}
                label={edu[e.key].title}
                icon={ICONS.link}
                href={e.href}
                since={e.since}
                till={e.till}
                src={e.src}
                lang={lang}
                description={edu[e.key].major}
              />
            );
          })}
        </section>
      </section>
    </Container>
  );
}
