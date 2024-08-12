import MenuTitle from "@/components/menu-title";
import type { DictionaryStatic } from "@/types";

type Props = { s: DictionaryStatic };

export default function About({ s }: Props) {
  return (
    <article>
      <MenuTitle title={s.MENUS.about} />
      <small>{s.PERSONAL_DATA.summary}</small>
    </article>
  );
}
