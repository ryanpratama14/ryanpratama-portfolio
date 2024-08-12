import MenuTitle from "@/components/menu-title";
import { useLanguageFn } from "@/lib/internationalization";
import type { DictionaryStatic, Lang } from "@/types";
import dayjs from "dayjs";

type Props = { lang: Lang; s: DictionaryStatic };

export default function UpdatedOn({ lang, s }: Props) {
  const { formatDate } = useLanguageFn(lang);
  const title = `${s.MENUS.updatedOn} ${formatDate(dayjs("2024-08-12").toDate())}`;
  return <MenuTitle title={title} />;
}
