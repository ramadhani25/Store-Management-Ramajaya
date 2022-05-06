import { gql } from "@apollo/client";

export const GET_ALL_CUSTOMER = gql`
  query GET_ALL_CUSTOMER {
    customer {
      id
      nama
    }
  }
`;
