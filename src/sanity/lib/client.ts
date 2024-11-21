import { type QueryParams, createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "../env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});

type Props = {
  query: string;
  params?: QueryParams;
  tags?: string[];
};

export const sanityFetch = async <QueryResponse>({ query, params = {}, tags }: Props): Promise<QueryResponse> => {
  return await client.fetch<QueryResponse>(query, params, { next: { tags, revalidate: 30 } });
};
