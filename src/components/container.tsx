import { cn } from "@/lib/utils";

type Props = { title: string | undefined; children?: React.ReactNode; tag?: "footer" | "nav" | "article"; className?: string };

export default function Container({ title = "", children, tag = "article", className }: Props) {
  const Tag = tag;

  return (
    <Tag className={cn("w-full flex flex-col gap-2.5 component-container", className)}>
      <h2 className="text-gray w-full border-b-2 border-graybg font-semibold">{title}</h2>
      {children}
    </Tag>
  );
}
