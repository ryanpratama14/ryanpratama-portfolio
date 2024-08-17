import Container from "@/components/container";
import Img from "@/components/html/img";
import Text from "@/components/html/text";
import { OTHERS } from "@/lib/constants";
import { useLanguageFn } from "@/lib/internationalization";
import type { DictionaryStatic, Lang } from "@/types";

type Props = { s: DictionaryStatic; lang: Lang; isJapanese: boolean };

export default function AdditionalInformation({ s, lang, isJapanese }: Props) {
  const { formatMonth } = useLanguageFn(lang);
  const { education: edu } = s.PERSONAL_DATA;

  return (
    <Container title={s.MENUS.additionalInformation}>
      <section className="flex flex-col gap-2">
        <section className="flex flex-col gap-0.5">
          <Text color="graydarker">
            <p>{s.MENUS.OTHER.education}</p>
          </Text>
          {OTHERS.education.map((e) => {
            return (
              <section key={e.key} className="flex items-center">
                <Img src={e.src} alt={edu[e.key].title} className="w-16 lg:w-20 aspect-square rounded-l-md shadow-xl" />
                <section className="pl-2.5 md:pl-3 flex flex-col">
                  <Text>
                    <p>{edu[e.key].title}</p>
                  </Text>
                  <Text color="gray" as="small">
                    <p className="font-medium">{edu[e.key].major}</p>
                  </Text>
                  <Text color="graydarker" as="small">
                    <p>
                      {formatMonth(e.since)} — {formatMonth(e.till)}
                    </p>
                  </Text>
                </section>
              </section>
            );
          })}
        </section>

        <section className="flex flex-col">
          <Text color="graydarker">
            <p>{s.MENUS.OTHER.languages}</p>
          </Text>

          <Text>
            <p>{OTHERS.languages.map((e) => s.PERSONAL_DATA.languages[e]).join(isJapanese ? "、" : " / ")}</p>
          </Text>
        </section>
      </section>
    </Container>
  );
}
