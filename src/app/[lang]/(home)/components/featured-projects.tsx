"use client";

import Container from "@/components/container";
import Img from "@/components/html/img";
import LinkButton from "@/components/html/link-button";
import Text from "@/components/html/text";
import { PROJECTS } from "@/lib/constants";
import type { DictionaryStatic } from "@/types";
import { Mousewheel, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

type Props = { s: DictionaryStatic };

export default function FeaturedProjects({ s }: Props) {
  return (
    <Container title={s.MENUS.featuredProjects}>
      <Swiper
        modules={[Mousewheel, Scrollbar]}
        mousewheel={{ forceToAxis: true }}
        scrollbar={{ draggable: true, el: ".swiper-scrollbar" }}
        className="w-full"
        spaceBetween={10}
        slidesPerView={1.25}
        simulateTouch={false}
        breakpoints={{ 640: { slidesPerView: 2 }, 768: { slidesPerView: 2.15 }, 1024: { slidesPerView: 2.45 } }}
      >
        {PROJECTS.map((project) => {
          const e = { desc: s.CONSTANTS.PROJECTS[project.key], ...project };
          return (
            <SwiperSlide key={e.label}>
              <section className="mb-2 aspect-square relative group overflow-hidden rounded-md">
                <section className="z-10 absolute top-0 left-0 size-full opacity-0 group-hover:opacity-100 bg-black/90 animate">
                  <div className="flex flex-col items-end absolute font-semibold top-2 w-full px-3 text-right translate-x-full group-hover:translate-x-0">
                    <Text tag="h3" as="menuTitle">
                      {e.label}
                    </Text>
                    <div className="w-6 h-0.5 bg-white" />
                  </div>
                  <Text tag="p" className="text-center px-3 w-full absolute centered font-medium text-balance">
                    {e.desc}
                  </Text>

                  <LinkButton href={e.href} className="translate-y-full group-hover:-translate-y-4 absolute centered-bottom">
                    {s.SECTIONS.visitProject}
                  </LinkButton>
                </section>

                <Img src={e.src} alt={e.desc} className="rounded-md object-cover size-full group-hover:scale-[1.1] animate-longer" priority />
              </section>
            </SwiperSlide>
          );
        })}
        <div className="swiper-scrollbar" />
      </Swiper>
    </Container>
  );
}