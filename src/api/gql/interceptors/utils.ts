enum QueryType {
  QUERY = "query",
  MUTATION = "mutation",
}

const extractNameFromQuery = (query: string) => {
  const keywordIndex =
    query.indexOf(QueryType.QUERY) !== -1
      ? query.indexOf(QueryType.QUERY) + QueryType.QUERY.length
      : query.indexOf(QueryType.MUTATION) + QueryType.MUTATION.length;
  return query.substring(keywordIndex, query.indexOf("(")).replace(/ /g, "");
};

export { extractNameFromQuery };
