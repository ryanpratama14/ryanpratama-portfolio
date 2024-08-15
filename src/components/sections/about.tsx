import Container from "@/components/container";
import Text from "@/components/text";
import type { DictionaryStatic } from "@/types";

type Props = { s: DictionaryStatic };

export default function About({ s }: Props) {
  return (
    <Container title={s.MENUS.about}>
      <Text>
        <p>{s.PERSONAL_DATA.summary}</p>
      </Text>
    </Container>
  );
}
