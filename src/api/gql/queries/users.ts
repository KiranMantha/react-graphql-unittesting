export const getUser = `
query user($id: ID!){
  user(id: $id) {
    id
    username
    email
    address {
      geo {
        lat
        lng
      }
    }
  }
}
`;
