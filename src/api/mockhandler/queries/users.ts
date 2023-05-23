import { graphql } from "msw";

export const UsersQueries = [
  graphql.query("user", (_req, res, ctx) => {
    return res(
      ctx.data({
        user: {
          id: "1",
          username: "Antonette",
          email: "Shanna@melissa.tv",
          address: {
            geo: {
              lat: -43.9509,
              lng: -34.4618,
            },
          },
        },
      })
    );
  }),
];
