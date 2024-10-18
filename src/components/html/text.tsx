import { cn } from "@/lib/utils";
import { VARIANTS } from "@/styles";
import type { VariantProps } from "tailwind-variants";

type Props = VariantProps<typeof VARIANTS.Text> & {
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "p" | "small";
  className?: string;
  children: React.ReactNode;
};

export default function Text({ children, tag, className, as, color }: Props) {
  const Tag = tag;

  return <Tag className={cn(VARIANTS.Text({ className, color, as }))}>{children}</Tag>;
}
