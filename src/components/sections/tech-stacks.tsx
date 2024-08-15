import Container from "@/components/container";
import Iconify from "@/components/html/iconify";
import Text from "@/components/html/text";
import { TECH_STACKS } from "@/lib/constants";
import { VARIANTS } from "@/styles";
import type { DictionaryStatic, TechStack } from "@/types";

type Props = { s: DictionaryStatic };

export default function TechStacks({ s }: Props) {
  const TechStack = ({ name }: { name: keyof TechStack }) => {
    return (
      <section className="flex flex-col gap-1">
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

  const keys = Object.keys(TECH_STACKS) as Array<keyof TechStack>;

  return (
    <Container title={s.MENUS.techstacks}>
      {keys.map((e) => {
        return <TechStack name={e} key={e} />;
      })}
    </Container>
  );
}
