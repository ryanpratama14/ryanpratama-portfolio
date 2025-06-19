import Link, { type LinkProps } from "next/link";
import type { ComponentProps } from "react";
import type { VariantProps } from "tailwind-variants";
import { addPath, isExternalLink } from "@/app/urls";
import { cn } from "@/lib/utils";
import { VARIANTS } from "@/styles";
import type { Lang } from "@/types";

type Props = LinkProps &
  ComponentProps<"a"> &
  VariantProps<typeof VARIANTS.Button> & {
    children: React.ReactNode;
    lang?: Lang;
    unstyled?: boolean;
    newTab?: boolean;
    disabled?: boolean;
  };

export default function LinkButton({ children, className, style, href, lang, target, rel, unstyled, newTab, disabled, ...rest }: Props) {
  const isNewTab = isExternalLink(href) || newTab;

  if (disabled) {
    return (
      <span className={cn(unstyled ? className : VARIANTS.Button({ className, style }))}>{children || <span className="sr-only">Link</span>}</span>
    );
  }

  return (
    <Link
      href={addPath({ lang, path: href })}
      target={isNewTab ? "_blank" : target}
      rel={isNewTab ? "noreferrer noopener" : rel}
      className={cn(unstyled ? className : VARIANTS.Button({ className, style }))}
      {...rest}
    >
      {children || <span className="sr-only">Link</span>}
    </Link>
  );
}
