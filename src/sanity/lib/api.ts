import "server-only";
import { PATHS } from "@/app/urls";
import { useLang } from "@/internationalization/functions";
import { getHeaders } from "@/lib/actions";
import { sanityFetch } from "@/sanity/lib/client";
import { GetPostBySlug, GetPosts } from "@/sanity/lib/queries";
import type { GetPostBySlugResult, GetPostsResult } from "@/sanity/types";

const formatPostData = async (post: GetPostBySlugResult) => {
  const lang = (await getHeaders()).lang;
  const { formatDateLong } = useLang(lang);

  return {
    ...post,
    href: `${PATHS.blog}/${post?.slug?.current}`,
    publishedAtString: formatDateLong(post?.publishedAt),
  };
};

export const sanity = {
  post: {
    list: async ({ slice, currentSlug }: { slice?: number; currentSlug?: string }) => {
      const data = await sanityFetch<GetPostsResult>({ query: GetPosts });
      const formattedData = await Promise.all(data.map((item) => formatPostData(item)));

      if (currentSlug) {
        return formattedData.filter((item) => item.slug?.current !== currentSlug).slice(0, slice);
      }

      return formattedData.slice(0, slice);
    },

    detail: async ({ slug }: { slug: string }) => {
      const data = await sanityFetch<GetPostBySlugResult>({ query: GetPostBySlug, params: { slug } });
      return await formatPostData(data);
    },
  },
};

export type PostList = Awaited<ReturnType<typeof sanity.post.list>>;
export type PostDetail = Awaited<ReturnType<typeof sanity.post.detail>>;
