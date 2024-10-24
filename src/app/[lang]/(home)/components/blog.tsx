import Container from "@/components/container";
import type { DictionaryStatic } from "@/types";

type Props = { s: DictionaryStatic };

export default function Blog({ s }: Props) {
  return <Container title={s.MENUS.blog}>Blog</Container>;
}
