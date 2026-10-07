"use client";

import { useEffect, useState } from "react";
import { Mousewheel, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import Container from "@/components/container";
import ProjectCard from "@/components/project-card";
import { PROJECTS } from "@/lib/constants";
import type { DictionaryStatic } from "@/types";

type Props = { s: DictionaryStatic };

export default function FeaturedProjects({ s }: Props) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <Container title={s.MENUS.featuredProjects}>
      {mounted ? (
        <Swiper
          modules={[Mousewheel, Scrollbar]}
          mousewheel={{ forceToAxis: true }}
          scrollbar={{ draggable: true, el: ".swiper-scrollbar" }}
          className="w-full"
          spaceBetween={10}
          slidesPerView={1.7}
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
      ) : (
        <ul className="grid grid-cols-[repeat(auto-fill,minmax(10rem,1fr))] gap-2.5">
          {PROJECTS.map((project) => {
            const e = { desc: s.CONSTANTS.PROJECTS[project.key], visitProjectText: s.SECTIONS.visitProject, ...project };
            return (
              <li key={e.label}>
                <ProjectCard data={{ ...e, visitProjectText: s.SECTIONS.visitProject }} />
              </li>
            );
          })}
        </ul>
      )}
    </Container>
  );
}
