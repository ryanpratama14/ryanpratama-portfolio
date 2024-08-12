"use client";

import Img from "@/components/img";
import MenuTitle from "@/components/menu-title";
import { PROJECTS } from "@/lib/constants";
import type { DictionaryStatic } from "@/types";
import Link from "next/link";
import { Autoplay, Mousewheel, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

type Props = { s: DictionaryStatic };

export default function FeaturedProjects({ s }: Props) {
  return (
    <article>
      <MenuTitle title={s.MENUS.featuredProjects} />

      <Swiper
        modules={[Autoplay, Mousewheel, Scrollbar]}
        mousewheel={{ forceToAxis: true }}
        autoplay={{ delay: 1500, pauseOnMouseEnter: true }}
        scrollbar={{ draggable: true }}
        className="w-full"
        simulateTouch={false}
        spaceBetween={10}
        slidesPerView={1.2}
        breakpoints={{ 768: { slidesPerView: 2.2 }, 1024: { slidesPerView: 2.4 }, 1280: { slidesPerView: 3.2 } }}
      >
        {PROJECTS.map((e) => {
          return (
            <SwiperSlide key={e.title}>
              <section className="aspect-[4/5] relative group">
                <section className="absolute left-0 top-0 size-full opacity-0 group-hover:opacity-100 bg-black/80 animate flex flex-col items-center justify-center gap-1.5 px-4 lg:px-8">
                  <p className="text-pretty">{e.desc}</p>
                  <ul className="list-disc ml-4">
                    {e.lists.map((list) => (
                      <li key={list}>{list}</li>
                    ))}
                  </ul>
                  <Link target="_blank" href={e.href} className="box-button mt-2">
                    {s.SECTIONS.visitProject}
                  </Link>
                </section>
                <Img src={e.src} alt={e.desc} className="object-cover size-full" />
              </section>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </article>
  );
}
