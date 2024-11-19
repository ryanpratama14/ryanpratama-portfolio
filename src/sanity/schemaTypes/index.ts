import type { SchemaTypeDefinition } from "sanity";
import { categoryType } from "./category-type";
import { postType } from "./post-type";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [categoryType, postType],
};
