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

export default function Share({ url }: { url: string }) {
  const data = [
    { label: "LinkedIn", icon: ICONS.linkedin, Component: LinkedinShareButton },
    { label: "WhatsApp", icon: ICONS.whatsapp, Component: WhatsappShareButton },
    { label: "Telegram", icon: ICONS.telegram, Component: TelegramShareButton },
    { label: "X", icon: ICONS.x, Component: TwitterShareButton },
    { label: "Facebook", icon: ICONS.facebook, Component: FacebookShareButton },
    { label: "Email", icon: ICONS.email, Component: EmailShareButton },
  ];

  return (
    <ul className="flex gap-2">
      {data.map(({ icon, Component }) => (
        <li key={icon}>
          <Component url={url}>
            <Icon
              icon={icon}
              width={22}
              className="animate size-8 text-white bg-blue-600 hover:bg-blue-800 shadow rounded-full flex items-center justify-center"
            />
          </Component>
        </li>
      ))}
    </ul>
  );
}
