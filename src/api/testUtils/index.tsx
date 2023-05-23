import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { graphql } from "msw";
import { SetupServer } from "msw/node";
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

export function mockApiResponse(
  queryName: string,
  response: Record<string, unknown> | null,
  throwError = false
) {
  (global.mswServer as SetupServer).use(
    graphql.query(queryName, (_req, res, ctx) => {
      if (throwError) {
        return res(ctx.errors([]));
      }
      return res(ctx.data(response as Record<string, unknown>));
    })
  );
}
