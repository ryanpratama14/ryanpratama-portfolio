import Iconify from "@/components/html/iconify";
import Img from "@/components/html/img";
import Text from "@/components/html/text";
import { cn } from "@/lib/functions";
import { useLanguage, useLanguageFn } from "@/lib/internationalization";
import { VARIANTS } from "@/styles";
import type { Lang } from "@/types";
import type { IconifyIcon } from "@iconify/react/dist/iconify.js";
import type { StaticImageData } from "next/image";
import Link from "next/link";

type Props = {
  src: StaticImageData;
  icon: IconifyIcon | string;
  label: string;
  lang: Lang;
  since: Date;
  till?: Date | null;
  description: string;
  href: string;
  hasSquarePhoto?: boolean;
  className?: string;
};

export default function HistoryCard(e: Props) {
  const { s } = useLanguage(e.lang);
  const { formatMonth } = useLanguageFn(e.lang);

  return (
    <section className={cn("flex items-center text-left", e.className)}>
      {e.hasSquarePhoto ? (
        <Img src={e.src} alt={e.label} className="w-16 lg:w-20 aspect-square rounded-l-md shadow-xl" />
      ) : (
        <section className="w-16 lg:w-20 aspect-square relative bg-white p-2 flex items-center justify-center rounded-l-md shadow-xl">
          <Img src={e.src} className="object-contain" alt={e.label} />
        </section>
      )}
      <section className="pl-2.5 md:pl-3 flex flex-col">
        <section className="flex items-center gap-1">
          <Iconify icon={e.icon} width={12} />
          <Link target="_blank" href={e.href} className={cn(VARIANTS.Text({ as: "content", className: "hover:underline" }))}>
            {e.label}
          </Link>
        </section>
        <Text color="gray" as="small">
          <p className="font-medium">{e.description}</p>
        </Text>
        <Text color="graydarker" as="small">
          <p>
            {formatMonth(e.since)} — {e.till ? formatMonth(e.till) : s.SECTIONS.present}
          </p>
        </Text>
      </section>
    </section>
  );
}

// text-left relative cursor-pointer animate w-full
