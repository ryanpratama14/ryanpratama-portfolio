"use client";

import { Icon } from "@iconify-icon/react";
import Container from "@/components/container";
import { TECH_STACKS } from "@/lib/constants";
import { VARIANTS } from "@/styles";
import type { DictionaryStatic, TechStack } from "@/types";

type Props = { s: DictionaryStatic };

export default function About({ s }: Props) {
  const TechStack = ({ name }: { name: keyof TechStack }) => {
    return (
      <section className="space-y-0.5">
        <p className="text-graydarker">{s.TECH_STACKS[name]}</p>
        <ul className="flex gap-1 md:gap-1.5 flex-wrap">
          {TECH_STACKS[name].map((e) => {
            return (
              <li key={e.label} className={VARIANTS.Box({ style: "techstack" })}>
                <section className="flex items-center gap-0.5">
                  <Icon icon={e.icon} width={11} />
                  {e.icon2 ? <Icon icon={e.icon2} width={11} /> : null}
                </section>
                {e.label}
              </li>
            );
          })}
        </ul>
      </section>
    );
  };

  const keys = Object.keys(TECH_STACKS) as (keyof TechStack)[];

  return (
    <Container title={s.MENUS.about}>
      <p>{s.PERSONAL_DATA.summary}</p>
      <section className="flex flex-col gap-2">
        {keys.map((e) => {
          return <TechStack name={e} key={e} />;
        })}
      </section>
    </Container>
  );
}
