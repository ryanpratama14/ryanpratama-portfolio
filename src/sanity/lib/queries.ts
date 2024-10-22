import { defineQuery } from "next-sanity";

export const BLOG_POSTS_QUERY = defineQuery(`*[_type == "post" && show == true] {
    ...,
    categories[] -> {
        ...,
    }
}`);
