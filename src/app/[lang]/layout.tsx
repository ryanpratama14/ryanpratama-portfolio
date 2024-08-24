import Providers from "@/app/providers";
import { LANGS } from "@/internationalization";
import { getMetadata } from "@/lib/metadata";
import type { Children, Lang } from "@/types";

export const generateStaticParams = async () => LANGS.map((lang) => ({ lang }));
export const generateMetadata = async ({ params }: { params: { lang: Lang } }) => getMetadata(params.lang);

type Props = Children & { params: { lang: Lang } };

export default async function RootLayout({ children, params: { lang } }: Props) {
  return <Providers lang={lang}>{children}</Providers>;
}
