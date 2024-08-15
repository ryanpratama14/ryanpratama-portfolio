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
        breakpoints={{ 768: { slidesPerView: 2.5 }, 1536: { slidesPerView: 3 }, 2056: { slidesPerView: 3.5 } }}
      >
        {PROJECTS.map((e) => {
          return (
            <SwiperSlide key={e.title}>
              <section className="aspect-square relative group overflow-hidden rounded-md mb-2">
                <section className="rounded-md z-10 absolute top-0 left-0 size-full opacity-0 group-hover:opacity-100 bg-black/90 animate">
                  <Text className="absolute font-semibold top-3 w-full px-3 text-right" as="menuTitle">
                    <h1>{e.title}</h1>
                  </Text>
                  <Text className="text-center px-3 w-full absolute centered font-medium text-balance">
                    <p>{e.desc}</p>
                  </Text>

                  <Link target="_blank" href={e.href} className="group-hover:mb-5 absolute centered-bottom box-button">
                    <Text>{s.SECTIONS.visitProject}</Text>
                  </Link>

                  <ul className="sr-only">
                    {e.lists.map((list) => (
                      <li key={list}>{list}</li>
                    ))}
                  </ul>
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
