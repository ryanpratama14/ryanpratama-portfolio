import { defineQuery } from "next-sanity";

export const BLOG_POSTS_QUERY = defineQuery(`*[_type == "post" && show == true && defined(slug.current)] | order(publishedAt desc) {
    ...,
    "mainImageUrl": mainImage.asset -> url,
    categories[] -> {
        ...,
    }
}`);

export const BLOG_POST_QUERY = defineQuery(`*[_type == "post" && show == true && slug.current == $slug && defined(slug.current)][0] {
    ...,
    "mainImageUrl": mainImage.asset -> url,
    categories[] -> {
        ...,
    }
}`);
