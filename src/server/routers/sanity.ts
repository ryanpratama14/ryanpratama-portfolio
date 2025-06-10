import { PATHS } from "@/app/urls";
import { sanityFetch } from "@/sanity/lib/live";
import { GetPostBySlug, GetPosts } from "@/sanity/lib/queries";
import type { GetPostBySlugResult } from "@/sanity/types";
import { schema } from "@/server/schema";
import { createTRPCRouter, publicProcedure } from "@/server/trpc";
import { type RouterOutputs, THROW_TRPC } from "@/trpc/shared";

const formatPostData = (post: GetPostBySlugResult) => {
  return {
    ...post,
    href: `${PATHS.post}/${post?.slug?.current}`,
    publishedAtDate: post?.publishedAt ? new Date(post?.publishedAt) : new Date(),
  };
};

export const sanityRouter = {
  post: createTRPCRouter({
    detail: publicProcedure.input(schema.sanity.post.detail).query(async ({ input }) => {
      const { slug } = input;
      const { data } = await sanityFetch({ query: GetPostBySlug, params: { slug } });
      if (!data) return THROW_TRPC.error("NOT_FOUND");
      return THROW_TRPC.ok({ code: "OK", input, data: formatPostData(data) });
    }),

    list: publicProcedure.input(schema.sanity.post.list).query(async ({ input }) => {
      const { slugToRemove, slice } = input;
      const { data } = await sanityFetch({ query: GetPosts });
      const formattedData = data.filter((e) => e.slug?.current).map((item) => formatPostData(item));
      return THROW_TRPC.ok({
        code: "OK",
        input,
        data: slugToRemove ? formattedData.filter((item) => item.slug?.current !== slugToRemove).slice(0, slice) : formattedData.slice(0, slice),
      });
    }),
  }),
};

export type SanityPostListOutput = RouterOutputs["sanity"]["post"]["list"]["data"];
export type SanityPostDetaiResultlOutput = RouterOutputs["sanity"]["post"]["detail"]["data"];
