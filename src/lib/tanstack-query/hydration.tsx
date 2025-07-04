import { dehydrate, HydrationBoundary, type QueryClient } from "@tanstack/react-query";
import { cache } from "react";
import { createQueryClient } from "./client";

export const getQueryClient = cache(createQueryClient);

type Props = { children: React.ReactNode; client: QueryClient };

export function HydrateClient({ children, client }: Props) {
  return <HydrationBoundary state={dehydrate(client)}>{children}</HydrationBoundary>;
}
