import { useLang, validateMatchedLang } from "@/internationalization/functions";
import { cn } from "@/lib/utils";
import type { LangTarget } from "@/types";
import LinkButton from "./html/link-button";

type Props = {
  title: string | undefined;
  children?: React.ReactNode;
  className?: string;
  href?: string;
  lang?: LangTarget;
};

export default function Container({ title = "", children, className, href, lang }: Props) {
  const { s } = useLang(validateMatchedLang(lang));

  return (
    <article className={cn("w-full flex flex-col gap-2.5 wrapper", className)}>
      <header className={cn({ "flex justify-between items-center gap-4": href })}>
        <h2 className="text-gray w-full border-b-2 border-graybg font-semibold">{title}</h2>
        {href ? (
          <LinkButton href={href} className="min-w-36">
            {s.MENUS.more}
          </LinkButton>
        ) : null}
      </header>
      {children}
    </article>
  );
}
