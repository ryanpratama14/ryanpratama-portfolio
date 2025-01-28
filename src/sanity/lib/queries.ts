import { defineQuery } from "next-sanity";

export const GetPosts = defineQuery(`*[_type == "post" && show == true] | order(publishedAt desc) {
    ...,
    "imageUrl": mainImage.asset -> url,
}`);

export const GetPostBySlug = defineQuery(`*[_type == "post" && show == true && slug.current == $slug][0] {
    ...,
    "imageUrl": mainImage.asset -> url,
}`);
