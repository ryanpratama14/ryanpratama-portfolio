import MenuTitle from "@/components/menu-title";
import type { DictionaryStatic } from "@/types";

type Props = { s: DictionaryStatic };

export default function About({ s }: Props) {
  return (
    <article>
      <MenuTitle title={s.MENUS.about} />
      <p className="text-pretty">{s.PERSONAL_DATA.about}</p>
    </article>
  );
}
