import { cacheLife } from "next/cache";

import { PATHS } from "@/app/urls";
import { client } from "@/sanity/lib/client";
import { GetPostBySlug, GetPosts } from "@/sanity/lib/queries";
import type { GetPostBySlugResult, GetPostsResult } from "@/sanity/types";
import type { Outputs } from "@/types";

import { THROW } from "../lib";
import { p } from "../root";
import { schema } from "../schema";

const formatPostData = (post: NonNullable<GetPostBySlugResult> | GetPostsResult[number]) => {
  return {
    ...post,
    href: `${PATHS.post}/${post?.slug?.current}`,
    publishedAtDate: post.publishedAt ? new Date(post.publishedAt) : new Date(0),
  };
};

const fetchPostBySlug = async (slug: string) => {
  "use cache";
  cacheLife("hours");
  return client.fetch(GetPostBySlug, { slug });
};

const fetchPosts = async () => {
  "use cache";
  cacheLife("hours");
  return client.fetch(GetPosts);
};

export const post = {
  detail: p.public.input(schema.post.detail).handler(async ({ input }) => {
    const { slug } = input;
    const data = await fetchPostBySlug(slug);
    if (!data) return THROW.error("NOT_FOUND");
    return THROW.ok({ code: "OK", input, data: formatPostData(data) });
  }),

  list: p.public.input(schema.post.list).handler(async ({ input }) => {
    const { slugToRemove, slice } = input;
    const data = await fetchPosts();
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
