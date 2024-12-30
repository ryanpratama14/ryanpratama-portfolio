"use client";

import { resolve } from "@/sanity/presentation/resolve";
import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { media } from "sanity-plugin-media";
import { presentationTool } from "sanity/presentation";
import { structureTool } from "sanity/structure";
import { apiVersion, dataset, projectId } from "./src/sanity/env";
import { defaultDocumentNode } from "./src/sanity/lib/default-document-node";
import { schema } from "./src/sanity/schema-types";
import { structure } from "./src/sanity/structure";

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  schema,
  plugins: [
    structureTool({ defaultDocumentNode, structure }),
    visionTool({ defaultApiVersion: apiVersion }),
    presentationTool({
      resolve,
      previewUrl: { previewMode: { enable: "/api/draft-mode/enable" } },
    }),
    media(),
  ],
});
