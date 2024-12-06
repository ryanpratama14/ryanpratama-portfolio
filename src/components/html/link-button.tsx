import { addPath, isExternalLink } from "@/app/urls";
import { cn } from "@/lib/utils";
import { VARIANTS } from "@/styles";
import type { Lang } from "@/types";
import Link, { type LinkProps } from "next/link";
import type { ComponentProps } from "react";
import type { VariantProps } from "tailwind-variants";

type Props = LinkProps & ComponentProps<"a"> & VariantProps<typeof VARIANTS.Button> & { children: React.ReactNode; lang?: Lang; unstyled?: boolean };

export default function LinkButton({ children, className, style, href, lang, target, rel, unstyled, ...rest }: Props) {
  return (
    <Link
      href={addPath({ lang, path: href })}
      target={isExternalLink(href) ? "_blank" : target}
      rel={isExternalLink(href) ? "noreferrer noopener" : rel}
      {...rest}
      className={cn(unstyled ? className : VARIANTS.Button({ className, style }))}
    >
      {children}
      <span className="sr-only">Link</span>
    </Link>
  );
}
