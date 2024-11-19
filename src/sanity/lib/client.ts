import { createClient, type QueryParams } from "next-sanity";
import { apiVersion, dataset, projectId } from "../env";
import { env } from "@/env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});

export const sanityFetch = async <const QueryString extends string>({
  query,
  params = {},
  tags = [],
}: {
  query: QueryString;
  params?: QueryParams;
  revalidate?: number | false;
  tags?: string[];
}) => {
  return client.fetch(query, params, {
    cache: env.NODE_ENV === "development" ? "no-store" : undefined,
    next: { revalidate: 60, tags },
  });
};
