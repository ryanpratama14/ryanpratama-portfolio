import { defineQuery } from "next-sanity";

export const BLOG_POSTS_QUERY = defineQuery(`*[_type == "post" && show == true] {
    ...,
    categories[] -> {
        ...,
    }
}`);

export const BLOG_POST_QUERY = defineQuery(`*[_type == "post" && show == true && slug.current == $slug][0] {
    ...,
    categories[] -> {
        ...,
    }
}`);
