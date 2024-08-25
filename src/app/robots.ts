import { URLS } from "@/lib/constants/helpers";
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${URLS.PRODUCTION.BASE}/sitemap.xml`,
  };
}
