import { useLang, validateMatchedLang } from "@/internationalization/functions";
import { cn } from "@/lib/utils";
import type { LangTarget } from "@/types";
import LinkButton from "./html/link-button";

type Props = {
  title: string | undefined;
  children?: React.ReactNode;
  tag?: "footer" | "nav" | "article";
  className?: string;
  href?: string;
  lang?: LangTarget;
};

export default function Container({ title = "", children, tag = "article", className, href, lang }: Props) {
  const { s } = useLang(validateMatchedLang(lang));
  const Tag = tag;

  return (
    <Tag className={cn("w-full flex flex-col gap-2.5 wrapper", className)}>
      <header className={cn({ "flex justify-between items-center gap-4": href })}>
        <h2 className="text-gray w-full border-b-2 border-graybg font-semibold">{title}</h2>
        {href ? (
          <LinkButton href={href} className="w-44">
            {s.MENUS.more}
          </LinkButton>
        ) : null}
      </header>
      {children}
    </Tag>
  );
}
