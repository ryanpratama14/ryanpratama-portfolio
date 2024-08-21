import Iconify from "@/components/html/iconify";
import Img from "@/components/html/img";
import Text from "@/components/html/text";
import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ICONS } from "@/lib/constants";
import { cn } from "@/lib/functions";
import { useLang } from "@/lib/internationalization";
import { VARIANTS } from "@/styles";
import type { History, Lang } from "@/types";
import Link from "next/link";

type Props = {
  data: History;
  lang: Lang;
};

export default function HistoryCard({ data, lang }: Props) {
  const { functions, statics } = useLang(lang);
  const { formatMonth } = functions;
  const { s } = statics;

  const e = { ...s.PERSONAL_DATA.history[data.key], ...data };

  const Card = () => {
    return (
      <section className="flex items-center text-left">
        <section
          className={cn("w-[4.25rem] md:w-[5.25rem] aspect-square rounded-l-md shadow-xl", {
            "p-2 flex items-center justify-center bg-white": !e.hasSquarePhoto,
          })}
        >
          <Img src={e.src} alt={e.label} className={cn({ "object-cointain": !e.hasSquarePhoto, "size-full rounded-l-md": e.hasSquarePhoto })} />
        </section>

        <section className="pl-2.5 md:pl-3 flex flex-col">
          <section className="flex items-center gap-1 translate-x-[0.085rem]">
            <Iconify icon={ICONS.link} width={12} />
            <Link target="_blank" href={e.href} className={cn(VARIANTS.Text({ as: "content", className: "font-medium hover:underline" }))}>
              {e.label}
            </Link>
          </section>
          <Text color="gray">
            <p className="font-medium">{e.desc}</p>
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
      <AccordionItem value={s.PERSONAL_DATA.history[e.key].label}>
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
