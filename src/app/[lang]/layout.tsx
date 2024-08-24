import Providers from "@/app/providers";
import { LANGS } from "@/internationalization";
import { getMetadata } from "@/lib/metadata";
import type { Lang } from "@/types";

export const generateStaticParams = async () => LANGS.map((lang) => ({ lang }));
export const generateMetadata = async ({ params }: { params: { lang: Lang } }) => getMetadata(params.lang);

type Props = { children: React.ReactNode };

export default function RootLayout({ children }: Props) {
  return <Providers>{children}</Providers>;
}
