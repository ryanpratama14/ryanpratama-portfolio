import { defineField, defineType } from "sanity";

export const postType = defineType({
  name: "post",
  title: "Post",
  type: "document",
  groups: [
    { name: "detail", title: "Detail" },
    { name: "seo", title: "SEO" },
  ],
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
      group: "detail",
    }),
    defineField({
      name: "show",
      type: "boolean",
      initialValue: true,
      group: "detail",
    }),
    defineField({
      name: "mainImage",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", type: "string", title: "Caption" }],
      group: "detail",
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title" },
      validation: (Rule) => Rule.required(),
      group: "detail",
    }),
    defineField({
      name: "publishedAt",
      type: "datetime",
      validation: (Rule) => Rule.required(),
      group: "detail",
    }),
    defineField({
      name: "body",
      title: "Description",
      type: "array",
      group: "detail",
      of: [{ type: "block" }, { type: "image", fields: [{ name: "alt", type: "string", title: "Caption" }] }],
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "string",
      group: "seo",
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      group: "seo",
      options: { layout: "tags" },
    }),
  ],
});
