import { DEFAULT_LANG } from "@/internationalization";
import { useLang } from "@/internationalization/functions";
import { COLORS } from "@/styles";
import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  const {
    s: { PERSONAL_DATA: me },
  } = useLang(DEFAULT_LANG);

  const title = `${me.fullName} — ${me.softwareEngineer}`;

  return {
    name: title,
    short_name: title,
    theme_color: COLORS.black,
    background_color: COLORS.black,
    display: "standalone",
    start_url: "/",
    icons: [
      {
        src: "favicons/icon-72x72.png",
        sizes: "72x72",
        type: "image/png",
      },
      {
        src: "favicons/icon-96x96.png",
        sizes: "96x96",
        type: "image/png",
      },
      {
        src: "favicons/icon-128x128.png",
        sizes: "128x128",
        type: "image/png",
      },
      {
        src: "favicons/icon-144x144.png",
        sizes: "144x144",
        type: "image/png",
      },
      {
        src: "favicons/icon-152x152.png",
        sizes: "152x152",
        type: "image/png",
      },
      {
        src: "favicons/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "favicons/icon-384x384.png",
        sizes: "384x384",
        type: "image/png",
      },
      {
        src: "favicons/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
