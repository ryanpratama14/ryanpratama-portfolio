import { defineLocations, type PresentationPluginOptions } from "sanity/presentation";
import { PATHS } from "@/app/urls";

export const resolve: PresentationPluginOptions["resolve"] = {
  locations: {
    post: defineLocations({
      select: { title: "title", slug: "slug.current" },
      resolve: (doc) => ({
        locations: [
          { title: doc?.title || "Untitled", href: `${PATHS.post}/${doc?.slug}` },
          { title: "Posts Index", href: "/blog" },
        ],
      }),
    }),
  },
};
