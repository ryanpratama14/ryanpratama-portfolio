import Img from "@/components/html/img";
import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/shadcn/ui/accordion";
import { useLang } from "@/internationalization/functions";
import { cn } from "@/lib/utils";
import type { DictionaryStatic, History, Lang } from "@/types";
import { DynamicIcon } from "lucide-react/dynamic";
import LinkButton from "./html/link-button";

type Props = {
  data: History;
  lang: Lang;
  s: DictionaryStatic;
  isJapanese: boolean;
};

export default function HistoryCard({ data, lang, s, isJapanese }: Props) {
  const { formatMonth } = useLang(lang);

  const e = { ...s.CONSTANTS.HISTORY[data.key], ...data, location: s.LOCATIONS[data.location], type: data.type ? s.LOCATION_TYPES[data.type] : "" };

  const Card = () => {
    return (
      <section className="flex items-center text-left">
        <Img src={e.src} alt={e.label} className="size-full rounded-l-md w-[4.25rem] md:w-[5.25rem]" />

        <section className="pl-2.5 md:pl-3 flex flex-col">
          {e.href ? (
            <LinkButton
              unstyled
              href={e.href}
              className="font-medium hover:underline line-clamp-1 w-fit flex items-center gap-1 translate-x-[0.085rem]"
            >
              <DynamicIcon name="external-link" size={12.5} />
              {e.label}
            </LinkButton>
          ) : (
            <p className="font-medium">{e.label}</p>
          )}
          <p className="text-gray font-medium line-clamp-1">{e.desc}</p>

          <small className="text-graydarker">
            {`${e.location}${e.type ? ` (${e.type.toLowerCase()})` : ""} • ${formatMonth(e.since)}${isJapanese ? "〜" : " — "}${e.till ? formatMonth(e.till) : s.SECTIONS.present}`}
          </small>
        </section>
      </section>
    );
  };

  if (e.duty)
    return (
      <AccordionItem value={e.label}>
        <AccordionTrigger>
          <Card />
        </AccordionTrigger>
        <AccordionContent className="space-y-0.5 text-pretty">
          {e.about ? <p className={cn("whitespace-pre-line max-md:text-xs")}>{e.about}</p> : null}
          <ul className="ml-4 list-disc">
            {e.duty.map((duty) => (
              <li key={duty} className={cn("max-md:text-xs")}>
                {duty}
              </li>
            ))}
          </ul>
        </AccordionContent>
      </AccordionItem>
    );

  return <Card />;
}
