import { getMetadata } from "@/app/metadata";
import { URLS } from "@/app/urls";
import Container from "@/components/container";
import PdfViewer from "@/components/pdf-viewer";
import { useLang } from "@/internationalization/functions";
import type { Lang } from "@/types";
import type { Metadata } from "next";

type Props = { params: Promise<{ lang: Lang }> };

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const { s } = useLang((await params).lang);
  return await getMetadata({ title: s.SECTIONS.resume });
};

export default async function ResumePage({ params }: Props) {
  const { lang } = await params;
  const { s } = useLang(lang);

  return (
    <Container title={s.SECTIONS.resume}>
      <PdfViewer className="min-h-[75vh]" fileUrl={URLS.resume} />
    </Container>
  );
}
