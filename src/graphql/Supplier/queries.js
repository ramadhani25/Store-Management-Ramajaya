import { gql } from "@apollo/client";

export const GET_ALL_SUPPLIER = gql`
  query GET_ALL_SUPPLIER {
    supplier {
      id
      nama
    }
  }
`;
