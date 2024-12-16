import { PATHS } from "@/app/urls";
import { type PresentationPluginOptions, defineLocations } from "sanity/presentation";

export const resolve: PresentationPluginOptions["resolve"] = {
  locations: {
    post: defineLocations({
      select: { title: "title", slug: "slug.current" },
      resolve: (doc) => ({
        locations: [
          { title: doc?.title, href: `${PATHS.post}/${doc?.slug}` },
          { title: "Posts Index", href: "/blog" },
        ],
      }),
    }),
  },
};
