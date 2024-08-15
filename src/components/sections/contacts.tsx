import Container from "@/components//container";
import Iconify from "@/components/html/iconify";
import Text from "@/components/html/text";
import { CONTACTS } from "@/lib/constants";
import { VARIANTS } from "@/styles/variants";
import type { DictionaryStatic } from "@/types";
import Link from "next/link";

type Props = { s: DictionaryStatic };

export default function Contacts({ s }: Props) {
  return (
    <Container title={s.MENUS.contacts}>
      <section className="flex gap-2 flex-wrap">
        {CONTACTS.map((e) => {
          return (
            <Link key={e.label} href={e.href} target="_blank" className={VARIANTS.Box({ style: "contact" })}>
              <Iconify icon={e.icon} width={17} />
              <Text>{e.label}</Text>
            </Link>
          );
        })}
      </section>
    </Container>
  );
}
