import { gql } from "@apollo/client";

export const GET_ALL_USER = gql`
  query GET_ALL_USER {
    user {
      id
      username
      password
      nama
      tipe
    }
  }
`;
