import { useUrl } from "@/lib/constants/urls";
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: useUrl().URLS.sitemap,
  };
}
