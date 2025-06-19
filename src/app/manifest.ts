import type { MetadataRoute } from "next";
import { DEFAULT_LANG } from "@/internationalization";
import { getLang } from "@/internationalization/functions";
import { COLORS } from "@/styles";

export default function manifest(): MetadataRoute.Manifest {
  const {
    s: { PERSONAL_DATA: me },
  } = getLang(DEFAULT_LANG);

  const title = me.fullName;
  const description = me.summary;

  return {
    name: title,
    short_name: title,
    theme_color: COLORS.black,
    background_color: COLORS.black,
    display: "standalone",
    start_url: "/",
    description,
    icons: [
      { src: "assets/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { src: "assets/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
