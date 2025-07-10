import { PATHS } from "@/app/urls";
import { sanityFetch } from "@/sanity/lib/live";
import { GetPostBySlug, GetPosts } from "@/sanity/lib/queries";
import type { GetPostBySlugResult } from "@/sanity/types";
import type { Outputs } from "@/types";
import { THROW } from "../lib";
import { p } from "../root";
import { schema } from "../schema";

const formatPostData = (post: GetPostBySlugResult) => {
  return {
    ...post,
    href: `${PATHS.post}/${post?.slug?.current}`,
    publishedAtDate: post?.publishedAt ? new Date(post?.publishedAt) : new Date(),
  };
};

export const post = {
  detail: p.public.input(schema.post.detail).handler(async ({ input }) => {
    const { slug } = input;
    const { data } = await sanityFetch({ query: GetPostBySlug, params: { slug } });
    if (!data) return THROW.error("NOT_FOUND");
    return THROW.ok({ code: "OK", input, data: formatPostData(data) });
  }),

  list: p.public.input(schema.post.list).handler(async ({ input }) => {
    const { slugToRemove, slice } = input;
    const { data } = await sanityFetch({ query: GetPosts });
    const formattedData = data.filter((e) => e.slug?.current).map((item) => formatPostData(item));
    return THROW.ok({
      code: "OK",
      input,
      data: slugToRemove ? formattedData.filter((item) => item.slug?.current !== slugToRemove).slice(0, slice) : formattedData.slice(0, slice),
    });
  }),
};

export type PostDetailOutput = Outputs["post"]["detail"];
export type PostListOutput = Outputs["post"]["list"];
