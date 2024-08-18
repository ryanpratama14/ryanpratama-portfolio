import { cn } from "@/lib/functions";
import { VARIANTS } from "@/styles";
import type { Lang } from "@/types";
import Link, { type LinkProps } from "next/link";
import type { ComponentProps } from "react";
import type { VariantProps } from "tailwind-variants";

type Props = LinkProps & ComponentProps<"a"> & VariantProps<typeof VARIANTS.Button> & { children: React.ReactNode; lang?: Lang };

const LinkButton = ({ children, className, style, href, lang, ...rest }: Props) => {
  const link = lang ? `/${lang}${href}` : href;

  return (
    <Link href={link} {...rest} className={cn(VARIANTS.Button({ className, style }))}>
      {children}
      <span className="sr-only">{children}</span>
    </Link>
  );
};

export default LinkButton;
