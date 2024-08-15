import Container from "@/components/container";
import Text from "@/components/html/text";
import { TECH_STACKS } from "@/lib/constants";
import { VARIANTS } from "@/styles";
import type { DictionaryStatic, TechStack } from "@/types";
import Iconify from "../html/iconify";

type Props = { s: DictionaryStatic };

export default function About({ s }: Props) {
  const TechStack = ({ name }: { name: keyof TechStack }) => {
    return (
      <section className="flex flex-col gap-0.5">
        <Text color="graydarker">
          <p>{s.MENUS.TECH_STACKS[name]}</p>
        </Text>
        <section className="flex gap-1 md:gap-2 flex-wrap">
          {TECH_STACKS[name].map((e) => {
            return (
              <section key={e.label} className={VARIANTS.Box({ style: "techstack" })}>
                <section className="flex items-center gap-0.5">
                  <Iconify icon={e.icon} width={13} />
                  {e.icon2 ? <Iconify icon={e.icon2} width={13} /> : null}
                </section>

                <Text as="techstack">
                  <p>{e.label}</p>
                </Text>
              </section>
            );
          })}
        </section>
      </section>
    );
  };

  const keys = Object.keys(TECH_STACKS) as (keyof TechStack)[];

  return (
    <Container title={s.MENUS.about}>
      <Text>
        <p>{s.PERSONAL_DATA.summary}</p>
      </Text>
      <section className="flex flex-col gap-2">
        {keys.map((e) => {
          return <TechStack name={e} key={e} />;
        })}
      </section>
    </Container>
  );
}
