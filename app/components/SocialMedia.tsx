"use client";

import { Icon } from "@iconify/react";
import Link from "next/link";

export default function SocialMedia(): JSX.Element {
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
    <section className="fixed right-0 bottom-0 px-normal">
      <div className="flex items-center justify-center flex-col gap-4">
        <div className="flex flex-col gap-4">
          {linkSocial?.map((e, i: number) => {
            return (
              <Link
                target="_blank"
                key={i}
                href={e?.href}
                className="themedText hover:themedText2nd hover:scale-110"
              >
                <Icon width={24} icon={e?.icon} />
              </Link>
            );
          })}
        </div>
        <div className="themedBg2nd h-12 md:h-24 w-1 rounded-t-md themedShadowGlowed" />
      </div>
    </section>
  );
}
