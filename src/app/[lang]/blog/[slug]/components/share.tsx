"use client";

import { Icon } from "@iconify-icon/react";
import { usePathname } from "next/navigation";
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import { getUrl } from "@/app/urls";
import { ICONS } from "@/lib/constants";

const DATA = [
  { label: "LinkedIn", icon: ICONS.linkedin, Component: LinkedinShareButton },
  { label: "WhatsApp", icon: ICONS.whatsapp, Component: WhatsappShareButton },
  { label: "Telegram", icon: ICONS.telegram, Component: TelegramShareButton },
  { label: "X", icon: ICONS.x, Component: TwitterShareButton },
  { label: "Facebook", icon: ICONS.facebook, Component: FacebookShareButton },
  { label: "Email", icon: ICONS.email, Component: EmailShareButton },
];

export default function Share() {
  const url = getUrl({ path: usePathname() });

  return (
    <ul className="flex gap-1.5">
      {DATA.map((e) => (
        <li key={e.icon}>
          <e.Component url={url}>
            <Icon
              icon={e.icon}
              className="animate text-base p-[0.225rem] text-white bg-blue-600 hover:bg-blue-800 shadow rounded-sm flex items-center justify-center"
            />
            <span className="sr-only">{e.label}</span>
          </e.Component>
        </li>
      ))}
    </ul>
  );
}
