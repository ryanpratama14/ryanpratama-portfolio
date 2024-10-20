import Text from "@/components/html/text";
import { cn } from "@/lib/utils";

type Props = { title: string; children?: React.ReactNode; tag?: "footer" | "nav" | "article"; className?: string };

export default function Container({ title, children, tag = "article", className }: Props) {
  const Tag = tag;

  return (
    <Tag className={cn("flex flex-col gap-2.5 component-container", className)}>
      <Text tag="h2" as="menuTitle" color="gray" className="w-full border-b-2 border-graybg font-semibold">
        {title}
      </Text>
      {children}
    </Tag>
  );
}
