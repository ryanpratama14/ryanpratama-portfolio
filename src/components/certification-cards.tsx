import { PATHS } from "@/app/urls";
import Container from "@/components/container";
import LinkButton from "@/components/html/link-button";
import { CERTIFICATIONS } from "@/lib/constants";
import type { DictionaryStatic, Lang } from "@/types";

type Props = { s: DictionaryStatic; lang: Lang };

export default function CertificationCards({ s, lang }: Props) {
  return (
    <Container title={s.MENUS.certifications}>
      <ul className="flex flex-col gap-1 list-disc ml-4">
        {CERTIFICATIONS.map((e) => {
          const title = s.CERTIFICATIONS[e.name];
          return (
            <li key={e.name}>
              <LinkButton unstyled href={`${PATHS.certification}/${e.name}`} lang={lang}>
                <p className="hover:underline">{title}</p>
              </LinkButton>
            </li>
          );
        })}
      </ul>
    </Container>
  );
}
