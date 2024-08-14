"use client";

import Img from "@/components/img";
import MenuTitle from "@/components/menu-title";
import Text from "@/components/text";
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
        autoplay={{ delay: 3000, pauseOnMouseEnter: true, stopOnLastSlide: false, disableOnInteraction: false }}
        scrollbar={{ draggable: true, el: ".swiper-scrollbar" }}
        className="w-full"
        simulateTouch={false}
        spaceBetween={10}
        slidesPerView={1.25}
        breakpoints={{ 768: { slidesPerView: 2.25 }, 1280: { slidesPerView: 2.75 }, 1536: { slidesPerView: 3.25 } }}
      >
        {PROJECTS.map((e) => {
          return (
            <SwiperSlide key={e.title}>
              <section className="aspect-[4/5] relative group overflow-hidden rounded-md mb-2">
                <section className="rounded-md z-10 absolute top-0 left-0 size-full opacity-0 group-hover:opacity-100 bg-black/90 animate flex flex-col items-center justify-center gap-1.5 px-4 lg:px-8">
                  <Text>
                    <p className="text-pretty">{e.desc}</p>
                  </Text>

                  <ul className="group-hover:translate-y-0 -translate-y-6 animate">
                    {e.lists.map((list) => (
                      <li key={list}>
                        <Text as="list">{list}</Text>
                      </li>
                    ))}
                  </ul>

                  <Link target="_blank" href={e.href} className="box-button mt-2 group-hover:translate-y-0 translate-y-6">
                    <Text>{s.SECTIONS.visitProject}</Text>
                  </Link>
                </section>
                <Img src={e.src} alt={e.desc} className="rounded-md object-cover size-full group-hover:scale-[1.1] animate" />
              </section>
            </SwiperSlide>
          );
        })}
        <div className="swiper-scrollbar" />
      </Swiper>
    </article>
  );
}
