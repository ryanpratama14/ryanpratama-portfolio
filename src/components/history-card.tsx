import Iconify from "@/components/html/iconify";
import Img from "@/components/html/img";
import Text from "@/components/html/text";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ICONS } from "@/lib/constants";
import { cn } from "@/lib/functions";
import { useLanguageFn } from "@/lib/internationalization";
import { VARIANTS } from "@/styles";
import type { DictionaryStatic, History, Lang } from "@/types";
import Link from "next/link";

type Props = {
  data: History;
  lang: Lang;
  s: DictionaryStatic;
  className?: string;
};

export default function HistoryCard({ data, lang, className, s }: Props) {
  const { formatMonth } = useLanguageFn(lang);
  const e = { ...s.PERSONAL_DATA.history[data.key], ...data };

  const Card = () => {
    return (
      <section className={cn("flex items-center text-left", className)}>
        {e.hasSquarePhoto ? (
          <Img src={e.src} alt={e.label} className="w-16 lg:w-20 aspect-square rounded-l-md shadow-xl" />
        ) : (
          <section className="w-16 lg:w-20 aspect-square relative bg-white p-2 flex items-center justify-center rounded-l-md shadow-xl">
            <Img src={e.src} className="object-contain" alt={e.label} />
          </section>
        )}
        <section className="pl-2.5 md:pl-3 flex flex-col">
          <section className="flex items-center gap-1 translate-x-[0.075rem]">
            <Iconify icon={ICONS.link} width={12} />
            <Link target="_blank" href={e.href} className={cn(VARIANTS.Text({ as: "content", className: "font-medium hover:underline" }))}>
              {e.label}
            </Link>
          </section>
          <Text color="gray" as="small">
            <p className="font-semibold">{e.desc}</p>
          </Text>
          <Text color="graydarker" as="small">
            <p>
              {formatMonth(e.since)} — {e.till ? formatMonth(e.till) : s.SECTIONS.present}
            </p>
          </Text>
        </section>
      </section>
    );
  };

  if (e.duty)
    return (
      <Accordion type="multiple">
        <AccordionItem value={s.PERSONAL_DATA.history[e.key].label}>
          <AccordionTrigger>
            <Card />
          </AccordionTrigger>
          <AccordionContent>
            <ul className="mt-2">
              {e.duty.map((duty) => (
                <li key={duty}>{duty}</li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    );

  return <Card />;
}
