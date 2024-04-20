"use client";

import TransitionEffect from "@/components/TransitionEffect";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

type Props = { children: React.ReactNode };

export default function Providers({ children }: Props): React.JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <TransitionEffect />
      {children}
    </QueryClientProvider>
  );
}
