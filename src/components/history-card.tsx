import Img from "@/components/html/img";
import Text from "@/components/html/text";
import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useLang } from "@/internationalization/functions";
import { ICONS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { VARIANTS } from "@/styles";
import type { DictionaryStatic, History, Lang } from "@/types";
import { Icon } from "@iconify-icon/react";
import Link from "next/link";

type Props = {
  data: History;
  lang: Lang;
  s: DictionaryStatic;
  isJapanese: boolean;
};

export default function HistoryCard({ data, lang, s, isJapanese }: Props) {
  const { formatMonth } = useLang(lang);

  const e = { ...s.CONSTANTS.HISTORY[data.key], ...data, location: s.LOCATIONS[data.location] };

  const Card = () => {
    return (
      <section className="flex items-center text-left">
        <section
          className={cn("w-[4.25rem] md:w-[5.25rem] aspect-square rounded-l-md shadow", {
            "p-2 flex items-center justify-center bg-white": !e.hasSquarePhoto,
          })}
        >
          <Img src={e.src} alt={e.label} className={cn({ "object-cointain": !e.hasSquarePhoto, "size-full rounded-l-md": e.hasSquarePhoto })} />
        </section>

        <section className="pl-2.5 md:pl-3 flex flex-col">
          <Link target="_blank" rel="noreferrer noopener" href={e.href} className="w-fit flex items-center gap-1 translate-x-[0.085rem]">
            <Icon icon={ICONS.link} width={12} />
            <Text className={cn(VARIANTS.Text({ as: "content", className: "font-medium hover:underline" }))}>{e.label}</Text>
          </Link>
          <Text color="gray">
            <p className="font-medium">{e.desc}</p>
          </Text>
          <Text color="graydarker" as="small">
            <p>{`${e.location} • ${formatMonth(e.since)}${isJapanese ? "〜" : " — "}${e.till ? formatMonth(e.till) : s.SECTIONS.present}`}</p>
          </Text>
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
        <AccordionContent>
          <ul>
            {e.duty.map((duty) => (
              <li key={duty}>{duty}</li>
            ))}
          </ul>
        </AccordionContent>
      </AccordionItem>
    );

  return <Card />;
}
