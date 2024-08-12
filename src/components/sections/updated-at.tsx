import { useLanguageFn } from "@/lib/internationalization";
import type { DictionaryStatic, Lang } from "@/types";
import dayjs from "dayjs";
import MenuTitle from "../menu-title";

type Props = { lang: Lang; s: DictionaryStatic };

export default function UpdatedAt({ lang, s }: Props) {
  const { formatDate } = useLanguageFn(lang);
  const title = `${s.MENUS.updatedAt} ${formatDate(dayjs("2024-08-12").toDate())}`;
  return <MenuTitle title={title} />;
}
