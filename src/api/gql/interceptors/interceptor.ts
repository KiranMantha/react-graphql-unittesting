import { GraphQLClient } from "graphql-request";
import { extractNameFromQuery } from "./utils";

const getGraphQLClient = (
  _queryName: string,
  optionalHeader?: Record<string, string | number | boolean>
): GraphQLClient => {
  let globalHeaders = {};

  if (optionalHeader) {
    globalHeaders = {
      ...optionalHeader,
      ...globalHeaders,
    };
  }
  return new GraphQLClient("https://graphqlzero.almansi.me/api", {
    headers: { ...globalHeaders } as Record<string, string>,
  });
};

const GQLInteraction = async <T>(
  schema: string,
  variables?:
    | Record<string, string[] | number | number[] | unknown>
    | undefined,
  optionalHeader: Record<string, string | number | boolean> = {}
): Promise<T> => {
  try {
    const queryDescription = extractNameFromQuery(schema);
    const client = getGraphQLClient(queryDescription, { ...optionalHeader });
    return await client.request(schema, variables);
  } catch (err) {
    console.log("error", err);
    throw err;
  }
};

export { GQLInteraction };
