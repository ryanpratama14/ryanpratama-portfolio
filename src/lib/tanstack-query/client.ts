import { StandardRPCJsonSerializer } from "@orpc/client/standard";
import { defaultShouldDehydrateQuery, QueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

const serializer = new StandardRPCJsonSerializer({ customJsonSerializers: [] });

export const createQueryClient = () => {
  return new QueryClient({
    defaultOptions: {
      queries: { staleTime: 60 * 1000 },
      dehydrate: {
        shouldDehydrateQuery: (query) => defaultShouldDehydrateQuery(query) || query.state.status === "pending",
        serializeData(data) {
          const [json, meta] = serializer.serialize(data);
          return { json, meta };
        },
      },
      hydrate: {
        deserializeData(data) {
          return serializer.deserialize(data.json, data.meta);
        },
      },
      mutations: {
        onError: (e) => {
          toast.error(e.message);
        },
      },
    },
  });
};
