"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import TransitionEffect from "@/components/TransitionEffect";

const queryClient = new QueryClient();

export default function Providers({ children }: ReactNodeProps): React.JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <TransitionEffect />
      {children}
    </QueryClientProvider>
  );
}
