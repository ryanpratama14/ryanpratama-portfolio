import Text from "@/components/text";

type Props = { title: string };

export default function MenuTitle({ title }: Props) {
  return (
    <Text as="menuTitle" color="gray" className="w-full border-b-2 border-graydarker/20">
      <h1>{title}</h1>
    </Text>
  );
}
