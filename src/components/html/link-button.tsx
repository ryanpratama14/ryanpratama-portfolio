import { useLangHelper } from "@/internationalization/functions";
import { cn } from "@/lib/utils";
import { VARIANTS } from "@/styles";
import type { Lang } from "@/types";
import Link, { type LinkProps } from "next/link";
import type { ComponentProps } from "react";
import type { VariantProps } from "tailwind-variants";

const { addPath } = useLangHelper();

type Props = LinkProps & ComponentProps<"a"> & VariantProps<typeof VARIANTS.Button> & { children: React.ReactNode; lang?: Lang };

const LinkButton = ({ children, className, style, href, lang, target, rel, ...rest }: Props) => {
  const isExternalLink = href.startsWith("http");

  return (
    <Link
      href={addPath(href, lang)}
      target={isExternalLink ? "_blank" : target}
      rel={isExternalLink ? "noreferrer noopener" : rel}
      {...rest}
      className={cn(VARIANTS.Button({ className, style }))}
    >
      {children}
      <span className="sr-only">{children}</span>
    </Link>
  );
};

export default LinkButton;
