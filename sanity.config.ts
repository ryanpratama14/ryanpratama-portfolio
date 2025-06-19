"use client";

import { RocketIcon } from "@sanity/icons";
import { defineConfig } from "sanity";
import { presentationTool } from "sanity/presentation";
import { structureTool } from "sanity/structure";
import { media } from "sanity-plugin-media";
import { resolve } from "@/sanity/presentation/resolve";
import { dataset, projectId } from "./src/sanity/env";
import { schema } from "./src/sanity/schema-types";
import { structure } from "./src/sanity/structure";

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  schema,
  plugins: [structureTool({ structure }), presentationTool({ resolve, previewUrl: { previewMode: { enable: "/api/draft-mode/enable" } } }), media()],
  name: "ryan-s-blog",
  title: "Ryan's Blog",
  icon: RocketIcon,
});
