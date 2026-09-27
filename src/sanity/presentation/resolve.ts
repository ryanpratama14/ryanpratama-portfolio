import { defineLocations, type PresentationPluginOptions } from "sanity/presentation";

import { PATHS } from "@/app/urls";
import { DEFAULT_LANG } from "@/internationalization";

export const resolve: PresentationPluginOptions["resolve"] = {
  locations: {
    post: defineLocations({
      select: { title: "title", slug: "slug.current" },
      resolve: (doc) => ({
        locations: [
          { title: doc?.title || "Untitled", href: `/${DEFAULT_LANG}${PATHS.post}/${doc?.slug}` },
          { title: "Posts Index", href: `/${DEFAULT_LANG}${PATHS.post}` },
        ],
      }),
    }),
  },
};
