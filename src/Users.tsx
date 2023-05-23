import { useGetUser } from "./api/gql/requests";

export function Users() {
  const { data, isFetching } = useGetUser("1");
  return (
    <div data-testid="users-component">
      {!isFetching && data ? (
        <h1 data-testid="username">{data.username}</h1>
      ) : (
        <div data-testid="loading">loading</div>
      )}
    </div>
  );
}
