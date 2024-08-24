import { cn } from "@/lib/utils";
import { VARIANTS } from "@/styles";
import Link, { type LinkProps } from "next/link";
import type { ComponentProps } from "react";
import type { VariantProps } from "tailwind-variants";

type Props = LinkProps &
  ComponentProps<"a"> &
  VariantProps<typeof VARIANTS.Button> & { children: React.ReactNode; target?: React.HTMLAttributeAnchorTarget };

const LinkButton = ({ children, className, style, href, target, ...rest }: Props) => {
  return (
    <Link href={href} target={href.startsWith("http") ? "_blank" : target} {...rest} className={cn(VARIANTS.Button({ className, style }))}>
      {children}
      <span className="sr-only">{children}</span>
    </Link>
  );
};

export default LinkButton;
