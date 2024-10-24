import Container from "@/components//container";
import { CONTACTS } from "@/lib/constants";
import { VARIANTS } from "@/styles";
import type { DictionaryStatic } from "@/types";
import { Icon } from "@iconify-icon/react";
import Link from "next/link";

type Props = { s: DictionaryStatic };

export default function Contacts({ s }: Props) {
  return (
    <Container title={s.MENUS.contacts}>
      <ul className="flex gap-1.5 flex-wrap">
        {CONTACTS.map((e) => {
          return (
            <li key={e.label}>
              <Link href={e.href} target="_blank" rel="noreferrer noopener" className={VARIANTS.Box({ style: "contact" })}>
                <Icon icon={e.icon} width={17} />
                {e.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </Container>
  );
}
