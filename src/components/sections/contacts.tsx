import Iconify from "@/components/iconify";
import MenuTitle from "@/components/menu-title";
import Text from "@/components/text";
import { CONTACTS } from "@/lib/constants";
import type { DictionaryStatic } from "@/types";
import Link from "next/link";

type Props = { s: DictionaryStatic };

export default function Contacts({ s }: Props) {
  return (
    <article>
      <MenuTitle title={s.MENUS.contacts} />
      <section className="flex gap-2 flex-wrap">
        {CONTACTS.map((e) => {
          return (
            <Link key={e.label} href={e.href} target="_blank" className="box-contacts">
              <Iconify icon={e.icon} width={17} />
              <Text>{e.label}</Text>
            </Link>
          );
        })}
      </section>
    </article>
  );
}
