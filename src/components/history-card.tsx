import Img from "@/components/html/img";
import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useLang } from "@/internationalization/functions";
import { ICONS } from "@/lib/constants";
import type { DictionaryStatic, History, Lang } from "@/types";
import { Icon } from "@iconify-icon/react";
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
          <LinkButton unstyled href={e.href} className="line-clamp-1 w-fit flex items-center gap-1 translate-x-[0.085rem]">
            <Icon icon={ICONS.link} width={12} />
            <p className="font-medium hover:underline">{e.label}</p>
          </LinkButton>
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
          {e.about ? <p className="whitespace-pre-line">{e.about}</p> : null}
          <ul className="ml-4 list-disc">
            {e.duty.map((duty) => (
              <li key={duty}>{duty}</li>
            ))}
          </ul>
        </AccordionContent>
      </AccordionItem>
    );

  return <Card />;
}
