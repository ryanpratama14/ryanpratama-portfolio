import Iconify from "@/components/html/iconify";
import Img from "@/components/html/img";
import Text from "@/components/html/text";
import { ICONS } from "@/lib/constants";
import { cn } from "@/lib/functions";
import { useLanguageFn } from "@/lib/internationalization";
import { VARIANTS } from "@/styles";
import type { DictionaryStatic, History, Lang } from "@/types";
import Link from "next/link";

type Props = {
  data: History;
  lang: Lang;
  className?: string;
  s: DictionaryStatic;
};

export default function HistoryCard({ data, lang, className, s }: Props) {
  const { formatMonth } = useLanguageFn(lang);
  const e = s.PERSONAL_DATA.history[data.key];

  return (
    <section className={cn("flex items-center text-left", className)}>
      {data.hasSquarePhoto ? (
        <Img src={data.src} alt={e.label} className="w-16 lg:w-20 aspect-square rounded-l-md shadow-xl" />
      ) : (
        <section className="w-16 lg:w-20 aspect-square relative bg-white p-2 flex items-center justify-center rounded-l-md shadow-xl">
          <Img src={data.src} className="object-contain" alt={e.label} />
        </section>
      )}
      <section className="pl-2.5 md:pl-3 flex flex-col">
        <section className="flex items-center gap-1 translate-x-[0.075rem]">
          <Iconify icon={ICONS.link} width={12} />
          <Link target="_blank" href={data.href} className={cn(VARIANTS.Text({ as: "content", className: "hover:underline" }))}>
            {e.label}
          </Link>
        </section>
        <Text color="gray" as="small">
          <p className="font-semibold">{e.desc}</p>
        </Text>
        <Text color="graydarker" as="small">
          <p>
            {formatMonth(data.since)} — {data.till ? formatMonth(data.till) : s.SECTIONS.present}
          </p>
        </Text>
      </section>
    </section>
  );
}

// text-left relative cursor-pointer animate w-full
