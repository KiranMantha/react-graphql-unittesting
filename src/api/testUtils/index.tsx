import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ComponentType, ReactNode } from "react";

const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

export function createWrapper(node: ReactNode): ComponentType {
  const testQueryClient = createTestQueryClient();
  return function MockComponent() {
    return (
      <QueryClientProvider client={testQueryClient}>{node}</QueryClientProvider>
    );
  };
}
