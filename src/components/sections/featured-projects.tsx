"use client";

import Container from "@/components/container";
import Img from "@/components/html/img";
import LinkButton from "@/components/html/link-button";
import Text from "@/components/html/text";
import { PROJECTS } from "@/lib/constants";
import type { DictionaryStatic } from "@/types";
import { Autoplay, Mousewheel, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

type Props = { s: DictionaryStatic };

export default function FeaturedProjects({ s }: Props) {
  return (
    <Container title={s.MENUS.featuredProjects}>
      <Swiper
        modules={[Autoplay, Mousewheel, Scrollbar]}
        mousewheel={{ forceToAxis: true }}
        autoplay={{ delay: 3000, pauseOnMouseEnter: true, stopOnLastSlide: false, disableOnInteraction: false }}
        scrollbar={{ draggable: true, el: ".swiper-scrollbar" }}
        className="w-full"
        simulateTouch={false}
        spaceBetween={10}
        slidesPerView={1.25}
        breakpoints={{ 768: { slidesPerView: 2.5 }, 2056: { slidesPerView: 2.75 } }}
      >
        {PROJECTS.map((e) => {
          return (
            <SwiperSlide key={e.title}>
              <section className="aspect-square relative group overflow-hidden rounded-md mb-2">
                <section className="rounded-md z-10 absolute top-0 left-0 size-full opacity-0 group-hover:opacity-100 bg-black/90 animate">
                  <Text
                    className="flex flex-col gap-0.5 items-end absolute font-semibold top-3 w-full px-3 text-right translate-x-full group-hover:translate-x-0"
                    as="menuTitle"
                  >
                    <h1>{e.title}</h1>
                    <div className="w-6 h-0.5 bg-white" />
                  </Text>
                  <Text className="text-center px-3 w-full absolute centered font-medium text-balance">
                    <p>{e.desc}</p>
                  </Text>

                  <LinkButton target="_blank" href={e.href} className="mb-5 group-hover:scale-100 scale-0 absolute centered-bottom">
                    {s.SECTIONS.visitProject}
                  </LinkButton>
                </section>

                <Img src={e.src} alt={e.desc} className="rounded-md object-cover size-full group-hover:scale-[1.1] animate" />
              </section>

              <ul className="sr-only">
                {e.lists.map((list) => (
                  <li key={list}>{list}</li>
                ))}
              </ul>
            </SwiperSlide>
          );
        })}
        <div className="swiper-scrollbar" />
      </Swiper>
    </Container>
  );
}
