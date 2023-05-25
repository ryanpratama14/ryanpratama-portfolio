"use client";
import { Icon } from "@iconify/react";
import React from "react";
import { linkSocial } from "../constants/constants";

export default function SocialMedia(): React.JSX.Element {
  return (
    <section className="fixed right-0 bottom-0 px-normal group">
      <div className="flex justify-center items-center flex-col gap-4">
        <div className="flex flex-col justify-center items-center gap-3 md:gap-4">
          <p className="group-hover:scale-125 group-hover:translate-y-0 translate-y-10 scale-0 -300 animate">
            👋
          </p>
          {linkSocial?.map((e, i: number) => {
            return (
              <a
                target="_blank"
                key={i}
                href={e?.href}
                className="themedText hover:themedText2nd text-xl md:text-2xl hover:scale-110 hover:themedShadowGlowed"
              >
                <Icon icon={e?.icon} />
              </a>
            );
          })}
        </div>
        <div className="themedBg2nd h-12 md:h-24 xl:h-36 w-1.5 rounded-t-md themedShadowGlowed" />
      </div>
    </section>
  );
}
