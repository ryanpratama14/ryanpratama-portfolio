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
        autoplay={{ delay: 2500, pauseOnMouseEnter: true, stopOnLastSlide: false, disableOnInteraction: false }}
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
              <section className="aspect-[4/5] relative group overflow-hidden rounded-md">
                <section className="rounded-md z-10 absolute left-0 top-0 w-full group-hover:h-full h-0 opacity-0 group-hover:opacity-100 bg-black/90 animate-longer flex flex-col items-center justify-center gap-1.5 px-4 lg:px-8">
                  <small className="text-pretty">{e.desc}</small>
                  <ul>
                    {e.lists.map((list) => (
                      <li key={list}>{list}</li>
                    ))}
                  </ul>
                  <Link target="_blank" href={e.href} className="box-button mt-2">
                    {s.SECTIONS.visitProject}
                  </Link>
                </section>
                <Img src={e.src} alt={e.desc} className="rounded-md object-cover size-full group-hover:scale-[1.1] animate" />
              </section>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </article>
  );
}
