import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { GQLInteraction } from "../interceptors";
import { User, UserResponse } from "../models";
import { getUser } from "../queries";

export const useGetUser = (userid: string): UseQueryResult<User, unknown> => {
  const options = {
    refetchOnWindowFocus: false,
    retry: 0,
    select: (response: UserResponse): User => {
      return response.user;
    },
  };

  return useQuery(
    ["user"],
    () => GQLInteraction<UserResponse>(getUser, { id: userid }),
    options
  );
};
