"use client";

import { ICONS } from "@/lib/constants";
import { Icon } from "@iconify-icon/react";
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

const DATA = [
  { label: "LinkedIn", icon: ICONS.linkedin, Component: LinkedinShareButton },
  { label: "WhatsApp", icon: ICONS.whatsapp, Component: WhatsappShareButton },
  { label: "Telegram", icon: ICONS.telegram, Component: TelegramShareButton },
  { label: "X", icon: ICONS.x, Component: TwitterShareButton },
  { label: "Facebook", icon: ICONS.facebook, Component: FacebookShareButton },
  { label: "Email", icon: ICONS.email, Component: EmailShareButton },
];

export default function Share({ url }: { url: string }) {
  return (
    <ul className="flex gap-1.5">
      {DATA.map((e) => (
        <li key={e.icon}>
          <e.Component url={url}>
            <span className="sr-only">{e.label}</span>
            <Icon
              icon={e.icon}
              width={20}
              className="animate p-1 text-white bg-blue-600 hover:bg-blue-800 shadow rounded-md flex items-center justify-center"
            />
          </e.Component>
        </li>
      ))}
    </ul>
  );
}
