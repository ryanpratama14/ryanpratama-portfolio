import { QueryClient, defaultShouldDehydrateQuery } from "@tanstack/react-query";
import { transformer } from "./shared";

export const createQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: { staleTime: 30 * 1000 },
      dehydrate: {
        serializeData: transformer.serialize,
        shouldDehydrateQuery: (query) => defaultShouldDehydrateQuery(query) || query.state.status === "pending",
      },
      hydrate: { deserializeData: transformer.deserialize },
    },
  });
