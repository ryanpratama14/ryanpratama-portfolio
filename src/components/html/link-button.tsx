import { cn } from "@/lib/utils";
import { VARIANTS } from "@/styles";
import type { Lang } from "@/types";
import Link, { type LinkProps } from "next/link";
import type { ComponentProps } from "react";
import type { VariantProps } from "tailwind-variants";

type Props = LinkProps &
  ComponentProps<"a"> &
  VariantProps<typeof VARIANTS.Button> & { children: React.ReactNode; lang?: Lang; target?: React.HTMLAttributeAnchorTarget };

const LinkButton = ({ children, className, style, href, lang, target, rel, ...rest }: Props) => {
  const link = lang ? `/${lang}${href}` : href;
  const outerLink = href.startsWith("http");

  return (
    <Link
      href={link}
      target={outerLink ? "_blank" : target}
      rel={outerLink ? "noreferrer noopener" : rel}
      {...rest}
      className={cn(VARIANTS.Button({ className, style }))}
    >
      {children}
      <span className="sr-only">{children}</span>
    </Link>
  );
};

export default LinkButton;
