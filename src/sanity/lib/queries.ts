import { defineQuery } from "next-sanity";

export const GetPosts = defineQuery(`*[_type == "post" && show == true && defined(slug.current)] | order(publishedAt desc) {
    ...,
    "mainImageUrl": mainImage.asset -> url,
}`);

export const GetPostBySlug = defineQuery(`*[_type == "post" && show == true && slug.current == $slug && defined(slug.current)][0] {
    ...,
    "mainImageUrl": mainImage.asset -> url,
}`);
