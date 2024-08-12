import type { DictionaryStatic } from "@/types";
import MenuTitle from "../menu-title";

type Props = { s: DictionaryStatic };

export default function About({ s }: Props) {
  return (
    <article className="main-padding">
      <MenuTitle title={s.MENUS.about} />
      <p className="text-pretty">{s.PERSONAL_DATA.about}</p>
    </article>
  );
}
