import { defineQuery } from "next-sanity";

export const GetPosts = defineQuery(`*[_type == "post" && show == true] | order(publishedAt desc) {
    ...,
    "mainImageUrl": mainImage.asset -> url,
    mainImage {
      ...,
      asset -> {
        ...,
        metadata {
          ...
        }
      }
    },
}`);

export const GetPostBySlug = defineQuery(`*[_type == "post" && show == true && slug.current == $slug][0] {
    ...,
    "mainImageUrl": mainImage.asset -> url,
    mainImage {
      ...,
      asset -> {
        ...,
        metadata {
          ...
        }
      }
    },
}`);
