import { PATHS } from "@/app/urls";
import Container from "@/components/container";
import LinkButton from "@/components/html/link-button";
import { useLang } from "@/internationalization/functions";
import { CERTIFICATIONS } from "@/lib/constants";
import type { Lang } from "@/types";

type Props = { params: Promise<{ lang: Lang }> };

export default async function CertificationPage({ params }: Props) {
  const { lang } = await params;
  const { s } = useLang(lang);

  return (
    <Container title={s.MENUS.certifications}>
      <ul className="flex flex-col gap-1 list-disc ml-4">
        {CERTIFICATIONS.map((e) => {
          return (
            <li key={e.name}>
              <LinkButton unstyled href={`${PATHS.certification}/${e.name}`} lang={lang}>
                <p className="font-semibold hover:underline">{e.alt}</p>
              </LinkButton>
            </li>
          );
        })}
      </ul>
    </Container>
  );
}
