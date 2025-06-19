import Img from "@/components/html/img";
import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/shadcn/ui/accordion";
import { getLang } from "@/internationalization/functions";
import { cn } from "@/lib/utils";
import type { DictionaryStatic, History, Lang } from "@/types";
import LinkButton from "./html/link-button";

type Props = {
  data: History;
  lang: Lang;
  s: DictionaryStatic;
  isJapanese: boolean;
};

export default function HistoryCard({ data, lang, s, isJapanese }: Props) {
  const { formatMonth } = getLang(lang);

  const e = { ...s.CONSTANTS.HISTORY[data.key], ...data, location: s.LOCATIONS[data.location], type: data.type ? s.LOCATION_TYPES[data.type] : "" };

  const Card = () => {
    return (
      <section className="flex items-center text-left">
        <Img src={e.src} alt={e.label} className="size-full rounded-l-sm w-[3.75rem] md:w-[4.25rem]" />
        <section className="pl-2 md:pl-2.5 flex flex-col gap-0.5">
          <p className="font-semibold line-clamp-1">{e.desc}</p>
          <small className="font-medium text-gray">{e.label}</small>
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
        <AccordionContent className="flex flex-col gap-0.5">
          {e.about ? <p className={cn("whitespace-pre-line text-pretty")}>{e.about}</p> : null}
          <LinkButton unstyled href={e.href} className="w-fit font-medium border-b-1 border-blue-300 text-blue-300">
            {e.href.replace(/https:\/\/(www\.)?/g, "")}
          </LinkButton>
          <ul className="ml-4 list-disc mt-1">
            {e.duty.map((duty) => (
              <li key={duty} className={cn("")}>
                {duty}
              </li>
            ))}
          </ul>
        </AccordionContent>
      </AccordionItem>
    );

  return <Card />;
}
