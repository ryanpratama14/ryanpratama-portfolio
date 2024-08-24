import NotFound from "@/components/not-found";
import { HEADERS } from "@/lib/constants";
import type { Lang } from "@/types";
import { headers } from "next/headers";

export default async function NotFoundPage() {
  const lang = headers().get(HEADERS.lang) as Lang;
  return <NotFound lang={lang} />;
}
