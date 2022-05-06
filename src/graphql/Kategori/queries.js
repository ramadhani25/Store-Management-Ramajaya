import { gql } from "@apollo/client";

export const GET_ALL_KATEGORI = gql`
  query GET_ALL_KATEGORI {
    kategori {
      id
      nama
    }
  }
`;
