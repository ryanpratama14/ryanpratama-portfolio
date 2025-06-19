import { Icon } from "@iconify-icon/react";
import Container from "@/components//container";
import LinkButton from "@/components/html/link-button";
import { CONTACTS } from "@/lib/constants";
import { VARIANTS } from "@/styles";
import type { DictionaryStatic } from "@/types";

type Props = { s: DictionaryStatic };

export default function Contacts({ s }: Props) {
  return (
    <Container title={s.MENUS.contacts}>
      <ul className="flex gap-1.5 flex-wrap">
        {CONTACTS.map((e) => {
          return (
            <li key={e.label}>
              <LinkButton unstyled href={e.href} className={VARIANTS.Box({ style: "contact" })}>
                <Icon icon={e.icon} width={17} />
                {e.label}
              </LinkButton>
            </li>
          );
        })}
      </ul>
    </Container>
  );
}
