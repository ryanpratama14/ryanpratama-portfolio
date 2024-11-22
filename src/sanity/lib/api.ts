import "server-only";

import { PATHS } from "@/app/urls";
import { sanityFetch } from "@/sanity/lib/client";
import { GetPostBySlug, GetPosts } from "@/sanity/lib/queries";
import type { GetPostBySlugResult, GetPostsResult } from "@/sanity/types";

const formatPostData = (post: GetPostBySlugResult) => {
  return {
    ...post,
    href: `${PATHS.blog}/${post?.slug?.current}`,
  };
};

export const sanity = {
  post: {
    list: async ({ slice, slugToRemove }: { slice?: number; slugToRemove?: string }) => {
      const data = await sanityFetch<GetPostsResult>({ query: GetPosts });
      const formattedData = data.map((item) => formatPostData(item));

      if (slugToRemove) {
        return formattedData.filter((item) => item.slug?.current !== slugToRemove).slice(0, slice);
      }

      return formattedData.slice(0, slice);
    },

    detail: async ({ slug }: { slug: string }) => {
      const data = await sanityFetch<GetPostBySlugResult>({ query: GetPostBySlug, params: { slug } });
      return formatPostData(data);
    },
  },
};

export type PostList = Awaited<ReturnType<typeof sanity.post.list>>;
export type PostDetail = Awaited<ReturnType<typeof sanity.post.detail>>;
