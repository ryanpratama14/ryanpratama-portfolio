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
      group: "detail",
      validation: (Rule) => Rule.required(),
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
      group: "detail",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "body",
      title: "Description",
      type: "array",
      group: "detail",
      of: [{ type: "block" }, { type: "image", fields: [{ name: "alt", type: "string", title: "Caption" }] }],
      validation: (Rule) => Rule.required(),
    }),

    // SEO
    defineField({
      name: "description",
      title: "SEO, Description",
      type: "string",
      group: "seo",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "tags",
      title: "SEO, Tags",
      type: "array",
      of: [{ type: "string" }],
      group: "seo",
      options: { layout: "tags" },
      validation: (Rule) => Rule.required(),
    }),
  ],
});
