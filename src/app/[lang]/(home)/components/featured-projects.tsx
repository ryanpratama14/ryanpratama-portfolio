"use client";

import Container from "@/components/container";
import ProjectCard from "@/components/project-card";
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
        slidesPerView={1.35}
        simulateTouch={false}
        breakpoints={{ 768: { slidesPerView: 2.6 } }}
      >
        {PROJECTS.map((project) => {
          const e = { desc: s.CONSTANTS.PROJECTS[project.key], visitProjectText: s.SECTIONS.visitProject, ...project };
          return (
            <SwiperSlide key={e.label}>
              <ProjectCard data={{ ...e, visitProjectText: s.SECTIONS.visitProject }} />
            </SwiperSlide>
          );
        })}
        <div className="swiper-scrollbar" />
      </Swiper>
    </Container>
  );
}
