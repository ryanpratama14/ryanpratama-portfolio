import Text from "@/components/html/text";

type Props = { title: string; children?: React.ReactNode };

export default function Container({ title, children }: Props) {
  return (
    <article className="flex flex-col gap-2.5">
      <Text as="menuTitle" color="gray" className="uppercase w-full border-b-2 border-graydarker/20">
        <h1>{title}</h1>
      </Text>
      {children}
    </article>
  );
}
