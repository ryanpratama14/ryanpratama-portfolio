"use client";
import { Icon } from "@iconify/react";
import React from "react";

export default function SocialMedia(): React.JSX.Element {
  const linkSocial: LinkSocialItems[] = [
    {
      href: "mailto:ru.ryanpratama@gmail.com",
      label: "Email",
      icon: "ic:outline-email",
    },
    {
      href: "https://github.com/ryanpratama14",
      label: "GitHub",
      icon: "uil:github-alt",
    },
    {
      href: "https://www.linkedin.com/in/ryanpratama14/",
      label: "LinkedIn",
      icon: "ri:linkedin-fill",
    },
    {
      href: "https://t.me/ryanpratama14",
      label: "Telegram",
      icon: "ph:telegram-logo",
    },
    {
      href: "https://wa.me/+79961005242",
      label: "WhatsApp",
      icon: "ic:baseline-whatsapp",
    },
    {
      href: "https://www.instagram.com/ryanpratama14/",
      label: "Instagram",
      icon: "mdi:instagram",
    },
  ];

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
                className="themedText hover:themedText2nd hover:scale-110 hover:themedShadowGlowed"
              >
                <Icon width={24} icon={e?.icon} />
              </a>
            );
          })}
        </div>
        <div className="themedBg2nd h-12 md:h-24 xl:h-36 w-1.5 rounded-t-md themedShadowGlowed" />
      </div>
    </section>
  );
}
